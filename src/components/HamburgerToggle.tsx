import React from 'react';

interface HamburgerToggleProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export const HamburgerToggle: React.FC<HamburgerToggleProps> = ({
  isOpen,
  onClick,
  className = ''
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative w-10 h-10 rounded-xl bg-white/60 hover:bg-white/80 backdrop-blur-md border border-white/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500/50 group ${className}`}
      aria-label={isOpen ? 'إغلاق الشريط الجانبي' : 'فتح الشريط الجانبي'}
      aria-expanded={isOpen}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-5 h-4 flex flex-col justify-between">
          {/* Top line */}
          <span
            className={`block h-0.5 bg-gray-600 rounded-full transition-all duration-300 origin-center ${
              isOpen
                ? 'rotate-45 translate-y-1.5 w-5'
                : 'rotate-0 translate-y-0 w-5'
            }`}
          />
          
          {/* Middle line */}
          <span
            className={`block h-0.5 bg-gray-600 rounded-full transition-all duration-300 ${
              isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100 w-4'
            }`}
          />
          
          {/* Bottom line */}
          <span
            className={`block h-0.5 bg-gray-600 rounded-full transition-all duration-300 origin-center ${
              isOpen
                ? '-rotate-45 -translate-y-1.5 w-5'
                : 'rotate-0 translate-y-0 w-3'
            }`}
          />
        </div>
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/0 to-orange-600/0 group-hover:from-orange-500/5 group-hover:to-orange-600/5 transition-all duration-200" />
    </button>
  );
};