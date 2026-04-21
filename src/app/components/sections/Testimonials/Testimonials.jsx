"use client";

import { motion, useMotionValue } from "framer-motion";
import { Card, CardContent } from "../../ui";
import { Star, Quote } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { TESTIMONIALS, LOOPED_TESTIMONIALS } from "./Testimonials.constants";
import { header, viewport } from "./Testimonials.animations";

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);
  const containerRef = useRef(null);
  const x = useMotionValue(0);

  useEffect(() => {
    const update = () => {
      const card = containerRef.current?.querySelector("[data-card]");
      if (card instanceof HTMLElement) {
        const gap = 24;
        setCardWidth(card.offsetWidth + gap);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (!cardWidth) return;
    let frame;
    const speed = 1.5;
    const totalWidth = cardWidth * TESTIMONIALS.length;

    const animate = () => {
      if (!isPaused) {
        let current = x.get();
        current -= speed;
        if (Math.abs(current) >= totalWidth) current = 0;
        x.set(current);
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [cardWidth, isPaused, x]);

  return (
    <section id="testimoni" className="relative py-20 bg-[#0f0f0f] overflow-hidden">
      
      {/* 🔥 Ambient glow (biar nyatu sama BestSeller) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-1/4 w-[28rem] h-[28rem] bg-gold/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        
        {/* HEADER */}
        <motion.div
          variants={header}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white">
            Kata Mereka Tentang Kopi Kita
          </h2>
        </motion.div>

        {/* SLIDER */}
        <div
          ref={containerRef}
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <motion.div className="flex gap-6" style={{ x }}>
            {LOOPED_TESTIMONIALS.map((testimonial, index) => (
              <div key={index} data-card className="flex-shrink-0 w-72 sm:w-80">
                
                <Card className="bg-black/40 backdrop-blur-sm border border-white/10 shadow-xl shadow-black/40 rounded-2xl h-full">
                  
                  <CardContent className="p-6 flex flex-col h-full">
                    
                    <Quote className="w-8 h-8 text-gold/30 mb-4" />

                    <p className="text-gray-300 text-sm mb-4 flex-grow min-h-[80px] leading-relaxed">
                      "{testimonial.text}"
                    </p>

                    <div className="flex gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                      ))}
                    </div>

                    <div>
                      <p className="text-white font-semibold text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {testimonial.role}
                      </p>
                    </div>

                  </CardContent>
                </Card>

              </div>
            ))}
          </motion.div>

          {/* Fade kiri kanan */}
          <div className="absolute inset-y-0 left-0 w-20 bg-[#0f0f0f] pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-[#0f0f0f] pointer-events-none" />
        </div>
      </div>
    </section>
  );
}