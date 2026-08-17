type P = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

/* ————— official brand mark: droplet + wheat ear + molecule ————— */
export const LogoMark = ({
  className,
  variant = "dark",
}: P & { variant?: "dark" | "light" }) => {
  const navy = variant === "light" ? "#FFFFFF" : "#123A63";
  const gold = "#D2A22C";
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      {/* droplet — navy (left) */}
      <path
        d="M24 3.6C18.4 11.2 12.4 18 10.3 23.4A15.2 15.2 0 0 0 21.8 44.1"
        stroke={navy}
        strokeWidth="2.7"
        strokeLinecap="round"
      />
      {/* droplet — gold (right) */}
      <path
        d="M24 3.6c5.6 7.6 11.6 14.4 13.7 19.8A15.2 15.2 0 0 1 30.4 43"
        stroke={gold}
        strokeWidth="2.7"
        strokeLinecap="round"
      />
      {/* wheat ear */}
      <path d="M24 11v26.5" stroke={gold} strokeWidth="1.9" strokeLinecap="round" />
      <path d="M24 6.2c-1.7 2.4-1.7 4.9 0 7.4 1.7-2.5 1.7-5 0-7.4Z" fill={gold} />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i} transform={`translate(0 ${12.4 + i * 5.3})`}>
          <path d="M24 0c-2.8 1-4.2 3.3-3.9 6.4 2.9-.7 4.3-2.9 3.9-6.4Z" fill={gold} />
          <path d="M24 0c2.8 1 4.2 3.3 3.9 6.4-2.9-.7-4.3-2.9-3.9-6.4Z" fill={gold} />
        </g>
      ))}
      {/* molecule */}
      <path
        d="M33.5 26.7 29.5 33.2M29.5 33.2 23.4 36.3M29.5 33.2 35.3 36.6"
        stroke={navy}
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <g fill={navy}>
        <circle cx="33.5" cy="26.7" r="3.1" />
        <circle cx="29.5" cy="33.2" r="3.7" />
        <circle cx="23.4" cy="36.3" r="2.9" />
        <circle cx="35.3" cy="36.6" r="3.1" />
      </g>
    </svg>
  );
};

/* ————— ui ————— */
export const SearchIcon = ({ className }: P) => (
  <svg {...base} className={className}><circle cx="11" cy="11" r="7" /><path d="m20.5 20.5-4-4" /></svg>
);
export const PhoneIcon = ({ className }: P) => (
  <svg {...base} className={className}><path d="M5.5 4h3.2l1.6 4-2.1 1.6a12 12 0 0 0 5.7 5.7L15.5 13l4 1.6v3.2a1.8 1.8 0 0 1-2 1.8C10.3 19 5 13.7 3.7 6a1.8 1.8 0 0 1 1.8-2Z" /></svg>
);
export const MailIcon = ({ className }: P) => (
  <svg {...base} className={className}><rect x="3" y="5.5" width="18" height="13" rx="2" /><path d="m4 7 8 6 8-6" /></svg>
);
export const PinIcon = ({ className }: P) => (
  <svg {...base} className={className}><path d="M12 21s6.5-5.6 6.5-10.4a6.5 6.5 0 0 0-13 0C5.5 15.4 12 21 12 21Z" /><circle cx="12" cy="10.4" r="2.3" /></svg>
);
export const ClockIcon = ({ className }: P) => (
  <svg {...base} className={className}><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></svg>
);
export const ArrowLeftIcon = ({ className }: P) => (
  <svg {...base} className={className}><path d="M19 12H5m6-6-6 6 6 6" /></svg>
);
export const ChevronIcon = ({ className }: P) => (
  <svg {...base} className={className}><path d="m6 9.5 6 6 6-6" /></svg>
);
export const CheckIcon = ({ className }: P) => (
  <svg {...base} className={className}><path d="m4.5 12.5 5 5 10-11" /></svg>
);
export const XIcon = ({ className }: P) => (
  <svg {...base} className={className}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const FilterIcon = ({ className }: P) => (
  <svg {...base} className={className}><path d="M4 6h16M7 12h10m-7 6h4" /></svg>
);
export const TrendUpIcon = ({ className }: P) => (
  <svg {...base} className={className}><path d="m3.5 17 6-6 4 4 7-7.5" /><path d="M15 7.5h5.5V13" /></svg>
);
export const TrendDownIcon = ({ className }: P) => (
  <svg {...base} className={className}><path d="m3.5 7 6 6 4-4 7 7.5" /><path d="M15 16.5h5.5V11" /></svg>
);
export const MinusIcon = ({ className }: P) => (
  <svg {...base} className={className}><path d="M5 12h14" /></svg>
);

/* ————— industries ————— */
export const BowlIcon = ({ className }: P) => (
  <svg {...base} className={className}><path d="M3.5 11h17a8.5 8.5 0 0 1-5 7.8V20h-7v-1.2a8.5 8.5 0 0 1-5-7.8Z" /><path d="M8.5 8c0-1.4 1.2-1.6 1.2-3M12.8 8c0-1.4 1.2-1.6 1.2-3" /></svg>
);
export const MilkIcon = ({ className }: P) => (
  <svg {...base} className={className}><path d="M9 3h6M9.5 3l-1.5 5v11a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V8L14.5 3" /><path d="M8 13.5c1.3-1 2.7-1 4 0s2.7 1 4 0" /></svg>
);
export const BreadIcon = ({ className }: P) => (
  <svg {...base} className={className}><path d="M4 10a3.5 3.5 0 0 1 3.5-3.5h9A3.5 3.5 0 0 1 20 10c0 1.2-.6 2.2-1.5 2.8V18a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 18v-5.2A3.3 3.3 0 0 1 4 10Z" /><path d="M10 12v4M14 12v4" /></svg>
);
export const PaperIcon = ({ className }: P) => (
  <svg {...base} className={className}><path d="M7 3h8l4 4v14H7V3Z" /><path d="M15 3v4h4M10 11h6M10 14.5h6M10 18h4" /></svg>
);
export const GlueIcon = ({ className }: P) => (
  <svg {...base} className={className}><path d="M9.5 8V5.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V8" /><path d="M8 8h8l.8 10.2a2 2 0 0 1-2 2.2h-5.6a2 2 0 0 1-2-2.2L8 8Z" /><path d="M12 12c1.2 1.4 2 2.5 2 3.5a2 2 0 1 1-4 0c0-1 .8-2.1 2-3.5Z" /></svg>
);
export const PillIcon = ({ className }: P) => (
  <svg {...base} className={className}><rect x="3.2" y="9" width="17.6" height="6.4" rx="3.2" transform="rotate(-40 12 12)" /><path d="m9 9.5 5.8 5" /></svg>
);
export const ShirtIcon = ({ className }: P) => (
  <svg {...base} className={className}><path d="M9 4 4.5 6.5 6 10.5l2-.8V20h8v-10.3l2 .8 1.5-4L15 4a3 3 0 0 1-6 0Z" /></svg>
);
export const OilIcon = ({ className }: P) => (
  <svg {...base} className={className}><path d="M12 3c3.2 3.8 5.3 6.6 5.3 9.3a5.3 5.3 0 0 1-10.6 0C6.7 9.6 8.8 6.8 12 3Z" /><path d="M9.5 12.8a2.6 2.6 0 0 0 2.2 2.6" /></svg>
);
export const FeedIcon = ({ className }: P) => (
  <svg {...base} className={className}><path d="M7 8.5 6 20h12l-1-11.5" /><path d="M7.5 8.5a4.5 4.5 0 0 1 9 0" /><path d="M12 8.5V4.5M12 4.5c-1.2-1-2.8-1-3.5.5M12 4.5c1.2-1 2.8-1 3.5.5" /><path d="M9.5 13h5M9.8 16.2h4.4" /></svg>
);
export const GearIcon = ({ className }: P) => (
  <svg {...base} className={className}><circle cx="12" cy="12" r="3.2" /><path d="M12 2.8v2.6M12 18.6v2.6M2.8 12h2.6M18.6 12h2.6M5.5 5.5l1.9 1.9M16.6 16.6l1.9 1.9M18.5 5.5l-1.9 1.9M7.4 16.6l-1.9 1.9" /></svg>
);

/* ————— benefits ————— */
export const ScaleIcon = ({ className }: P) => (
  <svg {...base} className={className}><path d="M12 4v16M4 20h16" /><path d="M7 7 3.5 13a3.5 3.5 0 0 0 7 0L7 7ZM17 7l-3.5 6a3.5 3.5 0 0 0 7 0L17 7Z" /><path d="M5 7h14" /></svg>
);
export const LayersIcon = ({ className }: P) => (
  <svg {...base} className={className}><path d="m12 3 9 4.5-9 4.5-9-4.5L12 3Z" /><path d="m4.5 12 7.5 3.8 7.5-3.8M4.5 16.5 12 20.3l7.5-3.8" /></svg>
);
export const ChartIcon = ({ className }: P) => (
  <svg {...base} className={className}><path d="M4 4v16h16" /><path d="m7.5 13.5 3.5-4 3 2.5 4.5-5.5" /></svg>
);
export const ChatIcon = ({ className }: P) => (
  <svg {...base} className={className}><path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 4V6Z" /><path d="M8.5 9h7M8.5 12.2h4.5" /></svg>
);
export const ShieldIcon = ({ className }: P) => (
  <svg {...base} className={className}><path d="M12 3 5 5.8v5.4c0 4.4 3 8 7 9.8 4-1.8 7-5.4 7-9.8V5.8L12 3Z" /><path d="m9 11.8 2.2 2.2 3.8-4" /></svg>
);
export const TargetIcon = ({ className }: P) => (
  <svg {...base} className={className}><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4.8" /><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" /></svg>
);
export const BuildingIcon = ({ className }: P) => (
  <svg {...base} className={className}><path d="M4 20V6l8-3v17M12 20h8V9l-8-2.5" /><path d="M7 9h.01M7 12.5h.01M7 16h.01M16 12h.01M16 15.5h.01" /><path d="M2.5 20h19" /></svg>
);
export const TruckIcon = ({ className }: P) => (
  <svg {...base} className={className}><path d="M2.5 6h11v10h-11zM13.5 10h4l3 3v3h-7" /><circle cx="6.5" cy="17.5" r="1.8" /><circle cx="17" cy="17.5" r="1.8" /></svg>
);

/* ————— resources ————— */
export const DocIcon = ({ className }: P) => (
  <svg {...base} className={className}><path d="M7 3h8l4 4v14H7V3Z" /><path d="M15 3v4h4" /><path d="M10 12h5M10 15.5h5" /></svg>
);
export const SampleIcon = ({ className }: P) => (
  <svg {...base} className={className}><path d="M9 3h6M10 3v6l-4.5 8.5a2 2 0 0 0 1.8 3h9.4a2 2 0 0 0 1.8-3L14 9V3" /><path d="M7.2 15h9.6" /></svg>
);

/* ————— social ————— */
export const InstagramIcon = ({ className }: P) => (
  <svg {...base} className={className}><rect x="3.5" y="3.5" width="17" height="17" rx="4.5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" /></svg>
);
export const LinkedInIcon = ({ className }: P) => (
  <svg {...base} className={className}><rect x="3.5" y="3.5" width="17" height="17" rx="3" /><path d="M8 10.5V17M8 7.6v.1M12 17v-3.8a2.2 2.2 0 0 1 4.4 0V17" /></svg>
);
export const TelegramIcon = ({ className }: P) => (
  <svg {...base} className={className}><path d="m20.5 4.5-17 6.7 5.2 1.9m11.8-8.6-2.8 13.6-6.3-5.6m9.1-8-11.4 9.4m0 0 .5 4.2 2.9-2.9" /></svg>
);
export const WhatsAppIcon = ({ className }: P) => (
  <svg {...base} className={className}><path d="M12 3.5a8.5 8.5 0 0 0-7.3 12.8L3.5 20.5l4.4-1.1A8.5 8.5 0 1 0 12 3.5Z" /><path d="M9.3 8.2c-.5 1.5 1.6 4.6 3.9 5.6 1 .4 1.9.1 2.3-.6l-1.9-1.3-.9.7c-.8-.4-1.6-1.2-2-2l.8-.8-1.2-2c-.5.1-1 .2-1 .4Z" fill="currentColor" stroke="none" /></svg>
);

export const industryIcons: Record<string, (p: P) => React.ReactElement> = {
  bowl: BowlIcon,
  milk: MilkIcon,
  bread: BreadIcon,
  paper: PaperIcon,
  glue: GlueIcon,
  pill: PillIcon,
  shirt: ShirtIcon,
  oil: OilIcon,
  feed: FeedIcon,
  gear: GearIcon,
};

export const benefitIcons: Record<string, (p: P) => React.ReactElement> = {
  scale: ScaleIcon,
  layers: LayersIcon,
  chart: ChartIcon,
  chat: ChatIcon,
  shield: ShieldIcon,
  target: TargetIcon,
  building: BuildingIcon,
  truck: TruckIcon,
};
