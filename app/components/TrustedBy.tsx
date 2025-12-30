import { FaServer, FaCode, FaTerminal } from 'react-icons/fa';

export default function TrustedBy() {
  return (
    <div>
      <p className="text-sm text-textMuted mb-4 font-mono">TRUSTED BY ENGINEERING TEAMS AT</p>
      <div className="flex gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="text-xl font-bold text-textMuted flex items-center gap-2"><FaServer /> Vercel</span>
          <span className="text-xl font-bold text-textMuted flex items-center gap-2"><FaCode /> Stripe</span>
          <span className="text-xl font-bold text-textMuted flex items-center gap-2"><FaTerminal /> AWS</span>
      </div>
    </div>
  );
}
