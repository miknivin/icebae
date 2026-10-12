'use client';

import { motion } from 'motion/react';
import { Phone, User } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Footer } from '@/components/Footer';

const franchises = [
  { district: 'Tenkasi', name: 'Mishon G.B' },
  { district: 'Chengalpattu', name: 'Divine Hosanna - Arul Raj' },
  { district: 'Bangalore', name: 'Hirudia Prasad R.' },
  { district: 'Sivagangai', name: 'Karthikeyan Vetrivel' },
  { district: 'Thoothukudi', name: 'Jani Kingston' },
  { district: 'Kanyakumari', name: 'Rafeek Syed Mohammed' },
  { district: 'Coimbatore', name: 'Azeez Rahuman' },
  { district: 'Chennai', name: 'Prem Kumar' },
  { district: 'Tirunelveli', name: 'Sudhakaran' },
  { district: 'Dharmapuri', name: 'Dr. Rafeek' },
  { district: 'Salem', name: 'A.N. Noorul Irfan' },
  { district: 'Pondicherry', name: 'Muhammed Yousuf Shafeek' },
];

export default function FranchisePage() {
  return (
    <div className="relative bg-white min-h-screen overflow-x-hidden">
      <PageHero
        title="Our Franchises"
        subtitle="Meet the ICE BAY franchise partners bringing pure ice cream to their districts."
      />

      <section className="relative bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="overflow-hidden rounded-3xl border border-black/5 shadow-sm">
            <div className="grid grid-cols-[auto_1fr] sm:grid-cols-[auto_1fr_1.4fr] bg-[#4c3026] text-white text-sm md:text-base font-semibold">
              <div className="px-4 md:px-6 py-4">#</div>
              <div className="px-4 md:px-6 py-4">District</div>
              <div className="hidden sm:block px-4 md:px-6 py-4">Franchise Partner</div>
            </div>

            {franchises.map((item, index) => (
              <motion.div
                key={item.district}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ delay: Math.min(index * 0.04, 0.4), duration: 0.3 }}
                className={`grid grid-cols-[auto_1fr] sm:grid-cols-[auto_1fr_1.4fr] items-start sm:items-center ${
                  index % 2 === 0 ? 'bg-[#fff8f6]' : 'bg-white'
                } border-t border-black/5`}
              >
                <div className="px-4 md:px-6 py-4 text-[#a9674f] font-bold">{index + 1}</div>
                <div className="px-4 md:px-6 py-4 font-semibold text-[#2a1710]">
                  {item.district}
                  <p className="sm:hidden mt-1 text-sm font-normal text-gray-500">{item.name}</p>
                </div>
                <div className="hidden sm:block px-4 md:px-6 py-4 text-gray-600">{item.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise enquiry contact */}
      <section className="relative bg-[#fff8f6] py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-['Roboto_Serif',serif] font-bold text-[#2a1710] text-2xl md:text-3xl mb-3">
            For Franchise Enquiry
          </h2>
          <p className="text-gray-500 text-sm md:text-base mb-8">
            Interested in opening an ICE BAY franchise in your district? Reach out to us directly.
          </p>

          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-white border border-black/5 rounded-2xl px-8 py-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#fdeee9] text-[#a9674f] flex items-center justify-center shrink-0">
                <User size={20} />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-400 uppercase tracking-wide">Contact</p>
                <p className="font-semibold text-[#2a1710]">Muhammed Yousuf Shafeek</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#fdeee9] text-[#a9674f] flex items-center justify-center shrink-0">
                <Phone size={20} />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-400 uppercase tracking-wide">Phone</p>
                <a href="tel:+919790525565" className="font-semibold text-[#2a1710] hover:text-[#a9674f] transition-colors">
                  +91 97905 25565
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
