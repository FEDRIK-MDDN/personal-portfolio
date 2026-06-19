import { useEffect, useRef, useCallback } from 'react';

/**
 * useScrollReveal — Bi-directional smooth scroll animation hook
 *
 * Scroll DOWN → elements animate IN from below (fade-up, etc.)
 * Scroll UP  → elements animate OUT going UP (not snapping back down)
 * Re-enter   → smooth transition from whichever direction
 *
 * States:
 *   [no class]      → element is BELOW viewport (initial / exit-bottom)
 *   .is-visible     → element is IN viewport
 *   .is-exit-top    → element has scrolled ABOVE viewport
 */
const useScrollReveal = (options = {}) => {
  const ref = useRef(null);
  const { threshold = 0.1 } = options;
  const timers = useRef([]);

  const observe = useCallback(() => {
    const section = ref.current;
    if (!section) return;

    const targets = Array.from(section.querySelectorAll('[data-reveal]'));
    if (!targets.length) return;

    // Per-element pending timers so rapid scrolls cancel stale delayed shows
    const pendingTimers = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          const delay = Number(el.dataset.delay || 0);

          if (entry.isIntersecting) {
            // ── ENTERING VIEWPORT ──────────────────────────────────────
            // Cancel any pending hide
            if (pendingTimers.has(el)) {
              clearTimeout(pendingTimers.get(el));
              pendingTimers.delete(el);
            }

            const t = setTimeout(() => {
              el.classList.remove('is-exit-top');
              el.classList.add('is-visible');
            }, delay);

            pendingTimers.set(el, t);
            timers.current.push(t);

          } else {
            // ── LEAVING VIEWPORT ───────────────────────────────────────
            // Cancel any pending show
            if (pendingTimers.has(el)) {
              clearTimeout(pendingTimers.get(el));
              pendingTimers.delete(el);
            }

            const rect = entry.boundingClientRect;

            if (rect.top < 0) {
              // Element exited from the TOP → went above viewport
              // → Slide it further up (matches scroll direction)
              el.classList.remove('is-visible');
              el.classList.add('is-exit-top');
            } else {
              // Element exited from the BOTTOM → went below viewport
              // → Reset to initial bottom-entry state (ready for next scroll down)
              el.classList.remove('is-visible', 'is-exit-top');
            }
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -20px 0px',
      }
    );

    targets.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      timers.current.forEach(clearTimeout);
      pendingTimers.forEach(clearTimeout);
    };
  }, [threshold]);

  useEffect(() => {
    const cleanup = observe();
    return cleanup;
  }, [observe]);

  return ref;
};

export default useScrollReveal;
