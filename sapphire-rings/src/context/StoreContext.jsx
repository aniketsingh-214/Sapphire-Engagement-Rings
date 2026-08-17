import { createContext, useContext, useMemo, useReducer } from "react";

const StoreContext = createContext(null);

const initial = { cart: [], wishlist: [], user: null };

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existing = state.cart.find((i) => i.id === action.product.id);
      const cart = existing
        ? state.cart.map((i) =>
            i.id === action.product.id ? { ...i, qty: i.qty + 1 } : i
          )
        : [...state.cart, { ...action.product, qty: 1 }];
      return { ...state, cart };
    }
    case "REMOVE_FROM_CART":
      return { ...state, cart: state.cart.filter((i) => i.id !== action.id) };
    case "SET_QTY":
      return {
        ...state,
        cart: state.cart
          .map((i) => (i.id === action.id ? { ...i, qty: Math.max(1, action.qty) } : i))
          .filter((i) => i.qty > 0),
      };
    case "TOGGLE_WISHLIST": {
      const exists = state.wishlist.some((i) => i.id === action.product.id);
      const wishlist = exists
        ? state.wishlist.filter((i) => i.id !== action.product.id)
        : [...state.wishlist, action.product];
      return { ...state, wishlist };
    }
    case "LOGIN":
      return { ...state, user: action.user };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initial);

  const value = useMemo(() => {
    const cartCount = state.cart.reduce((n, i) => n + i.qty, 0);
    const cartTotal = state.cart.reduce((n, i) => n + i.qty * i.price, 0);
    return {
      ...state,
      cartCount,
      cartTotal,
      addToCart: (product) => dispatch({ type: "ADD_TO_CART", product }),
      removeFromCart: (id) => dispatch({ type: "REMOVE_FROM_CART", id }),
      setQty: (id, qty) => dispatch({ type: "SET_QTY", id, qty }),
      toggleWishlist: (product) => dispatch({ type: "TOGGLE_WISHLIST", product }),
      isWishlisted: (id) => state.wishlist.some((i) => i.id === id),
      login: (user) => dispatch({ type: "LOGIN", user }),
      logout: () => dispatch({ type: "LOGOUT" }),
    };
  }, [state]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
}
