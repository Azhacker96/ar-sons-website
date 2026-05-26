"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { categories, services } from "@/data/services";

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-background overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-accent/3 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            What We Offer
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our{" "}
            <span className="gradient-text">Services</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-muted max-w-2xl mx-auto">
            From premium fitness equipment to complete wellness solutions — we deliver end-to-end services for commercial and residential projects.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "bg-surface text-muted border border-border hover:border-primary/30 hover:text-primary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="wait">
            {filteredServices.map((service, i) => {
              return (
                <motion.div
                  key={service.title}
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="group relative p-6 rounded-2xl bg-surface border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 flex flex-col h-full block"
                  >
                  {/* Category Badge */}
                  <span
                    className={`absolute z-10 top-8 right-8 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${
                      service.category === "fitness"
                        ? "bg-blue-500/90 text-white backdrop-blur-sm"
                        : service.category === "wellness"
                        ? "bg-emerald-500/90 text-white backdrop-blur-sm"
                        : "bg-amber-500/90 text-white backdrop-blur-sm"
                    }`}
                  >
                    {service.category}
                  </span>

                  {/* Image */}
                  <div className="relative w-full h-48 rounded-xl overflow-hidden mb-5 bg-primary/5">
                    <Image
                      src={service.images[0]}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-sm text-muted leading-relaxed mb-5 flex-grow">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[11px] font-medium bg-background text-muted rounded-lg border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
