import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const imgIceBayNewLogoPage00012 = '/assets/0b06dd17df32d5467412df9cd630b867bdc70daa.png';

export function Footer() {
   return (
      <footer className="bg-[#1a0503] text-white/80 py-6 md:py-16 font-['Roboto'] relative z-10">
         {/* Content */}
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-left">
            {/* Brand / Logo */}
            <div className="flex flex-col items-start">
               <div className="w-16 mb-4 md:mb-6">
                  <img src={imgIceBayNewLogoPage00012} alt="Logo" className="w-full h-auto opacity-90" />
               </div>
               <p className="text-sm leading-relaxed max-w-xs">
                  Mecoca Group <br />
                  Cheriyavelinalloor. P.O, Roadvila <br />
                  Kollam 691516
               </p>

            </div>

            {/* Contact */}
            <div className="flex flex-col items-start">
               <h4 className="text-white font-bold text-lg mb-3 md:mb-6">Contact Us</h4>
               <div className="space-y-2 text-sm">
                  <p>
                     <span className="text-xs text-white/50 uppercase tracking-wider mr-2">Office Ph:</span>
                     +91- 8282825230 (Kerala)
                  </p>
                  <p>
                     <span className="text-xs text-white/50 uppercase tracking-wider mr-2">Mobile:</span>
                     +91- 9790525565 (Tamilnadu)
                  </p>

                  <div className="flex flex-col gap-1">
                     <span className="text-xs text-white/50 uppercase tracking-wider">Email:</span>
                     <span className="pl-4 block text-xs md:text-sm">mecocagroup@gmail.com</span>

                  </div>
               </div>
            </div>

            {/* Links & Social */}
            <div className="flex flex-col items-start">
               <h4 className="text-white font-bold text-lg mb-3 md:mb-6">Links</h4>
               <div className="flex flex-col gap-2 mb-6 md:mb-8 pl-1">
                  <Link href="/about" className="hover:text-white transition-colors">About us</Link>
                  <Link href="/flavours" className="hover:text-white transition-colors">Flavours</Link>
                  <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
               </div>

               <div className="flex gap-4">
                  <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                     <Facebook size={18} />
                  </a>
                  <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                     <Twitter size={18} />
                  </a>
                  <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                     <Instagram size={18} />
                  </a>
                  <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                     <Linkedin size={18} />
                  </a>
               </div>
            </div>
         </div>

         <div className="mt-6 md:mt-16 pt-6 border-t border-white/10 text-center text-xs text-white/40">
            © {new Date().getFullYear()} Ice Bay. All rights reserved.
         </div>
      </footer>
   );
}
