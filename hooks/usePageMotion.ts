import { useEffect } from "react";
import { animate } from "framer-motion";

const targets =
  "[data-reveal], .team-card, .service-card, main > div > section, main > div > header, main > div > article";

/** Scroll owns CSS translate; hover interactions keep ownership of transform. */
export function usePageMotion(pathname: string) {
  useEffect(() => {
    const main = document.getElementById("main-content");
    if (!main) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const items = new Map<
      HTMLElement,
      {
        opacity: string;
        translate: string;
        start: string;
        delay: number;
        animation?: { stop: () => void };
        revealed: boolean;
        floating: boolean;
      }
    >();
    let disposed = false;
    const show = (el: HTMLElement, instant = false) => {
      const item = items.get(el);
      if (!item || item.revealed) return;
      item.revealed = true;
      item.animation?.stop();
      el.dataset.scrollState = "entering";
      if (instant || preference.matches) {
        el.style.opacity = item.opacity;
        el.style.translate = item.translate;
        el.dataset.scrollState = "visible";
        return;
      }
      const animation = animate(
        el,
        {
          opacity: [0, 1],
          translate: [item.start, "0px 0px"],
        },
        { duration: 0.85, delay: item.delay, ease: [0.22, 1, 0.36, 1] },
      );
      item.animation = animation;
      animation.then(() => {
        if (disposed || item.animation !== animation || !item.revealed) return;
        el.style.translate = item.translate;
        el.style.opacity = item.opacity;
        el.dataset.scrollState = "visible";
        if (item.floating) el.dataset.floating = "true";
      });
    };
    const prepare = (el: HTMLElement) => {
      const item = items.get(el);
      if (!item || preference.matches || el.contains(document.activeElement))
        return;
      item.animation?.stop();
      item.revealed = false;
      delete el.dataset.floating;
      el.dataset.scrollState = "waiting";
      el.style.opacity = "0";
      el.style.translate = item.start;
    };
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) show(el);
          else {
            const item = items.get(el);
            if (!item?.revealed || preference.matches) continue;
            item.animation?.stop();
            item.animation = undefined;
            item.revealed = false;
            el.style.opacity = item.opacity;
            el.style.translate = item.translate;
            el.dataset.scrollState = "outside";
            delete el.dataset.floating;
          }
        }
      },
      { threshold: 0, rootMargin: "0px 0px -7% 0px" },
    );
    const enrol = () => {
      for (const el of main.querySelectorAll<HTMLElement>(targets)) {
        if (items.has(el) || el.closest('[role="dialog"]')) continue;
        const card = el.matches(".team-card, .service-card, article");
        const siblings = el.parentElement
          ? Array.from(el.parentElement.children)
          : [];
        const index = card ? siblings.indexOf(el) : items.size;
        const direction =
          el.dataset.revealDirection ||
          (card
            ? ["left", "up", "right", "up"][index % 4]
            : ["up", "left", "right"][index % 3]);
        const start =
          direction === "left"
            ? "-34px 12px"
            : direction === "right"
              ? "34px 12px"
              : "0px 30px";
        items.set(el, {
          opacity: el.style.opacity,
          translate: el.style.translate,
          start,
          delay: card ? (index % 4) * 0.11 : 0,
          revealed: false,
          floating: el.matches(".service-card") && index % 2 === 1,
        });
        el.dataset.revealDirection = direction;
        if (preference.matches) show(el, true);
        else {
          prepare(el);
          observer.observe(el);
        }
      }
    };
    const restore = () => {
      items.forEach((item, el) => {
        item.animation?.stop();
        el.style.opacity = item.opacity;
        el.style.translate = item.translate;
        delete el.dataset.scrollState;
        delete el.dataset.floating;
      });
    };
    const changePreference = () => {
      observer.disconnect();
      restore();
      items.forEach((item, el) => {
        item.revealed = false;
        if (preference.matches) show(el, true);
        else {
          prepare(el);
          observer.observe(el);
        }
      });
    };
    const focus = (event: FocusEvent) => {
      items.forEach((_item, el) => {
        if (el.contains(event.target as Node)) show(el, true);
      });
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
    preference.addEventListener("change", changePreference);
    main.addEventListener("focusin", focus);
    return () => {
      disposed = true;
      content.disconnect();
      observer.disconnect();
      preference.removeEventListener("change", changePreference);
      main.removeEventListener("focusin", focus);
      restore();
    };
  }, [pathname]);
}
