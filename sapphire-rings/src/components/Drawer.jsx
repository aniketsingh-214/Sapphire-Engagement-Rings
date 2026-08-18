import { useStore } from "../context/StoreContext";
import { CloseIcon, HeartIcon } from "./icons";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function Drawer({ open, onClose, mode }) {
  const { cart, wishlist, cartTotal, removeFromCart, setQty, toggleWishlist, addToCart } = useStore();
  const isCart = mode === "cart";
  const items = isCart ? cart : wishlist;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[9990] bg-ink/50 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Panel */}
      <aside
        className={`fixed right-0 top-0 z-[9995] flex h-full w-full sm:max-w-md flex-col bg-cream shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        {/* Header */}
        <header className="flex items-center justify-between border-b border-mist px-5 py-5 sm:px-6">
          <div>
            <h2 className="font-serif text-2xl text-ink">{isCart ? "Your Bag" : "Saved Rings"}</h2>
            {items.length > 0 && (
              <p className="text-xs text-ink/40 mt-0.5">
                {items.length} {items.length === 1 ? "item" : "items"}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-2 rounded-full hover:bg-sand transition-colors"
          >
            <CloseIcon className="h-5 w-5 text-ink/60" />
          </button>
        </header>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <div className="mb-4 text-4xl">{isCart ? "🛍️" : "💎"}</div>
              <p className="font-serif text-xl text-ink/40">
                {isCart ? "Your bag is empty" : "No saved rings yet"}
              </p>
              <p className="mt-2 text-sm text-ink/30">
                {isCart ? "Add a ring you love to get started." : "Heart a ring to save it here."}
              </p>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4 rounded-xl bg-sand/40 p-3">
                  {/* Image */}
                  <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-mist">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-base leading-tight text-ink">{item.name}</h3>
                    <p className="mt-0.5 text-2xs uppercase tracking-wider text-ink/45">{item.metal}</p>
                    <div className="mt-1.5 flex items-center justify-between">
                      <p className="text-base font-semibold text-ink">
                        ${item.price.toLocaleString()}
                      </p>
                      {isCart && item.qty > 1 && (
                        <p className="text-2xs text-ink/40">
                          ${(item.price * item.qty).toLocaleString()} total
                        </p>
                      )}
                    </div>

                    {isCart ? (
                      <div className="mt-2.5 flex items-center justify-between">
                        {/* Qty pill */}
                        <div className="flex items-center rounded-full border border-mist bg-white overflow-hidden">
                          <button
                            className="px-3 py-1 text-sm text-ink/60 hover:text-ink transition-colors"
                            onClick={() => setQty(item.id, item.qty - 1)}
                            aria-label="Decrease"
                          >
                            −
                          </button>
                          <span className="px-2 text-sm font-medium text-ink min-w-[1.5rem] text-center">
                            {item.qty}
                          </span>
                          <button
                            className="px-3 py-1 text-sm text-ink/60 hover:text-ink transition-colors"
                            onClick={() => setQty(item.id, item.qty + 1)}
                            aria-label="Increase"
                          >
                            +
                          </button>
                        </div>
                        <button
                          className="text-2xs text-ink/40 hover:text-red-500 underline transition-colors"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    ) : (
                      <div className="mt-2.5 flex items-center gap-3">
                        <button
                          className="text-xs font-medium text-sapphire hover:underline"
                          onClick={() => { addToCart(item); }}
                        >
                          Add to Bag
                        </button>
                        <button
                          className="flex items-center gap-1 text-2xs text-ink/40 hover:text-red-400 transition-colors"
                          onClick={() => toggleWishlist(item)}
                        >
                          <HeartIcon filled className="h-3 w-3" />
                          Remove
                        </button>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer — cart only */}
        {isCart && cart.length > 0 && (
          <footer className="border-t border-mist bg-cream px-5 py-5 sm:px-6">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-sm text-ink/60">Subtotal</span>
              <span className="text-xl font-semibold text-ink">${cartTotal.toLocaleString()}</span>
            </div>
            <p className="mb-4 text-2xs text-ink/40">Taxes and shipping calculated at checkout.</p>
            <button className="flex w-full items-center justify-center gap-2 rounded-full bg-sapphire py-3.5 text-sm font-medium tracking-wide text-white transition-all duration-200 hover:bg-sapphireDark">
              Proceed to Checkout
              <ArrowIcon />
            </button>
            <button
              onClick={onClose}
              className="mt-2.5 w-full text-center text-xs text-ink/40 hover:text-ink transition-colors py-1"
            >
              Continue Shopping
            </button>
          </footer>
        )}
      </aside>
    </>
  );
}
