'use client';

import { motion } from 'framer-motion';
import { Users, Coffee, Award } from 'lucide-react';
import { SECTION_LABEL, HEADLINE, STATS, IMAGES } from './About.constants';
import {
  imageColumn,
  contentColumn,
  label,
  headline,
  description,
  statsContainer,
  statItem,
  viewport,
} from './About.animations';

const iconMap = { Users, Coffee, Award };

export default function About() {
  return (
    <section id="tentang" className="py-16 sm:py-20 md:py-28 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* IMAGE */}
          <motion.div
            variants={imageColumn}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src={IMAGES[0].src}
                alt={IMAGES[0].alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-gold/5 rounded-2xl -z-10" />
            <div className="absolute -top-5 -left-5 w-24 h-24 border border-gold/20 rounded-2xl -z-10" />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            variants={contentColumn}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {/* LABEL */}
            <motion.div
              variants={label}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 mb-4"
            >
              <span className="text-[10px] text-gold tracking-wider uppercase font-semibold">
                {SECTION_LABEL}
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h2
              variants={headline}
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6"
            >
              <span className="text-white">{HEADLINE.main}</span>
              <br />
              <span className="text-gradient-gold">{HEADLINE.sub}</span>
            </motion.h2>

            {/* DESCRIPTION (FIXED) */}
            <motion.div
              variants={description}
              className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed"
            >
              {HEADLINE.description.split('\n').map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </motion.div>

            {/* STATS */}
            <motion.div
              variants={statsContainer}
              className="grid grid-cols-3 gap-4 sm:gap-6 mt-8"
            >
              {STATS.map((stat) => {
                const Icon = iconMap[stat.icon];

                return (
                  <motion.div
                    key={stat.label}
                    variants={statItem}
                    className="text-center p-3 rounded-xl bg-white/5 border border-white/10"
                  >
                    <Icon className="w-5 h-5 text-gold mx-auto mb-2" />
                    <div className="text-xl sm:text-2xl font-serif font-bold text-gold">
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-gray-400 mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}