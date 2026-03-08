export function Section({ children, id, className = "" }) {
  return (
    <section id={id} className={`py-24 px-6 md:px-12 lg:px-24 ${className}`}>
      <div>
        {children}
      </div>
    </section>
  );
}
