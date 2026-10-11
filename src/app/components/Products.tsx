import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star } from 'lucide-react';

type Format = 'cone' | 'bar' | 'cup';

interface Product {
  id: number;
  name: string;
  rating: number;
  desc: string;
  slug: string;
  format: Format;
}

const formats: { id: 'all' | Format; label: string; color: string }[] = [
  { id: 'all', label: 'All Flavours', color: 'bg-[#3a2317]' },
  { id: 'cone', label: 'Cones', color: 'bg-[#ff7a90]' },
  { id: 'bar', label: 'Candy Bars', color: 'bg-[#4c3026]' },
  { id: 'cup', label: 'Cups', color: 'bg-[#447fcc]' },
];

const formatMeta: Record<Format, { label: string; note: string }> = {
  cone: { label: 'Cone', note: '120 ml' },
  bar: { label: 'Candy Bar', note: 'Stick' },
  cup: { label: 'Cup', note: '100 ml' },
};

function productImage(slug: string) {
  return `/products/transparent/${slug}.png`;
}

const products: Product[] = [
  // Cones
  { id: 1, name: 'Belgian Chocolate', rating: 4.8, desc: 'Rich Belgian chocolate chunks folded into every creamy scoop.', slug: 'belgian-chocolate-cone', format: 'cone' },
  { id: 2, name: 'Butter Scotch', rating: 4.6, desc: 'Buttery caramel swirls with a golden scotch crunch.', slug: 'butter-scotch-cone', format: 'cone' },
  { id: 3, name: 'French Vanilla', rating: 4.5, desc: 'Classic Madagascar vanilla, smooth and comforting.', slug: 'french-vanilla-cone', format: 'cone' },

  // Candy bars
  { id: 4, name: 'Salted Caramel', rating: 4.6, desc: 'Sweet caramel with a kiss of sea salt.', slug: 'salted-caramel-bar', format: 'bar' },
  { id: 5, name: 'Fig & Honey', rating: 4.4, desc: 'Crafted for a sweeter tomorrow — fig and golden honey.', slug: 'fig-honey-bar', format: 'bar' },
  { id: 6, name: 'Bounty', rating: 4.7, desc: 'Coconut bliss in a creamy chocolate twist.', slug: 'bounty-bar', format: 'bar' },
  { id: 7, name: 'Munch', rating: 4.5, desc: 'Crunchy wafer chocolate delight in every scoop.', slug: 'munch-bar', format: 'bar' },
  { id: 8, name: 'Oreo', rating: 4.8, desc: 'Cookies & cream loaded with crushed Oreo bits.', slug: 'oreo-bar', format: 'bar' },
  { id: 9, name: 'KitKat', rating: 4.7, desc: 'Crispy wafer fingers dipped in chocolate cream.', slug: 'kitkat-bar', format: 'bar' },
  { id: 10, name: 'Gulab Jamun', rating: 4.5, desc: 'A desi favourite, soaked in rose-scented syrup swirls.', slug: 'gulab-jamun-bar', format: 'bar' },
  { id: 11, name: 'Nutella', rating: 4.9, desc: 'Hazelnut chocolate bliss in every bite.', slug: 'nutella-bar', format: 'bar' },
  { id: 12, name: 'Delight', rating: 4.3, desc: 'A smooth, classic treat for every mood.', slug: 'delight-bar', format: 'bar' },
  { id: 13, name: 'Coffee', rating: 4.5, desc: 'Rich coffee taste in every scoop.', slug: 'coffee-bar', format: 'bar' },
  { id: 14, name: 'Dates & Nuts', rating: 4.4, desc: 'Wholesome dates and crunchy nuts in creamy harmony.', slug: 'dates-nuts-bar', format: 'bar' },
  { id: 15, name: 'Bubble Gum', rating: 4.3, desc: 'Playful, fruity and bursting with bubble gum fun.', slug: 'bubble-gum-bar', format: 'bar' },
  { id: 16, name: 'Snickers', rating: 4.8, desc: 'Peanuts, caramel and chocolate in every bite.', slug: 'snickers-bar', format: 'bar' },
  { id: 17, name: 'Guava Chilli', rating: 4.2, desc: 'Tangy guava with a spicy chilli kick.', slug: 'guava-chilli-bar', format: 'bar' },
  { id: 18, name: 'Lotus Biscoff', rating: 4.8, desc: 'Caramelised Biscoff cookie swirled through and through.', slug: 'lotus-biscoff-bar', format: 'bar' },
  { id: 19, name: 'Cherry', rating: 4.4, desc: 'Juicy cherry bursts in a creamy embrace.', slug: 'cherry-bar', format: 'bar' },
  { id: 20, name: 'Pistachio Kunafa', rating: 4.7, desc: 'Toasted pistachio meets crispy kunafa threads.', slug: 'pistachio-kunafa-bar', format: 'bar' },
  { id: 21, name: 'Avocado', rating: 4.2, desc: 'Creamy avocado goodness, subtly sweet.', slug: 'avocado-bar', format: 'bar' },
  { id: 22, name: 'Tooti Fruity', rating: 4.3, desc: 'A colourful medley of candied fruit bits.', slug: 'tooti-fruity-bar', format: 'bar' },
  { id: 23, name: 'Fig', rating: 4.3, desc: 'Delicate fig sweetness in a silky scoop.', slug: 'fig-bar', format: 'bar' },
  { id: 24, name: 'Pistachio', rating: 4.6, desc: 'Roasted pistachio richness in every bite.', slug: 'pistachio-bar', format: 'bar' },
  { id: 25, name: 'Shamam', rating: 4.3, desc: 'An exotic date-infused creamy delight.', slug: 'shamam-bar', format: 'bar' },
  { id: 26, name: 'Butterscotch', rating: 4.6, desc: 'Golden butterscotch chips in a buttery swirl.', slug: 'butterscotch-bar', format: 'bar' },
  { id: 27, name: 'Chikoo', rating: 4.2, desc: 'Naturally sweet chikoo, straight from the orchard.', slug: 'chikoo-bar', format: 'bar' },
  { id: 28, name: 'Banoffee', rating: 4.5, desc: 'Banana, toffee and cream — a British classic.', slug: 'banoffee-bar', format: 'bar' },
  { id: 29, name: 'Biryani Flavour', rating: 4.0, desc: 'A bold, spiced surprise for the adventurous.', slug: 'biryani-bar', format: 'bar' },
  { id: 30, name: 'Malai Kulfi', rating: 4.7, desc: 'Traditional malai kulfi, slow-churned and creamy.', slug: 'malai-kulfi-bar', format: 'bar' },
  { id: 31, name: 'Banana', rating: 4.3, desc: 'Fresh banana flavour in a smooth, creamy base.', slug: 'banana-bar', format: 'bar' },
  { id: 32, name: 'Mango', rating: 4.6, desc: 'Sun-ripened mango, bursting with summer flavour.', slug: 'mango-bar', format: 'bar' },
  { id: 33, name: 'Laddu', rating: 4.4, desc: 'Festive laddu flavour rolled into every bite.', slug: 'laddu-bar', format: 'bar' },
  { id: 34, name: 'Jackfruit', rating: 4.3, desc: 'Tropical jackfruit sweetness, naturally fragrant.', slug: 'jackfruit-bar', format: 'bar' },
  { id: 35, name: 'Strawberry', rating: 4.6, desc: 'Fresh strawberry chunks in a luscious, creamy base.', slug: 'strawberry-bar', format: 'bar' },
  { id: 36, name: 'Blueberry', rating: 4.3, desc: 'A refreshing burst of cool, hydrating sweetness.', slug: 'blueberry-bar', format: 'bar' },
  { id: 37, name: 'Tender Coconut', rating: 4.5, desc: 'Real tender coconut bits in creamy delight.', slug: 'tender-coconut-bar', format: 'bar' },

  // Cups
  { id: 38, name: 'Mango', rating: 4.7, desc: 'Rich & creamy mango ice cream with real fruit goodness.', slug: 'mango-cup', format: 'cup' },
  { id: 39, name: 'Jackfruit', rating: 4.4, desc: 'Tropical jackfruit, rich and creamy in every spoon.', slug: 'jackfruit-cup', format: 'cup' },
  { id: 40, name: 'Vanilla', rating: 4.5, desc: 'Classic vanilla, rich and creamy, made for scooping.', slug: 'vanilla-cup', format: 'cup' },
  { id: 41, name: 'Chocolate', rating: 4.7, desc: 'Deep, rich chocolate ice cream in a convenient tub.', slug: 'chocolate-cup', format: 'cup' },
  { id: 42, name: 'Lotus Biscoff', rating: 4.8, desc: 'Creamy Biscoff swirls, scoopable and rich.', slug: 'lotus-biscoff-cup', format: 'cup' },
  { id: 43, name: 'Tender Coconut', rating: 4.5, desc: 'Real tender coconut, rich and creamy in a tub.', slug: 'tender-coconut-cup', format: 'cup' },
];

export function Products() {
  const [activeFormat, setActiveFormat] = useState<'all' | Format>('all');

  const displayProducts = activeFormat === 'all' ? products : products.filter((p) => p.format === activeFormat);

  return (
    <div className="bg-gradient-to-b from-white via-[#fff8f6] to-white py-24 font-['Roboto']">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-medium text-center text-[#2a1710] font-['Roboto_Serif'] mb-4">
          Our Products
        </h2>
        <p className="text-center text-gray-500 max-w-md mx-auto mb-12">
          Every stick, cone and cup made with real fruit, real cream and real happiness.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {formats.map((fmt) => (
            <button
              key={fmt.id}
              onClick={() => setActiveFormat(fmt.id)}
              className={`px-8 py-3 rounded-full text-white font-medium text-lg transition-transform hover:scale-105 ${fmt.color} ${activeFormat === fmt.id ? 'ring-4 ring-offset-2 ring-gray-200' : 'opacity-80 hover:opacity-100'}`}
            >
              {fmt.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          <AnimatePresence mode="popLayout">
            {displayProducts.length > 0 ? (
              displayProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative flex flex-col items-center rounded-3xl bg-white/80 border border-black/5 shadow-sm hover:shadow-xl transition-shadow duration-300 p-5 md:p-6"
                >
                  {/* Format badge */}
                  <span className="absolute top-4 left-4 text-[11px] font-semibold uppercase tracking-wide text-[#a9674f] bg-[#fdeee9] px-2.5 py-1 rounded-full">
                    {formatMeta[product.format].label}
                  </span>

                  <div className="relative w-full aspect-[4/5] mb-4 flex items-end justify-center">
                    {/* Soft puddle shadow */}
                    <div className="absolute bottom-2 w-2/3 h-5 bg-[#ff7a90]/15 blur-xl rounded-full transition-all duration-300 group-hover:w-3/4 group-hover:bg-[#ff7a90]/25" />

                    <img
                      src={productImage(product.slug)}
                      alt={product.name}
                      loading="lazy"
                      className="relative w-full h-full object-contain drop-shadow-xl transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-1.5 flex-wrap">
                      <h3 className="text-lg md:text-xl font-bold text-[#2a1710] font-['Roboto_Serif']">
                        {product.name}
                      </h3>
                      <div className="flex items-center bg-amber-50 px-1.5 py-0.5 rounded text-xs font-bold text-amber-800">
                        {product.rating.toFixed(1)} <Star size={11} className="ml-0.5 fill-amber-400 text-amber-400" />
                      </div>
                    </div>
                    <p className="text-xs md:text-sm text-gray-500 max-w-[200px] mx-auto leading-snug">
                      {product.desc}
                    </p>
                    <p className="mt-2 text-[11px] text-gray-400">{formatMeta[product.format].note}</p>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center text-gray-400 py-12">No products found in this category.</div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
