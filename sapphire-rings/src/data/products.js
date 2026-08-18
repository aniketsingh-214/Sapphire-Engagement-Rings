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

// Map index (0-based) to the actual filenames in public/ring_images/
const imageFiles = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg",
  "image6.jpg",
  "image7.jpg",
  "image8.jpg",
  "image9.jpg",
  "image10.jpg",
  "image11.jpg",
  "image12.jpg",
  "image13.jpg",
  "image14.jpg",
  "image15.jpg",
  "image16.jpg",
  "image17.jpg",
  "image18.jpg",
  "image19.jpg",
  "image20.jpg",
  "image21.jpg",
  "image22.jpg",
  "image23.jpg",
  "image24.jpg",
];

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
    image: `/ring_images/${imageFiles[i]}`,
  };
}

export const products = Array.from({ length: 24 }, (_, i) => seeded(i));
