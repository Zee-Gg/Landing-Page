'use client';

import { FaCheck, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="packages" className="py-24 relative bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Pricing</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Simple, Transparent Pricing</h2>
          <p className="text-slate-600 text-lg mb-8">Choose the plan that fits your scale.</p>
          
          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-8 bg-slate-200 rounded-full p-1 relative transition-colors hover:bg-slate-300"
            >
              <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${isAnnual ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>
              Yearly <span className="text-xs text-green-600 font-bold ml-1">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col hover:shadow-lg transition-all duration-300">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Starter</h3>
              <p className="text-slate-600 text-sm">For small projects and MVPs.</p>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-bold text-slate-900">{isAnnual ? '$2,999' : '$3,499'}</span>
              <span className="text-slate-500">/project</span>
            </div>
            <button className="w-full py-3 rounded-xl border border-slate-200 text-slate-900 font-bold hover:bg-slate-50 transition-colors mb-8">
              Get Started
            </button>
            <ul className="space-y-4 flex-1">
              {['Single Page Application', 'Mobile Responsive', 'Basic SEO Setup', '1 Month Support'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                  <FaCheck className="text-green-500" /> {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Pro */}
          <div className="bg-white border border-primary rounded-3xl p-8 flex flex-col relative transform md:-translate-y-4 shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
              Most Popular
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Professional</h3>
              <p className="text-slate-600 text-sm">For growing businesses.</p>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-bold text-slate-900">{isAnnual ? '$5,999' : '$6,999'}</span>
              <span className="text-slate-500">/project</span>
            </div>
            <button className="w-full py-3 rounded-xl bg-primary text-white font-bold hover:bg-primaryHover transition-colors mb-8 shadow-lg shadow-primary/25">
              Get Started
            </button>
            <ul className="space-y-4 flex-1">
              {['Multi-page Web App', 'CMS Integration', 'Advanced SEO & Analytics', '3 Months Support', 'Payment Gateway'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                  <FaCheck className="text-primary" /> {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Enterprise */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col hover:shadow-lg transition-all duration-300">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Enterprise</h3>
              <p className="text-slate-600 text-sm">For large scale applications.</p>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-bold text-slate-900">Custom</span>
            </div>
            <button className="w-full py-3 rounded-xl border border-slate-200 text-slate-900 font-bold hover:bg-slate-50 transition-colors mb-8">
              Contact Sales
            </button>
            <ul className="space-y-4 flex-1">
              {['Custom Architecture', 'Microservices', 'AI Integration', 'Dedicated Team', 'SLA Support'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                  <FaCheck className="text-green-500" /> {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
