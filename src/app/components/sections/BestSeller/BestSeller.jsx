'use client';

import { motion } from 'framer-motion';
import { Star, Sparkles, Coffee } from 'lucide-react';
import { BEST_SELLER } from './BestSeller.constants';
import { leftContent, rightImage, viewport } from './BestSeller.animations';

export default function BestSeller() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-br from-[#1a1512] to-[#0f0f0f] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          <motion.div variants={leftContent} initial="hidden" whileInView="visible" viewport={viewport} className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 border border-gold/30 mb-6">
              <Star className="w-3.5 h-3.5 text-gold fill-gold" />
              <span className="text-[10px] sm:text-xs text-gold tracking-wider uppercase font-semibold">{BEST_SELLER.badge}</span>
              <Sparkles className="w-3.5 h-3.5 text-gold" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4">
              <span className="text-white">{BEST_SELLER.title}</span>
              <br />
              <span className="text-gradient-gold">{BEST_SELLER.subtitle}</span>
            </h2>

            <div className="flex items-center gap-1 justify-center lg:justify-start mb-4">
              {[...Array(BEST_SELLER.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
              <span className="text-xs text-gray-400 ml-2">{BEST_SELLER.reviews}</span>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
              {BEST_SELLER.description}
            </p>

            <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
              {BEST_SELLER.features.map((f) => (
                <span key={f} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">{f}</span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <div className="text-2xl font-bold text-gold">
                {BEST_SELLER.price}
                <span className="text-xs text-gray-400 line-through ml-2">{BEST_SELLER.originalPrice}</span>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 justify-center lg:justify-start">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-gray-400">{BEST_SELLER.stockInfo}</span>
            </div>
          </motion.div>

          <motion.div variants={rightImage} initial="hidden" whileInView="visible" viewport={viewport} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
              <img src={BEST_SELLER.image} alt={BEST_SELLER.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border border-gold/20 rounded-2xl -z-10" />
            <div className="absolute -top-3 -right-3 bg-black/80 backdrop-blur-md rounded-full px-3 py-1.5 border border-gold/30">
              <span className="flex items-center gap-1 text-[10px] text-gold">
                <Coffee className="w-3 h-3" />
                Limited Edition
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}