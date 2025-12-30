'use client';

import { 
  FaLaptopCode, 
  FaMobileAlt, 
  FaBrain, 
  FaCloud, 
  FaShieldAlt,
  FaDatabase,
  FaArrowRight
} from 'react-icons/fa';

const ServiceCard = ({ icon: Icon, title, description, colorClass }: { icon: any, title: string, description: string, colorClass: string }) => (
  <div className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
    <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-6 ${colorClass} group-hover:scale-110 transition-transform duration-300`}>
      <Icon />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{title}</h3>
    <p className="text-slate-600 leading-relaxed mb-6">
      {description}
    </p>
    <div className="flex items-center text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
      Learn more <FaArrowRight className="ml-2 text-xs" />
    </div>
  </div>
);

export default function Features() {
  const services = [
    {
      icon: FaLaptopCode,
      title: "Full-Stack Development",
      description: "End-to-end web applications built with Next.js, React, and Node.js. We create scalable architectures that grow with your business.",
      colorClass: "bg-blue-50 text-blue-600"
    },
    {
      icon: FaBrain,
      title: "AI & Machine Learning",
      description: "Integrate intelligent features into your software. From predictive analytics to custom LLM integration and automation.",
      colorClass: "bg-purple-50 text-purple-600"
    },
    {
      icon: FaMobileAlt,
      title: "Mobile Applications",
      description: "Native-quality cross-platform apps using React Native and Flutter. Reach users on both iOS and Android with a single codebase.",
      colorClass: "bg-pink-50 text-pink-600"
    },
    {
      icon: FaCloud,
      title: "Cloud Infrastructure",
      description: "Secure, scalable serverless architectures on AWS, Azure, and GCP. We handle DevOps so you can focus on your product.",
      colorClass: "bg-cyan-50 text-cyan-600"
    },
    {
      icon: FaShieldAlt,
      title: "Cybersecurity",
      description: "Enterprise-grade security implementation, compliance auditing, and automated penetration testing for peace of mind.",
      colorClass: "bg-emerald-50 text-emerald-600"
    },
    {
      icon: FaDatabase,
      title: "Data Engineering",
      description: "Design and implement robust data pipelines, warehouses, and analytics platforms to unlock insights from your data.",
      colorClass: "bg-orange-50 text-orange-600"
    }
  ];

  return (
    <section id="services" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            We Build <span className="text-primary">Digital Excellence</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            From concept to deployment, we provide comprehensive engineering solutions tailored to your unique business challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
