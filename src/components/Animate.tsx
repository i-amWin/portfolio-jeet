"use client";
import { useEffect, useRef, useState } from "react";

interface AnimateProps {
  children: React.ReactNode;
  rootMargin?: number;
  animateIn?: string;
  duration?: number; // in seconds
  delay?: number; // in seconds
}

export default function Animate({
  children,
  rootMargin = 0,
  animateIn,
  duration = 1,
  delay = 0,
}: AnimateProps) {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry);
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: `${rootMargin}px`,
      }
    );

    if (!ref.current) return;
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [rootMargin]);

  return (
    <div
      ref={ref}
      className={`animate__animated animate__${isIntersecting && animateIn} ${
        isIntersecting ? "visible" : "invisible"
      }`}
      style={{
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
