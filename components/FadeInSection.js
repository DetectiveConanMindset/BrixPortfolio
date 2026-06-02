"use client";
import { useEffect, useRef, useState } from "react";

export default function FadeInSection({ 
  children, 
  delay = 0, 
  direction = "up",
  threshold = 0.1,
  once = false
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -100px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, once]);

  const getTransform = () => {
    if (!visible) {
      switch (direction) {
        case "up": return "translateY(50px)";
        case "down": return "translateY(-50px)";
        case "left": return "translateX(50px)";
        case "right": return "translateX(-50px)";
        case "scale": return "scale(0.9)";
        default: return "translateY(50px)";
      }
    }
    return direction === "scale" ? "scale(1)" : "translate(0, 0)";
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 1s cubic-bezier(0.2, 0.8, 0.2, 1) ${delay}ms, transform 1s cubic-bezier(0.2, 0.8, 0.2, 1) ${delay}ms`,
        willChange: "transform, opacity",
        padding: "1rem 0",
      }}
    >
      {children}
    </div>
  );
}
