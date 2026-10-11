import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import imgIceBayNewLogoPage00012 from "../../assets/0b06dd17df32d5467412df9cd630b867bdc70daa.png";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (path: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(path);
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="relative z-50 flex items-center justify-between px-6 py-6 md:px-12 max-w-7xl mx-auto">
        <div className="w-16 md:w-24 cursor-pointer" onClick={handleNavClick('/')}>
          <img src={imgIceBayNewLogoPage00012} alt="Ice Bay Logo" className="w-full h-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12 text-lg font-medium text-white/90">
          <a href="/" onClick={handleNavClick('/')} className={`transition-colors ${isActive('/') ? 'text-yellow-400' : 'hover:text-yellow-400'}`}>Home</a>
          <a href="/about" onClick={handleNavClick('/about')} className={`transition-colors ${isActive('/about') ? 'text-yellow-400' : 'hover:text-yellow-400'}`}>About us</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">Flavours</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">Franchise</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 flex flex-col items-center justify-center gap-8 md:hidden">
          <a href="/" className={`text-2xl ${isActive('/') ? 'text-yellow-400' : 'hover:text-yellow-400'}`} onClick={handleNavClick('/')}>Home</a>
          <a href="/about" className={`text-2xl ${isActive('/about') ? 'text-yellow-400' : 'hover:text-yellow-400'}`} onClick={handleNavClick('/about')}>About us</a>
          <a href="#" className="text-2xl hover:text-yellow-400" onClick={() => setIsMenuOpen(false)}>Flavours</a>
          <a href="#" className="text-2xl hover:text-yellow-400" onClick={() => setIsMenuOpen(false)}>Franchise</a>
        </div>
      )}
    </>
  );
}
