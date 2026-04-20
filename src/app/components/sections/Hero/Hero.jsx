"use client";

import { motion } from "framer-motion";
import { Coffee, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Badge, Button } from "../../ui";
import { HERO_BADGE, HERO_CONTENT, HERO_CTAS, HERO_BG } from "./Hero.constants";
import {
  badge,
  headline,
  description,
  quote,
  ctas,
  container,
  viewport,
} from "./Hero.animations";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <div className="absolute inset-0">
        <img
          src={HERO_BG.src}
          alt={HERO_BG.alt}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/5 to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 text-center">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div variants={badge}>
            <Badge
              variant="gold"
              className="mb-6 bg-gold/10 border border-gold/30 text-gold px-4 py-2 rounded-full"
            >
              <span className="flex items-center gap-2 text-xs sm:text-sm">
                <Coffee className="w-3.5 h-3.5" />
                <span>100% Arabica</span>
                <span className="w-1 h-1 rounded-full bg-gold/50" />
                <span>Fresh Roast Daily</span>
                <Sparkles className="w-3.5 h-3.5" />
              </span>
            </Badge>
          </motion.div>

          <motion.h1
            variants={headline}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight"
          >
            <span className="text-white">{HERO_CONTENT.headline}</span>
            <br />
            <span className="text-gradient-gold">
              {HERO_CONTENT.subheadline}
            </span>
          </motion.h1>

          <motion.p
            variants={description}
            className="mt-6 text-gray-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed"
          >
            {HERO_CONTENT.description}
          </motion.p>

          <motion.p
            variants={quote}
            className="mt-2 text-gold/50 text-xs sm:text-sm italic font-serif"
          >
            {HERO_CONTENT.quote}
          </motion.p>

          <motion.div
            variants={ctas}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {HERO_CTAS.map((cta, index) => (
              <Button
                key={index}
                variant={cta.variant}
                size="xl"
                className={cta.variant === "gold" ? "px-10 py-5" : "px-10 py-5"}
                asChild
              >
                <Link href={cta.href} className="flex items-center gap-2">
                  {cta.text}
                  {cta.icon === "ArrowRight" && (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </Link>
              </Button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
