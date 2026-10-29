// A sequence diagram drawn with CSS grid. Each lane spans two of six columns,
// so the centre of lane i sits on grid line 2i + 2 and an arrow between two
// lanes runs from one centre line to the other.
const centreLine = (lane) => lane * 2 + 2;

const isNote = (step) => step.at !== undefined;

const SequenceTrace = ({ trace }) => {
  const { lanes, steps, caption } = trace;

  return (
    <figure className="mt-6">
      {/* Visual diagram for wider screens. The list below carries the same
          content for small screens and for screen readers. */}
      <div aria-hidden="true" className="hidden rounded-[3px] border border-rule bg-panel px-2 pb-5 md:block">
        <div className="grid grid-cols-6 border-b border-rule">
          {lanes.map((lane) => (
            <p key={lane} className="label col-span-2 py-3 text-center text-ink">
              {lane}
            </p>
          ))}
        </div>
        <div className="relative">
          {lanes.map((lane, i) => (
            <span
              key={lane}
              className="absolute inset-y-0 w-px bg-rule"
              style={{ left: `${((i * 2 + 1) / 6) * 100}%` }}
            />
          ))}
          <ol className="relative grid grid-cols-6 gap-y-2 pt-4">
            {steps.map((step, i) =>
              isNote(step) ? (
                <li key={i} className="py-1" style={{ gridRow: i + 1, gridColumn: `${step.at * 2 + 1} / span 2` }}>
                  <p className="mx-auto w-fit rounded-[3px] border border-dashed border-ink-3 bg-bg px-3 py-1.5 text-center text-xs text-ink-2">
                    <span className="font-mono text-accent">{i + 1}</span> {step.label}
                  </p>
                </li>
              ) : (
                <li
                  key={i}
                  style={{
                    gridRow: i + 1,
                    gridColumn: `${centreLine(Math.min(step.from, step.to))} / ${centreLine(Math.max(step.from, step.to))}`,
                  }}
                >
                  <p className="px-3 text-center font-mono text-xs text-ink">
                    <span className="text-accent">{i + 1}</span> {step.label}
                  </p>
                  <div
                    className={`arrow mt-1 ${step.to > step.from ? "to-right" : "to-left"} ${step.response ? "is-response" : ""}`}
                  />
                  {step.detail && (
                    <p className="mt-1 px-3 text-center text-[0.7rem] leading-snug text-ink-3">{step.detail}</p>
                  )}
                </li>
              )
            )}
          </ol>
        </div>
      </div>

      <ol className="space-y-3 border-l border-rule pl-4 md:sr-only">
        {steps.map((step, i) => (
          <li key={i} className="text-sm leading-snug">
            <span className="mr-2 font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
            {isNote(step) ? (
              <span className="text-ink-2">
                {lanes[step.at]}: {step.label}
              </span>
            ) : (
              <>
                <span className="text-xs text-ink-3">
                  {lanes[step.from]} <span aria-hidden="true">→</span>
                  <span className="sr-only">to</span> {lanes[step.to]}
                </span>
                <span className="mt-0.5 block font-mono text-[0.8rem]">{step.label}</span>
                {step.detail && <span className="mt-0.5 block text-xs text-ink-3">{step.detail}</span>}
              </>
            )}
          </li>
        ))}
      </ol>

      <figcaption className="mt-3 text-xs text-ink-3">
        {caption}
        <span className="hidden md:inline"> Solid lines are requests, dashed lines responses.</span>
      </figcaption>
    </figure>
  );
};

export default SequenceTrace;
