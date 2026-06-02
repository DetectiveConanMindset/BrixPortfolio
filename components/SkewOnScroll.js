"use client";
import { useEffect, useRef, useState } from "react";

export default function SkewOnScroll({ children }) {
  const [skew, setSkew] = useState(0);
  const prevScrollY = useRef(0);
  const requestRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const velocity = scrollY - prevScrollY.current;
      prevScrollY.current = scrollY;
      
      // Limit skew to a reasonable amount
      const newSkew = Math.max(Math.min(velocity * 0.05, 5), -5);
      setSkew(newSkew);
      
      // Reset skew smoothly
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      requestRef.current = requestAnimationFrame(() => {
        setSkew(0);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div
      style={{
        transform: `skewY(${skew}deg)`,
        transition: "transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
