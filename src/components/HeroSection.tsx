"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSection() {
  const images = [
    "/hero-gym.png",
    "/cardio-1.png",
    "/strength-1.png",
    "/design-1.png"
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImageIndex, images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pb-24 md:pb-32 pt-20"
    >
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0 bg-black">
        <AnimatePresence>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentImageIndex]}
              alt="Premium fitness equipment showroom"
              fill
              className="object-cover"
              priority={currentImageIndex === 0}
              quality={90}
            />
          </motion.div>
        </AnimatePresence>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-primary/30 via-transparent to-transparent" />
      </div>

      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-[1]">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/30 rounded-full"
            style={{ left: `${20 + i * 15}%`, top: `${30 + i * 10}%` }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block px-5 py-2 mt-15 mb-6 text-sm font-semibold tracking-widest uppercase text-accent border border-accent/30 rounded-full bg-accent/5 backdrop-blur-sm"
          >
            Since 2015 — Karachi, Pakistan
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6"
          >
            Providing Ideal{" "}
            <span className="relative">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-300">
                Fitness Solutions
              </span>
            </span>
            <br />
            <span className="text-white/90">&amp; Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 font-light"
          >
            Where Quality Matters Premium commercial gym equipment,
            installation, and wellness solutions for Pakistan&apos;s elite
            fitness facilities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="/#services"
              className="group px-8 py-4 bg-primary text-white font-semibold rounded-2xl transition-all duration-300 hover:bg-primary-light hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 flex items-center gap-2"
            >
              Explore Our Equipment
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/20 transition-all duration-300 hover:bg-white/20 hover:-translate-y-1"
            >
              Contact Us
            </a>
          </motion.div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {[
            { value: "10+", label: "Years Experience" },
            { value: "300+", label: "Projects Completed" },
            { value: "1,000+", label: "Happy Clients" },
            { value: "6+", label: "a Cross Cities" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-white">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-white/50 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Slider Controls - Arrows */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-20 flex justify-between px-4 sm:px-8 pointer-events-none">
        <button
          onClick={prevImage}
          className="p-3 rounded-full bg-black/20 text-white/70 hover:bg-black/50 hover:text-white backdrop-blur-sm transition-all pointer-events-auto"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
        <button
          onClick={nextImage}
          className="p-3 rounded-full bg-black/20 text-white/70 hover:bg-black/50 hover:text-white backdrop-blur-sm transition-all pointer-events-auto"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
      </div>

      {/* Slider Controls - Dots */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImageIndex(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${currentImageIndex === idx
              ? "bg-primary w-8"
              : "bg-white/50 w-2.5 hover:bg-white/80"
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
