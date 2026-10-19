import { useEffect } from "react";
import { animate } from "framer-motion";

/** Enrol lazy route content as it appears, with one reveal per element. */
export function usePageMotion(pathname: string) {
  useEffect(() => {
    const main = document.getElementById("main-content");
    if (!main) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const registered = new Map<
      HTMLElement,
      { opacity: string; transform: string }
    >();
    const animations = new Set<{ stop: () => void }>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const { target, isIntersecting } of entries) {
          if (!isIntersecting) continue;
          const el = target as HTMLElement;
          observer.unobserve(el);
          if (preference.matches) {
            el.style.opacity = "";
            el.style.transform = "";
            continue;
          }
          const siblings = el.parentElement
            ? Array.from(el.parentElement.children)
            : [];
          const delay = el.matches(".team-card, .service-card, article")
            ? (siblings.indexOf(el) % 3) * 0.07
            : 0;
          const animation = animate(
            el,
            { opacity: 1, y: 0 },
            { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
          );
          animations.add(animation);
          animation.then(() => {
            el.style.transform = registered.get(el)?.transform || "";
            animations.delete(animation);
          });
        }
      },
      { threshold: 0.06, rootMargin: "0px 0px -20px 0px" },
    );
    const enrol = () => {
      for (const el of main.querySelectorAll<HTMLElement>(
        "[data-reveal], .team-card, .service-card, main > div > section, main > div > header, main > div > article",
      )) {
        if (registered.has(el) || el.closest('[role="dialog"]')) continue;
        registered.set(el, {
          opacity: el.style.opacity,
          transform: el.style.transform,
        });
        if (!preference.matches) {
          el.style.opacity = "0";
          el.style.transform = "translateY(22px)";
          observer.observe(el);
        }
      }
    };
    const restore = () => {
      animations.forEach((animation) => animation.stop());
      registered.forEach((before, el) => {
        el.style.opacity = before.opacity;
        el.style.transform = before.transform;
      });
    };
    const onPreference = () => {
      if (preference.matches) {
        observer.disconnect();
        restore();
      }
    };
    enrol();
    const content = new MutationObserver((records) => {
      if (
        records.some((record) =>
          Array.from(record.addedNodes).some((node) => node.nodeType === 1),
        )
      )
        enrol();
    });
    content.observe(main, { childList: true, subtree: true });
    preference.addEventListener("change", onPreference);
    return () => {
      content.disconnect();
      observer.disconnect();
      preference.removeEventListener("change", onPreference);
      restore();
    };
  }, [pathname]);
}
