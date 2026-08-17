import { ui } from "./Preview";

export default function PreviewForm() {
  const field: React.CSSProperties = {
    background: ui.surface,
    border: "1px solid " + ui.line,
    borderRadius: 6,
    height: 34,
    padding: "0 10px",
    display: "flex",
    alignItems: "center",
  };
  const label = (): React.CSSProperties => ({
    fontSize: 8.5,
    fontWeight: 700,
    color: ui.sec,
    marginBottom: 5,
  });

  return (
    <div style={{ background: ui.surface, borderRadius: 8, border: "1px solid " + ui.line, padding: 14 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: 10, borderBottom: "1px solid " + ui.line, marginBottom: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 900, color: ui.charcoal }}>درخواست پیش‌فاکتور</p>
          <div style={{ marginTop: 7, height: 6, width: "56%", borderRadius: 2, background: "#E3E5E8" }} />
        </div>
        <span style={{ fontSize: 8, fontWeight: 700, color: ui.brand, border: "1px solid rgba(122,32,40,0.3)", background: "rgba(122,32,40,0.05)", borderRadius: 4, padding: "4px 7px" }} dir="ltr">
          RFQ
        </span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        <div>
          <p style={label()}>نام و نام خانوادگی *</p>
          <div style={field}>تکمیل شود…</div>
        </div>
        <div>
          <p style={label()}>شرکت / کارخانه</p>
          <div style={field}>تکمیل شود…</div>
        </div>
        <div>
          <p style={label()}>شمارهٔ تماس *</p>
          <div style={field}>۰۹۱۲…</div>
        </div>
        <div>
          <p style={label()}>محصول موردنظر *</p>
          <div style={field}>نشاسته ذرت (E1422)</div>
        </div>
      </div>

      <div style={{ marginTop: 12 }}>
        <p style={label()}>حجم تقریبی موردنیاز</p>
        <div style={{ display: "flex", gap: 6 }}>
          {["زیر ۱ تن", "۱ تا ۵ تن", "۵ تا ۲۰ تن", "بیش از ۲۰ تن"].map((v, i) => (
            <span
              key={v}
              style={{
                fontSize: 8,
                fontWeight: 700,
                padding: "5px 10px",
                borderRadius: 99,
                color: i === 1 ? "#fff" : ui.sec,
                background: i === 1 ? ui.charcoal : ui.paper,
                border: "1px solid " + (i === 1 ? ui.charcoal : ui.line),
              }}
            >
              {v}
            </span>
          ))}
        </div>
      </div>

      <div style={{ height: 56, background: ui.paper, border: "1px solid " + ui.line, borderRadius: 6, marginTop: 12, padding: 9 }}>
        <div style={{ height: 6, width: "40%", borderRadius: 2, background: "#E3E5E8", marginBottom: 7 }} />
        <div style={{ height: 6, width: "28%", borderRadius: 2, background: "#E9EBEE" }} />
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 12 }}>
        <span style={{ background: ui.brand, color: "#fff", fontSize: 10, fontWeight: 800, padding: "8px 18px", borderRadius: 6 }}>
          درخواست پیش‌فاکتور
        </span>
        <span style={{ fontSize: 8.5, color: ui.sec }}>یا تماس مستقیم با کارشناس فروش</span>
      </div>
    </div>
  );
}
