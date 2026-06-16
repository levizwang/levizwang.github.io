import React from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
  /** Max-width utility for the content column. Defaults to the design token. */
  width?: string;
}

export function PageLayout({ children, className = '', width = 'max-w-content' }: PageLayoutProps) {
  return (
    <div className={`relative z-10 mx-auto w-full ${width} px-6 pt-6 md:pt-10 ${className}`}>
      {children}
    </div>
  );
}
