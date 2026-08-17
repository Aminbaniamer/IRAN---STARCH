import { ui } from "./Preview";

export default function PreviewHero() {
  return (
    <div
      style={{
        background: ui.charcoal,
        borderRadius: 8,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.14)",
      }}
    >
      <div style={{ padding: "14px 16px 18px", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(300px 200px at 80% 0%, rgba(122,32,40,0.5), transparent 60%)" }} />
        {/* badge */}
        <div
          style={{
            position: "relative",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: "rgba(166,45,54,0.14)",
            border: "1px solid rgba(166,45,54,0.45)",
            color: ui.paper,
            padding: "3px 9px",
            borderRadius: 99,
            fontSize: 9,
            fontWeight: 700,
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: 99, background: ui.ok }} />
          مرجع تخصصی تأمین عمدهٔ نشاسته و مشتقات برای صنایع
          <span style={{ fontSize: 7.5, letterSpacing: 2, color: "#A62D36", fontWeight: 700 }}>B2B</span>
        </div>

        <h3
          style={{
            position: "relative",
            marginTop: 10,
            fontSize: 22,
            fontWeight: 900,
            lineHeight: 1.5,
            color: ui.paper,
          }}
        >
          تأمین تخصصی نشاسته و مشتقات
          <span style={{ color: "#FFFFFF" }}> برای صنایع ایران</span>
        </h3>
        <p
          style={{
            position: "relative",
            marginTop: 6,
            fontSize: 10,
            lineHeight: 2,
            color: "rgba(247,245,241,0.6)",
            maxWidth: "92%",
          }}
        >
          مرجع تخصصی تأمین عمدهٔ نشاسته، مشتقات و مواد اولیهٔ موردنیاز صنایع؛ با تنوع محصول، اطلاعات
          تخصصی و مسیر سریع استعلام قیمت.
        </p>

        {/* CTA row */}
        <div style={{ position: "relative", display: "flex", gap: 8, marginTop: 10 }}>
          <span
            style={{
              background: ui.brand,
              color: "#fff",
              fontSize: 10,
              fontWeight: 800,
              padding: "6px 14px",
              borderRadius: 6,
            }}
          >
            استعلام قیمت عمده
          </span>
          <span
            style={{
              border: "1px solid rgba(247,245,241,0.4)",
              color: "rgba(247,245,241,0.85)",
              fontSize: 10,
              fontWeight: 700,
              padding: "6px 14px",
              borderRadius: 6,
            }}
          >
            مشاهدهٔ محصولات
          </span>
        </div>

        {/* search */}
        <div
          style={{
            position: "relative",
            marginTop: 10,
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: ui.graphite,
            border: "1px solid rgba(255,255,255,0.16)",
            borderRadius: 8,
            padding: 6,
          }}
        >
          <span style={{ width: 14, height: 14, borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.3)" }} />
          <span style={{ flex: 1, fontSize: 9.5, color: "rgba(247,245,241,0.35)" }}>
            نام محصول، گرید یا کاربرد را جستجو کنید…
          </span>
          <span
            style={{
              background: ui.accent,
              color: "#fff",
              fontSize: 9.5,
              fontWeight: 800,
              padding: "6px 12px",
              borderRadius: 6,
            }}
          >
            جستجو
          </span>
        </div>

        {/* popular chips */}
        <div style={{ position: "relative", display: "flex", gap: 6, marginTop: 8 }}>
          {["نشاسته ذرت", "E1442", "گلوکز مایع", "نشاسته دارویی USP"].map((c) => (
            <span
              key={c}
              style={{
                fontSize: 8.5,
                fontWeight: 600,
                color: "rgba(247,245,241,0.6)",
                border: "1px solid rgba(255,255,255,0.18)",
                padding: "3px 8px",
                borderRadius: 99,
              }}
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* ticker */}
      <div
        style={{
          display: "flex",
          gap: 14,
          alignItems: "center",
          background: "rgba(37,40,44,0.9)",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          padding: "6px 16px",
          overflow: "hidden",
        }}
      >
        {["E1400", "E1412", "E1422", "E1442", "BP", "USP", "OSA"].map((c) => (
          <span key={c} style={{ fontSize: 9, letterSpacing: 2, color: "rgba(247,245,241,0.4)", fontWeight: 600 }} dir="ltr">
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}
