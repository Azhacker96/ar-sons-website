"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Clients", href: "/#clients" },
  { name: "Contact", href: "/#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
        ? "bg-background/80 backdrop-blur-xl shadow-lg border-b border-border"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <Image
              src="/AR-logo.png"
              alt="AR & Sons Logo"
              width={56}
              height={56}
              className="transition-transform duration-300 group-hover:scale-110"
              priority
            />
            <div className="hidden sm:block">
              <p className={`text-lg font-bold leading-tight tracking-tight transition-colors duration-500 ${scrolled ? 'text-foreground' : 'text-white'}`}>
                AR & Sons
              </p>
              <p className={`text-xs tracking-widest uppercase transition-colors duration-500 ${scrolled ? 'text-muted' : 'text-white/70'}`}>
                Fitness Solutions Services
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium hover:text-primary transition-colors duration-300 group ${scrolled ? 'text-foreground/80' : 'text-white/90 hover:text-white'}`}
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-3/4 transition-all duration-300 rounded-full" />
              </a>
            ))}

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className={`ml-4 p-2.5 rounded-xl border transition-all duration-300 hover:scale-105 ${scrolled ? 'bg-surface hover:bg-surface-alt border-border' : 'bg-white/10 hover:bg-white/20 border-white/20'}`}
                aria-label="Toggle dark mode"
                id="theme-toggle"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-primary" />
                )}
              </button>
            )}

            <a
              href="/#contact"
              className={`ml-3 px-5 py-2.5 text-white text-sm font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 ${scrolled ? 'bg-primary hover:bg-primary-light' : 'bg-primary hover:bg-primary-light'}`}
            >
              Get a Quote
            </a>
          </nav>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center gap-2">
            {mounted && (
              <button
                onClick={toggleTheme}
                className={`p-2.5 rounded-xl border transition-all duration-300 ${scrolled ? 'bg-surface border-border' : 'bg-white/10 border-white/20'}`}
                aria-label="Toggle dark mode"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-primary" />
                )}
              </button>
            )}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2.5 rounded-xl border transition-all duration-300 ${scrolled ? 'bg-surface border-border' : 'bg-white/10 border-white/20'}`}
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {mobileOpen ? (
                <X className={`w-5 h-5 transition-colors duration-300 ${scrolled ? 'text-foreground' : 'text-white'}`} />
              ) : (
                <Menu className={`w-5 h-5 transition-colors duration-300 ${scrolled ? 'text-foreground' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-background/95 backdrop-blur-2xl border-t border-border"
          >
            <nav className="px-4 py-6 space-y-1" role="navigation" aria-label="Mobile Navigation">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-surface rounded-xl transition-all duration-200"
                >
                  {link.name}
                </motion.a>
              ))}
              <a
                href="/#contact"
                onClick={() => setMobileOpen(false)}
                className="block mt-4 mx-4 px-5 py-3 bg-primary text-white text-center text-sm font-semibold rounded-xl hover:bg-primary-light transition-all"
              >
                Get a Quote
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
