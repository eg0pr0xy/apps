
import React, { useState, useEffect } from 'react';
import TerminalFrame from './components/TerminalFrame';
import ProjectGrid from './components/ProjectGrid';
import { ASCII_LOGO } from './constants';

const App: React.FC = () => {
  const [isBooted, setIsBooted] = useState(false);
  const [bootSequence, setBootSequence] = useState<string[]>([]);

  useEffect(() => {
    const lines = [
      "INITIALIZING STUDIO NEUE EPISTEME (IWR-CORE)...",
      "VRAM_LOAD: 100% - GLYPHS_READY",
      "STRIPPING_LEGACY_MODULES: PROJECTS... OK",
      "STRIPPING_LEGACY_MODULES: LINKS... OK",
      "UPLINK: SECURE_V4_ESTABLISHED",
      "WELCOME TO THE BLUE REALM.",
      "READY."
    ];

    let current = 0;
    const interval = setInterval(() => {
      if (current < lines.length) {
        setBootSequence(prev => [...prev, lines[current]]);
        current++;
      } else {
        clearInterval(interval);
        setTimeout(() => setIsBooted(true), 400);
      }
    }, 60);

    return () => clearInterval(interval);
  }, []);

  if (!isBooted) {
    return (
      <div className="fixed inset-0 bg-[#002fa7] flex items-center justify-center p-4">
        <div className="max-w-md w-full border border-white p-6 bg-black/20">
          <div className="space-y-1 mb-4">
            {bootSequence.map((line, i) => (
              <div key={i} className="text-white text-xs font-mono">
                {line}
              </div>
            ))}
          </div>
          <div className="cursor h-3 w-2 bg-white"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-[#002fa7] flex flex-col items-center justify-center p-8 md:pt-12 md:pb-28">
      <TerminalFrame title="STUDIO NEUE EPISTEME">
        <div className="flex flex-col h-full overflow-hidden">
          
          {/* Hero Section: Creative Coding ASCII Logo */}
          <div className="flex flex-col justify-center items-center mb-10 shrink-0 border-b border-white/20 pb-12 w-full overflow-x-auto no-scrollbar">
            <div className="inline-block text-center px-4">
              <pre className="text-[5px] sm:text-[6px] md:text-[9px] lg:text-[11px] leading-[1.1] text-white font-bold select-none whitespace-pre opacity-100 hover:text-white transition-all mx-auto tracking-normal">
                {ASCII_LOGO}
              </pre>
            </div>
            <div className="mt-6 text-[10px] text-white/40 tracking-[0.5em] font-bold uppercase">
              //  CREATIVE TOOLS // AUDIO LABS // WEB ART
            </div>
          </div>

          {/* Main Content Area - Project Archive */}
          <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar no-scrollbar px-2">
            <div className="animate-in fade-in slide-in-from-bottom duration-500">
              <div className="mb-6 flex justify-between items-center text-[10px] text-white/60 font-bold tracking-[0.2em]">
                <span className="uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white"></span>
                  PROJECT_ARCHIVE
                </span>
                <span className="animate-pulse flex items-center gap-2">
                  STATUS: LINK_ONLINE
                </span>
              </div>
              <ProjectGrid />
            </div>
          </div>
        </div>
      </TerminalFrame>
    </div>
  );
};

export default App;
