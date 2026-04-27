"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, MapPin } from "lucide-react";

const clients = [
  {
    name: "Karachi Club",
    category: "Sports Club",
    location: "Karachi",
  },
  {
    name: "ASF Club",
    category: "Sports Club",
    location: "Karachi",
  },
  {
    name: "Tri Fit",
    category: "Fitness Center",
    location: "Karachi",
  },
  {
    name: "Shapes Health Club",
    category: "Health Club",
    location: "Karachi",
  },
  {
    name: "Defence Authority Creek Club",
    category: "Elite Club",
    location: "DHA, Karachi",
  },
  {
    name: "Salaam Takaful",
    category: "Corporate",
    location: "Karachi",
  },
  {
    name: "KMC Women Sports Complex",
    category: "Municipal Sports",
    location: "Karachi",
  },
];

export default function ClientsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="clients" className="relative py-24 sm:py-32 bg-background overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/3 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            Our Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Key{" "}
            <span className="gradient-text">Clients</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-muted max-w-xl mx-auto">
            Trusted by Karachi&apos;s most prestigious fitness facilities, sports clubs, and corporate organizations.
          </p>
        </motion.div>

        {/* Clients Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="group relative p-6 rounded-2xl bg-surface border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                <Building2 className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-500" />
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {client.name}
              </h3>

              <p className="text-sm text-muted mb-3">{client.category}</p>

              <div className="flex items-center gap-1.5 text-xs text-muted/70">
                <MapPin className="w-3.5 h-3.5" />
                {client.location}
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Trust Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-primary to-primary-dark text-white text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">
            Join Our Growing List of Satisfied Clients
          </h3>
          <p className="text-white/70 max-w-xl mx-auto mb-6">
            Whether you&apos;re setting up a new gym or upgrading an existing facility, we deliver
            solutions tailored to your needs.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3.5 bg-white text-primary font-semibold rounded-xl hover:bg-white/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
