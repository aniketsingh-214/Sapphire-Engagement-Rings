import { useState, useRef, useEffect } from "react";
import { useStore } from "../context/StoreContext";
import { BagIcon, HeartIcon, UserIcon, SearchIcon, MenuIcon, CloseIcon } from "./icons";

const nav = ["Engagement Rings", "Wedding Rings", "Diamonds", "Gemstones", "Jewelry", "Gifts", "About"];

export default function Header({ onOpenCart, onOpenWishlist, onOpenUser, searchQuery, onSearchChange }) {
  const { cartCount, wishlist } = useStore();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  function handleSearchToggle() {
    if (searchOpen) {
      setSearchOpen(false);
      onSearchChange("");
    } else {
      setSearchOpen(true);
    }
  }

  return (
    <>
      {/* ── Gradient announcement bar ── */}
      <div className="bg-gradient-to-r from-sapphireDark via-sapphire to-sapphireLight py-2 text-center text-2xs tracking-[0.18em] text-white/90 uppercase font-medium sm:text-xs">
        Complimentary Shipping &amp; Lifetime Warranty on Every Piece
      </div>

      {/* ── Sticky header ── */}
      <header className="sticky top-0 z-30 bg-cream/96 backdrop-blur-md border-b border-mist">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:py-4">

          {/* Hamburger — mobile */}
          <button
            className="lg:hidden p-2 rounded-full hover:bg-sand transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <MenuIcon className="h-5 w-5 text-ink" />
          </button>

          {/* Brand wordmark */}
          <div className="flex-1 text-center lg:flex-none lg:text-left">
            <a
              href="#"
              className="font-serif text-2xl tracking-[0.25em] text-ink hover:text-gold transition-colors duration-300 sm:text-3xl"
            >
              LUMIÈRE
            </a>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex lg:gap-8 xl:gap-10">
            {nav.map((item) => (
              <a
                key={item}
                href="#collection"
                className="nav-link text-sm font-medium tracking-wide text-ink/80 hover:text-ink transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Action icons */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Search */}
            <button
              onClick={handleSearchToggle}
              aria-label={searchOpen ? "Close search" : "Search"}
              className="p-2 rounded-full hover:bg-sand transition-colors duration-200 text-ink/70 hover:text-ink"
            >
              {searchOpen
                ? <CloseIcon className="h-5 w-5" />
                : <SearchIcon className="h-5 w-5" />}
            </button>

            {/* Account */}
            <button
              onClick={onOpenUser}
              aria-label="Account"
              className="p-2 rounded-full hover:bg-sand transition-colors duration-200 text-ink/70 hover:text-ink"
            >
              <UserIcon className="h-5 w-5" />
            </button>

            {/* Wishlist */}
            <button
              onClick={onOpenWishlist}
              aria-label="Wishlist"
              className="relative p-2 rounded-full hover:bg-sand transition-colors duration-200 text-ink/70 hover:text-ink"
            >
              <HeartIcon className="h-5 w-5" />
              {wishlist.length > 0 && (
                <span className="absolute right-0.5 top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-sapphire text-[10px] font-semibold text-white ring-2 ring-cream">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart */}
            <button
              onClick={onOpenCart}
              aria-label="Shopping bag"
              className="relative p-2 rounded-full hover:bg-sand transition-colors duration-200 text-ink/70 hover:text-ink"
            >
              <BagIcon className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute right-0.5 top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-sapphire text-[10px] font-semibold text-white ring-2 ring-cream">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* ── Animated search bar ── */}
        <div
          className={`overflow-hidden border-t border-mist transition-all duration-300 ease-in-out ${
            searchOpen ? "max-h-20 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="mx-auto flex max-w-2xl items-center gap-3 px-5 py-3">
            <SearchIcon className="h-4 w-4 shrink-0 text-gold" />
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search by name, metal, or shape…"
              className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink/35 tracking-wide"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange("")}
                aria-label="Clear"
                className="shrink-0 text-ink/40 hover:text-ink transition-colors"
              >
                <CloseIcon className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* ── Mobile nav drawer ── */}
      <div className={`fixed inset-0 z-[9999] lg:hidden ${mobileOpen ? "" : "pointer-events-none"}`}>
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-ink/60 backdrop-blur-sm transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Panel */}
        <div className={`absolute left-0 top-0 h-full w-4/5 max-w-xs bg-cream shadow-2xl transition-transform duration-300 flex flex-col ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}>

          {/* Panel header */}
          <div className="flex items-center justify-between border-b border-mist px-5 py-5">
            <span className="font-serif text-2xl tracking-[0.25em] text-ink">LUMIÈRE</span>
            <button onClick={() => setMobileOpen(false)} aria-label="Close" className="p-1.5 rounded-full hover:bg-sand">
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile search */}
          <div className="flex items-center gap-3 border-b border-mist px-5 py-3 bg-sand/40">
            <SearchIcon className="h-4 w-4 shrink-0 text-gold" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search rings…"
              className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink/40"
            />
            {searchQuery && (
              <button onClick={() => onSearchChange("")}>
                <CloseIcon className="h-4 w-4 text-ink/40" />
              </button>
            )}
          </div>

          {/* Nav links */}
          <nav className="flex flex-col overflow-y-auto px-5 py-2 flex-1">
            {nav.map((item) => (
              <a
                key={item}
                href="#collection"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between border-b border-mist/60 py-4 text-sm font-medium text-ink/80 hover:text-sapphire transition-colors"
              >
                {item}
                <span className="text-ink/20">›</span>
              </a>
            ))}
          </nav>

          <div className="border-t border-mist px-5 py-5 bg-sand/30">
            <p className="text-2xs tracking-widest uppercase text-ink/40">Complimentary shipping &amp; lifetime warranty.</p>
          </div>
        </div>
      </div>
    </>
  );
}
