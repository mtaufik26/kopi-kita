// components/About.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/app/components/uis/button";
import { Users, Coffee, Award } from "lucide-react";

export default function About() {
  return (
    <section id="tentang" className="py-16 sm:py-20 md:py-28 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1610632380989-680fe40816c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Coffee roasting"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-[#c8a97e]/5 rounded-2xl -z-10" />
            <div className="absolute -top-5 -left-5 w-24 h-24 border border-[#c8a97e]/20 rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c8a97e]/10 border border-[#c8a97e]/20 mb-4">
              <span className="text-[10px] text-[#c8a97e] tracking-wider uppercase font-semibold">
                Our Story
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6">
              <span className="text-white">Tentang</span>
              <br />
              <span className="text-gradient-gold">Kopi Kami</span>
            </h2>

            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                Biji kopi kami dipetik langsung dari dataran tinggi{" "}
                <span className="text-[#c8a97e] font-medium">
                  Gayo, Toraja, dan Kintamani
                </span>
                . Setiap batch di-roasting dengan suhu terkontrol untuk
                menghasilkan profil rasa yang konsisten.
              </p>
              <p>
                Kami bekerja sama langsung dengan petani lokal, memastikan
                proses yang adil dan berkelanjutan. Quality control ketat
                dilakukan di setiap tahap, dari seleksi biji hijau hingga
                pengemasan premium.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-8">
              {[
                { icon: Users, label: "Petani Mitra", value: "50+" },
                { icon: Coffee, label: "Varian Kopi", value: "12" },
                { icon: Award, label: "Pelanggan", value: "5K+" },
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="text-center p-3 rounded-xl bg-white/5 border border-white/10"
                >
                  <stat.icon className="w-5 h-5 text-[#c8a97e] mx-auto mb-2" />
                  <div className="text-xl sm:text-2xl font-serif font-bold text-[#c8a97e]">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-gray-400 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
