'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import {
  Rocket,
  MapPin,
  Sparkles,
  Leaf,
  Droplet,
  ShieldCheck,
  XCircle,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Stats } from './Stats';
import { MissionVision } from './MissionVision';

const milestones = [
  { icon: Rocket, label: 'Founded', value: '2023' },
  { icon: MapPin, label: 'Franchises', value: '154+' },
  { icon: Sparkles, label: 'Flavours', value: '60+' },
];

const promises = [
  {
    icon: XCircle,
    title: 'No Vegetable Fat',
    desc: "We never cut corners with cheap vegetable fat — only real dairy, every time.",
    tone: 'text-rose-500 bg-rose-50',
  },
  {
    icon: XCircle,
    title: 'No Frozen Dessert Mixes',
    desc: 'What you get is real ice cream, not a "frozen dessert" imitation.',
    tone: 'text-rose-500 bg-rose-50',
  },
  {
    icon: CheckCircle2,
    title: '100% Real Ingredients',
    desc: 'Fresh fruits, rich milk and pure butter in every single scoop.',
    tone: 'text-emerald-600 bg-emerald-50',
  },
];

const showcase = [
  { slug: 'belgian-chocolate-cone', name: 'Belgian Chocolate' },
  { slug: 'nutella-bar', name: 'Nutella' },
  { slug: 'mango-cup', name: 'Mango' },
  { slug: 'pistachio-kunafa-bar', name: 'Pistachio Kunafa' },
  { slug: 'french-vanilla-cone', name: 'French Vanilla' },
  { slug: 'lotus-biscoff-bar', name: 'Lotus Biscoff' },
];

function productImage(slug: string) {
  return `/products/transparent/${slug}.png`;
}

export function AboutUsPage() {
  return (
    <div className="relative bg-white min-h-screen overflow-x-hidden">
      {/* Hero */}
      <div className="relative w-full bg-gradient-to-br from-[#1a0503] via-[#2a0d08] to-[#4c1a0f] overflow-hidden">
        <Header />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-36 pb-28 md:pt-44 md:pb-36 flex flex-col md:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="font-['Roboto_Serif',serif] font-bold text-white text-4xl sm:text-5xl md:text-6xl leading-tight drop-shadow-lg">
              A Story Of Sweetness &amp; Joy
            </h1>
            <p className="mt-5 font-['Roboto',sans-serif] text-white/80 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              At ICE BAY, we believe in the pure delight of real ice cream, crafted from
              nature&apos;s finest ingredients — fresh fruit, rich milk and pure butter in
              every scoop.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="flex-1 flex justify-center items-end gap-2 md:gap-4"
          >
            <img
              src={productImage('butter-scotch-cone')}
              alt="Butter Scotch cone"
              className="w-24 sm:w-32 md:w-40 drop-shadow-2xl -rotate-6 translate-y-3"
            />
            <img
              src={productImage('belgian-chocolate-cone')}
              alt="Belgian Chocolate cone"
              className="w-28 sm:w-36 md:w-48 drop-shadow-2xl z-10"
            />
            <img
              src={productImage('french-vanilla-cone')}
              alt="French Vanilla cone"
              className="w-24 sm:w-32 md:w-40 drop-shadow-2xl rotate-6 translate-y-3"
            />
          </motion.div>
        </div>

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
      </div>

      {/* Our Story */}
      <section className="relative bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-[2fr_1fr] gap-12 md:gap-16">
          <div>
            <h2 className="font-['Roboto_Serif',serif] font-bold text-[#2a1710] text-3xl md:text-5xl mb-8">
              Our Story
            </h2>
            <div className="space-y-6">
              <p className="font-['Roboto',sans-serif] text-[#4C3026] text-[15px] md:text-[17px] leading-relaxed">
                Our story didn&apos;t begin in a boardroom; it started in a WhatsApp group. Ten
                years ago, co-founders Beni Sadar and Sharnas Nasimudeen were part of a
                &quot;Saudi Malayalam Gathering&quot; group while working in the Gulf. Fuelled by
                a passion for food and a touch of nostalgia, Sharnas began making homemade
                popsicles that quickly became a sensation among friends. This spark of
                appreciation ignited a business idea: what if they could bring back the
                authentic, pure ice cream of their childhood to everyone, but with a modern
                touch of premium hygiene?
              </p>
              <p className="font-['Roboto',sans-serif] text-[#4C3026] text-[15px] md:text-[17px] leading-relaxed">
                The idea took shape after the COVID-19 pandemic when they saw an opportunity in
                the food industry as other sectors faced downturns. They observed that the
                Indian market was saturated with &quot;frozen desserts,&quot; not real ice cream.
                This is where ICE BAY found its purpose.
              </p>
              <p className="font-['Roboto',sans-serif] text-[#4C3026] text-[15px] md:text-[17px] leading-relaxed">
                Launched in 2023, the brand was born from the fusion of three core elements: a
                nostalgic idea, the courage to pursue it, and the execution of a shared vision.
                Starting with just 18 flavours, ICE BAY quickly captured hearts, proving that a
                passion for pure, authentic taste is timeless.
              </p>
            </div>
          </div>

          {/* Milestones */}
          <div className="flex flex-col gap-6">
            {milestones.map(({ icon: Icon, label, value }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 bg-[#fff8f6] border border-black/5 rounded-2xl p-5"
              >
                <div className="shrink-0 w-12 h-12 rounded-full bg-[#4c3026] text-white flex items-center justify-center">
                  <Icon size={22} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#2a1710] font-['Roboto_Serif']">{value}</p>
                  <p className="text-sm text-gray-500">{label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <Stats />

      {/* Our Promise */}
      <section className="relative bg-[#fff8f6] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-['Roboto_Serif',serif] font-bold text-[#2a1710] text-3xl md:text-5xl mb-4">
              Our Promise: Purity
            </h2>
            <p className="font-['Roboto',sans-serif] text-[#4C3026]/80 text-base md:text-lg leading-relaxed">
              In a market where 90% of products are frozen desserts made with vegetable fat,
              we are proud to be in the 10% that serves pure ice cream.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {promises.map(({ icon: Icon, title, desc, tone }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-black/5 shadow-sm p-7"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-5 ${tone}`}>
                  <Icon size={24} />
                </div>
                <h3 className="font-bold text-lg text-[#2a1710] mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-10 mt-14 text-[#4c3026]">
            <div className="flex items-center gap-2">
              <Leaf size={20} />
              <span className="text-sm font-medium">Fresh Fruit</span>
            </div>
            <div className="flex items-center gap-2">
              <Droplet size={20} />
              <span className="text-sm font-medium">Rich Milk</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={20} />
              <span className="text-sm font-medium">Hygienically Crafted</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <div className="py-16 md:py-24">
        <MissionVision />
      </div>

      {/* Product showcase */}
      <section className="relative bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-['Roboto_Serif',serif] font-bold text-[#2a1710] text-3xl md:text-5xl mb-4">
            Taste What We Craft
          </h2>
          <p className="font-['Roboto',sans-serif] text-[#4C3026]/80 text-base md:text-lg mb-12 max-w-xl mx-auto">
            A small taste of our growing family of flavours.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 mb-12">
            {showcase.map((item, i) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-[#fff8f6] rounded-2xl border border-black/5 p-4 flex flex-col items-center"
              >
                <img
                  src={productImage(item.slug)}
                  alt={item.name}
                  loading="lazy"
                  className="w-full aspect-[4/5] object-contain drop-shadow-lg transition-transform duration-300 group-hover:-translate-y-1"
                />
                <p className="mt-3 text-xs md:text-sm font-semibold text-[#2a1710]">{item.name}</p>
              </motion.div>
            ))}
          </div>

          <Link
            href="/flavours"
            className="inline-flex items-center gap-2 bg-[#4c3026] text-white font-medium px-8 py-3 rounded-full hover:bg-[#3a241c] transition-colors"
          >
            Explore All Flavours
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
