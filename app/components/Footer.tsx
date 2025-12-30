'use client';

import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border pt-24 pb-12 relative overflow-hidden">
      {/* Large Background Text */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-5">
        <h1 className="text-[20vw] font-bold text-white leading-none whitespace-nowrap">TECHVISION</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-background font-bold">T</div>
              <span className="text-2xl font-bold text-white tracking-tight">TechVision</span>
            </div>
            <p className="text-textMuted leading-relaxed">
              Engineering the digital future with precision, passion, and cutting-edge technology.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-surfaceHighlight flex items-center justify-center text-textMuted hover:bg-primary hover:text-white transition-all">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surfaceHighlight flex items-center justify-center text-textMuted hover:bg-primary hover:text-white transition-all">
                <FaGithub />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surfaceHighlight flex items-center justify-center text-textMuted hover:bg-primary hover:text-white transition-all">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-textMuted hover:text-primary transition-colors">Web Development</a></li>
              <li><a href="#" className="text-textMuted hover:text-primary transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="text-textMuted hover:text-primary transition-colors">Cloud Infrastructure</a></li>
              <li><a href="#" className="text-textMuted hover:text-primary transition-colors">AI Solutions</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-textMuted hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-textMuted hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-textMuted hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-textMuted hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6">Stay Updated</h4>
            <p className="text-textMuted mb-4 text-sm">Subscribe to our newsletter for the latest tech insights.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="bg-surfaceHighlight border border-border rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-primary w-full"
              />
              <button className="bg-primary text-background px-4 py-2 rounded-lg font-bold hover:bg-primaryHover transition-colors">
                Go
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-textMuted text-sm">
            &copy; {currentYear} TechVision Inc. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-textMuted">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
