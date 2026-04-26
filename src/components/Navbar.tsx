import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const { scrollY } = useScroll();
  const [active, setActive] = useState("about");
  const padding = useTransform(scrollY, [0, 200], ["1.5rem", "0.75rem"]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter((el): el is HTMLElement => el instanceof HTMLElement);

    if (sections.length === 0) return;

    // Track visibility ratios so we can pick the most-visible section.
    const ratios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.intersectionRatio);
        });

        let topId = "";
        let topRatio = 0;
        ratios.forEach((ratio, id) => {
          if (ratio > topRatio) {
            topRatio = ratio;
            topId = id;
          }
        });

        if (topId && topRatio > 0) setActive(topId);
      },
      {
        // Bias toward the section currently under the navbar area.
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      style={{ paddingTop: padding, paddingBottom: padding }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 transition-all"
    >
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`flex items-center gap-1 rounded-full px-2 py-2 transition-all duration-500 ${
          scrolled ? "glass-strong shadow-elegant" : "glass"
        }`}
      >
        <a
          href="#top"
          className="ml-2 mr-3 flex items-center gap-2 px-2 font-mono text-sm font-semibold"
        >
          <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow">
            M
          </span>
          <span className="hidden sm:inline text-gradient">manvitha.dev</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {active === l.href.slice(1) && (
                <motion.span
                  layoutId="navActive"
                  className="absolute inset-0 rounded-full bg-gradient-primary opacity-90"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className={`relative z-10 ${active === l.href.slice(1) ? "text-primary-foreground font-medium" : ""}`}>
                {l.label}
              </span>
            </a>
          ))}
        </div>
        <a
          href="mailto:a.manvitha333@gmail.com"
          className="ml-1 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:scale-105"
        >
          Hire me
        </a>
      </motion.nav>
    </motion.header>
  );
};

export default Navbar;
