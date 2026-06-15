"use client";

import { motion } from "framer-motion";


interface FamilySide {
  side: "Groom" | "Bride";
  arabicHeading: string;
  parents: string;
  parentsTitle: string;
  address: string;
}

const FAMILY_INFO: FamilySide[] = [
  {
    side: "Bride",
    arabicHeading: "عائلة العروس",
    parents: "Mr. Shanavas & Mrs. Shaniba Navas",
    parentsTitle: "Parents of the Bride",
    address: "Karuvoth House, Iringath",
  },
  {
    side: "Groom",
    arabicHeading: "عائلة العريس",
    parents: "Late Noushad & Haseena Noushad",
    parentsTitle: "Parents of the Groom",
    address: "Vadakkayil House, Payyoli Angadi, Thurayur",
  },
];

export default function FamilySection() {
  return (
    <section id="family" className="relative py-24 md:py-32 px-4 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[160px] bg-gold-400/5 pointer-events-none z-0"></div>

      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Title */}
        <div className="text-center mb-16 md:mb-24 z-10 flex flex-col items-center">
          <span className="text-[10px] tracking-[0.3em] uppercase text-gold-400 font-sans font-medium mb-2">
            With Blessings of
          </span>
          <h2 className="text-3xl md:text-5xl font-heading text-gold-100 tracking-wide font-light">
            Our Families
          </h2>
          <div className="w-12 h-[1px] bg-gold-400/30 mt-4"></div>
        </div>

        {/* Family Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full z-10">
          {FAMILY_INFO.map((family, idx) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 35 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.0, delay: idx * 0.15 }}
              key={idx}
              className="p-8 md:p-12 rounded-3xl border border-gold-300/15 relative overflow-hidden flex flex-col items-center text-center glass-panel"
            >
              {/* Corner Gold Frame Accents */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-gold-300/40"></div>
              <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-gold-300/40"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-gold-300/40"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-gold-300/40"></div>

              {/* Watermark Calligraphy */}
              <span className="text-5xl font-arabic text-gold-300/5 mb-4 select-none pointer-events-none">
                {family.arabicHeading}
              </span>

              {/* Family Side Badge */}
              <span className="text-[10px] tracking-[0.4em] uppercase text-gold-300 font-sans font-semibold mb-4">
                The {family.side}&apos;s Family
              </span>

              {/* Parents Section */}
              <div className="flex flex-col items-center gap-1 mb-8">
                <h3 className="text-xl md:text-2xl font-heading tracking-wide font-light text-gold-100">
                  {family.parents}
                </h3>
                <span className="text-[10px] tracking-[0.2em] uppercase font-sans font-medium text-gold-400">
                  {family.parentsTitle}
                </span>
              </div>

              <div className="w-12 h-[1px] bg-gold-400/20 mb-8"></div>

              {/* Address Section */}
              <div className="flex flex-col items-center gap-3">
                <span className="text-[9px] tracking-[0.3em] uppercase font-sans font-semibold mb-1 text-gold-400/70">
                  Address
                </span>
                <p className="text-sm font-serif italic font-light tracking-wide text-gold-200/80">
                  {family.address}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compliments Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.3 }}
          className="mt-16 text-center z-10 flex flex-col items-center"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-gold-400 font-sans font-medium mb-3">
            With Best Compliments From
          </span>
          <p className="text-lg md:text-xl font-heading font-light tracking-wide text-gold-100">
            Karuvoth Family & Musaliyaravida Family
          </p>
        </motion.div>
      </div>
    </section>
  );
}
