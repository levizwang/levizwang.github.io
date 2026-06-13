import React from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function PageLayout({ children, className = '' }: PageLayoutProps) {
  return (
    <div className={`relative z-10 mx-auto w-full max-w-content px-6 pt-6 md:pt-10 ${className}`}>
      {children}
    </div>
  );
}
