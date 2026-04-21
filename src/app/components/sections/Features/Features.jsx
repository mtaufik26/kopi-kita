"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "../../ui";
import { FEATURES } from "./Features.constants";
import { header, grid, card, viewport } from "./Features.animations";

export default function Features() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        
        {/* HEADER */}
        <motion.div
          variants={header}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 mb-4">
            <span className="text-[10px] text-gold tracking-wider uppercase font-semibold">
              Kenapa Kopi Kita?
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold">
            <span className="text-white">Ngopi Jadi</span>
            <br />
            <span className="text-gradient-gold">Lebih Santai</span>
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto mt-4 text-sm sm:text-base">
            Gak perlu ribet, tinggal nikmatin kopi dingin yang fresh kapan aja
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {FEATURES.map((feature, index) => (
            <motion.div key={index} variants={card}>
              <Card className="group bg-white/5 border border-white/10 hover:border-gold/40 transition-all duration-500 hover:-translate-y-2 rounded-2xl h-full">
                
                <CardContent className="p-6 text-center">
                  
                  {/* ICON */}
                  <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-gold" />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {feature.desc}
                  </p>

                </CardContent>

              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}