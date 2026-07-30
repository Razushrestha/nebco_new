/** Single red timeline rail with hollow nodes centered under each milestone column */
export function FoundationTimelineRail() {
  return (
    <div className="foundation-timeline-rail" aria-hidden="true">
      <div className="foundation-timeline-rail__line" />
      <div className="foundation-timeline-rail__nodes">
        {[0, 1, 2].map((i) => (
          <div key={i} className="foundation-timeline-rail__node">
            <span className="foundation-timeline-rail__dot" />
          </div>
        ))}
      </div>
    </div>
  );
}
