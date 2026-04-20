// components/sections/Products.tsx
"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/app/components/uis/card";
import { Button } from "@/app/components/uis/button";
import { ShoppingCart, Star } from "lucide-react";
import Link from "next/link";

// Constants
const products = [
  {
    id: 1,
    name: "Gayo Arabica",
    origin: "Aceh, Gayo",
    price: 85000,
    originalPrice: 120000,
    image:
      "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    roast: "Medium Roast",
    rating: 4.8,
    isBestSeller: true,
  },
  {
    id: 2,
    name: "Toraja Sapan",
    origin: "Sulawesi, Toraja",
    price: 95000,
    originalPrice: 135000,
    image:
      "https://images.pexels.com/photos/2876958/pexels-photo-2876958.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    roast: "Dark Roast",
    rating: 4.7,
    isBestSeller: false,
  },
  {
    id: 3,
    name: "Kintamani Bali",
    origin: "Bali, Kintamani",
    price: 90000,
    originalPrice: 125000,
    image:
      "https://images.pexels.com/photos/3029141/pexels-photo-3029141.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    roast: "Light Roast",
    rating: 4.6,
    isBestSeller: false,
  },
  {
    id: 4,
    name: "Java Preanger",
    origin: "Jawa Barat",
    price: 80000,
    originalPrice: 110000,
    image:
      "https://images.pexels.com/photos/2250232/pexels-photo-2250232.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    roast: "Medium Roast",
    rating: 4.5,
    isBestSeller: false,
  },
];

// Helper function
const formatPrice = (price) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
};

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Products() {
  return (
    <section id="produk" className="py-16 sm:py-20 md:py-28 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Section Header */}
        <SectionHeader />

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
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
  );
}

function ProductCard({ product }) {
  return (
    <motion.div variants={itemVariants}>
      <Card className="group bg-white/5 border border-white/10 hover:border-[#c8a97e]/40 transition-all duration-500 hover:-translate-y-2 rounded-2xl overflow-hidden h-full">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />

          {/* Best Seller Badge */}
          {product.isBestSeller && (
            <div className="absolute top-3 left-3 bg-[#c8a97e] text-black text-[10px] font-semibold px-2 py-1 rounded-full flex items-center gap-1">
              <Star className="w-3 h-3 fill-black" />
              Best Seller
            </div>
          )}

          {/* Discount Badge */}
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

        {/* Content */}
        <CardContent className="p-5">
          {/* Roast Badge */}
          <div className="mb-3">
            <span className="text-[10px] text-[#c8a97e] bg-[#c8a97e]/10 px-2 py-0.5 rounded-full">
              {product.roast}
            </span>
          </div>

          {/* Title & Origin */}
          <h3 className="text-base sm:text-lg font-serif font-semibold text-white mb-1 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-[11px] text-gray-400 mb-3">{product.origin}</p>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-3">
            <div className="flex items-center gap-0.5">
              <Star className="w-3 h-3 fill-[#c8a97e] text-[#c8a97e]" />
              <span className="text-xs text-white">{product.rating}</span>
            </div>
            <span className="text-[10px] text-gray-500">(120+ reviews)</span>
          </div>

          {/* Price & CTA */}
          <div className="flex items-center justify-between mt-2">
            <div>
              <span className="text-lg sm:text-xl font-bold text-[#c8a97e]">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-[10px] text-gray-500 line-through ml-2">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
            <Button
              size="sm"
              className="bg-[#c8a97e] hover:bg-[#b8986e] text-black rounded-full w-8 h-8 p-0 transition-all duration-300 hover:scale-110"
            >
              <ShoppingCart className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
