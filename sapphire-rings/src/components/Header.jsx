import { useState } from "react";
import { useStore } from "../context/StoreContext";
import { BagIcon, HeartIcon, UserIcon, SearchIcon, MenuIcon, CloseIcon } from "./icons";

const nav = ["Engagement Rings", "Wedding Rings", "Diamonds", "Gemstones", "Jewelry", "Gifts", "About"];

export default function Header({ onOpenCart, onOpenWishlist, onOpenUser }) {
  const { cartCount, wishlist } = useStore();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* ── Sticky header bar ── */}
      <header className="sticky top-0 z-30 border-b border-ink/10 bg-cream/95 backdrop-blur">
        <div className="bg-ink py-1.5 text-center text-[10px] tracking-wide text-cream sm:py-2 sm:text-xs">
          Complimentary shipping and lifetime warranty on every piece.
        </div>

        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <button className="lg:hidden" onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <MenuIcon className="h-6 w-6" />
          </button>

          <div className="flex-1 text-center lg:flex-none lg:text-left">
            <a href="#" className="font-serif text-xl tracking-[0.2em] sm:text-2xl lg:text-3xl">LUMIÈRE</a>
          </div>

          <nav className="hidden lg:flex lg:gap-7">
            {nav.map((item) => (
              <a key={item} href="#collection" className="text-sm tracking-wide text-ink/80 transition hover:text-sapphire">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <button className="hidden sm:block" aria-label="Search"><SearchIcon className="h-5 w-5" /></button>
            <button onClick={onOpenUser} aria-label="Account"><UserIcon className="h-5 w-5" /></button>
            <button onClick={onOpenWishlist} aria-label="Wishlist" className="relative">
              <HeartIcon className="h-5 w-5" />
              {wishlist.length > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-sapphire text-[10px] text-white">
                  {wishlist.length}
                </span>
              )}
            </button>
            <button onClick={onOpenCart} aria-label="Bag" className="relative">
              <BagIcon className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-sapphire text-[10px] text-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile nav — rendered OUTSIDE <header> so it escapes the z-30 stacking context ── */}
      <div className={`fixed inset-0 z-[9999] lg:hidden ${mobileOpen ? "" : "pointer-events-none"}`}>
        {/* Dark overlay */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Slide-in panel */}
        <div className={`absolute left-0 top-0 h-full w-full bg-cream shadow-2xl transition-transform duration-300 sm:w-80 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="flex h-full flex-col">
            {/* Panel header */}
            <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4">
              <span className="font-serif text-xl tracking-widest">LUMIÈRE</span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <CloseIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col overflow-y-auto px-5 py-4">
              {nav.map((item) => (
                <a
                  key={item}
                  href="#collection"
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-ink/10 py-4 text-base font-medium text-ink/80 transition hover:text-sapphire"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Footer note */}
            <div className="mt-auto border-t border-ink/10 px-5 py-5">
              <p className="text-xs text-ink/40">Complimentary shipping &amp; lifetime warranty.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
