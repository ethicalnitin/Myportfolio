import { EXPERIENCES } from "../constants";
import Section from "./Section";

const Experience = () => {
  return (
    <Section id="experience" index="01" label="Experience">
      <ol className="space-y-12">
        {EXPERIENCES.map((exp) => (
          <li key={exp.company} className="grid gap-y-2 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-x-8">
            <p className="font-mono text-sm text-ink-3 md:pt-1">{exp.period}</p>
            <div>
              <h3 className="text-lg font-semibold leading-snug">
                {exp.role} <span className="font-normal text-ink-3">· {exp.company}</span>
              </h3>
              <ul className="bullets mt-3 max-w-prose space-y-2 text-ink-2">
                {exp.points.map((point) => (
                  <li key={point.slice(0, 40)}>{point}</li>
                ))}
              </ul>
              {exp.caseStudy && (
                <a href={exp.caseStudy.href} className="link mt-3 inline-block text-sm">
                  {exp.caseStudy.label} →
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default Experience;
