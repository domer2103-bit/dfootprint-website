
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2">
            <Logo />
            <span className="text-xl font-extrabold tracking-tight text-slate-900 uppercase">DFootprint</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`text-sm font-semibold transition-colors ${isActive('/') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`text-sm font-semibold transition-colors ${isActive('/services') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}
            >
              Services
            </Link>
            <Link 
              to="/blog" 
              className={`text-sm font-semibold transition-colors ${isActive('/blog') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}
            >
              Blog
            </Link>
            <button 
              onClick={onOpenBooking}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-md shadow-primary/20 hover:scale-105"
            >
              Talk to us
            </button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-slate-100"
            >
              <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 p-4 space-y-4">
          <Link to="/" onClick={() => setIsOpen(false)} className="block text-lg font-semibold text-slate-900">Home</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="block text-lg font-semibold text-slate-900">Services</Link>
          <Link to="/blog" onClick={() => setIsOpen(false)} className="block text-lg font-semibold text-slate-900">Blog</Link>
          <button 
            onClick={() => { onOpenBooking(); setIsOpen(false); }}
            className="w-full bg-primary text-white py-3 rounded-xl font-bold"
          >
            Talk to us
          </button>
        </div>
      )}
    </nav>
  );
};
