import { PROFILE } from "../constants";

const Footer = () => {
  return (
    <footer className="border-t border-rule">
      <div className="wrap flex flex-col gap-2 py-8 text-sm text-ink-3 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {PROFILE.name}
        </p>
        <p>
          Built with React, Vite and Tailwind CSS ·{" "}
          <a href={PROFILE.source} target="_blank" rel="noopener noreferrer" className="link text-ink-3">
            view source
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
