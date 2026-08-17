import RingArt from "./RingArt";
import { useStore } from "../context/StoreContext";
import { CloseIcon, HeartIcon } from "./icons";

export default function Drawer({ open, onClose, mode }) {
  const { cart, wishlist, cartTotal, removeFromCart, setQty, toggleWishlist, addToCart } = useStore();
  const isCart = mode === "cart";
  const items = isCart ? cart : wishlist;

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[9990] bg-black/50 transition-opacity ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
      />
      <aside
        className={`fixed right-0 top-0 z-[9995] flex h-full w-full sm:max-w-md flex-col bg-cream shadow-xl transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
        aria-hidden={!open}
      >
        <header className="flex items-center justify-between border-b border-ink/10 px-4 py-4 sm:px-6 sm:py-5">
          <h2 className="font-serif text-xl sm:text-2xl">{isCart ? "Your Bag" : "Wishlist"}</h2>
          <button onClick={onClose} aria-label="Close"><CloseIcon className="h-6 w-6" /></button>
        </header>

        <div className="flex-1 overflow-y-auto px-4 py-3 sm:px-6 sm:py-4">
          {items.length === 0 ? (
            <p className="mt-10 text-center text-ink/50">
              {isCart ? "Your bag is empty." : "No saved rings yet."}
            </p>
          ) : (
            <ul className="space-y-5">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4">
                  <div className="h-20 w-20 shrink-0 bg-sand/50">
                    <RingArt metal={item.metal} hue={item.hue} className="h-full w-full" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-base leading-tight">{item.name}</h3>
                    <p className="text-xs text-ink/50">{item.metal}</p>
                    <p className="mt-1 text-sm font-medium">${item.price.toLocaleString()}</p>

                    {isCart ? (
                      <div className="mt-2 flex items-center gap-3">
                        <div className="flex items-center border border-ink/20">
                          <button className="px-2 py-0.5" onClick={() => setQty(item.id, item.qty - 1)} aria-label="Decrease">−</button>
                          <span className="px-2 text-sm">{item.qty}</span>
                          <button className="px-2 py-0.5" onClick={() => setQty(item.id, item.qty + 1)} aria-label="Increase">+</button>
                        </div>
                        <button className="text-xs text-ink/50 underline" onClick={() => removeFromCart(item.id)}>Remove</button>
                      </div>
                    ) : (
                      <div className="mt-2 flex items-center gap-3">
                        <button className="text-xs underline" onClick={() => { addToCart(item); }}>Add to cart</button>
                        <button className="flex items-center gap-1 text-xs text-ink/50" onClick={() => toggleWishlist(item)}>
                          <HeartIcon filled className="h-3.5 w-3.5" /> Remove
                        </button>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {isCart && cart.length > 0 && (
          <footer className="border-t border-ink/10 px-6 py-5">
            <div className="flex justify-between text-base">
              <span>Subtotal</span>
              <span className="font-medium">${cartTotal.toLocaleString()}</span>
            </div>
            <p className="mt-1 text-xs text-ink/50">Free shipping and returns on every order.</p>
            <button className="mt-4 w-full rounded-full bg-ink py-3 text-sm font-medium tracking-wide text-cream transition hover:bg-sapphire">
              Checkout
            </button>
          </footer>
        )}
      </aside>
    </>
  );
}
