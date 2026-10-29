// Shared section shell: a narrow margin column holding the section label
// (like the margin numbering of a printed spec) and the content beside it.
const Section = ({ id, index, label, children }) => {
  return (
    <section id={id} aria-labelledby={`${id}-label`} className="border-t border-rule py-16 sm:py-20">
      <div className="wrap grid gap-y-8 lg:grid-cols-[11rem_minmax(0,1fr)] lg:gap-x-12">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <h2 id={`${id}-label`} className="label">
            <span className="text-accent">{index}</span> <span aria-hidden="true">/</span> {label}
          </h2>
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
};

export default Section;
