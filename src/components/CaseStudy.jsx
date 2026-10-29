import { FiArrowUpRight } from "react-icons/fi";
import SequenceTrace from "./SequenceTrace";
import SystemContext from "./SystemContext";

const DecisionLog = ({ decisions }) => (
  <div className="mt-4 border-t border-rule">
    <div aria-hidden="true" className="label hidden gap-6 py-2.5 md:grid md:grid-cols-[1.15fr_1fr_1fr]">
      <span>Decision</span>
      <span>Why</span>
      <span>Trade-off</span>
    </div>
    {decisions.map((d, i) => (
      <div key={d.decision} className="grid gap-2 border-b border-rule py-4 md:grid-cols-[1.15fr_1fr_1fr] md:gap-6 md:border-t-0">
        <p className="font-medium leading-snug">
          <span className="mr-2 font-mono text-xs text-accent">D{i + 1}</span>
          {d.decision}
        </p>
        <p className="text-sm text-ink-2">
          <span className="label mr-1.5 md:sr-only">Why</span>
          {d.why}
        </p>
        <p className="text-sm text-ink-2">
          <span className="label mr-1.5 md:sr-only">Trade-off</span>
          {d.tradeoff}
        </p>
      </div>
    ))}
  </div>
);

const EndpointTable = ({ rows }) => (
  <table className="mt-4 w-full border-collapse text-left text-sm">
    <caption className="sr-only">REST endpoints grouped by route</caption>
    <thead>
      <tr className="border-y border-rule">
        <th scope="col" className="label py-2.5 pr-4 font-medium">Route</th>
        <th scope="col" className="label py-2.5 pr-4 text-right font-medium">Count</th>
        <th scope="col" className="label py-2.5 font-medium">Covers</th>
      </tr>
    </thead>
    <tbody>
      {rows.map((row) => (
        <tr key={row.path} className="border-b border-rule align-top">
          <td className="break-words py-2.5 pr-4 font-mono text-[0.8rem]">{row.path}</td>
          <td className="py-2.5 pr-4 text-right font-mono">{row.count}</td>
          <td className="py-2.5 text-ink-2">{row.note}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const CaseSection = ({ section }) => (
  <div className="mt-12">
    <h4 className="text-lg font-semibold tracking-tight">{section.heading}</h4>
    {section.paragraphs?.map((p) => (
      <p key={p.slice(0, 40)} className="mt-3 max-w-prose text-ink-2">
        {p}
      </p>
    ))}
    {section.system && <SystemContext system={section.system} />}
    {section.trace && <SequenceTrace trace={section.trace} />}
    {section.after && <p className="mt-5 max-w-prose text-ink-2">{section.after}</p>}
    {section.decisions && <DecisionLog decisions={section.decisions} />}
    {section.endpoints && <EndpointTable rows={section.endpoints} />}
    {section.bullets && (
      <ul className="bullets mt-3 max-w-prose space-y-2.5 text-ink-2">
        {section.bullets.map((b) => (
          <li key={b.slice(0, 40)}>{b}</li>
        ))}
      </ul>
    )}
  </div>
);

const CaseStudy = ({ study }) => {
  return (
    <article id={study.id} aria-labelledby={`${study.id}-title`}>
      <p className="label text-accent">{study.kind}</p>
      <h3 id={`${study.id}-title`} className="mt-2 text-2xl font-semibold leading-snug tracking-tight sm:text-[1.75rem]">
        {study.title}
      </h3>
      <p className="mt-4 max-w-prose text-ink-2">{study.summary}</p>

      <dl className="mt-6 grid gap-x-8 gap-y-3 border-y border-rule py-4 sm:grid-cols-3">
        {study.meta.map((m) => (
          <div key={m.term}>
            <dt className="label">{m.term}</dt>
            <dd className="mt-1 text-sm leading-snug">{m.detail}</dd>
          </div>
        ))}
      </dl>

      {(study.links.length > 0 || study.sourceNote) && (
        <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-3">
          {study.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1">
              {l.label} <FiArrowUpRight aria-hidden="true" />
            </a>
          ))}
          {study.sourceNote && <span>{study.sourceNote}</span>}
        </p>
      )}

      {study.sections.map((section) => (
        <CaseSection key={section.heading} section={section} />
      ))}
    </article>
  );
};

export default CaseStudy;
