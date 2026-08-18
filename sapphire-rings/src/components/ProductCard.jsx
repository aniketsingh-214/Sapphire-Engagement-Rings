import { useStore } from "../context/StoreContext";
import { HeartIcon } from "./icons";

function BagIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M6 8h12l-1 12H7L6 8z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}

export default function ProductCard({ product, index = 0 }) {
  const { addToCart, toggleWishlist, isWishlisted } = useStore();
  const wished = isWishlisted(product.id);

  return (
    <div
      className="group relative flex flex-col rounded-xl bg-white overflow-hidden border border-mist hover:border-gold/30 shadow-card hover:shadow-card-hover transition-all duration-300 card-enter"
      style={{ animationDelay: `${index * 40}ms` }}
    >
      {/* Gold top accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

      {/* ── Image area ── */}
      <div className="relative overflow-hidden aspect-square bg-sand/30">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover scale-110 transition-transform duration-700 ease-out group-hover:scale-125"
        />

        {/* Carat badge */}
        <span className="absolute left-2 top-2 rounded-full bg-ink/65 px-2 py-0.5 text-2xs font-medium tracking-wide text-white backdrop-blur-sm">
          {product.carat} ct
        </span>

        {/* Wishlist button */}
        <button
          onClick={() => toggleWishlist(product)}
          aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
          className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-200 hover:bg-white hover:scale-110"
        >
          <HeartIcon filled={wished} className="h-3.5 w-3.5" />
        </button>

        {/* Quick view overlay */}
        <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pb-3">
          <span className="text-2xs tracking-[0.2em] uppercase text-white font-medium">Quick View</span>
        </div>
      </div>

      {/* ── Info area ── */}
      <div className="flex flex-1 flex-col px-2.5 pb-2.5 pt-2.5 sm:px-3 sm:pb-3">
        {/* Metal + shape */}
        <p className="text-2xs uppercase tracking-[0.12em] text-ink/40 font-medium">
          {product.metal} · {product.shape}
        </p>

        {/* Name */}
        <h3 className="mt-0.5 font-serif text-xs leading-snug text-ink sm:text-sm">
          {product.name}
        </h3>

        {/* Price */}
        <p className="mt-1 text-sm font-semibold text-ink sm:text-base">
          ${product.price.toLocaleString()}
        </p>

        {/* Add to cart */}
        <button
          onClick={() => addToCart(product)}
          className="mt-2 flex w-full items-center justify-center gap-1.5 rounded-full bg-ink py-1.5 text-2xs font-medium tracking-wide text-cream transition-all duration-200 hover:bg-sapphire sm:py-2 sm:text-xs"
        >
          <BagIcon className="h-3 w-3" />
          Add to Bag
        </button>
      </div>
    </div>
  );
}
