'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Header } from './Header';

const imgRectangle118 = '/assets/f066f67af1bbfd852439ebecd8ed8d2a16565d08.png';

export function Hero() {
  return (
    <div className="relative w-full bg-white text-white font-['Roboto']">
      {/* Filler to bridge the gap with the Header - Visible on mobile/tablet to prevent gaps */}
      <div className="h-12 md:h-16 lg:hidden bg-[#1a0503] w-full" />

      {/* Background Image - Overlapped with filler to prevent white lines */}
      <img
        src={imgRectangle118}
        alt="Background"
        className="w-full h-auto block -mt-1 relative z-0"
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10">
        <Header />

        {/* Hero Content */}
        <div className="flex flex-col justify-end h-full px-4 pt-24 md:pt-20 pb-8 md:pb-16 lg:pb-24">
          <div className="text-left px-2 md:px-16 lg:px-24 mb-6 md:mb-16 lg:mb-24">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-4xl lg:text-6xl font-bold font-['Roboto_Serif'] leading-tight drop-shadow-lg"
            >
              Share a Stick, <br /> Spread Happiness.
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-2 md:mt-4 text-xs md:text-lg lg:text-2xl text-white/90 font-light"
            >
              Taste the Purity, Every Scoop a Celebration
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}
