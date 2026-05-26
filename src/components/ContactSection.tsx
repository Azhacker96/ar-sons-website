"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Send, Clock, Building } from "lucide-react";

const contactInfo = [
  {
    icon: Building,
    label: "Office",
    value: "Plot 28 A, SMCHS, Block A, Karachi",
    href: null,
  },
  {
    icon: MapPin,
    label: "Workshop",
    value: "Plot B412, Block 01, Metroville SITE, Karachi",
    href: null,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92-332-0266303",
    href: "tel:+923320266303",
  },
  {
    icon: Phone,
    label: "Alternate",
    value: "+92-333-1270029",
    href: "tel:+923331270029",
  },
  {
    icon: Mail,
    label: "Email",
    value: "ar.fitnesssolutions0@gmail.com",
    href: "mailto:ar.fitnesssolutions0@gmail.com",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Sat: 9:00 AM - 7:00 PM",
    href: null,
  },
];

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-surface overflow-hidden">
      {/* Decorative */}
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
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Contact{" "}
            <span className="gradient-text">Us</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-muted max-w-xl mx-auto">
            Ready to transform your fitness facility? Reach out to us for a free consultation and quote.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-5"
          >
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              const Wrapper = item.href ? "a" : "div";
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                >
                  <Wrapper
                    {...(item.href ? { href: item.href } : {})}
                    className={`group flex items-start gap-4 p-4 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300 ${
                      item.href ? "hover:shadow-md cursor-pointer" : ""
                    }`}
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium text-foreground leading-relaxed">
                        {item.value}
                      </p>
                    </div>
                  </Wrapper>
                </motion.div>
              );
            })}

            {/* Map Embed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="rounded-2xl overflow-hidden border border-border h-48"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.2!2d67.0345!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUxJzM4LjUiTiA2N8KwMDInMDQuMiJF!5e0!3m2!1sen!2s!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AR & Sons Office Location"
              />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-3xl bg-background border border-border"
            >
              <h3 className="text-xl font-bold text-foreground mb-6">
                Send Us an Inquiry
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
                    placeholder="+92-300-0000000"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="gym-equipment">Gym Equipment Inquiry</option>
                    <option value="steam-sauna">Steam & Sauna</option>
                    <option value="pool-jacuzzi">Pool & Jacuzzi</option>
                    <option value="maintenance">Maintenance & Repairs</option>
                    <option value="consultation">Free Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 resize-none"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-light transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>
                    <svg className="w-5 h-5 text-white animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Inquiry Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Inquiry
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
