const columns = [
  { title: "About", links: ["Our Story", "Responsible Sourcing", "Sustainability", "Reviews"] },
  { title: "Orders", links: ["Track Your Order", "Free 30-Day Returns", "Free Shipping", "Lifetime Warranty"] },
  { title: "Learn", links: ["The 4 C's", "Ring Size Guide", "Gemstone Guide", "Care & Cleaning"] },
  { title: "Support", links: ["Contact", "FAQs", "Financing", "Book Appointment"] },
];

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-ink/10 bg-sand/30">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-3 text-[10px] uppercase tracking-widest text-ink/50 sm:mb-4 sm:text-xs">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l}><a href="#" className="text-xs text-ink/75 transition hover:text-sapphire sm:text-sm">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 border-t border-ink/10 pt-7 text-center sm:mt-12 sm:gap-4 sm:pt-8">
          <span className="font-serif text-xl tracking-[0.2em] sm:text-2xl">LUMIÈRE</span>
          <p className="max-w-md text-xs text-ink/50 sm:text-sm">
            A demo storefront built with React and Tailwind. Not affiliated with any real jeweler.
          </p>
          <p className="text-[10px] text-ink/40 sm:text-xs">© {new Date().getFullYear()} Lumière Demo. For portfolio use only.</p>
        </div>
      </div>
    </footer>
  );
}
