import { useMemo, useState } from "react";
import { products, categories } from "../data/products";
import ProductCard from "../components/ProductCard";
import RingArt from "../components/RingArt";

export default function Home() {
  const [activeCat, setActiveCat] = useState("all");
  const [sort, setSort] = useState("featured");

  const visible = useMemo(() => {
    let list = activeCat === "all" ? products : products.filter((p) => p.category === activeCat);
    if (sort === "low") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [activeCat, sort]);

  return (
    <main>
      {/* Hero */}
      <section className="border-b border-ink/10 bg-sand/30 px-4 py-10 text-center sm:py-16 md:py-20">
        <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-sapphire sm:mb-3 sm:text-xs">The Sapphire Edit</p>
        <h1 className="mx-auto max-w-3xl font-serif text-2xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Sapphire Engagement Rings
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-xs text-ink/60 sm:mt-5 sm:text-sm md:text-base">
          The deep blue stone of steadfastness and quiet confidence, set by hand
          in recycled gold and platinum.
        </p>
      </section>

      {/* Category strip */}
      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="flex gap-3 overflow-x-auto pb-2 sm:gap-6 sm:justify-center">
          <CategoryTile label="All Styles" active={activeCat === "all"} onClick={() => setActiveCat("all")} hue={216} />
          {categories.map((c) => (
            <CategoryTile
              key={c.id}
              label={c.label}
              active={activeCat === c.id}
              onClick={() => setActiveCat(c.id)}
              hue={210 + (c.label.length % 6) * 6}
            />
          ))}
        </div>
      </section>

      {/* Filter bar */}
      <section id="collection" className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-y border-ink/10 py-3 sm:py-4">
          <p className="text-xs text-ink/60 sm:text-sm">{visible.length} Results</p>
          <label className="flex items-center gap-1.5 text-xs sm:gap-2 sm:text-sm">
            <span className="text-ink/60">Sort</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-ink/20 bg-cream px-2 py-1 text-xs focus:border-sapphire focus:outline-none sm:px-3 sm:py-1.5 sm:text-sm"
            >
              <option value="featured">Featured</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </label>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </main>
  );
}

function CategoryTile({ label, active, onClick, hue }) {
  return (
    <button onClick={onClick} className="flex shrink-0 flex-col items-center gap-1.5 sm:gap-2">
      <span className={`flex h-14 w-14 items-center justify-center rounded-full transition sm:h-20 sm:w-20 ${active ? "bg-sapphire/10 ring-2 ring-sapphire" : "bg-sand/50"}`}>
        <RingArt hue={hue} className="h-10 w-10 sm:h-14 sm:w-14" />
      </span>
      <span className={`whitespace-nowrap text-[10px] tracking-wide sm:text-xs ${active ? "text-sapphire" : "text-ink/70"}`}>{label}</span>
    </button>
  );
}
