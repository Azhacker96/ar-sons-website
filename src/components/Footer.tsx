"use client";

import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const footerLinks = {
  services: [
    { name: "Fitness Equipment", href: "#services" },
    { name: "Steam & Sauna", href: "#services" },
    { name: "Pool & Jacuzzi", href: "#services" },
    { name: "Maintenance", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Brand Partners", href: "#services" },
    { name: "Our Clients", href: "#clients" },
    { name: "Contact", href: "#contact" },
  ],
};

const socialLinks = [
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/ARFitnessSolutions",
    label: "Facebook",
  },
  {
    icon: FaInstagram,
    href: "#",
    label: "Instagram",
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/923320266303",
    label: "WhatsApp",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-primary-dark text-white overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl translate-y-1/2" />

      {/* Main Footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-5">
              <div className="bg-white rounded-xl p-1.5">
                <Image
                  src="/AR-logo.png"
                  alt="AR & Sons Logo"
                  width={44}
                  height={44}
                />
              </div>
              <div>
                <p className="text-lg font-bold leading-tight">AR &amp; Sons</p>
                <p className="text-xs text-white/50 tracking-widest uppercase">
                  Fitness Solutions
                </p>
              </div>
            </a>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              Pakistan&apos;s trusted partner for premium commercial gym equipment, wellness
              solutions, and professional installation services since 2015.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary-light transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-5 text-white/80">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-5 text-white/80">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Quick */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-5 text-white/80">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li>
                <a href="tel:+923320266303" className="hover:text-accent transition-colors">
                  +92-332-0266303
                </a>
              </li>
              <li>
                <a href="tel:+923331270029" className="hover:text-accent transition-colors">
                  +92-333-1270029
                </a>
              </li>
              <li>
                <a
                  href="mailto:ar.fitnesssolutions0@gmail.com"
                  className="hover:text-accent transition-colors break-all"
                >
                  ar.fitnesssolutions0@gmail.com
                </a>
              </li>
              <li className="pt-2">
                Plot 28 A, SMCHS,
                <br />
                Block A, Karachi
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; 2026 AR Fitness Solutions. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary-light transition-all duration-300 hover:-translate-y-1"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
