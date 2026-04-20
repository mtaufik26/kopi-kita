'use client';
import { useEffect, useState, useRef } from 'react';

export function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (options.once) observer.unobserve(ref.current);
        } else if (!options.once) {
          setIsInView(false);
        }
      },
      { threshold: options.threshold || 0.1, rootMargin: options.margin || '-50px' }
    );
    
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);
  
  return [ref, isInView];
}