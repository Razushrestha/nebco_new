/** Gold floor-plan wireframe for the proposal panel (section 06) */
export function ProposalBlueprintOverlay() {
  return (
    <svg
      className="absolute top-[18%] bottom-[22%] left-5 sm:left-6 lg:left-7 w-[46%] max-w-[10.5rem] opacity-[0.28] pointer-events-none"
      viewBox="0 0 140 160"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <g stroke="#c5a059" strokeWidth="0.7">
        <rect x="10" y="14" width="58" height="78" />
        <line x1="10" y1="32" x2="68" y2="32" />
        <line x1="10" y1="50" x2="68" y2="50" />
        <line x1="10" y1="68" x2="68" y2="68" />
        <line x1="34" y1="14" x2="34" y2="92" />
        <rect x="72" y="38" width="32" height="54" />
        <line x1="72" y1="56" x2="104" y2="56" />
        <line x1="72" y1="74" x2="104" y2="74" />
        <line x1="88" y1="38" x2="88" y2="92" />
        <rect x="108" y="24" width="24" height="68" opacity="0.75" />
        <line x1="108" y1="40" x2="132" y2="40" opacity="0.75" />
        <line x1="108" y1="58" x2="132" y2="58" opacity="0.75" />
        <line x1="120" y1="24" x2="120" y2="92" opacity="0.75" />
        <line x1="10" y1="14" x2="34" y2="32" strokeWidth="0.5" opacity="0.65" />
        <line x1="68" y1="14" x2="34" y2="32" strokeWidth="0.5" opacity="0.65" />
        <line x1="18" y1="108" x2="50" y2="140" strokeWidth="0.5" opacity="0.5" />
        <line x1="50" y1="108" x2="18" y2="140" strokeWidth="0.5" opacity="0.5" />
        <line x1="78" y1="108" x2="110" y2="140" strokeWidth="0.5" opacity="0.5" />
        <line x1="110" y1="108" x2="78" y2="140" strokeWidth="0.5" opacity="0.5" />
      </g>
    </svg>
  );
}
