import RingArt from "./RingArt";
import { useStore } from "../context/StoreContext";
import { HeartIcon } from "./icons";

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, isWishlisted } = useStore();
  const wished = isWishlisted(product.id);

  return (
    <div className="group relative flex flex-col rounded-lg bg-white p-2.5 shadow-sm transition hover:shadow-md sm:p-4">
      <button
        onClick={() => toggleWishlist(product)}
        aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
        className="absolute right-2 top-2 z-10 rounded-full p-1 text-ink/60 transition hover:text-sapphire sm:right-3 sm:top-3 sm:p-1.5"
      >
        <HeartIcon filled={wished} className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>

      <div className="flex aspect-square items-center justify-center bg-sand/40">
        <RingArt metal={product.metal} hue={product.hue} className="h-24 w-24 transition group-hover:scale-105 sm:h-32 sm:w-32 md:h-40 md:w-40" />
      </div>

      <div className="mt-2 flex flex-1 flex-col sm:mt-4">
        <h3 className="font-serif text-sm leading-snug sm:text-base md:text-lg">{product.name}</h3>
        <p className="mt-0.5 text-[10px] uppercase tracking-wide text-ink/50 sm:mt-1 sm:text-xs">
          {product.metal} · {product.shape} · {product.carat} ct
        </p>
        <p className="mt-1 text-sm font-medium sm:mt-2 sm:text-base">${product.price.toLocaleString()}</p>

        <button
          onClick={() => addToCart(product)}
          className="mt-2 w-full rounded-full border border-ink py-1.5 text-[11px] font-medium tracking-wide transition hover:bg-ink hover:text-cream sm:mt-4 sm:py-2.5 sm:text-sm"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
