"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Wrench, Award, Users } from "lucide-react";

const highlights = [
  {
    icon: Shield,
    title: "Premium Quality",
    description: "Only the finest commercial-grade equipment from world-renowned brands.",
  },
  {
    icon: Wrench,
    title: "Expert Installation",
    description: "Dedicated technical force for seamless equipment installation and setup.",
  },
  {
    icon: Award,
    title: "Trusted Since 2015",
    description: "A family-run business built on trust, integrity, and lasting client partnerships.",
  },
  {
    icon: Users,
    title: "Aftercare Services",
    description: "Weekly and monthly maintenance plans to keep your equipment at peak performance.",
  },
];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-surface overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            Who We Are
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About{" "}
            <span className="gradient-text">A.R &amp; Sons</span>
          </h2>
          <div className="section-divider mb-8" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-lg text-muted leading-relaxed mb-6">
              Founded in <strong className="text-foreground">2015</strong>, A.R &amp; Sons is a
              family-run business dedicated to providing{" "}
              <strong className="text-foreground">high-quality fitness equipment</strong> for
              commercial and high-end residential use across Pakistan.
            </p>
            <p className="text-lg text-muted leading-relaxed mb-6">
              With a strong <strong className="text-foreground">technical force</strong> and deep
              expertise in installation, maintenance, and consultation, we have become the trusted
              partner for gyms, sports clubs, hotels, and wellness centers throughout Karachi and
              beyond.
            </p>
            <p className="text-lg text-muted leading-relaxed mb-8">
              Our commitment extends beyond just supply — we offer comprehensive{" "}
              <strong className="text-foreground">spare parts, repairing services</strong>, and
              weekly/monthly aftercare packages, ensuring your investment performs at its best for
              years to come.
            </p>

            <div className="flex flex-wrap gap-3">
              {["Commercial Gyms", "Hotels & Clubs", "Wellness Centers", "Residential"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-xl border border-primary/20"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid sm:grid-cols-2 gap-5"
          >
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
