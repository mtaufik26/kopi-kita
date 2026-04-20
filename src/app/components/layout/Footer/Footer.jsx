'use client';

import { motion } from 'framer-motion';
import { Coffee, MapPin, Mail, Phone } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';
import Link from 'next/link';
import { FOOTER_LINKS, ICON_MAP } from './Footer.constants';
import {
  footer, brandSection, socialContainer, socialIcon,
  contactContainer, contactItem, linkColumn, linkItem, bottomBar, viewport
} from './Footer.animations';

const iconMap = { FaInstagram, FaFacebook, FaTwitter, Mail, Phone, MapPin };

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0a0a0a] border-t border-gold/10 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <motion.div 
          variants={footer} 
          initial="hidden" 
          whileInView="visible" 
          viewport={viewport} 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Brand */}
          <motion.div variants={brandSection}>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="w-6 h-6 text-gold" />
              <span className="font-serif text-xl font-bold text-white">KopiNusantara</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Menghadirkan kopi premium terbaik dari seluruh Nusantara dengan kualitas terjamin.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={linkColumn}>
            <h3 className="text-white font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.quick.map((item) => (
                <li key={item.name}>
                  <motion.a variants={linkItem} href={item.href} className="text-gray-400 hover:text-gold text-sm transition-colors">
                    {item.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={contactContainer}>
            <h3 className="text-white font-semibold mb-4">Kontak</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.contact.map((contact, index) => {
                const Icon = iconMap[contact.icon];
                const Content = (
                  <>
                    <Icon className="w-4 h-4 text-gold" />
                    <span className="text-sm">{contact.label}</span>
                  </>
                );
                return contact.href ? (
                  <motion.a key={index} variants={contactItem} href={contact.href} className="flex items-center gap-2 text-gray-400 hover:text-gold text-sm transition-colors">
                    {Content}
                  </motion.a>
                ) : (
                  <motion.div key={index} variants={contactItem} className="flex items-center gap-2 text-gray-400 text-sm">
                    {Content}
                  </motion.div>
                );
              })}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div>
            <h3 className="text-white font-semibold mb-4">Ikuti Kami</h3>
            <motion.div variants={socialContainer} className="flex gap-4">
              {FOOTER_LINKS.social.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <motion.a
                    key={social.name}
                    variants={socialIcon}
                    whileHover={{ scale: 1.15, backgroundColor: 'rgba(200, 169, 126, 1)' }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors group"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          variants={bottomBar} 
          initial="hidden" 
          whileInView="visible" 
          viewport={viewport} 
          className="border-t border-white/10 mt-10 pt-6 text-center"
        >
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} KopiNusantara. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}