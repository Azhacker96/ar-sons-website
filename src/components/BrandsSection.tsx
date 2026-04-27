"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const brands = [
  { name: "Cybex", color: "#1e40af" },
  { name: "Life Fitness", color: "#dc2626" },
  { name: "Precor", color: "#7c3aed" },
  { name: "Techno Gym", color: "#059669" },
  { name: "Body Strong", color: "#ea580c" },
  { name: "Advance Fitness", color: "#0891b2" },
  { name: "Tylo", color: "#be185d" },
  { name: "Harvia", color: "#ca8a04" },
];

export default function BrandsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 sm:py-28 bg-surface overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            Trusted Partnerships
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Brand{" "}
            <span className="gradient-text">Partners</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-muted max-w-xl mx-auto">
            We are authorized distributors and service providers for the world&apos;s leading fitness and wellness brands.
          </p>
        </motion.div>

        {/* Marquee */}
        <div className="relative">
          {/* Fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-surface to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-surface to-transparent z-10" />

          <div className="overflow-hidden">
            <div className="animate-marquee flex gap-8 w-max">
              {[...brands, ...brands].map((brand, i) => (
                <div
                  key={`${brand.name}-${i}`}
                  className="group flex-shrink-0 w-56 h-28 rounded-2xl bg-background border border-border hover:border-primary/30 flex items-center justify-center transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 cursor-default"
                >
                  <div className="text-center">
                    <p
                      className="text-xl font-bold transition-colors duration-300"
                      style={{ color: brand.color }}
                    >
                      {brand.name}
                    </p>
                    <div className="mt-1 w-8 h-0.5 bg-border group-hover:bg-primary group-hover:w-12 transition-all duration-300 mx-auto rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Static Grid (Below Marquee) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
              className="group p-5 rounded-2xl bg-background border border-border hover:border-primary/30 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div
                className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center text-lg font-black text-white"
                style={{ backgroundColor: brand.color }}
              >
                {brand.name.charAt(0)}
              </div>
              <p className="text-sm font-semibold text-foreground">{brand.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
