const columns = [
  { title: "About",   links: ["Our Story", "Responsible Sourcing", "Sustainability", "Reviews"] },
  { title: "Orders",  links: ["Track Your Order", "Free 30-Day Returns", "Free Shipping", "Lifetime Warranty"] },
  { title: "Learn",   links: ["The 4 C's", "Ring Size Guide", "Gemstone Guide", "Care & Cleaning"] },
  { title: "Support", links: ["Contact", "FAQs", "Financing", "Book Appointment"] },
];

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}
function PinterestIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.853 0 1.267.641 1.267 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.806 1.476 1.806 1.771 0 3.135-1.867 3.135-4.563 0-2.386-1.715-4.054-4.163-4.054-2.836 0-4.5 2.127-4.5 4.326 0 .856.33 1.774.741 2.276a.3.3 0 0 1 .069.286c-.075.313-.243.995-.276 1.134-.044.183-.146.222-.337.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.522 0 10-4.477 10-10S17.522 2 12 2z"/>
    </svg>
  );
}
function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="text-cream" style={{ backgroundColor: "#1e2d5e" }}>

      {/* Newsletter row */}
      <div className="border-b border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-10 sm:flex-row sm:justify-between">
          <div>
            <p className="font-serif text-xl tracking-wide text-cream">Stay in the loop</p>
            <p className="mt-1 text-xs text-cream/50">New arrivals, exclusive offers and gem guides.</p>
          </div>
          <form className="flex w-full max-w-sm gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 rounded-full border border-cream/20 bg-cream/5 px-4 py-2.5 text-sm text-cream placeholder:text-cream/35 outline-none focus:border-gold/60 transition-colors"
            />
            <button
              type="submit"
              className="rounded-full bg-gold px-5 py-2.5 text-xs font-semibold tracking-wide text-ink transition-all hover:bg-goldLight"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Link columns */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-2xs uppercase tracking-[0.2em] text-gold font-medium">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-cream/55 transition-colors hover:text-cream"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Gold divider */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </div>

      {/* Bottom bar */}
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-between">
          <span className="font-serif text-2xl tracking-[0.3em] text-cream">LUMIÈRE</span>

          {/* Social icons */}
          <div className="flex items-center gap-5 text-cream/50">
            <a href="#" aria-label="Instagram" className="hover:text-cream transition-colors"><InstagramIcon /></a>
            <a href="#" aria-label="Pinterest" className="hover:text-cream transition-colors"><PinterestIcon /></a>
            <a href="#" aria-label="TikTok" className="hover:text-cream transition-colors"><TikTokIcon /></a>
          </div>

          <p className="text-2xs text-cream/30 tracking-wide">
            © {new Date().getFullYear()} Lumière Demo. Portfolio use only.
          </p>
        </div>
      </div>

    </footer>
  );
}
