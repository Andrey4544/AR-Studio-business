import React from 'react';

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ className, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`flex items-center gap-1.5 cursor-pointer group ${className || ''}`}
    >
      <div className="relative w-7 h-7 rounded bg-zinc-900 border border-white/10 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-blue-500/30">
        <span className="font-serif text-sm font-bold text-white tracking-widest transition-transform duration-300 group-hover:scale-110">L</span>
        <div className="absolute top-1 right-1 w-1 h-1 rounded-full bg-blue-500 animate-pulse" />
      </div>
      <div className="flex flex-col">
        <span className="font-mono text-xs font-semibold tracking-wider text-white uppercase leading-none">LUXURY<span className="text-blue-500">.</span>DEV</span>
        <span className="text-[7px] font-mono tracking-widest text-zinc-500 uppercase leading-none mt-0.5">ARCHITECTS</span>
      </div>
    </div>
  );
};
export default Logo;
