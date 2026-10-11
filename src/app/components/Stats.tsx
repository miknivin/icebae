import React from 'react';

export function Stats() {
  return (
    <div className="relative bg-white pt-10 pb-16 md:pb-24 font-['Roboto_Serif']">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10">
        <div className="flex flex-col items-center">
          <h3 className="text-xl md:text-2xl text-[#2c260f] font-medium mb-2">Franchises</h3>
          <p className="text-4xl md:text-5xl font-extrabold text-[#2c260f]">118+</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-xl md:text-2xl text-[#2c260f] font-medium mb-2">Flavours</h3>
          <p className="text-4xl md:text-5xl font-extrabold text-[#2c260f]">100+</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-xl md:text-2xl text-[#2c260f] font-medium mb-2">States</h3>
          <p className="text-4xl md:text-5xl font-extrabold text-[#2c260f]">11+</p>
        </div>
      </div>
    </div>
  );
}
