'use client';

import { FaArrowRight, FaPlay } from 'react-icons/fa';
import Terminal from './Terminal';
import TrustedBy from './TrustedBy';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-primary/5 to-transparent -z-10 blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-secondary/5 -z-10 blur-[100px]" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] -z-20 opacity-30" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="text-left space-y-8 relative z-10">
          
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] text-textMain animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            We Engineer <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-secondary">Future-Proof</span> <br />
            Software.
          </h1>
          
          <p className="text-xl text-textMuted max-w-lg leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            From complex cloud architectures to intuitive user interfaces, we build the digital infrastructure that powers tomorrow's enterprises.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <button className="btn-primary flex items-center gap-2 group">
              Start Project <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary flex items-center gap-2">
              <FaPlay className="text-xs" /> View Showreel
            </button>
          </div>

          <div className="pt-8 border-t border-border animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <TrustedBy />
          </div>
        </div>

        {/* Right Content - Code Interface Visual */}
        <div className="relative lg:h-[600px] flex items-center justify-center animate-fade-in-up hidden lg:flex" style={{animationDelay: '0.5s'}}>
           <Terminal />
        </div>
      </div>
    </section>
  );
}
