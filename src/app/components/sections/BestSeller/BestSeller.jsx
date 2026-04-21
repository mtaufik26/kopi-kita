"use client";

import { motion } from "framer-motion";
import { Star, Sparkles, Coffee, ShieldCheck, Truck } from "lucide-react";
import { BEST_SELLER } from "./BestSeller.constants";
import { leftContent, rightImage, viewport } from "./BestSeller.animations";

export default function BestSeller() {
  return (
    <section className="relative py-20 sm:py-28 md:py-36 bg-[#0f0f0f] overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-gold/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            variants={leftContent}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="space-y-6 text-center lg:text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30">
              <Star className="w-3.5 h-3.5 text-gold fill-gold" />
              <span className="text-xs font-semibold text-gold uppercase tracking-wide">
                {BEST_SELLER.badge}
              </span>
              <Sparkles className="w-3.5 h-3.5 text-gold" />
            </div>

            {/* Title */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight">
              <span className="text-white">{BEST_SELLER.title}</span>
              <br />
              <span className="text-gradient-gold">
                {BEST_SELLER.subtitle}
              </span>
            </h2>

            {/* Rating */}
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <div className="flex gap-0.5">
                {[...Array(BEST_SELLER.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-sm text-gray-400">
                {BEST_SELLER.reviews}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {BEST_SELLER.description}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {BEST_SELLER.features.map((f) => (
                <span
                  key={f}
                  className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-200"
                >
                  {f}
                </span>
              ))}
            </div>

            {/* Price */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <span className="text-3xl sm:text-4xl font-bold text-gold">
                  {BEST_SELLER.price}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  {BEST_SELLER.originalPrice}
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-gold/20 text-gold">
                  Hemat
                </span>
              </div>

              {/* INFO (SUDAH FIX OFFLINE) */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-gray-400">

                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>{BEST_SELLER.stockInfo}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-gold/70" />
                  <span className="text-xs">
                    Bisa order via GoFood / GrabFood
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold/70" />
                  <span className="text-xs">
                    Fresh dibuat saat dipesan
                  </span>
                </div>

              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            variants={rightImage}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md">
              
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/60 bg-black/30">
                <img
                  src={BEST_SELLER.image}
                  alt={BEST_SELLER.title}
                  className="w-full h-auto object-contain transition duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </div>

              {/* Badge atas */}
              <div className="absolute -top-3 -right-3 bg-black/80 rounded-full px-4 py-1 border border-gold/40">
                <span className="text-xs text-gold flex items-center gap-1">
                  <Coffee className="w-3.5 h-3.5" />
                  Lagi Hits 🔥
                </span>
              </div>

              {/* Badge bawah */}
              <div className="absolute -bottom-4 left-6 bg-black/60 rounded-full px-3 py-1 border border-white/10">
                <span className="text-[10px] text-gray-300 flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5 text-gold" />
                  Banyak yang repeat order
                </span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}