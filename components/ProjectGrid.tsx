
import React, { useState, useRef, useEffect } from 'react';
import { PROJECTS } from '../constants';

const ProjectGrid: React.FC = () => {
  const [hoveredTag, setHoveredTag] = useState<string | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Initialize AudioContext on first interaction or mount (browsers require user interaction usually, 
  // but since this is a hover, we can try to resume it there).
  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  const playHoverSound = () => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Mechanical "blip" sound configuration
      osc.type = 'square'; // Retro terminal feel
      osc.frequency.setValueAtTime(880, ctx.currentTime); // A5 note
      osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.03, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch (e) {
      // Audio might fail due to browser policies, fail silently
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom duration-500 pb-12">
      <div className="grid grid-cols-1 gap-6">
        {PROJECTS.map((project) => {
          const isRelated = hoveredTag && project.tags.includes(hoveredTag);
          
          return (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => {
                playHoverSound();
              }}
              className={`block p-6 border ncurses-3d-box group overflow-hidden ${
                isRelated 
                  ? 'border-white bg-white/20 z-10' 
                  : 'border-white/20 bg-black/10'
              } hover:bg-white hover:text-[#002fa7] hover:border-white`}
            >
              {/* Image Preview Field - Fixed Visibility via CSS layer */}
              {project.imageUrl && (
                <div className="absolute right-0 top-0 h-full w-1/3 terminal-reveal-layer pointer-events-none border-l border-white/20 overflow-hidden">
                  <div className="relative h-full w-full">
                    <img 
                      src={project.imageUrl} 
                      alt={project.name}
                      className="h-full w-full object-cover grayscale contrast-150 mix-blend-screen"
                    />
                    <div className="preview-scanlines"></div>
                    
                    {/* Technical Overlay */}
                    <div className="absolute inset-0 bg-[#002fa7]/40 mix-blend-multiply"></div>
                    <div className="absolute inset-0 border-l border-white/30"></div>
                    <div className="absolute bottom-2 left-2 text-[7px] text-white bg-black/60 px-1.5 py-0.5 font-mono uppercase tracking-[0.2em] z-20">
                      LIVE_PREVIEW_READY
                    </div>
                  </div>
                </div>
              )}

              {/* Content Container shifted to make room for image */}
              <div className="relative z-10 mr-[35%] group-hover:mr-[35%] transition-all duration-500">
                {/* Title Section */}
                <div className="flex justify-between items-start mb-2">
                  <span className="font-bold text-xl tracking-[0.1em] transition-colors leading-tight">
                    {project.name}
                  </span>
                  {isRelated && (
                    <span className="text-[9px] border px-2 py-0.5 transition-all bg-white text-[#002fa7] border-white font-bold animate-pulse whitespace-nowrap ml-4 mt-1">
                      LINKED::{hoveredTag.toUpperCase()}
                    </span>
                  )}
                </div>
                
                {/* Description Section */}
                <div className="mb-4 transition-all duration-500">
                  <p className="text-sm leading-relaxed max-w-xl opacity-60 group-hover:opacity-100 transition-all duration-400 group-hover:tracking-wider">
                    {project.description}
                  </p>
                </div>

                {/* Tags Section */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      onMouseEnter={(e) => {
                        e.stopPropagation();
                        setHoveredTag(tag);
                        playHoverSound();
                      }}
                      onMouseLeave={(e) => {
                        e.stopPropagation();
                        setHoveredTag(null);
                      }}
                      className={`text-[9px] px-2.5 py-0.5 border font-bold transition-all cursor-crosshair tracking-widest ${
                        hoveredTag === tag 
                          ? 'bg-[#002fa7] text-[#C2F210] border-white scale-110 translate-y-[-2px]' 
                          : 'border-white/20 opacity-70 hover:opacity-100 hover:border-white hover:!text-[#C2F210] group-hover:border-[#002fa7] group-hover:text-[#002fa7]'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          );
        })}
      </div>
      <div className="text-center opacity-10 text-[10px] py-16 tracking-[2em] font-bold select-none uppercase">
        End of Transmission
      </div>
    </div>
  );
};

export default ProjectGrid;
