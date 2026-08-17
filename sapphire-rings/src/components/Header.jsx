import { useState } from "react";
import { useStore } from "../context/StoreContext";
import { BagIcon, HeartIcon, UserIcon, SearchIcon, MenuIcon, CloseIcon } from "./icons";

const nav = ["Engagement Rings", "Wedding Rings", "Diamonds", "Gemstones", "Jewelry", "Gifts", "About"];

export default function Header({ onOpenCart, onOpenWishlist, onOpenUser }) {
  const { cartCount, wishlist } = useStore();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
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

      {/* Mobile nav */}
      <div className={`fixed inset-0 z-50 lg:hidden ${mobileOpen ? "" : "pointer-events-none"}`}>
        <div className={`absolute inset-0 bg-black/30 transition-opacity ${mobileOpen ? "opacity-100" : "opacity-0"}`} onClick={() => setMobileOpen(false)} />
        <div className={`absolute left-0 top-0 h-full w-72 bg-cream p-6 shadow-xl transition-transform ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="mb-8 flex items-center justify-between">
            <span className="font-serif text-xl tracking-widest">LUMIÈRE</span>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu"><CloseIcon className="h-6 w-6" /></button>
          </div>
          <nav className="flex flex-col gap-5">
            {nav.map((item) => (
              <a key={item} href="#collection" onClick={() => setMobileOpen(false)} className="text-base text-ink/80">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
