'use client';

import { useState, useRef, useEffect } from 'react';

interface JargonTermProps {
  term: string;
  definition: string;
  children?: React.ReactNode;
}

export default function JargonTerm({ term, definition, children }: JargonTermProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<'top' | 'bottom'>('top');
  const termRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  // Calculate tooltip position to avoid viewport overflow
  useEffect(() => {
    if (isOpen && termRef.current && tooltipRef.current) {
      const termRect = termRef.current.getBoundingClientRect();
      const tooltipHeight = tooltipRef.current.offsetHeight;
      const spaceAbove = termRect.top;
      const spaceBelow = window.innerHeight - termRect.bottom;

      // Position below if not enough space above
      if (spaceAbove < tooltipHeight + 20 && spaceBelow > tooltipHeight + 20) {
        setPosition('bottom');
      } else {
        setPosition('top');
      }
    }
  }, [isOpen]);

  return (
    <span className="relative inline-block">
      <span
        ref={termRef}
        className="jargon-term"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onTouchStart={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        role="button"
        tabIndex={0}
        aria-label={`Definition: ${definition}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
      >
        {children || term}
      </span>

      {isOpen && (
        <div
          ref={tooltipRef}
          className={`jargon-tooltip ${position === 'bottom' ? 'tooltip-bottom' : 'tooltip-top'}`}
          role="tooltip"
        >
          <div className="tooltip-content">
            <span className="tooltip-term">{term}</span>
            <p className="tooltip-definition">{definition}</p>
          </div>
          <div className="tooltip-arrow" />
        </div>
      )}
    </span>
  );
}
