import { useEffect, useRef } from 'react';

export default function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    const targets = el.querySelectorAll('.reveal');
    targets.forEach((t) => observer.observe(t));
    if (el.classList.contains('reveal')) observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
