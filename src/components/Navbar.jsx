import { PROFILE } from "../constants";

const LINKS = [
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 border-b border-rule bg-bg">
      <div className="wrap flex h-14 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2.5 font-mono text-sm font-medium">
          <span aria-hidden="true" className="inline-block h-2 w-2 bg-accent" />
          {PROFILE.name}
        </a>
        <nav aria-label="Primary" className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 sm:flex">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-ink-2 transition-colors hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={PROFILE.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost px-3 py-1.5 font-mono text-xs"
          >
            Resume (PDF)
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
