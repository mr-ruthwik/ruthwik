import { useEffect, useRef, useState } from "react";

/**
 * Reveals an element (adds a "visible" class) once it scrolls into view.
 * Mirrors the original IntersectionObserver logic in script.js.
 *
 * @param {number} delay - ms to wait after intersecting before revealing
 * @returns {[React.RefObject, boolean]} ref to attach + whether it's visible
 */
export default function useReveal(delay = 0) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timer;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timer = setTimeout(() => setVisible(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [delay]);

  return [ref, visible];
}
