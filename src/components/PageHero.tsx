'use client';

import { motion } from 'motion/react';
import { Header } from './Header';

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <div className="relative w-full bg-gradient-to-br from-[#1a0503] via-[#2a0d08] to-[#4c1a0f] overflow-hidden">
      <Header />

      {/* Decorative drip shape at the bottom */}
      <svg
        className="absolute left-0 right-0 bottom-0 w-full h-16 md:h-20"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1281 120"
      >
        <path
          d="M0 20V120H1281V20C1281 5 1192.5 -15 1168.5 15C1144.25 45 1180.01 68 1066.5 80C991.5 88 948.5 20 876 20C807.672 20 934.427 78 712.5 44C653.5 35 688.5 92 653.5 92C578.555 92 492.133 23 426 35C366.416 46 404.757 79 340 86C264.267 94 184 34 145.5 56C89.4056 90 0 -4 0 20Z"
          fill="white"
        />
      </svg>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-36 pb-24 md:pt-44 md:pb-28">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="font-['Roboto_Serif',serif] font-bold text-white text-4xl sm:text-5xl md:text-6xl drop-shadow-lg"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="mt-4 max-w-xl font-['Roboto',sans-serif] text-white/80 text-base md:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}
