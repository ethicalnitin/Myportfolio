import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { PROFILE } from "../constants";
import Section from "./Section";

const LINKS = [
  { label: "Resume (PDF)", href: PROFILE.resume, Icon: FiFileText },
  { label: "LinkedIn", href: PROFILE.linkedin, Icon: FaLinkedin },
  { label: "GitHub", href: PROFILE.github, Icon: FaGithub },
  { label: "LeetCode", href: PROFILE.leetcode, Icon: SiLeetcode },
];

const Contact = () => {
  return (
    <Section id="contact" index="05" label="Contact">
      <p className="max-w-prose text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
        Hiring for a backend or full-stack role? Email is the fastest way to reach me.
      </p>
      <a
        href={`mailto:${PROFILE.email}`}
        className="link mt-6 inline-block break-all font-mono text-base sm:text-lg"
      >
        {PROFILE.email}
      </a>
      <ul className="mt-8 flex flex-wrap gap-3">
        {LINKS.map(({ label, href, Icon }) => (
          <li key={label}>
            <a href={href} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <Icon aria-hidden="true" /> {label}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Contact;
