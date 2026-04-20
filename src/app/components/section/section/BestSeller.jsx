// components/BestSeller.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/app/components/uis/button";
import { Star, ArrowRight, Coffee, Sparkles } from "lucide-react";
import Link from "next/link";

export default function BestSeller() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-br from-[#1a1512] to-[#0f0f0f] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#c8a97e]/20 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#c8a97e]/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Best Seller Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c8a97e]/15 border border-[#c8a97e]/30 mb-6">
              <Star className="w-3.5 h-3.5 text-[#c8a97e] fill-[#c8a97e]" />
              <span className="text-[10px] sm:text-xs text-[#c8a97e] tracking-wider uppercase font-semibold">
                Best Seller
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#c8a97e]" />
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4">
              <span className="text-white">Arabica Gayo</span>
              <br />
              <span className="text-gradient-gold">Premium</span>
            </h2>

            {/* Rating */}
            <div className="flex items-center gap-1 justify-center lg:justify-start mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-[#c8a97e] text-[#c8a97e]"
                />
              ))}
              <span className="text-xs text-gray-400 ml-2">(500+ reviews)</span>
            </div>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
              Dipilih sebagai favorit pelanggan karena profil rasa yang
              seimbang:
              <span className="text-[#c8a97e] font-medium">
                {" "}
                cokelat, kacang, dan aftertaste yang bersih
              </span>
              . Cocok untuk daily brew maupun manual brew.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
              {["Medium Roast", "Single Origin", "Specialty Grade"].map(
                (feature) => (
                  <span
                    key={feature}
                    className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                  >
                    {feature}
                  </span>
                ),
              )}
            </div>

            {/* Price & CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <div className="text-2xl font-bold text-[#c8a97e]">
                Rp95.000
                <span className="text-xs text-gray-400 line-through ml-2">
                  Rp120.000
                </span>
              </div>
            </div>

            {/* Stock Info */}
            <div className="mt-6 flex items-center gap-2 justify-center lg:justify-start">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-gray-400">
                Ready Stock • Free Shipping
              </span>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
              <img
                src="https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
                alt="Arabica Gayo Premium Coffee"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#c8a97e]/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border border-[#c8a97e]/20 rounded-2xl -z-10" />

            {/* Floating Badge */}
            <div className="absolute -top-3 -right-3 bg-black/80 backdrop-blur-md rounded-full px-3 py-1.5 border border-[#c8a97e]/30">
              <span className="flex items-center gap-1 text-[10px] text-[#c8a97e]">
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
