import { motion } from "framer-motion";

import React from 'react';

interface ChocolateDripBackgroundProps {
    title?: string;
    children?: React.ReactNode;
    desktopHeight?: string;
    tabletHeight?: string;
    mobileHeight?: string;
}

export function ChocolateDripBackground({
    title,
    children,
    desktopHeight = '530px',
    tabletHeight = '430px',
    mobileHeight = '260px'
}: ChocolateDripBackgroundProps) {
    return (
        <div
            className="chocolate-hero-outer relative w-full"
            style={{
                height: desktopHeight,
                maxHeight: desktopHeight,
                overflow: 'hidden',
                minHeight: desktopHeight,
            }}
        >
            <style>{`
                .chocolate-hero-outer {
                    height: ${desktopHeight} !important;
                    max-height: ${desktopHeight} !important;
                    min-height: ${desktopHeight} !important;
                }
                @media (max-width: 1024px) {
                    .chocolate-hero-outer {
                        height: ${tabletHeight} !important;
                        max-height: ${tabletHeight} !important;
                        min-height: ${tabletHeight} !important;
                    }
                }
                @media (max-width: 767px) {
                    .chocolate-hero-outer {
                        height: ${mobileHeight} !important;
                        max-height: ${mobileHeight} !important;
                        min-height: ${mobileHeight} !important;
                    }
                }
            `}</style>

            <motion.div
                className="relative w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                {/* Title Heading (if provided) */}
                {title && (
                    <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-center pt-24 md:pt-32 lg:pt-36">
                        <motion.h1
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                            className="font-['Roboto',sans-serif] font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center drop-shadow-lg"
                        >
                            {title}
                        </motion.h1>
                    </div>
                )}

                {/* Custom Children (if provided) */}
                {children && (
                    <div className="absolute inset-0 z-20">
                        {children}
                    </div>
                )}

                {/* Chocolate Video Background */}
                <div className="absolute inset-0 overflow-hidden bg-[#1a0503]">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{
                            objectPosition: 'center center',
                        }}
                    >
                        <source src="/videos/chocalate video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Dark overlay for better contrast */}
                    <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* Curved Milk Drip at Bottom */}
                <div className="absolute left-0 right-0 bottom-0 w-full pointer-events-none" style={{ height: '50%', maxHeight: '320px' }}>
                    <svg
                        className="w-full h-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 1281 336"
                    >
                        <defs>
                            <filter
                                colorInterpolationFilters="sRGB"
                                filterUnits="userSpaceOnUse"
                                height="337.207"
                                id="filter0_i_milk_drip"
                                width="1281"
                                x="0"
                                y="0"
                            >
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    result="hardAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                />
                                <feOffset dy="2" />
                                <feGaussianBlur stdDeviation="2.5" />
                                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend in2="shape" mode="normal" result="effect1_innerShadow" />
                            </filter>
                        </defs>
                        <g filter="url(#filter0_i_milk_drip)">
                            <motion.path
                                d="M0 62.2067V335.207H1281V62.2067C1281 23.3451 1192.5 -45.2932 1168.5 43.2067C1144.25 132.638 1180.01 199.884 1066.5 236.207C991.5 260.207 948.5 62.2067 876 62.2067C807.672 62.2067 934.427 230.767 712.5 129.207C653.5 102.207 688.5 271.207 653.5 271.207C578.555 271.207 492.133 66.9473 426 102.207C366.416 133.974 404.757 233.077 340 252.207C264.267 274.578 184 98.7068 145.5 165.707C89.4056 263.326 -2.68214e-05 -12.6164 0 62.2067Z"
                                fill="#FFFFFF"
                                initial={{ y: 10, opacity: 0 }}
                                animate={{
                                    y: 0,
                                    opacity: 1
                                }}
                                transition={{
                                    duration: 1.5,
                                    ease: "easeOut"
                                }}
                            />
                        </g>
                    </svg>
                </div>

                {/* Subtle Shimmer Overlay */}
                <motion.div
                    className="pointer-events-none absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0, 0.05, 0],
                        background: [
                            "radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
                            "radial-gradient(circle at 80% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
                            "radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)"
                        ]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </motion.div>
        </div>
    );
}
