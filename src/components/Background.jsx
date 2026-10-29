import { FiArrowUpRight } from "react-icons/fi";
import { BACKGROUND } from "../constants";
import Section from "./Section";

const Background = () => {
  return (
    <Section id="background" index="04" label="Background">
      <dl className="grid border-t border-rule sm:grid-cols-2">
        {BACKGROUND.map((item) => (
          <div key={item.term} className="border-b border-rule py-4 sm:pr-8">
            <dt className="label">{item.term}</dt>
            <dd className="mt-1.5 font-medium leading-snug">
              {item.href ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1">
                  {item.detail} <FiArrowUpRight aria-hidden="true" />
                </a>
              ) : (
                item.detail
              )}
            </dd>
            {item.sub && <dd className="mt-0.5 text-sm text-ink-3">{item.sub}</dd>}
          </div>
        ))}
      </dl>
    </Section>
  );
};

export default Background;
