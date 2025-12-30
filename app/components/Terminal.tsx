'use client';

import { useState, useEffect } from 'react';

export default function Terminal() {
  const [typedText, setTypedText] = useState('');
  const fullText = "npm run deploy --production";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-lg">
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-2xl opacity-20 animate-pulse" />
      
      {/* Terminal Window */}
      <div className="relative bg-[#1e293b] border border-border rounded-xl shadow-2xl overflow-hidden">
        {/* Window Header */}
        <div className="bg-[#0f172a] px-4 py-3 flex items-center gap-2 border-b border-gray-700">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="ml-4 text-xs text-gray-400 font-mono flex-1 text-center">deploy.sh — bash</div>
        </div>

        {/* Window Content */}
        <div className="p-6 font-mono text-sm space-y-4 min-h-[300px]">
          <div className="flex gap-2 text-gray-400">
            <span className="text-green-400">➜</span>
            <span className="text-blue-400">~/project</span>
            <span>git checkout -b feature/next-gen</span>
          </div>
          <div className="text-gray-500">Switched to a new branch 'feature/next-gen'</div>
          
          <div className="flex gap-2 text-gray-400">
            <span className="text-green-400">➜</span>
            <span className="text-blue-400">~/project</span>
            <span>{typedText}<span className="animate-pulse">_</span></span>
          </div>

          {typedText === fullText && (
            <>
              <div className="text-gray-300 space-y-1 animate-fade-in-up">
                <div className="flex items-center gap-2"><span className="text-green-400">✔</span> Building optimized production build...</div>
                <div className="flex items-center gap-2"><span className="text-green-400">✔</span> Compiling assets...</div>
                <div className="flex items-center gap-2"><span className="text-green-400">✔</span> Optimizing images...</div>
                <div className="flex items-center gap-2"><span className="text-green-400">✔</span> Deployment successful!</div>
              </div>
              <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded text-green-400 text-xs">
                🚀 App is live at https://techvision.io
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
