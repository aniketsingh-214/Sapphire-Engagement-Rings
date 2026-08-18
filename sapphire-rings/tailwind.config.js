/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink:           "#0f1a1a",
        sapphire:      "#1e3a8a",
        sapphireLight: "#3b5fc0",
        sapphireDark:  "#142766",
        gold:          "#b8962e",
        goldLight:     "#d4b04a",
        cream:         "#faf8f4",
        sand:          "#f0ebe1",
        mist:          "#e8e3da",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans:  ['"DM Sans"', "system-ui", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.65rem", { lineHeight: "1rem" }],
      },
      boxShadow: {
        card:     "0 1px 4px rgba(15,26,26,0.06), 0 4px 16px rgba(15,26,26,0.08)",
        "card-hover": "0 4px 12px rgba(15,26,26,0.10), 0 12px 32px rgba(15,26,26,0.12)",
        drawer:   "−8px 0 40px rgba(15,26,26,0.18)",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
    },
  },
  plugins: [],
};
