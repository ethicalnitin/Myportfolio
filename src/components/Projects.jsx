import { CASE_STUDIES } from "../constants";
import CaseStudy from "./CaseStudy";
import Section from "./Section";

const Projects = () => {
  return (
    <Section id="work" index="02" label="Work">
      <p className="max-w-prose text-ink-2">
        Two systems, written up the way I&apos;d explain them in a design review: the problem, how it works, what I
        traded off, and what I&apos;d change.
      </p>
      <nav aria-label="Case studies" className="mt-4 flex flex-wrap gap-x-6 gap-y-1 font-mono text-sm">
        {CASE_STUDIES.map((study, i) => (
          <a key={study.id} href={`#${study.id}`} className="link">
            {String(i + 1).padStart(2, "0")} {study.title.split(":")[0]}
          </a>
        ))}
      </nav>

      <div className="mt-14 space-y-20">
        {CASE_STUDIES.map((study, i) => (
          <div key={study.id} className={i > 0 ? "border-t border-rule pt-14" : undefined}>
            <CaseStudy study={study} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
