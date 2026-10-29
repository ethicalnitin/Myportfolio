import { FiArrowRight } from "react-icons/fi";
import { HERO, PROFILE } from "../constants";

const Hero = () => {
  return (
    <section id="top" aria-label="Introduction" className="pb-16 pt-14 sm:pb-20 sm:pt-20">
      <div className="wrap grid gap-y-6 lg:grid-cols-[11rem_minmax(0,1fr)] lg:gap-x-12">
        <p className="label lg:pt-1.5">{PROFILE.location}</p>
        <div className="min-w-0">
          <p className="font-mono text-sm text-accent">
            {PROFILE.role} · {PROFILE.stack}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{PROFILE.name}</h1>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-2">{HERO.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#jurident" className="btn btn-primary">
              Read the Jurident case study <FiArrowRight aria-hidden="true" />
            </a>
            <a href={PROFILE.resume} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              Resume (PDF)
            </a>
            <a href={`mailto:${PROFILE.email}`} className="btn btn-ghost">
              Email me
            </a>
          </div>

          <dl className="mt-12 grid border-t border-rule sm:grid-cols-2 xl:grid-cols-4">
            {HERO.facts.map((fact) => (
              <div key={fact.term} className="border-b border-rule py-4 sm:pr-6">
                <dt className="label">{fact.term}</dt>
                <dd className="mt-1.5 font-medium leading-snug">{fact.detail}</dd>
                <dd className="mt-0.5 text-sm text-ink-3">{fact.sub}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Hero;
