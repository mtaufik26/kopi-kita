'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Coffee } from 'lucide-react';
import Link from 'next/link';
import { NAV_LINKS } from './Navbar.constants';
import { nav, logo, navLinksContainer, navLink, mobileMenu, mobileLink } from './Navbar.animations';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0, 0.85]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      variants={nav}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/80 backdrop-blur-sm shadow-lg shadow-black/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div variants={logo}>
            <Link href="#home" className="flex items-center gap-2 group">
              <motion.div animate={{ rotate: isScrolled ? 0 : 360 }} transition={{ duration: 0.5 }}>
                <Coffee className="w-5 h-5 md:w-6 md:h-6 text-gold" />
              </motion.div>
              <span className="font-serif text-lg md:text-xl font-bold text-white">
                Kopi<span className="text-gold">Kita</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <motion.div variants={navLinksContainer} className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <motion.div key={link.name} variants={navLink}>
                  <Link
                    href={link.href}
                    className="relative text-gray-300 hover:text-gold transition-colors duration-300 text-sm tracking-wide group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 relative z-50"
            aria-label="Toggle menu"
          >
            <motion.div animate={{ rotate: isMobileMenuOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={mobileMenu}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-1">
                {NAV_LINKS.map((link, index) => (
                  <motion.div key={link.name} variants={mobileLink} custom={index}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-3 text-gray-300 hover:text-gold hover:pl-2 transition-all duration-300 text-sm tracking-wide"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}