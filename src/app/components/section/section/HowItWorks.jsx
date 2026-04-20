// components/sections/HowItWorks.tsx
"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/app/components/uis/card";
import { MousePointerClick, CreditCard, Truck } from "lucide-react";

// Constants
const steps = [
  {
    id: "01",
    icon: MousePointerClick,
    title: "Pilih Produk",
    description: "Pilih varian kopi sesuai selera dari koleksi premium kami",
  },
  {
    id: "02",
    icon: CreditCard,
    title: "Bayar & Konfirmasi",
    description:
      "Checkout via WhatsApp atau transfer bank, konfirmasi otomatis",
  },
  {
    id: "03",
    icon: Truck,
    title: "Dikirim ke Rumah",
    description:
      "Pesanan diproses & dikirim dengan packaging vacuum seal yang aman",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Section Header */}
        <SectionHeader />

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-6 sm:gap-8"
        >
          {steps.map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </motion.div>

        {/* Help Link */}
        <HelpLink />
      </div>
    </section>
  );
}

// ============ Subcomponents ============

function SectionHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12 sm:mb-16"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c8a97e]/10 border border-[#c8a97e]/20 mb-4">
        <span className="text-[10px] text-[#c8a97e] tracking-wider uppercase font-semibold">
          Easy Process
        </span>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold">
        <span className="text-white">Cara</span>
        <br />
        <span className="text-gradient-gold">Pemesanan</span>
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
        Proses pemesanan yang mudah, cepat, dan aman
      </p>
    </motion.div>
  );
}

function StepCard({ step }) {
  return (
    <motion.div variants={itemVariants} className="relative">
      <Card className="group bg-white/5 border border-white/10 hover:border-[#c8a97e]/40 transition-all duration-500 hover:-translate-y-2 rounded-2xl h-full">
        <CardContent className="p-6 sm:p-8 text-center">
          {/* Step Number */}
          <div className="text-4xl sm:text-5xl font-serif font-bold text-[#c8a97e]/10 mb-4">
            {step.id}
          </div>

          {/* Icon */}
          <div className="w-16 h-16 mx-auto bg-[#c8a97e]/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#c8a97e]/20 transition-all duration-300">
            <step.icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#c8a97e]" />
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-serif font-semibold text-white mb-2">
            {step.title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
            {step.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function HelpLink() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="mt-10 text-center"
    >
      <p className="text-xs text-gray-500">
        Butuh bantuan?{" "}
        <span className="text-[#c8a97e] hover:underline cursor-pointer transition-colors">
          Hubungi CS kami
        </span>
      </p>
    </motion.div>
  );
}
