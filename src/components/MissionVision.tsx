import React from 'react';

const imgRectangle117 = '/assets/2d897d17c5c8008de7c271202da18ea557ee9883.png';

export function MissionVision() {
  return (
    <div className="relative w-full bg-white font-['Roboto_Serif']">
      {/* Background Image - Display in its natural shape */}
      <img
        src={imgRectangle117}
        alt="Coffee Beans Background"
        className="w-full h-auto block"
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center py-2 md:py-6 lg:py-12">
        <div className="max-w-5xl mx-auto px-2 md:px-6 text-center space-y-3 md:space-y-8 lg:space-y-12 text-white">
          <div>
            <h2 className="text-base md:text-2xl lg:text-4xl font-medium mb-1 md:mb-3 lg:mb-6">Mission</h2>
            {/* Short version for mobile */}
            <p className="text-[10px] md:hidden leading-tight max-w-3xl mx-auto opacity-90">
              To Craft The Purest Ice Cream Using Fresh, Natural Ingredients, Bringing Joy To Every Customer
            </p>
            {/* Full version for tablet and desktop */}
            <p className="hidden md:block text-sm lg:text-xl leading-relaxed max-w-3xl mx-auto opacity-90">
              To Craft The Purest And Most Delightful Ice Cream Using Only Fresh, Natural Ingredients, Bringing Moments Of Authentic Joy And Nostalgic Happiness To Every Customer We Serve
            </p>
          </div>

          <div>
            <h2 className="text-base md:text-2xl lg:text-4xl font-medium mb-1 md:mb-3 lg:mb-6">Vision</h2>
            {/* Short version for mobile */}
            <p className="text-[10px] md:hidden leading-tight max-w-4xl mx-auto opacity-90">
              To Become India's Most Trusted Ice Cream Brand, Expanding Our Family Of Franchises Across The Nation
            </p>
            {/* Full version for tablet and desktop */}
            <p className="hidden md:block text-sm lg:text-xl leading-relaxed max-w-4xl mx-auto opacity-90">
              To Become India's Most Trusted And Beloved Ice Cream Brand, Celebrated For Our Unwavering Commitment To Quality, Purity, And Flavour Innovation, While Expanding Our Family Of Franchises To Share Our Passion Across The Nation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
