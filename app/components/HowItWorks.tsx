'use client';

import { FaSearch, FaPencilRuler, FaCode, FaRocket } from 'react-icons/fa';

export default function Process() {
  const steps = [
    {
      icon: FaSearch,
      title: 'Discovery & Strategy',
      description: 'We dive deep into your business goals, user needs, and technical requirements to build a roadmap for success.',
      color: 'text-blue-400',
      bg: 'bg-blue-400/10',
      border: 'border-blue-400/20'
    },
    {
      icon: FaPencilRuler,
      title: 'Design & Prototyping',
      description: 'Our designers create intuitive, high-fidelity prototypes that visualize the end product before a single line of code is written.',
      color: 'text-purple-400',
      bg: 'bg-purple-400/10',
      border: 'border-purple-400/20'
    },
    {
      icon: FaCode,
      title: 'Agile Development',
      description: 'We build your solution in iterative sprints, ensuring transparency, flexibility, and rapid delivery of features.',
      color: 'text-pink-400',
      bg: 'bg-pink-400/10',
      border: 'border-pink-400/20'
    },
    {
      icon: FaRocket,
      title: 'Launch & Scale',
      description: 'We handle the deployment, monitoring, and optimization to ensure your product performs flawlessly at scale.',
      color: 'text-green-400',
      bg: 'bg-green-400/10',
      border: 'border-green-400/20'
    }
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Process</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Process</h2>
          <p className="text-slate-600 text-lg">A transparent, collaborative process designed for speed and quality.</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 md:-translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`relative flex flex-col md:flex-row gap-8 items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Content Side */}
                  <div className="flex-1 w-full md:w-1/2 pl-24 md:pl-0">
                    <div className={`bg-white border ${step.border} p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed group-hover:text-primary transition-colors">{step.description}</p>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-20 h-20 rounded-full bg-white border border-slate-200 z-10 shadow-lg">
                    <div className={`w-14 h-14 rounded-full ${step.bg} flex items-center justify-center ${step.color} text-2xl`}>
                      <Icon />
                    </div>
                  </div>

                  {/* Empty Side for spacing */}
                  <div className="hidden md:block flex-1" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
