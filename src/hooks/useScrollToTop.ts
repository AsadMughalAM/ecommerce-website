import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * A custom hook that scrolls the window to the top on every route change.
 * It uses useLayoutEffect to ensure the scroll happens before the browser paints the new content,
 * preventing any visible flicker.
 */
export function useScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Scroll the window to the top of the page.
    window.scrollTo(0, 0);
  }, [pathname]);
}
