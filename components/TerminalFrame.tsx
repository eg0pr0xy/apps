
import React, { useState, useEffect } from 'react';
import { SOCIALS } from '../constants';

interface TerminalFrameProps {
  children: React.ReactNode;
  title: string;
}

const RUNES = ['ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ', 'ᚷ', 'ᚹ', 'ᚺ', 'ᚻ', 'ᚾ', 'ᛁ', 'ᛄ', 'ᛈ', 'ᛉ', 'ᛊ', 'ᛏ', 'ᛒ', 'ᛖ', 'ᛗ', 'ᛚ', 'ᛝ', 'ᛟ', 'ᛞ', '⚡', '◢', '◤'];

const GlitchShorthand: React.FC<{ original: string; isHovered: boolean }> = ({ original, isHovered }) => {
  const [display, setDisplay] = useState(original);

  useEffect(() => {
    let timeout: number | undefined;
    
    if (isHovered) {
      const glitch = () => {
        const shouldGlitch = Math.random() > 0.15;
        if (shouldGlitch) {
          const char1 = Math.random() > 0.5 ? RUNES[Math.floor(Math.random() * RUNES.length)] : original[0];
          const char2 = original.length > 1 
            ? (Math.random() > 0.5 ? RUNES[Math.floor(Math.random() * RUNES.length)] : original[1])
            : '';
          setDisplay(char1 + char2);
        } else {
          setDisplay(original);
        }
        timeout = window.setTimeout(glitch, 80 + Math.random() * 100);
      };
      glitch();
    } else {
      setDisplay(original);
      if (timeout) clearTimeout(timeout);
    }
    return () => clearTimeout(timeout);
  }, [isHovered, original]);

  return (
    <span className={`font-bold uppercase tracking-tighter text-[11px] min-w-[1.4em] text-center inline-block transition-transform duration-75 ${isHovered ? 'scale-110' : ''}`}>
      {display.substring(0, 2)}
    </span>
  );
};

const TerminalFrame: React.FC<TerminalFrameProps> = ({ children, title }) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const getShorthand = (name: string) => {
    switch (name) {
      case 'GITHUB': return 'gh';
      case 'TWITTER': return 'tw';
      case 'LINKEDIN': return 'in';
      case 'SIGNAL': return 'sg';
      case 'RESEARCH_GATE': return 'rg';
      case 'E-MAIL': return '@@';
      default: return 'ln';
    }
  };

  return (
    <div className="flex flex-col w-full h-full max-w-5xl max-h-[88vh] border-2 border-white bg-[#002fa7] ncurses-shadow overflow-hidden frame-3d">
      {/* Header - Minimalist & Clean */}
      <div className="flex items-center justify-center px-4 py-2 bg-white text-[#002fa7] font-bold text-xs shrink-0 tracking-[0.4em] uppercase shadow-lg z-50">
        <span className="w-2 h-2 bg-[#002fa7] mr-3"></span>
        {title}
        <span className="w-2 h-2 bg-[#002fa7] ml-3"></span>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-8 overflow-y-auto custom-scrollbar relative">
        {children}
      </div>

      {/* Footer - Wider Social Icon Shorthands with Glitch Animation */}
      <div className="px-4 py-2 border-t border-white/40 text-white text-[10px] flex justify-center bg-black/30 shrink-0 overflow-x-auto no-scrollbar z-50">
        <div className="flex gap-4 items-center h-10">
          {SOCIALS.map((social, idx) => (
            <a 
              key={social.name} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              title={social.name}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="hover:text-white px-8 py-2 transition-all flex items-center gap-4 group border border-transparent hover:border-white/20 hover:bg-white/10 min-w-[110px] justify-center"
            >
              <span className="opacity-20 select-none text-[8px] font-mono">{idx + 1}</span>
              <GlitchShorthand 
                original={getShorthand(social.name)} 
                isHovered={hoveredIdx === idx} 
              />
            </a>
          ))}
        </div>
      </div>

      {/* Centered Footer - Studio Info */}
      <div className="px-4 py-3 border-t border-white/20 text-white text-[9px] flex justify-center bg-black/20 shrink-0">
        <span className="opacity-30 select-none uppercase tracking-[0.3em] font-bold text-center">
          STUDIO NEUE EPISTEME // 2026
        </span>
      </div>
    </div>
  );
};

export default TerminalFrame;
