'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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

  // Lock body scroll while the full-screen mobile menu is open.
  useEffect(() => {
    if (mobileMenuOpen) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }
  }, [mobileMenuOpen]);

  // Close the mobile menu automatically on route change.
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleNavigate = (path: string) => {
    setMobileMenuOpen(false);
    router.push(path);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#1a0503] px-4 md:px-12 py-2"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo - Visible on all screens with responsive sizing */}
          <motion.button
            onClick={() => handleNavigate('/')}
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
                  onClick={() => handleNavigate(item.path)}
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
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            className="lg:hidden text-white p-2 ml-auto"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.header>

      {/*
        Rendered as a sibling of <motion.header>, not a child of it.
        motion.header animates `y`, which Framer Motion applies via a CSS
        `transform` — any transformed ancestor becomes the containing block
        for `position: fixed` descendants, so a fixed overlay nested inside
        it would be sized/positioned relative to the header's own (small)
        box instead of the real viewport. Keeping this at the top level, with
        a z-index above everything else in the app (including any z-50
        dialogs/sheets from the UI kit), guarantees a true full-screen,
        always-on-top mobile menu.
      */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 z-[100] bg-[#1a0503] flex flex-col"
          >
            <div className="flex items-center justify-between px-4 py-2">
              <div className="w-[20px] h-[38px] relative">
                <img src={imgLogo} alt="Ice Bay Logo" className="w-full h-full object-contain" />
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                className="text-white p-2"
              >
                <X size={28} />
              </button>
            </div>

            <nav className="flex-1 flex flex-col items-center justify-center gap-6 px-6 pb-16 overflow-y-auto">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * index, duration: 0.3 }}
                  onClick={() => handleNavigate(item.path)}
                  className={`
                    w-full max-w-xs text-center px-6 py-3 rounded-[15px] transition-all duration-300
                    ${isPageActive(item.path) ? 'bg-[rgba(254,229,180,0.25)]' : 'hover:bg-[rgba(254,229,180,0.1)]'}
                  `}
                >
                  <span className="font-['Roboto',sans-serif] text-white font-bold text-2xl">
                    {item.label}
                  </span>
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
