import type { ReactNode } from "react";
import { categories, products, marketRows } from "../../data";

const WF = {
  background: "#F7F7F8",
  border: "1px solid #C9CDD2",
  borderRadius: 6,
};
const box: React.CSSProperties = {
  background: "#fff",
  border: "1px solid #CFD3D8",
  borderRadius: 4,
};
const bar = (w: number | string, h = 6, soft = false, color?: string): ReactNode => (
  <span
    style={{
      display: "block",
      width: w as string,
      height: h,
      borderRadius: 2,
      background: soft ? "#E3E5E8" : color ?? "#D3D6DA",
    }}
  />
);
const pill = (w: number | string, h = 16): ReactNode => (
  <span style={{ display: "inline-block", width: w as string, height: h, borderRadius: 99, background: "#E9EAEC" }} />
);
const img = (label: string): ReactNode => (
  <div
    style={{
      height: 54,
      border: "1.5px dashed #B6BBC1",
      borderRadius: 4,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 8,
      color: "#8B9096",
      background: "#F2F2F3",
    }}
  >
    {label}
  </div>
);
const lines = (n = 3, w = [100, 92, 70]): ReactNode => (
  <span style={{ display: "block", marginTop: 5 }}>
    {Array.from({ length: n }).map((_, i) => bar(`${w[i % w.length]}%`, 5, i === n - 1))}
  </span>
);
const cta = (label: string, primary = true): ReactNode => (
  <span
    style={{
      display: "inline-block",
      fontSize: 8.5,
      fontWeight: 700,
      color: primary ? "#fff" : "#6B7076",
      background: primary ? "#41454A" : "#fff",
      border: primary ? "1px solid #41454A" : "1px solid #C9CDD2",
      borderRadius: 3,
      padding: "3px 8px",
    }}
  >
    {label}
  </span>
);

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div style={{ ...WF, padding: 9 }}>
      <p style={{ fontSize: 9, fontWeight: 800, color: "#7A2028", marginBottom: 6 }}>{title}</p>
      {children}
    </div>
  );
}

export default function PdfWireframe() {
  return (
    <div style={{ background: "#F5F5F6", border: "1px solid #DBDEE1", borderRadius: 8, padding: 10 }}>
      {/* logo + nav */}
      <div style={{ ...box, padding: 8 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <span style={{ width: 22, height: 22, borderRadius: 4, background: "#7A2028" }} />
            <span>{lines(2, [38, 30])}</span>
          </span>
          <span style={{ display: "flex", gap: 8 }}>
            {["محصولات", "قیمت روز", "صنایع", "منابع فنی", "مقالات", "درباره", "تماس"].map((t) => (
              <span key={t} style={{ fontSize: 8, color: "#6B7076" }}>{t}</span>
            ))}
            <span style={{ fontSize: 8, fontWeight: 700, color: "#fff", background: "#7A2028", borderRadius: 3, padding: "3px 6px" }}>
              استعلام قیمت
            </span>
          </span>
        </div>
      </div>

      {/* 1-2 hero + search */}
      <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 8, marginTop: 8 }}>
        <Block title="۰۱+۰۲ — هیرو و جستجوی محصول">
          {bar("78%", 12)}
          {bar("58%", 12, false, "#E6E8EA")}
          {lines(3, [88, 80, 55])}
          <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
            {cta("استعلام قیمت عمده")}
            <span style={{ display: "inline-block", fontSize: 8.5, fontWeight: 700, color: "#6B7076", background: "#fff", border: "1px solid #C9CDD2", borderRadius: 3, padding: "3px 8px" }}>
              مشاهدهٔ محصولات
            </span>
          </div>
          <div style={{ ...box, marginTop: 9, padding: 6, display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 14, height: 14, borderRadius: 99, border: "1px solid #B6BBC1" }} />
            <span style={{ flex: 1, height: 7, borderRadius: 2, background: "#E7E9EB" }} />
            <span style={{ fontSize: 8.5, fontWeight: 700, color: "#fff", background: "#41454A", borderRadius: 3, padding: "4px 9px" }}>
              جستجو
            </span>
          </div>
        </Block>
        <Block title="تصویر هیرو">
          <div style={{ height: "100%", minHeight: 108 }}>{img("ماکرو پودر نشاسته")}</div>
        </Block>
      </div>

      {/* 3 finder */}
      <Block title="۰۳ — کشف سریع محصول (جستجو + ۶ فیلتر)">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 6,
            ...box,
            padding: 7,
          }}
        >
          <span style={{ gridColumn: "span 2" }}>{bar("90%")}</span>
          {["نوع محصول", "منبع", "گرید", "کاربرد", "وضعیت موجودی"].map((f) => (
            <span key={f} style={{ ...box, padding: "4px 6px", fontSize: 8, color: "#8B9096" }}>{f}</span>
          ))}
        </div>
        <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} style={{ ...box, flex: 1, padding: 8, display: "flex", flexDirection: "column", gap: 4 }}>
              {bar("72%", 6)}
              {lines(2, [100, 70])}
              <div style={{ display: "flex", gap: 4, marginTop: 4 }}>
                <span style={{ flex: 1, fontSize: 8, fontWeight: 700, color: "#6B7076", border: "1px solid #C9CDD2", borderRadius: 3, padding: "2px 5px", textAlign: "center" }}>
                  مشاهده
                </span>
                <span style={{ flex: 1, fontSize: 8, fontWeight: 700, color: "#fff", background: "#41454A", borderRadius: 3, padding: "2px 5px", textAlign: "center" }}>
                  استعلام
                </span>
              </div>
            </div>
          ))}
        </div>
      </Block>

      {/* 4 market */}
      <Block title="۰۴ — قیمت روز بازار">
        <div style={{ ...box, overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1.3fr 1fr 1.2fr 1.6fr", padding: "5px 8px", background: "#ECEEF0", fontSize: 7.5, fontWeight: 700, color: "#7B8086" }}>
            <span>محصول</span><span>واحد</span><span>وضعیت</span><span>آخرین بروزرسانی</span><span />
          </div>
          {marketRows.slice(0, 4).map((r, i) => (
            <div key={r.product} style={{ display: "grid", gridTemplateColumns: "2fr 1.3fr 1fr 1.2fr 1.6fr", padding: "5px 8px", borderTop: "1px solid #EDEBE7", fontSize: 8 }}>
              <span style={{ fontWeight: 700, color: "#4A4E54" }}>{r.product}</span>
              <span>{r.unit}</span>
              <span>{["افزایشی", "ثابت", "کاهشی"][i % 3]}</span>
              <span style={{ color: "#8B9096" }}>{r.updated}</span>
              <span style={{ fontSize: 7.5, fontWeight: 700, color: "#fff", background: "#7A2028", borderRadius: 3, padding: "2px 6px", textAlign: "center", justifySelf: "end" }}>
                استعلام
              </span>
            </div>
          ))}
        </div>
      </Block>

      {/* 5-6 categories + featured */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 8 }}>
        <Block title="۰۵ — دسته‌بندی محصولات">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 5 }}>
            {categories.map((c) => (
              <div key={c.id} style={{ ...box, padding: 5 }}>
                <div style={{ height: 34, border: "1.5px dashed #B6BBC1", borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 7, color: "#8B9096", background: "#F2F2F3" }}>
                  تصویر
                </div>
                <div style={{ marginTop: 5 }}>{bar("70%", 5)}</div>
                <span style={{ display: "flex", gap: 3, marginTop: 5 }}>{pill("60%", 10)}</span>
              </div>
            ))}
          </div>
        </Block>
        <Block title="۰۶ — محصولات منتخب">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 5 }}>
            {products.slice(0, 8).map((p) => (
              <div key={p.id} style={{ ...box, padding: 5 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 8, fontWeight: 700, color: "#4A4E54" }}>{p.name}</span>
                  <span style={{ width: 18, height: 7, borderRadius: 99, background: "#2F7654", display: "inline-block" }} />
                </div>
                {lines(2, [100, 70])}
              </div>
            ))}
          </div>
        </Block>
      </div>

      {/* 7 industries */}
      <Block title="۰۷ — صنایع و کاربردها">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 6 }}>
          <div style={{ ...box, padding: 6, display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 3 }}>
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} style={{ ...box, padding: "3px 5px", fontSize: 7.5, color: "#8B9096" }}>صنعت {i + 1}</span>
            ))}
          </div>
          <div style={{ ...box, padding: 6 }}>
            {bar("70%", 6)}
            {lines(2, [94, 80])}
            <div style={{ display: "flex", gap: 4, marginTop: 6 }}>{bar("46%", 12, false, "#7A2028")}</div>
          </div>
        </div>
      </Block>

      {/* 8 why us */}
      <Block title="۰۸ — چرا مرکز نشاسته ایران (۸ مزیت)">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 6 }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} style={{ ...box, padding: 6, display: "flex", gap: 5, alignItems: "center" }}>
              <span style={{ width: 14, height: 14, borderRadius: 3, border: "1px solid #B6BBC1", flexShrink: 0 }} />
              <span style={{ flex: 1 }}>{lines(2, [100, 60])}</span>
            </div>
          ))}
        </div>
      </Block>

      {/* 9-10-11 compress */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginTop: 8 }}>
        <Block title="۰۹ — آمار و اعتماد">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 4 }}>
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} style={{ ...box, padding: 7, textAlign: "center" }}>
                <span style={{ fontSize: 12, fontWeight: 900, color: "#17191C" }}>{["۶", "۳۰", "XX", "XX"][i]}</span>
                <div style={{ marginTop: 4 }}>{pill("70%", 8)}</div>
              </div>
            ))}
          </div>
        </Block>
        <Block title="۱۰ — فرایند تأمین (۵ مرحله)">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 4 }}>
            {["۰۱", "۰۲", "۰۳", "۰۴", "۰۵"].map((n) => (
              <div key={n} style={{ ...box, padding: 6, textAlign: "center" }}>
                <span style={{ width: 22, height: 22, borderRadius: 4, background: "#41454A", color: "#fff", fontWeight: 800, fontSize: 10, display: "grid", placeItems: "center", margin: "0 auto 4px" }}>
                  {n}
                </span>
                {pill("80%", 7)}
              </div>
            ))}
          </div>
        </Block>
        <Block title="۱۱ — منابع فنی">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 3 }}>
            {["COA", "کاتالوگ", "TDS", "نمونه", "راهنما"].map((t) => (
              <div key={t} style={{ ...box, padding: 4, textAlign: "center", fontSize: 7, color: "#6B7076" }}>
                <div style={{ width: "100%", height: 18, background: "#F2F2F3", borderRadius: 3 }} />
                <div style={{ marginTop: 4 }}>{t}</div>
              </div>
            ))}
          </div>
        </Block>
      </div>

      {/* 12-13-14 */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginTop: 8 }}>
        <Block title="۱۲ — مرکز دانش و بازار">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} style={{ ...box, padding: 6 }}>{lines(2, [100, 80])}</div>
            ))}
          </div>
        </Block>
        <Block title="۱۳ — RFQ (تبدیل اصلی)">
          <div style={{ ...box, padding: 7 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>{bar("80%")}{bar("80%")}{bar("80%")}{bar("80%")}</div>
            <div style={{ display: "flex", gap: 6, marginTop: 6 }}>{bar("60%", 14, false, "#7A2028")}</div>
          </div>
        </Block>
        <Block title="۱۴ — فوتر + موبایل">
          <div style={{ ...box, padding: 7 }}>
            {lines(2, [64, 48])}
            <div style={{ display: "flex", gap: 3, marginTop: 6 }}>
              {Array.from({ length: 4 }).map((_, i) => (
                <span key={i} style={{ width: 12, height: 12, borderRadius: 3, border: "1px solid #B6BBC1" }} />
              ))}
            </div>
          </div>
        </Block>
      </div>
    </div>
  );
}
