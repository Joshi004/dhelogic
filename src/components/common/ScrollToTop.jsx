import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const scrollToEl = () => {
        const el = document.getElementById(hash.slice(1));
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return !!el;
      };
      // Target may not be mounted yet (pages mount under AnimatePresence)  retry once.
      if (scrollToEl()) return;
      const t = setTimeout(scrollToEl, 250);
      return () => clearTimeout(t);
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;

