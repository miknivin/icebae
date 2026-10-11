'use client';

import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { MissionVision } from '@/components/MissionVision';
import { Features } from '@/components/Features';
import { Products } from '@/components/Products';
import { Testimonial } from '@/components/Testimonial';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Hero />
      <Stats />
      <MissionVision />
      <Features />
      <Products />
      <Testimonial />
      <Footer />
    </div>
  );
}
