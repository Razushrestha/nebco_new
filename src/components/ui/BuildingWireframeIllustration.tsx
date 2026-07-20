const GOLD = "#c5a059";

export type BuildingWireframePreset = "tower" | "complex" | "campus" | "managed" | "specialised";

type BuildingWireframeIllustrationProps = {
  className?: string;
  variant?: "panel" | "panorama";
  preset?: BuildingWireframePreset;
};

function PanelWireframe({ preset }: { preset: BuildingWireframePreset }) {
  if (preset === "complex") {
    return (
      <g stroke={GOLD} strokeWidth="1.05" opacity="0.58">
        <rect x="20" y="55" width="90" height="175" />
        <line x1="20" y1="85" x2="110" y2="85" />
        <line x1="20" y1="115" x2="110" y2="115" />
        <line x1="20" y1="145" x2="110" y2="145" />
        <line x1="20" y1="175" x2="110" y2="175" />
        <line x1="20" y1="205" x2="110" y2="205" />
        <line x1="55" y1="55" x2="55" y2="230" />
        <line x1="85" y1="55" x2="85" y2="230" />
        <rect x="120" y="90" width="70" height="140" />
        <line x1="120" y1="120" x2="190" y2="120" />
        <line x1="120" y1="150" x2="190" y2="150" />
        <line x1="120" y1="180" x2="190" y2="180" />
        <line x1="155" y1="90" x2="155" y2="230" />
        <line x1="10" y1="230" x2="200" y2="230" strokeWidth="0.85" opacity="0.45" />
      </g>
    );
  }

  if (preset === "campus") {
    return (
      <g stroke={GOLD} strokeWidth="1.05" opacity="0.58">
        <rect x="15" y="100" width="55" height="130" />
        <line x1="15" y1="125" x2="70" y2="125" />
        <line x1="15" y1="150" x2="70" y2="150" />
        <line x1="42" y1="100" x2="42" y2="230" />
        <rect x="80" y="70" width="65" height="160" />
        <line x1="80" y1="100" x2="145" y2="100" />
        <line x1="80" y1="130" x2="145" y2="130" />
        <line x1="80" y1="160" x2="145" y2="160" />
        <line x1="112" y1="70" x2="112" y2="230" />
        <rect x="155" y="110" width="45" height="120" />
        <line x1="155" y1="135" x2="200" y2="135" />
        <line x1="177" y1="110" x2="177" y2="230" />
        <line x1="8" y1="230" x2="205" y2="230" strokeWidth="0.85" opacity="0.45" />
      </g>
    );
  }

  if (preset === "managed") {
    return (
      <g stroke={GOLD} strokeWidth="1.05" opacity="0.58">
        <rect x="35" y="45" width="130" height="185" />
        <line x1="35" y1="75" x2="165" y2="75" />
        <line x1="35" y1="105" x2="165" y2="105" />
        <line x1="35" y1="135" x2="165" y2="135" />
        <line x1="35" y1="165" x2="165" y2="165" />
        <line x1="35" y1="195" x2="165" y2="195" />
        <line x1="68" y1="45" x2="68" y2="230" />
        <line x1="100" y1="45" x2="100" y2="230" />
        <line x1="132" y1="45" x2="132" y2="230" />
        <rect x="60" y="20" width="80" height="25" strokeWidth="0.9" opacity="0.7" />
        <line x1="25" y1="230" x2="175" y2="230" strokeWidth="0.85" opacity="0.45" />
        <line x1="175" y1="60" x2="205" y2="45" strokeWidth="0.8" opacity="0.5" strokeDasharray="3 3" />
        <line x1="175" y1="120" x2="205" y2="105" strokeWidth="0.8" opacity="0.5" strokeDasharray="3 3" />
        <line x1="175" y1="180" x2="205" y2="165" strokeWidth="0.8" opacity="0.5" strokeDasharray="3 3" />
      </g>
    );
  }

  if (preset === "specialised") {
    return (
      <g stroke={GOLD} strokeWidth="1.05" opacity="0.58">
        <rect x="40" y="50" width="120" height="180" />
        <line x1="40" y1="80" x2="160" y2="80" />
        <line x1="40" y1="110" x2="160" y2="110" />
        <line x1="40" y1="140" x2="160" y2="140" />
        <line x1="40" y1="170" x2="160" y2="170" />
        <line x1="40" y1="200" x2="160" y2="200" />
        <line x1="80" y1="50" x2="80" y2="230" />
        <line x1="120" y1="50" x2="120" y2="230" />
        <path d="M40 140h120" strokeWidth="1.4" opacity="0.75" />
        <path d="M40 140 L100 95 L160 140" strokeWidth="0.9" opacity="0.45" />
        <line x1="20" y1="230" x2="180" y2="230" strokeWidth="0.85" opacity="0.45" />
        <circle cx="168" cy="168" r="14" strokeWidth="0.9" opacity="0.55" />
        <line x1="178" y1="178" x2="192" y2="192" strokeWidth="0.9" opacity="0.55" />
      </g>
    );
  }

  return (
    <g stroke={GOLD} strokeWidth="1.05" opacity="0.58">
      <rect x="30" y="40" width="160" height="200" />
      <line x1="30" y1="70" x2="190" y2="70" />
      <line x1="30" y1="100" x2="190" y2="100" />
      <line x1="30" y1="130" x2="190" y2="130" />
      <line x1="30" y1="160" x2="190" y2="160" />
      <line x1="30" y1="190" x2="190" y2="190" />
      <line x1="30" y1="220" x2="190" y2="220" />
      <line x1="70" y1="40" x2="70" y2="240" />
      <line x1="110" y1="40" x2="110" y2="240" />
      <line x1="150" y1="40" x2="150" y2="240" />
      <rect x="55" y="15" width="110" height="25" strokeWidth="0.9" opacity="0.7" />
      <line x1="55" y1="25" x2="165" y2="25" strokeWidth="0.8" opacity="0.7" />
      <line x1="110" y1="15" x2="110" y2="40" strokeWidth="0.8" opacity="0.7" />
      <line x1="20" y1="240" x2="200" y2="240" strokeWidth="0.85" opacity="0.45" />
      <path d="M30 240 L110 200 L190 240" strokeWidth="0.9" opacity="0.4" />
    </g>
  );
}

/** Tan line-art building wireframe used in construction engage/system sections */
export function BuildingWireframeIllustration({
  className = "",
  variant = "panel",
  preset = "tower",
}: BuildingWireframeIllustrationProps) {
  if (variant === "panorama") {
    return (
      <svg
        className={`pointer-events-none ${className}`}
        viewBox="0 0 1200 180"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <g stroke={GOLD} strokeWidth="1" opacity="0.35">
          <rect x="40" y="70" width="90" height="100" />
          <line x1="40" y1="90" x2="130" y2="90" />
          <line x1="40" y1="110" x2="130" y2="110" />
          <line x1="40" y1="130" x2="130" y2="130" />
          <line x1="40" y1="150" x2="130" y2="150" />
          <line x1="85" y1="70" x2="85" y2="170" />
          <rect x="150" y="90" width="70" height="80" />
          <line x1="150" y1="110" x2="220" y2="110" />
          <line x1="150" y1="130" x2="220" y2="130" />
          <line x1="185" y1="90" x2="185" y2="170" />
          <rect x="240" y="55" width="110" height="115" />
          <line x1="240" y1="78" x2="350" y2="78" />
          <line x1="240" y1="101" x2="350" y2="101" />
          <line x1="240" y1="124" x2="350" y2="124" />
          <line x1="240" y1="147" x2="350" y2="147" />
          <line x1="295" y1="55" x2="295" y2="170" />
          <rect x="370" y="80" width="80" height="90" />
          <line x1="370" y1="100" x2="450" y2="100" />
          <line x1="370" y1="120" x2="450" y2="120" />
          <line x1="410" y1="80" x2="410" y2="170" />
          <rect x="470" y="45" width="130" height="125" />
          <line x1="470" y1="70" x2="600" y2="70" />
          <line x1="470" y1="95" x2="600" y2="95" />
          <line x1="470" y1="120" x2="600" y2="120" />
          <line x1="470" y1="145" x2="600" y2="145" />
          <line x1="535" y1="45" x2="535" y2="170" />
          <rect x="620" y="75" width="95" height="95" />
          <line x1="620" y1="95" x2="715" y2="95" />
          <line x1="620" y1="115" x2="715" y2="115" />
          <line x1="620" y1="135" x2="715" y2="135" />
          <line x1="667" y1="75" x2="667" y2="170" />
          <rect x="735" y="60" width="100" height="110" />
          <line x1="735" y1="82" x2="835" y2="82" />
          <line x1="735" y1="104" x2="835" y2="104" />
          <line x1="735" y1="126" x2="835" y2="126" />
          <line x1="785" y1="60" x2="785" y2="170" />
          <rect x="855" y="85" width="75" height="85" />
          <line x1="855" y1="105" x2="930" y2="105" />
          <line x1="855" y1="125" x2="930" y2="125" />
          <line x1="892" y1="85" x2="892" y2="170" />
          <rect x="950" y="50" width="120" height="120" />
          <line x1="950" y1="74" x2="1070" y2="74" />
          <line x1="950" y1="98" x2="1070" y2="98" />
          <line x1="950" y1="122" x2="1070" y2="122" />
          <line x1="950" y1="146" x2="1070" y2="146" />
          <line x1="1010" y1="50" x2="1010" y2="170" />
          <rect x="1090" y="78" width="70" height="92" />
          <line x1="1090" y1="98" x2="1160" y2="98" />
          <line x1="1090" y1="118" x2="1160" y2="118" />
          <line x1="1125" y1="78" x2="1125" y2="170" />
          <line x1="20" y1="170" x2="1180" y2="170" strokeWidth="0.8" />
        </g>
      </svg>
    );
  }

  return (
    <svg
      className={`pointer-events-none ${className}`}
      viewBox="0 0 220 260"
      fill="none"
      aria-hidden="true"
    >
      <PanelWireframe preset={preset} />
    </svg>
  );
}
