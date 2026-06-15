"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Calculate Countdown (Target: December 18, 2026 at 16:00:00)
  useEffect(() => {
    const targetDate = new Date("2026-07-04T13:00:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden pt-20"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50"
        >
          <source src="/Video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-deep/20 to-emerald-deep/90 z-0"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl text-center z-10 flex flex-col items-center gap-6 md:gap-8"
      >
        {/* Invitation Calligraphy Insignia */}
        <motion.div variants={itemVariants} className="flex flex-col items-center">
          <span className="text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.4em] uppercase text-gold-300/80 mb-2 font-sans font-medium">
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
          </span>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold-300 to-transparent"></div>
        </motion.div>

        {/* Big Couple Title Names */}
        <motion.div variants={itemVariants} className="relative py-2 w-full">
          {/* Subtle gold text glows */}
          <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl font-heading font-light tracking-wide flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-6 text-gold-100">
            <span>Shasna</span>
            <span className="text-2xl sm:text-5xl font-arabic text-gold-400 my-0.5 sm:my-0">&</span>
            <span>Shafeeq</span>
          </h1>
          <p className="text-[10px] sm:text-sm tracking-[0.3em] sm:tracking-[0.4em] uppercase mt-4 font-sans font-light text-gold-300">
            We Are Tying The Knot
          </p>
        </motion.div>

        {/* Short details */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-8 text-xs sm:text-sm tracking-widest text-gold-100/80 font-sans font-light py-3 border-y border-gold-300/10 text-gold-200/80 w-full max-w-lg justify-center px-4"
        >
          <div className="flex items-center gap-2 text-center justify-center">
            <Calendar className="w-4 h-4 text-gold-400 shrink-0" />
            <span className="flex items-center gap-1.5 flex-wrap justify-center">
              <span>Saturday, July 04, 2026</span>
              <span className="text-gold-400/60">•</span>
              <span className="font-arabic text-[15px] text-gold-300 translate-y-[1px]">١٩ محرم</span>
            </span>
          </div>
          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-gold-400"></div>
          <div className="flex items-center gap-2 justify-center">
            <Clock className="w-4 h-4 text-gold-400 shrink-0" />
            <span>1:00 PM onwards</span>
          </div>
          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-gold-400"></div>
          <div className="flex items-center gap-2 justify-center text-center">
            <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
            <span>Green Oak Auditorium</span>
          </div>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div variants={itemVariants} className="w-full max-w-lg mt-4 px-2">
          <div className="grid grid-cols-4 gap-2 sm:gap-4">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Mins", value: timeLeft.minutes },
              { label: "Secs", value: timeLeft.seconds },
            ].map((timeUnit, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center py-2 px-1 sm:p-3 rounded-xl border border-gold-300/10 glass-panel"
              >
                <span className="text-lg sm:text-3xl font-heading font-medium text-gold-200">
                  {String(timeUnit.value).padStart(2, "0")}
                </span>
                <span className="text-[8px] sm:text-[10px] tracking-wider sm:tracking-widest uppercase font-sans mt-1 text-gold-400">
                  {timeUnit.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Scroll Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 z-10 hidden sm:flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => {
          document.getElementById("welcome")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-[9px] tracking-[0.3em] uppercase text-gold-300 font-sans">
          Scroll to Begin
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-5 h-8 border border-gold-400/40 rounded-full flex justify-center p-1"
        >
          <span className="w-1 h-1.5 bg-gold-400 rounded-full"></span>
        </motion.div>
      </motion.div>
    </section>
  );
}
