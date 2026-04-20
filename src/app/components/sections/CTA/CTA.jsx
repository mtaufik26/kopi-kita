"use client";

import { motion } from "framer-motion";
import { Button } from "../../ui";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CTA_CONTENT } from "./CTA.constants";
import { container, viewport } from "./CTA.animations";

export default function CTA() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-br from-[#1a1512] to-[#0f0f0f]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            {CTA_CONTENT.title}
          </h2>
          <p className="text-gray-400 mb-8 text-sm sm:text-base">
            {CTA_CONTENT.description}
          </p>
          <Button variant="gold" size="xl" className="px-10 py-5" asChild>
            <Link
              href={CTA_CONTENT.buttonHref}
              className="flex items-center gap-2"
            >
              {CTA_CONTENT.buttonText}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
