"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "../../ui";
import { STEPS } from "./HowItWorks.constants";
import {
  header,
  grid,
  card,
  helpLink,
  viewport,
} from "./HowItWorks.animations";

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <motion.div
          variants={header}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 mb-4">
            <span className="text-[10px] text-gold tracking-wider uppercase font-semibold">
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

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid md:grid-cols-3 gap-6 sm:gap-8"
        >
          {STEPS.map((step) => (
            <motion.div key={step.id} variants={card} className="relative">
              <Card className="group bg-white/5 border border-white/10 hover:border-gold/40 transition-all duration-500 hover:-translate-y-2 rounded-2xl h-full">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="text-4xl sm:text-5xl font-serif font-bold text-gold/10 mb-4">
                    {step.id}
                  </div>
                  <div className="w-16 h-16 mx-auto bg-gold/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-gold/20 transition-all duration-300">
                    <step.icon className="w-7 h-7 sm:w-8 sm:h-8 text-gold" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={helpLink}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-10 text-center"
        >
          <p className="text-xs text-gray-500">
            Butuh bantuan?{" "}
            <span className="text-gold hover:underline cursor-pointer transition-colors">
              Hubungi CS kami
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
