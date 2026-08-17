import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const A4_W_MM = 210;
const A4_H_MM = 297;

/**
 * Render a list of DOM nodes (each an A4-compatible page) to a real multi-page PDF.
 * For nodes taller than one A4 page, it slices the canvas vertically across pages.
 */
export async function exportNodesToPdf(
  nodes: HTMLElement[],
  filename: string,
  opts: { scale?: number } = {}
) {
  const scale = opts.scale ?? 2.2;
  const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4", compress: true });

  let firstPage = true;

  for (const node of nodes) {
    // capture full node (tall canvas)
    const canvas = await html2canvas(node, {
      scale,
      backgroundColor: "#FFFFFF",
      useCORS: true,
      logging: false,
      width: node.scrollWidth,
      height: node.scrollHeight,
    });

    const imgData = canvas.toDataURL("image/jpeg", 0.94);

    // full image placed at A4 width; compute total A4 height in mm
    const imgWmm = A4_W_MM;
    const imgHmm = (canvas.height / canvas.width) * imgWmm;
    // How many A4 pages are needed for this tall image.
    // A slice is one full A4 page (297mm) of content, with a small overlap for safety.
    const sliceHmm = A4_H_MM;
    const pagesNeeded = Math.max(1, Math.ceil(imgHmm / sliceHmm));

    for (let p = 0; p < pagesNeeded; p++) {
      if (!firstPage) pdf.addPage();
      firstPage = false;

      // vertical offset for this page (in image px)
      const offsetPx = p * ((canvas.height / pagesNeeded) || canvas.height);
      const offsetMm = (offsetPx / canvas.width) * imgWmm;

      // draw the (tall) image positioned so only the current slice is visible
      pdf.addImage(imgData, "JPEG", 0, -offsetMm, imgWmm, imgHmm, undefined, "FAST");
    }
  }

  pdf.save(filename);
}
