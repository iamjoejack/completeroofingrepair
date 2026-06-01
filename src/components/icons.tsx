/* Inline SVG icons (no icon-font dependency). Add new ones to PATHS. */
import type { SVGProps } from "react";

type IconName =
  | "clock" | "bolt" | "dollar" | "shield" | "badge" | "umbrella" | "chart"
  | "house" | "wrench" | "home-alert" | "sparkle" | "gutter" | "building"
  | "phone" | "sms" | "check" | "star" | "arrow" | "menu" | "instagram"
  | "mail" | "image" | "leak" | "pin" | "roof";

const stroke: Partial<Record<IconName, boolean>> = {
  clock: true, bolt: true, dollar: true, shield: true, badge: true,
  umbrella: true, chart: true, house: true, wrench: true, "home-alert": true,
  sparkle: true, gutter: true, building: true, sms: true, menu: true,
  arrow: true, mail: true, image: true, leak: true, roof: true,
};

const PATHS: Record<IconName, React.ReactNode> = {
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 8v4l3 2" strokeLinecap="round" strokeLinejoin="round" /></>,
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7z" strokeLinejoin="round" />,
  dollar: <path d="M12 3v18M8 7h6a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h7" strokeLinecap="round" />,
  shield: <><path d="M12 3 5 6v5c0 4 3 7 7 9 4-2 7-5 7-9V6z" strokeLinejoin="round" /><path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" /></>,
  badge: <path d="M12 2 4 5v6c0 5 3.5 8 8 11 4.5-3 8-6 8-11V5z" strokeLinejoin="round" />,
  umbrella: <><path d="M4 9h16v10H4z" strokeLinejoin="round" /><path d="M9 9V6a3 3 0 0 1 6 0v3" strokeLinecap="round" /></>,
  chart: <path d="m3 12 4-4 4 4 6-6 4 4" strokeLinecap="round" strokeLinejoin="round" />,
  house: <><path d="m3 11 9-7 9 7" strokeLinecap="round" strokeLinejoin="round" /><path d="M5 10v9h14v-9" strokeLinejoin="round" /></>,
  wrench: <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6 2 2 6-6a4 4 0 0 0 5.4-5.4l-2.3 2.3-2-2z" strokeLinejoin="round" />,
  "home-alert": <path d="M3 20h18M6 20V9l6-5 6 5v11M9 20v-5h6v5" strokeLinecap="round" strokeLinejoin="round" />,
  sparkle: <path d="M11 4 9 9l-5 2 5 2 2 5 2-5 5-2-5-2z" strokeLinejoin="round" />,
  gutter: <><path d="M3 8h18l-1 6a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3z" strokeLinejoin="round" /><path d="M7 8 9 3M17 8l-2-5" strokeLinecap="round" /></>,
  building: <><path d="M4 21V7l8-4 8 4v14" strokeLinejoin="round" /><path d="M9 21v-6h6v6M9 11h.01M15 11h.01" strokeLinecap="round" /></>,
  phone: <path d="M6.6 10.8a15.3 15.3 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .57 3.6 1 1 0 0 1-.25 1z" />,
  sms: <path d="M4 5h16v11H8l-4 4z" strokeLinejoin="round" />,
  check: <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />,
  star: <path d="m12 2 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />,
  mail: <><path d="M4 5h16v14H4z" strokeLinejoin="round" /><path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" /></>,
  image: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 16 5-5 4 4 3-3 6 6" strokeLinejoin="round" /><circle cx="8.5" cy="9.5" r="1.5" /></>,
  leak: <path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z" strokeLinejoin="round" />,
  pin: <><path d="M12 21s7-6.3 7-12a7 7 0 1 0-14 0c0 5.7 7 12 7 12z" strokeLinejoin="round" /><circle cx="12" cy="9" r="2.5" /></>,
  roof: <><path d="M5 17 16 8l11 9" strokeLinecap="round" strokeLinejoin="round" /><path d="M8 16v8h16v-8" strokeLinejoin="round" /></>,
  instagram: <path d="M12 2c2.7 0 3 0 4.1.1 1 0 1.7.2 2.3.5.6.2 1.1.5 1.6 1s.8 1 1 1.6c.3.6.4 1.3.5 2.3 0 1.1.1 1.4.1 4.1s0 3-.1 4.1c0 1-.2 1.7-.5 2.3a4.6 4.6 0 0 1-1 1.6 4.6 4.6 0 0 1-1.6 1c-.6.3-1.3.4-2.3.5-1.1 0-1.4.1-4.1.1s-3 0-4.1-.1c-1 0-1.7-.2-2.3-.5a4.6 4.6 0 0 1-1.6-1 4.6 4.6 0 0 1-1-1.6c-.3-.6-.4-1.3-.5-2.3C2 15 2 14.7 2 12s0-3 .1-4.1c0-1 .2-1.7.5-2.3a4.6 4.6 0 0 1 1-1.6 4.6 4.6 0 0 1 1.6-1c.6-.3 1.3-.4 2.3-.5C9 2 9.3 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2A3.2 3.2 0 1 1 12 8.8a3.2 3.2 0 0 1 0 6.4zM17.8 7a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z" />,
};

export function Icon({ name, ...props }: { name: IconName } & SVGProps<SVGSVGElement>) {
  const isStroke = stroke[name];
  return (
    <svg
      viewBox="0 0 24 24"
      fill={isStroke ? "none" : "currentColor"}
      stroke={isStroke ? "currentColor" : "none"}
      strokeWidth={isStroke ? 2 : undefined}
      aria-hidden="true"
      {...props}
    >
      {PATHS[name]}
    </svg>
  );
}

export type { IconName };
