import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { MissionVision } from './components/MissionVision';
import { Features } from './components/Features';
import { Products } from './components/Products';
import { Testimonial } from './components/Testimonial';
import { Footer } from './components/Footer';
import { AboutUsPage } from './components/About';
import { FranchisePage } from './pages/FranchisePage';
import { FlavorsPage } from './pages/FlavorsPage';

function HomePage() {
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

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/franchise" element={<FranchisePage />} />
      <Route path="/flavours" element={<FlavorsPage />} />
    </Routes>
  );
}
