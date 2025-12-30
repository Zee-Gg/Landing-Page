'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
      <nav className={`max-w-5xl mx-auto px-6 py-3 rounded-full border transition-all duration-300 flex justify-between items-center ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md border-border shadow-sm' 
          : 'bg-transparent border-transparent'
      }`}>
        {/* Logo */}
        <div className="text-xl font-bold text-textMain tracking-tight flex items-center gap-2">
          <span className="font-mono">TechVision</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center bg-white/50 px-8 py-2 rounded-full border border-border/50 backdrop-blur-sm shadow-sm">
          <li><a href="#services" className="text-sm font-medium text-textMuted hover:text-primary transition-colors">Services</a></li>
          <li><a href="#process" className="text-sm font-medium text-textMuted hover:text-primary transition-colors">Process</a></li>
          <li><a href="#packages" className="text-sm font-medium text-textMuted hover:text-primary transition-colors">Pricing</a></li>
          <li><a href="#contact" className="text-sm font-medium text-textMuted hover:text-primary transition-colors">Contact</a></li>
        </ul>

        <div className="hidden md:block">
            <button className="btn-primary text-sm py-2 px-6 shadow-none hover:shadow-md">
                Get Started
            </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-xl text-textMain p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-xl border border-border rounded-2xl p-6 shadow-xl md:hidden animate-fade-in-up">
          <ul className="flex flex-col gap-6 text-center">
            <li><a href="#services" onClick={toggleMenu} className="block text-lg text-textMuted hover:text-primary font-medium">Services</a></li>
            <li><a href="#process" onClick={toggleMenu} className="block text-lg text-textMuted hover:text-primary font-medium">Process</a></li>
            <li><a href="#packages" onClick={toggleMenu} className="block text-lg text-textMuted hover:text-primary font-medium">Packages</a></li>
            <li><a href="#contact" onClick={toggleMenu} className="block text-lg text-textMuted hover:text-primary font-medium">Contact</a></li>
            <li><button className="w-full btn-primary py-3 rounded-xl font-bold">Get Started</button></li>
          </ul>
        </div>
      )}
    </header>
  );
}
 
