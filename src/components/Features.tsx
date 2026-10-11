'use client';

import React from 'react';
import { motion } from 'motion/react';

const img22 = '/assets/0d18466a4e4a1c4b2afa5e8bfc6fb457ef722520.png';

const features = [
  {
    title: "Made With Real Milk",
    desc: "We use fresh milk and real butterfat — no vegetable oils.",
    color: "bg-[#d4810d]"
  },
  {
    title: "Rich & Creamy Taste",
    desc: "Every scoop feels smooth, thick, and naturally delicious.",
    color: "bg-[#a1052e]"
  },
  {
    title: "Pure & Clean Ingredients",
    desc: "Only honest ingredients you can trust — nothing unnecessary added.",
    color: "bg-[#562914]"
  },
  {
    title: "Hygienically Prepared",
    desc: "Crafted in a clean, safe, and modern production setup.",
    color: "bg-[#719304]"
  },
  {
    title: "Wide Variety Of Flavours",
    desc: "From classics to unique favourites, there’s something for everyone.",
    color: "bg-[#1f19a0]"
  },
  {
    title: "Made With Love",
    desc: "Born from passion and nostalgia, every flavour carries genuine care.",
    color: "bg-[#327706]"
  }
];

export function Features() {
  return (
    <div className="bg-white py-24 font-['Roboto'] relative z-0">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-medium text-center text-[#2c260f] font-['Roboto_Serif'] mb-16">
          What Make Us Special
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative ${feature.color} w-full max-w-sm h-80 rounded-[25px] shadow-lg overflow-hidden flex flex-col pt-8 px-6 text-white`}
            >
              <h3 className="text-2xl font-semibold mb-4 z-10 relative">
                {feature.title}
              </h3>
              <p className="text-lg opacity-90 z-10 relative">
                {feature.desc}
              </p>

              {/* Milk Splash Image */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 z-0">
                <img
                  src={img22}
                  alt="Milk Splash"
                  className="w-full h-full object-cover object-bottom opacity-90"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
