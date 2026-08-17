// Demo product catalog. All copy and imagery are original placeholders.

export const categories = [
  { id: "solitaire", label: "Solitaire" },
  { id: "accents", label: "Accents" },
  { id: "three-stone", label: "Three Stone" },
  { id: "hidden-halo", label: "Hidden Halo" },
  { id: "nature", label: "Nature Inspired" },
  { id: "yellow-gold", label: "Yellow Gold" },
  { id: "white-gold", label: "White Gold" },
  { id: "halo", label: "Halo" },
];

const names = [
  "Aurelia", "Marlowe", "Seraphine", "Odette", "Cassia", "Vivienne",
  "Isadora", "Lucienne", "Ophelia", "Rosalind", "Beatrix", "Celeste",
  "Delphine", "Elowen", "Fiora", "Genevieve", "Halcyon", "Iridessa",
  "Juniper", "Katriel", "Liora", "Mirabel", "Noor", "Opaline",
];

const metals = ["18K Yellow Gold", "18K White Gold", "Platinum", "18K Rose Gold"];
const shapes = ["Round", "Oval", "Cushion", "Pear", "Emerald"];

function seeded(i) {
  const cat = categories[i % categories.length];
  const price = 1200 + ((i * 137) % 40) * 90;
  return {
    id: `ring-${i + 1}`,
    name: `The ${names[i % names.length]} ${cat.label} Ring`,
    category: cat.id,
    metal: metals[i % metals.length],
    shape: shapes[i % shapes.length],
    price,
    carat: (0.5 + ((i * 3) % 20) / 10).toFixed(2),
    hue: 210 + (i % 6) * 6, // sapphire blues
  };
}

export const products = Array.from({ length: 24 }, (_, i) => seeded(i));
