# Lumière — Sapphire Engagement Rings (React Demo)

A responsive storefront demo inspired by the layout of a sapphire engagement-ring
listing page. Built with React + Vite + Tailwind CSS. All copy, branding, and
illustrations are original placeholders for portfolio/demo use only — not
affiliated with any real jeweler.

## Features
- Responsive layout (mobile → desktop) with a hamburger menu on small screens
- Category filtering + price sorting
- Add to cart with quantity controls and slide-in cart drawer
- Wishlist with badge count and its own drawer
- Demo user sign-in / sign-out panel
- Hand-drawn SVG ring illustrations (no external image assets)
- Global state via React Context + useReducer

## Getting started
```bash
npm install
npm run dev      # start dev server
npm run build    # production build
npm run preview  # preview the build
```

## Structure
```
src/
  components/   Header, Footer, Drawer, UserPanel, ProductCard, RingArt, icons
  context/      StoreContext (cart, wishlist, user)
  data/         products.js (demo catalog)
  pages/        Home.jsx (hero, categories, filters, grid)
  App.jsx       shell wiring
```
