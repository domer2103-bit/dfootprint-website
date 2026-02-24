
import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="pt-24 pb-12 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Logo size="sm" />
              <span className="text-lg font-extrabold tracking-tight uppercase">DFootprint</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Elevating Local Business with AI. We provide direct value through specialized automation and bespoke workflow optimization.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">public</span></a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">forum</span></a>
            </div>
          </div>
          <div>
            <h5 className="font-bold mb-6">Explore</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/admin" className="hover:text-primary transition-colors">Editor</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6">Company</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6">Newsletter</h5>
            <p className="text-sm text-slate-500 mb-4">Stay updated with the latest AI trends.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                className="bg-slate-50 border-none rounded-xl text-sm focus:ring-primary w-full p-3" 
                placeholder="Your email" 
              />
              <button className="bg-primary text-white p-3 rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-100 text-center text-xs text-slate-400 font-medium">
          © 2024 DFootprint. All rights reserved. Designed for local innovators.
        </div>
      </div>
    </footer>
  );
};
