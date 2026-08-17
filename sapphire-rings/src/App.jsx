import { useState } from "react";
import { StoreProvider } from "./context/StoreContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Drawer from "./components/Drawer";
import UserPanel from "./components/UserPanel";

export default function App() {
  const [drawer, setDrawer] = useState(null); // "cart" | "wishlist" | null
  const [userOpen, setUserOpen] = useState(false);

  return (
    <StoreProvider>
      <Header
        onOpenCart={() => setDrawer("cart")}
        onOpenWishlist={() => setDrawer("wishlist")}
        onOpenUser={() => setUserOpen(true)}
      />
      <Home />
      <Footer />

      <Drawer open={drawer !== null} mode={drawer || "cart"} onClose={() => setDrawer(null)} />
      <UserPanel open={userOpen} onClose={() => setUserOpen(false)} />
    </StoreProvider>
  );
}
