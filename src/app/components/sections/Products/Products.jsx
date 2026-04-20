"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "../../ui";
import { Button } from "../../ui";
import { ShoppingCart, Star } from "lucide-react";
import { PRODUCTS, formatPrice } from "./Products.constants";
import { header, grid, card, viewport } from "./Products.animations";

export default function Products() {
  return (
    <section id="produk" className="py-16 sm:py-20 md:py-28 bg-black">
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
              Our Collection
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold">
            <span className="text-white">Produk</span>
            <br />
            <span className="text-gradient-gold">Premium Kami</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
            Pilihan biji kopi terbaik dari berbagai daerah di Indonesia
          </p>
        </motion.div>

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {PRODUCTS.map((product) => (
            <motion.div key={product.id} variants={card}>
              <Card className="group bg-white/5 border border-white/10 hover:border-gold/40 transition-all duration-500 hover:-translate-y-2 rounded-2xl overflow-hidden h-full">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {product.isBestSeller && (
                    <div className="absolute top-3 left-3 bg-gold text-black text-[10px] font-semibold px-2 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3 fill-black" /> Best Seller
                    </div>
                  )}
                  {product.originalPrice && (
                    <div className="absolute top-3 right-3 bg-red-500/90 text-white text-[10px] font-semibold px-2 py-1 rounded-full">
                      Save{" "}
                      {Math.round(
                        ((product.originalPrice - product.price) /
                          product.originalPrice) *
                          100,
                      )}
                      %
                    </div>
                  )}
                </div>

                <CardContent className="p-5">
                  <div className="mb-3">
                    <span className="text-[10px] text-gold bg-gold/10 px-2 py-0.5 rounded-full">
                      {product.roast}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-serif font-semibold text-white mb-1 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-[11px] text-gray-400 mb-3">
                    {product.origin}
                  </p>

                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex items-center gap-0.5">
                      <Star className="w-3 h-3 fill-gold text-gold" />
                      <span className="text-xs text-white">
                        {product.rating}
                      </span>
                    </div>
                    <span className="text-[10px] text-gray-500">
                      (120+ reviews)
                    </span>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <div>
                      <span className="text-lg sm:text-xl font-bold text-gold">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-[10px] text-gray-500 line-through ml-2">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>
                    <Button
                      size="icon-sm"
                      className="bg-gold hover:bg-gold-dark text-black rounded-full w-8 h-8 p-0 transition-all duration-300 hover:scale-110"
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
