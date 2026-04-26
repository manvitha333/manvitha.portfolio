import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const dotX = useSpring(x, { damping: 30, stiffness: 800 });
  const dotY = useSpring(y, { damping: 30, stiffness: 800 });
  const ringX = useSpring(x, springConfig);
  const ringY = useSpring(y, springConfig);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [data-cursor='hover']")) setHovering(true);
      else setHovering(false);
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%", opacity: visible ? 1 : 0 }}
      >
        <div className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow" />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%", opacity: visible ? 1 : 0 }}
        animate={{ scale: hovering ? 1.8 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div
          className={`h-9 w-9 rounded-full border transition-colors duration-200 ${
            hovering ? "border-secondary/80 bg-secondary/10" : "border-primary/50"
          }`}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
