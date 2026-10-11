'use client';

import { PageHero } from '@/components/PageHero';
import { Products } from '@/components/Products';
import { Footer } from '@/components/Footer';

export default function FlavoursPage() {
  return (
    <div className="relative bg-white min-h-screen overflow-x-hidden">
      <PageHero
        title="Our Flavours"
        subtitle="Every cone, bar and cup we make — browse the full ICE BAY range."
      />
      <Products showHeading={false} />
      <Footer />
    </div>
  );
}
