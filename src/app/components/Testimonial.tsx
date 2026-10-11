import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const reviews = [
  {
    id: 1,
    name: "Sarah J.",
    text: "Absolutely delicious! The chocolate flavor is rich and creamy, just like I remember from my childhood. The natural ingredients really make a difference.",
    stars: 5,
  },
  {
    id: 2,
    name: "Michael R.",
    text: "Best ice cream in town! I love that they use real milk and fresh fruits. The texture is perfect, and it's not overly sweet. Highly recommended!",
    stars: 5,
  },
  {
    id: 3,
    name: "Emily T.",
    text: "A true delight for ice cream lovers. The variety of flavors is amazing, and you can taste the quality in every scoop. My family loves it!",
    stars: 5,
  }
];

export function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white py-20 font-['Roboto'] border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <div className="relative min-h-[300px] flex flex-col justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = offset.x; // swipe distance
                if (swipe < -50) {
                  setCurrentIndex((prev) => (prev + 1) % reviews.length);
                } else if (swipe > 50) {
                  setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
                }
              }}
            >
              <h3 className="text-2xl font-bold text-[#4c3026] mb-4 font-['Roboto_Serif']">
                {reviews[currentIndex].name}
              </h3>

              <p className="text-lg md:text-xl text-[#4c3026]/80 italic mb-8 leading-relaxed max-w-2xl px-4">
                "{reviews[currentIndex].text}"
              </p>

              <div className="flex justify-center gap-2 mb-8">
                {[...Array(reviews[currentIndex].stars)].map((_, i) => (
                  <Star key={i} size={24} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-8 z-10 relative">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                  ? 'bg-[#4c3026] scale-125'
                  : 'bg-[#4c3026]/30 hover:bg-[#4c3026]/50'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
