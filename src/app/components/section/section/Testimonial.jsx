"use client";

import { motion, useMotionValue } from "framer-motion";
import { Card, CardContent } from "@/app/components/uis/card";
import { Star, Quote } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const testimonials = [
  {
    name: "Andi Wijaya",
    role: "Coffee Enthusiast",
    text: "Kopi terbaik yang pernah saya coba! Aroma dan rasanya benar-benar premium.",
    rating: 5,
  },
  {
    name: "Siti Rahma",
    role: "Cafe Owner",
    text: "Pelanggan saya sangat suka dengan kopi dari sini. Kualitasnya konsisten!",
    rating: 5,
  },
  {
    name: "Budi Santoso",
    role: "Home Barista",
    text: "Pengiriman cepat, kemasan rapi, dan kopinya selalu fresh. Highly recommended!",
    rating: 5,
  },
];

// cukup 2x biar seamless
const loopedTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);

  const containerRef = useRef(null);
  const x = useMotionValue(0);

  // hitung lebar card
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

  // 🔥 smooth infinite animation (no reset, no glitch)
  useEffect(() => {
    if (!cardWidth) return;

    let frame;
    const speed = 1.5; // px per frame (atur disini)

    const totalWidth = cardWidth * testimonials.length;

    const animate = () => {
      if (!isPaused) {
        let current = x.get();
        current -= speed;

        // reset tanpa keliatan
        if (Math.abs(current) >= totalWidth) {
          current = 0;
        }

        x.set(current);
      }

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [cardWidth, isPaused, x]);

  const handlePause = () => setIsPaused(true);
  const handleResume = () => setIsPaused(false);

  return (
    <section className="py-20 bg-[#0f0f0f] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">
            Apa Kata Pelanggan Kami?
          </h2>
        </div>

        {/* CONTAINER */}
        <div
          ref={containerRef}
          className="relative overflow-hidden"
          onMouseEnter={handlePause}
          onMouseLeave={handleResume}
          onTouchStart={handlePause}
          onTouchEnd={handleResume}
        >
          <motion.div className="flex gap-6" style={{ x }}>
            {loopedTestimonials.map((testimonial, index) => (
              <div key={index} data-card className="flex-shrink-0 w-72 sm:w-80">
                <Card className="bg-white/5 border border-white/10 rounded-2xl h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <Quote className="w-8 h-8 text-yellow-500/30 mb-4" />

                    <p className="text-gray-300 text-sm mb-4 flex-grow min-h-[80px]">
                      "{testimonial.text}"
                    </p>

                    <div className="flex gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-500 text-yellow-500"
                        />
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

          {/* gradient */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0f0f0f] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0f0f0f] to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
