import { marketRows } from "../../data";
import { ui } from "./Preview";

const tone = ["#A62D36", "#8B9096", "#2F7654"];

export default function PreviewMarket() {
  return (
    <div
      style={{
        background: ui.charcoal,
        borderRadius: 8,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.14)",
      }}
    >
      <div style={{ padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 12, fontWeight: 900, color: ui.paper }}>قیمت روز بازار نشاسته</span>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
              fontSize: 8,
              fontWeight: 700,
              color: "rgba(247,245,241,0.6)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 99,
              padding: "2px 7px",
            }}
          >
            <span style={{ width: 5, height: 5, borderRadius: 99, background: ui.ok }} />
            بروزرسانی زنده
          </span>
        </div>
        <span style={{ fontSize: 8.5, color: "rgba(247,245,241,0.5)" }}>آخرین بروزرسانی: امروز</span>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr 0.9fr 1fr",
            background: "rgba(255,255,255,0.04)",
            fontSize: 7.5,
            fontWeight: 700,
            color: "rgba(247,245,241,0.4)",
            padding: "5px 16px",
          }}
        >
          <span>محصول</span>
          <span>وضعیت بازار</span>
          <span>تغییر</span>
          <span style={{ textAlign: "left" }}>استعلام</span>
        </div>
        {marketRows.slice(0, 4).map((r) => {
          const status = r.status === "up" ? 0 : r.status === "down" ? 2 : 1;
          return (
            <div
              key={r.product}
              style={{
                display: "grid",
                gridTemplateColumns: "1.6fr 1fr 0.9fr 1fr",
                alignItems: "center",
                fontSize: 9.5,
                borderTop: "1px solid rgba(255,255,255,0.07)",
                padding: "7px 16px",
              }}
            >
              <span style={{ fontWeight: 700, color: ui.paper }}>{r.product}</span>
              <span style={{ fontSize: 8.5, fontWeight: 700, color: tone[status] }}>
                {r.status === "up" ? "↑" : r.status === "down" ? "↓" : "—"} {r.status === "up" ? "افزایشی" : r.status === "down" ? "کاهشی" : "ثابت"}
              </span>
              <span style={{ fontSize: 9, fontWeight: 700, color: tone[status], letterSpacing: 0.5 }} dir="ltr">
                {r.change}
              </span>
              <span
                style={{
                  justifySelf: "end",
                  fontSize: 8,
                  fontWeight: 700,
                  color: "#fff",
                  background: ui.brand,
                  borderRadius: 4,
                  padding: "3px 8px",
                }}
              >
                برای قیمت روز استعلام کنید
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
