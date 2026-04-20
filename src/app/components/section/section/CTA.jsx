// components/CTA.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/app/components/uis/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-br from-[#1a1512] to-[#0f0f0f]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Siap Menikmati Kopi Terbaik?
          </h2>
          <p className="text-gray-400 mb-8 text-sm sm:text-base">
            Dapatkan pengalaman kopi premium langsung dari petani terbaik
            Indonesia
          </p>
          <Button
            className="bg-gradient-to-r from-[#c8a97e] to-[#dbbc91] hover:from-[#b8986e] hover:to-[#c8a97e] text-black font-semibold px-8 py-6 rounded-full text-base shadow-lg shadow-[#c8a97e]/25 transition-all duration-300 hover:scale-105"
            asChild
          >
            <Link href="#produk" className="flex items-center gap-2">
              Beli Sekarang
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
