'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

const imgLogo = '/assets/logo.png';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About us', path: '/about' },
  { label: 'Flavours', path: '/flavours' },
  { label: 'Contact', path: '/contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const isPageActive = (path: string) => pathname === path;

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#1a0503] px-4 md:px-12 py-2"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo - Visible on all screens with responsive sizing */}
        <motion.button
          onClick={() => router.push('/')}
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="flex-shrink-0"
        >
          <div className="w-[20px] h-[38px] md:w-[30px] md:h-[57px] lg:w-[37px] lg:h-[70px] relative">
            <img
              src={imgLogo}
              alt="Ice Bay Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.button>


        {/* Desktop Navigation */}
        {/* Desktop Navigation - Truly Centered */}
        <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <nav className="flex items-center gap-1 bg-[#1a0503] rounded-[15px] px-2 py-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push(item.path)}
                className={`
          relative px-4 py-1.5 rounded-[15px] transition-all duration-300
          ${isPageActive(item.path) ? 'bg-[rgba(254,229,180,0.25)]' : 'hover:bg-[rgba(254,229,180,0.1)]'}
        `}
              >
                <span className="font-['Roboto',sans-serif] text-white font-bold text-[18px] md:text-[20px]">
                  {item.label}
                </span>
              </motion.button>
            ))}
          </nav>
        </div>

        {/* Mobile Menu Button - Only visible on mobile/tablet */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2 ml-auto"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden mt-4 bg-[#1a0503] rounded-[15px] p-4"
        >
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  router.push(item.path);
                  setMobileMenuOpen(false);
                }}
                className={`
                  px-6 py-3 rounded-[15px] text-left transition-all duration-300
                  ${isPageActive(item.path) ? 'bg-[rgba(254,229,180,0.25)]' : 'hover:bg-[rgba(254,229,180,0.1)]'}
                `}
              >
                <span className="font-['Roboto',sans-serif] text-white font-bold text-[18px]">
                  {item.label}
                </span>
              </button>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}