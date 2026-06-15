"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function RSVPSection() {
  return (
    <section id="rsvp" className="relative py-28 md:py-36 px-4 overflow-hidden">

      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full p-6 sm:p-12 md:p-20 rounded-3xl border border-gold-300/20 relative z-10 glass-panel text-center flex flex-col items-center justify-center gap-6 sm:gap-8 shadow-2xl overflow-hidden"
        >
          {/* Inner card gold border frame */}
          <div className="absolute inset-3 rounded-[22px] border border-gold-400/10 pointer-events-none z-0"></div>

          {/* Premium Corner Accents */}
          <div className="absolute top-5 left-5 w-6 h-6 border-t border-l border-gold-400/40"></div>
          <div className="absolute top-5 right-5 w-6 h-6 border-t border-r border-gold-400/40"></div>
          <div className="absolute bottom-5 left-5 w-6 h-6 border-b border-l border-gold-400/40"></div>
          <div className="absolute bottom-5 right-5 w-6 h-6 border-b border-r border-gold-400/40"></div>

          {/* Top Slow Rotating Elegant Mandala */}
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 text-gold-300/30 opacity-70 z-10 relative flex items-center justify-center"
          >
            <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
              <rect x="25" y="25" width="50" height="50" transform="rotate(15 50 50)" />
              <rect x="25" y="25" width="50" height="50" transform="rotate(30 50 50)" />
              <rect x="25" y="25" width="50" height="50" transform="rotate(45 50 50)" />
              <rect x="25" y="25" width="50" height="50" transform="rotate(60 50 50)" />
              <rect x="25" y="25" width="50" height="50" transform="rotate(75 50 50)" />
            </svg>
          </motion.div>

          {/* Typography Content */}
          <div className="flex flex-col items-center gap-6 w-full z-10">
            {/* Header Text */}
            <h2 className="text-sm sm:text-2xl md:text-3xl font-heading tracking-[0.2em] sm:tracking-[0.3em] uppercase text-gold-200 font-light leading-relaxed">
              We Would Be Honored
            </h2>
            
            {/* Decorative Divider */}
            <div className="flex items-center gap-3 w-full justify-center opacity-40">
              <div className="h-[0.5px] w-12 bg-gradient-to-r from-transparent to-gold-400"></div>
              <Sparkles className="w-3 h-3 text-gold-400" />
              <div className="h-[0.5px] w-12 bg-gradient-to-l from-transparent to-gold-400"></div>
            </div>
            
            {/* Large Gradient Accent Cursive Text */}
            <p className="text-2xl sm:text-5xl md:text-6xl font-serif italic text-gold font-light tracking-wide py-2 drop-shadow-lg leading-tight">
              By Your Presence
            </p>

            {/* Decorative Divider */}
            <div className="flex items-center gap-3 w-full justify-center opacity-40">
              <div className="h-[0.5px] w-12 bg-gradient-to-r from-transparent to-gold-400"></div>
              <Sparkles className="w-3 h-3 text-gold-400" />
              <div className="h-[0.5px] w-12 bg-gradient-to-l from-transparent to-gold-400"></div>
            </div>

            {/* Footer Text */}
            <h3 className="text-[11px] sm:text-xs md:text-sm font-sans tracking-[0.3em] sm:tracking-[0.4em] uppercase text-gold-300 font-medium">
              To Share In Our Joy
            </h3>
          </div>

          {/* Micro-sparkle floating animations inside card */}
          <motion.div
            animate={{
              y: [-12, 12, -12],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-[16%] text-gold-400/25 pointer-events-none hidden md:block"
          >
            <Sparkles className="w-4 h-4" />
          </motion.div>
          <motion.div
            animate={{
              y: [12, -12, 12],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
            className="absolute bottom-1/4 right-[16%] text-gold-400/25 pointer-events-none hidden md:block"
          >
            <Sparkles className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
