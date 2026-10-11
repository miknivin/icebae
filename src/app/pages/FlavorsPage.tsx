'use client';

import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ChocolateDripBackground } from '../components/ChocolateDripBackground';

export function FlavorsPage() {
    return (
        <div className="relative bg-white min-h-screen overflow-x-hidden">
            <Header />

            {/* Hero Section with Animated Chocolate Drip Background */}
            <ChocolateDripBackground title="Our Products" />

            {/* Main Content Section */}
            <main className="relative z-10" style={{
                marginTop: '-25px'
            }}>
                {/* Milk background gradient section */}
                <div className="relative min-h-[50vh] bg-white">


                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 lg:pt-48 pb-16">
                        <div className="text-center">
                            <h2 className="font-['Roboto_Serif',serif] font-bold text-[#4C3026] text-[32px] md:text-[48px] mb-8">
                                Our Delicious Flavours
                            </h2>
                            <p className="font-['Roboto',sans-serif] text-[#4C3026] text-[16px] md:text-[18px]">
                                Discover our wide range of premium ice cream flavors made with natural ingredients.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <Footer />
            </main>
        </div>
    );
}
