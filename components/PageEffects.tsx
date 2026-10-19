import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { descriptions } from "../data/metadata";

export default function PageEffects() {
  const { pathname } = useLocation();
  useEffect(() => {
    const [title, description] =
      descriptions[pathname] ||
      (pathname.startsWith("/blog/")
        ? ["Journal article", descriptions["/blog"][1]]
        : [
            "Page not found",
            "Find services, contact information and patient information at GMC.",
          ]);
    document.title =
      pathname === "/" ? title : `${title} | Goodwill Medical Centre`;
    for (const [selector, content] of [
      ['meta[name="description"]', description],
      ['meta[property="og:title"]', document.title],
      ['meta[property="og:description"]', description],
    ]) {
      document.querySelector(selector)?.setAttribute("content", content);
    }
    const canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (canonical) {
      canonical.href = new URL(pathname, new URL(canonical.href).origin).href;
      document
        .querySelector('meta[property="og:url"]')
        ?.setAttribute("content", canonical.href);
    }
    if (pathname !== "/")
      document.getElementById("main-content")?.focus({ preventScroll: true });
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    )
      return;
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    elements.forEach((el) => {
      el.classList.add("will-reveal");
      observer.observe(el);
    });
    return () => {
      observer.disconnect();
      elements.forEach((el) => el.classList.remove("will-reveal"));
    };
  }, [pathname]);
  return null;
}
