import { SKILLS } from "../constants";
import Section from "./Section";

const Skills = () => {
  return (
    <Section id="skills" index="03" label="Skills">
      <p className="max-w-prose text-ink-2">Each line says where I&apos;ve actually used it.</p>
      <dl className="mt-6 border-t border-rule">
        {SKILLS.map((skill) => (
          <div
            key={skill.widht}
            className="grid gap-1 border-b border-rule py-3.5 md:grid-cols-[9.5rem_minmax(0,1fr)_minmax(0,13rem)] md:gap-6"
          >
            <dt className="label md:pt-1">{skill.area}</dt>
            <dd>{skill.tools}</dd>
            <dd className="text-sm text-ink-3 md:pt-0.5">{skill.where}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
};

export default Skills;
