'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FranchiseLocationsModal } from '../components/FranchiseLocationsModal';
import { ChocolateDripBackground } from '../components/ChocolateDripBackground';

const franchiseLocations = [
    {
        name: 'Kollam',
        description: 'To craft the purest and most delightful ice cream using only fresh, natural ingredients, bringing joy to every community we serve.',
        bgGradient: 'linear-gradient(135deg, rgba(255,193,127,0.3) 0%, rgba(255,152,84,0.5) 50%, rgba(255,172,108,0.4) 100%)',
    },
    {
        name: 'Thrissur',
        description: 'To craft the purest and most delightful ice cream using only fresh, natural ingredients, bringing joy to every community we serve.',
        bgGradient: 'linear-gradient(135deg, rgba(253,207,232,0.3) 0%, rgba(251,178,215,0.5) 50%, rgba(252,192,223,0.4) 100%)',
    },
    {
        name: 'Kochi',
        description: 'To craft the purest and most delightful ice cream using only fresh, natural ingredients, bringing joy to every community we serve.',
        bgGradient: 'linear-gradient(135deg, rgba(238,224,218,0.3) 0%, rgba(230,214,206,0.5) 50%, rgba(234,219,212,0.4) 100%)',
    },
];

export function FranchisePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCity, setSelectedCity] = useState('');

    const handleViewNow = (cityName: string) => {
        setSelectedCity(cityName);
        setIsModalOpen(true);
    };

    return (
        <div className="relative bg-white min-h-screen overflow-x-hidden">
            <Header />

            {/* Background blur effects - Fixed positioning */}
            <div className="fixed left-[-365px] top-[1843px] w-[633px] h-[633px] pointer-events-none -z-10" style={{ transform: 'rotate(-116.75deg)' }}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 783 783">
                    <defs>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="783" id="filter0_f_franchise1" width="783" x="0" y="0">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="37.5" />
                        </filter>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_franchise1" x1="391.5" x2="554.5" y1="75" y2="471">
                            <stop offset="0.158159" stopColor="#00DDFF" />
                            <stop offset="1" stopColor="#F7A203" />
                        </linearGradient>
                    </defs>
                    <g filter="url(#filter0_f_franchise1)" opacity="0.3">
                        <circle cx="391.5" cy="391.5" fill="url(#paint0_linear_franchise1)" fillOpacity="0.4" r="316.5" />
                    </g>
                </svg>
            </div>

            <div className="fixed right-[-50px] top-[1781px] w-[633px] h-[633px] pointer-events-none opacity-50 -z-10" style={{ transform: 'rotate(133.79deg)' }}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 783 783">
                    <defs>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="783" id="filter0_f_franchise2" width="783" x="0" y="0">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="37.5" />
                        </filter>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_franchise2" x1="391.5" x2="554.5" y1="75" y2="471">
                            <stop offset="0.158159" stopColor="#00DDFF" />
                            <stop offset="1" stopColor="#F7A203" />
                        </linearGradient>
                    </defs>
                    <g filter="url(#filter0_f_franchise2)" opacity="0.3">
                        <circle cx="391.5" cy="391.5" fill="url(#paint0_linear_franchise2)" fillOpacity="0.4" r="316.5" />
                    </g>
                </svg>
            </div>

            <div className="fixed right-[-100px] top-[2085px] w-[633px] h-[633px] pointer-events-none opacity-25 -z-10">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 783 783">
                    <defs>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="783" id="filter0_f_franchise3" width="783" x="0" y="0">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="37.5" />
                        </filter>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_franchise3" x1="391.5" x2="554.5" y1="75" y2="471">
                            <stop offset="0.158159" stopColor="#00DDFF" />
                            <stop offset="1" stopColor="#F7A203" />
                        </linearGradient>
                    </defs>
                    <g filter="url(#filter0_f_franchise3)" opacity="0.3">
                        <circle cx="391.5" cy="391.5" fill="url(#paint0_linear_franchise3)" fillOpacity="0.4" r="316.5" />
                    </g>
                </svg>
            </div>

            {/* Hero Section with Animated Chocolate Drip Background */}
            <ChocolateDripBackground title="Franchise" />

            {/* Main Content Section */}
            <main className="relative z-10" style={{
                marginTop: '-25px'
            }}>
                {/* Milk background gradient section */}
                <div className="relative bg-white">

                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 lg:pt-48 pb-16">
                        {/* Franchise Location Cards */}
                        <div className="space-y-6 md:space-y-8 max-w-6xl mx-auto">
                            {franchiseLocations.map((location, index) => (
                                <motion.div
                                    key={location.name}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-100px' }}
                                    transition={{ delay: index * 0.2, duration: 0.6 }}
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    className="relative rounded-[15px] overflow-hidden min-h-[250px] md:min-h-[320px] lg:min-h-[361px]"
                                    style={{
                                        background: location.bgGradient,
                                    }}
                                >
                                    {/* Gradient overlay for better text readability */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/25 to-transparent md:from-black/40 md:via-black/20" />

                                    {/* Content */}
                                    <div className="relative h-full flex flex-col justify-center p-6 md:p-8 lg:p-12 xl:p-16">
                                        <div className="max-w-3xl">
                                            {/* Location Name */}
                                            <motion.h2
                                                initial={{ opacity: 0, x: -30 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.2 + 0.2, duration: 0.6 }}
                                                className="font-['Roboto'] font-bold text-white text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[72px] 2xl:text-[80px] leading-[1.1] sm:leading-[1.1] md:leading-[1.1] lg:leading-[1.1] mb-3 md:mb-4"
                                            >
                                                {location.name}
                                            </motion.h2>

                                            {/* Description */}
                                            <motion.p
                                                initial={{ opacity: 0, x: -30 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                                                className="font-['Roboto',sans-serif] font-medium text-white/90 text-sm sm:text-base md:text-lg lg:text-[20px] leading-relaxed sm:leading-relaxed md:leading-[25px] mb-4 md:mb-6 max-w-2xl"
                                            >
                                                {location.description}
                                            </motion.p>

                                            {/* View now Button with exact styling */}
                                            <motion.button
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.2 + 0.4, duration: 0.4 }}
                                                whileHover={{
                                                    scale: 1.05,
                                                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                                                }}
                                                whileTap={{ scale: 0.95 }}
                                                className="bg-white rounded-full px-6 py-2 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 min-w-[140px] h-[52px]"
                                                onClick={() => handleViewNow(location.name)}
                                            >
                                                <span className="font-['Roboto',sans-serif] font-bold text-[#4C3026] text-[18px] tracking-wide">
                                                    View now
                                                </span>
                                            </motion.button>
                                        </div>
                                    </div>

                                    {/* Decorative ice cream element */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
                                        className="absolute right-4 md:right-8 lg:right-16 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 opacity-20"
                                    >
                                        <div className="w-full h-full rounded-full bg-white/30 backdrop-blur-[1px]" />
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <Footer />
            </main>

            {/* Franchise Locations Modal */}
            <FranchiseLocationsModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                cityName={selectedCity}
            />
        </div>
    );
}
