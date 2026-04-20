// components/Features.tsx
"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/app/components/uis/card";
import { Bean, Flame, Truck, Leaf } from "lucide-react";

const features = [
  {
    icon: Bean,
    title: "Biji Kopi Pilihan",
    desc: "Dipilih langsung dari petani terbaik Indonesia",
  },
  {
    icon: Flame,
    title: "Fresh Roast Daily",
    desc: "Dipanggang setiap hari dengan suhu terkontrol",
  },
  {
    icon: Truck,
    title: "Pengiriman Cepat",
    desc: "Kemasan vacuum seal yang aman dan higienis",
  },
  {
    icon: Leaf,
    title: "100% Alami",
    desc: "Tanpa bahan tambahan atau perisa buatan",
  },
];

export default function Features() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c8a97e]/10 border border-[#c8a97e]/20 mb-4">
            <span className="text-[10px] text-[#c8a97e] tracking-wider uppercase font-semibold">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold">
            <span className="text-white">Mengapa Memilih</span>
            <br />
            <span className="text-gradient-gold">Kopi Kami?</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group bg-white/5 border border-white/10 hover:border-[#c8a97e]/40 transition-all duration-500 hover:-translate-y-2 rounded-2xl h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-[#c8a97e]/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-[#c8a97e]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {feature.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
