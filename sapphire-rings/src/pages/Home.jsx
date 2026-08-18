import { useMemo, useState } from "react";
import { products, categories } from "../data/products";
import ProductCard from "../components/ProductCard";

// Representative image per category
const categoryImages = [
  "/ring_images/image1.jpg",
  "/ring_images/image3.jpg",
  "/ring_images/image5.jpg",
  "/ring_images/image7.jpg",
  "/ring_images/image9.jpg",
  "/ring_images/image11.jpg",
  "/ring_images/image13.jpg",
  "/ring_images/image15.jpg",
];

const metalFilters = ["All", "18K Yellow Gold", "18K White Gold", "Platinum", "18K Rose Gold"];

export default function Home({ searchQuery = "" }) {
  const [activeCat, setActiveCat] = useState("all");
  const [sort, setSort] = useState("featured");
  const [activeMetal, setActiveMetal] = useState("All");

  const visible = useMemo(() => {
    let list = activeCat === "all" ? products : products.filter((p) => p.category === activeCat);
    if (activeMetal !== "All") list = list.filter((p) => p.metal === activeMetal);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.metal.toLowerCase().includes(q) ||
          p.shape.toLowerCase().includes(q)
      );
    }
    if (sort === "low")  list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [activeCat, sort, searchQuery, activeMetal]);

  return (
    <main>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/ring_images/image14.jpg"
            alt="Sapphire engagement ring"
            className="h-full w-full object-cover object-center transition-transform duration-500 lg:scale-95"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/60 to-ink/30" />
        </div>

        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-6 py-12 sm:py-16 md:py-20 lg:py-24">
          <p className="mb-3 text-2xs uppercase tracking-[0.35em] text-gold font-medium sm:text-xs">
            The Sapphire Edit
          </p>
          <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl max-w-2xl">
            Sapphire<br />Engagement<br />Rings
          </h1>
          <p className="mt-5 max-w-lg text-sm text-white/70 leading-relaxed sm:text-base md:text-lg">
            The deep blue stone of steadfastness and quiet confidence, set by hand in recycled gold and platinum.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#collection"
              className="inline-flex items-center gap-2 rounded-full border border-gold/80 bg-gold/10 px-7 py-3 text-sm font-medium tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:bg-gold hover:text-ink hover:border-gold"
            >
              Explore the Collection
              <span className="text-base">→</span>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3 text-sm font-medium tracking-wide text-white/80 backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:text-white"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section className="border-y border-mist bg-sand">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-6 px-4 py-4 sm:gap-12 sm:py-5">
          {[
            { icon: "🚚", text: "Free Shipping" },
            { icon: "🔄", text: "30-Day Returns" },
            { icon: "💎", text: "Certified Gems" },
            { icon: "🛡️", text: "Lifetime Warranty" },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-ink/70">
              <span className="text-base">{icon}</span>
              <span className="text-xs font-medium tracking-wide">{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Category strip ── */}
      <section className="mx-auto max-w-7xl px-4 pt-10 pb-4 sm:px-6 sm:pt-14">
        <div className="flex gap-4 overflow-x-auto pb-3 sm:gap-6 sm:justify-center scrollbar-hide">
          <CategoryTile
            label="All Styles"
            active={activeCat === "all"}
            onClick={() => setActiveCat("all")}
            image="/ring_images/image2.jpg"
          />
          {categories.map((c, i) => (
            <CategoryTile
              key={c.id}
              label={c.label}
              active={activeCat === c.id}
              onClick={() => setActiveCat(c.id)}
              image={categoryImages[i % categoryImages.length]}
            />
          ))}
        </div>
      </section>

      {/* ── Filter bar ── */}
      <section id="collection" className="mx-auto max-w-7xl px-4 sm:px-6 py-4">
        {/* Metal chips */}
        <div className="flex flex-wrap gap-2 mb-4">
          {metalFilters.map((m) => (
            <button
              key={m}
              onClick={() => setActiveMetal(m)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium tracking-wide border transition-all duration-200 ${
                activeMetal === m
                  ? "bg-ink text-cream border-ink"
                  : "border-mist text-ink/60 hover:border-ink/40 hover:text-ink"
              }`}
            >
              {m === "18K Yellow Gold" ? "Yellow Gold"
               : m === "18K White Gold" ? "White Gold"
               : m === "18K Rose Gold" ? "Rose Gold"
               : m}
            </button>
          ))}
        </div>

        {/* Sort + count bar */}
        <div className="flex items-center justify-between border-y border-mist py-3">
          <p className="text-sm font-medium text-ink">
            {visible.length} <span className="text-ink/50 font-normal">
              {visible.length === 1 ? "result" : "results"}
            </span>
          </p>
          <label className="flex items-center gap-2 text-sm">
            <span className="text-ink/50">Sort by</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border-0 bg-transparent text-sm font-medium text-ink outline-none cursor-pointer focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </label>
        </div>
      </section>

      {/* ── Product grid ── */}
      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10">
        {visible.length === 0 ? (
          <div className="flex flex-col items-center py-24 text-center">
            <p className="font-serif text-3xl text-ink/30">No rings found</p>
            <p className="mt-3 text-sm text-ink/25">Try a different search term or browse all styles.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
            {visible.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        )}
      </section>

    </main>
  );
}

function CategoryTile({ label, active, onClick, image }) {
  return (
    <button
      onClick={onClick}
      className="flex shrink-0 flex-col items-center gap-2 group"
    >
      <span
        className={`block overflow-hidden rounded-full transition-all duration-300 h-16 w-16 sm:h-20 sm:w-20 group-hover:scale-105 ${
          active
            ? "ring-2 ring-sapphire ring-offset-3 shadow-md"
            : "ring-1 ring-mist hover:ring-gold/50"
        }`}
      >
        <img src={image} alt={label} className="h-full w-full object-cover" />
      </span>
      <span
        className={`whitespace-nowrap text-xs tracking-wide transition-colors ${
          active ? "font-semibold text-sapphire" : "text-ink/60 group-hover:text-ink"
        }`}
      >
        {label}
      </span>
    </button>
  );
}
