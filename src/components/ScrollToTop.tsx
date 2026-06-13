import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Resets scroll to the top whenever the route changes (SPA navigation
 *  otherwise keeps the previous scroll position, landing you mid-page). */
export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}
