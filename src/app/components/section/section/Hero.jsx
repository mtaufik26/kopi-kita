// components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/app/components/uis/button";
import { Badge } from "@/app/components/uis/badge";
import { ArrowRight, Coffee, Sparkles, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Coffee background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/5 to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-6 bg-[#c8a97e]/10 border border-[#c8a97e]/30 text-[#c8a97e] px-4 py-2 rounded-full">
            <span className="flex items-center gap-2 text-xs sm:text-sm">
              <Coffee className="w-3.5 h-3.5" />
              <span>100% Arabica</span>
              <span className="w-1 h-1 rounded-full bg-[#c8a97e]/50" />
              <span>Fresh Roast Daily</span>
              <Sparkles className="w-3.5 h-3.5" />
            </span>
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight"
        >
          <span className="text-white">Nikmati Kopi</span>
          <br />
          <span className="text-gradient-gold">Premium Nusantara</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-gray-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed"
        >
          Diproses dari biji kopi pilihan, disajikan untuk pengalaman terbaik
          setiap hari.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-2 text-[#c8a97e]/50 text-xs sm:text-sm italic font-serif"
        >
          “Dari biji terbaik, untuk momen terbaik”
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            className="bg-gradient-to-r from-[#c8a97e] to-[#dbbc91] hover:from-[#b8986e] hover:to-[#c8a97e] text-black font-semibold px-8 py-5 rounded-full shadow-lg shadow-[#c8a97e]/25 transition-all duration-300 hover:scale-105"
            asChild
          >
            <Link href="#produk" className="flex items-center gap-2">
              Beli Sekarang
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button
            variant="outline"
            className="border-2 border-[#c8a97e]/50 bg-black/40 hover:bg-[#c8a97e]/10 hover:border-[#c8a97e] text-[#c8a97e] px-8 py-5 rounded-full"
            asChild
          >
            <Link href="#produk">Lihat Produk</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
