const Box = ({ name, note, variant = "plain" }) => {
  const styles = {
    plain: "border-rule bg-bg",
    core: "border-accent bg-accent-soft",
    external: "border-dashed border-ink-3 bg-bg",
  };
  return (
    <div className={`rounded-[3px] border px-3 py-2.5 ${styles[variant]}`}>
      <p className="text-sm font-medium leading-snug">{name}</p>
      {note && <p className="mt-0.5 text-xs leading-snug text-ink-3">{note}</p>}
    </div>
  );
};

const Connector = () => (
  <div aria-hidden="true" className="flex justify-center font-mono text-ink-3">
    <span className="md:hidden">↓</span>
    <span className="hidden md:inline">→</span>
  </div>
);

const SystemContext = ({ system }) => {
  return (
    <figure className="mt-5">
      <div className="grid gap-3 md:grid-cols-[minmax(0,0.8fr)_auto_minmax(0,1fr)_auto_minmax(0,1.4fr)] md:items-center">
        <Box {...system.client} />
        <Connector />
        <Box {...system.core} variant="core" />
        <Connector />
        <ul className="grid gap-2">
          {system.deps.map((dep) => (
            <li key={dep.name}>
              <Box name={dep.name} note={dep.note} variant={dep.external ? "external" : "plain"} />
            </li>
          ))}
        </ul>
      </div>
      <figcaption className="mt-3 text-xs text-ink-3">
        Highlighted: the service I built and ran. Dashed: public-record systems with no API.
      </figcaption>
    </figure>
  );
};

export default SystemContext;
