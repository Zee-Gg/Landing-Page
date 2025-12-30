import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Features';
import Process from './components/HowItWorks';
import Packages from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TechVision - Digital Solutions Agency',
  description: 'We build scalable web applications, mobile apps, and AI solutions for businesses worldwide.',
  keywords: 'web development, mobile apps, AI solutions, software agency, tech portfolio',
};

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Process />
      <Packages />
      <Contact />
      <Footer />
    </main>
  );
}
