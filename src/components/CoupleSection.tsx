"use client";

import { motion } from "framer-motion";
interface CoupleMember {
  name: string;
  role: "Groom" | "Bride";
  parents: string;
  parentsTitle: string;
  description?: string;
  image: string;
}

const MEMBERS: CoupleMember[] = [
  {
    name: "Shasna Navas",
    role: "Bride",
    parents: "Mr. Shanavas & Mrs. Shaniba Navas",
    parentsTitle: "Daughter of",
    image: "/bride.jpg",
  },
  {
    name: "Muhammed Shafeeq",
    role: "Groom",
    parents: "Noushad (late) & Haseena Noushad",
    parentsTitle: "Son of",
    image: "/groom.jpg",
  },
];

export default function CoupleSection() {
  return (
    <section id="couple" className="relative py-24 md:py-32 px-4 overflow-hidden bg-gradient-to-b from-emerald-deep/40 to-emerald-deep/90">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full blur-[140px] bg-emerald-light/20 pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 right-10 w-72 h-72 rounded-full blur-[140px] bg-gold-400/5 pointer-events-none z-0"></div>

      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Section Title */}
        <div className="text-center mb-16 md:mb-24 z-10 flex flex-col items-center">
          <span className="text-[10px] tracking-[0.3em] uppercase text-gold-400 font-sans font-medium mb-2">
            Introducing
          </span>
          <h2 className="text-3xl md:text-5xl font-heading text-gold-100 tracking-wide font-light">
            Bride & Groom
          </h2>
          <div className="w-12 h-[1px] bg-gold-400/30 mt-4"></div>
        </div>

        {/* Couple Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 w-full z-10 items-stretch">
          {MEMBERS.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: idx * 0.2 }}
              className="flex flex-col items-center text-center p-5 sm:p-8 md:p-10 rounded-3xl border border-gold-300/15 glass-panel h-full relative"
            >
              {/* Decorative Corner Accents */}
              <div className="absolute top-4 left-4 w-5 h-5 border-t border-l border-gold-300/30"></div>
              <div className="absolute top-4 right-4 w-5 h-5 border-t border-r border-gold-300/30"></div>
              <div className="absolute bottom-4 left-4 w-5 h-5 border-b border-l border-gold-300/30"></div>
              <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-gold-300/30"></div>

              {/* Photo Frame Container */}
              <div className="relative w-56 h-72 sm:w-64 sm:h-80 mb-8 rounded-2xl overflow-hidden border border-gold-300/20 p-2 bg-emerald-dark/60 group shadow-2xl shrink-0">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-emerald-deep">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/90 via-transparent to-transparent opacity-80"></div>
                </div>

                {/* Subtitle Badge */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gold-400 text-emerald-deep text-[10px] tracking-[0.25em] uppercase font-semibold px-4 py-1.5 rounded-full shadow-md">
                  {member.role}
                </div>
              </div>

              {/* Text Info */}
              <div className="flex-1 flex flex-col items-center">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-light tracking-wide text-gold-100 mb-2">
                  {member.name}
                </h3>
                
                <div className="flex flex-col items-center mb-6">
                  <span className="text-[9px] tracking-widest uppercase font-sans font-medium text-gold-400 mb-1">
                    {member.parentsTitle}
                  </span>
                  <p className="text-sm font-sans font-medium text-gold-200">
                    {member.parents}
                  </p>
                </div>

                {member.description && (
                  <>
                    <div className="w-12 h-[1px] bg-gold-400/20 mb-6"></div>
                    <p className="text-xs md:text-sm font-sans font-light leading-relaxed text-gold-100/70 max-w-sm italic">
                      &ldquo;{member.description}&rdquo;
                    </p>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
