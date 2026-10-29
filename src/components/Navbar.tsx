"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Project", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 max-w-7xl mx-auto ${
          scrolled
            ? "translate-y-0"
            : "translate-y-2"
        }`}
      >
        <div className="bg-white brutal-border brutal-shadow-static flex justify-between items-center px-4 py-3">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="font-black text-xl tracking-tighter uppercase flex gap-1 items-center">
              <span className="w-4 h-4 bg-[var(--brutal-pink)] border-2 border-black inline-block" />
              Dann.DNG
            </div>
          </motion.div>

          {/* Desktop Nav Links */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex items-center gap-2"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-1.5 text-sm font-bold uppercase border-2 border-transparent hover:border-black hover:bg-[var(--brutal-cyan)] hover:shadow-[4px_4px_0_0_#000] transition-all"
              >
                {link.label}
              </button>
            ))}
          </motion.div>

          {/* Right Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 brutal-border bg-[var(--brutal-green)] hover:bg-[var(--brutal-pink)] brutal-shadow-sm transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileOpen ? <X size={20} strokeWidth={3} /> : <Menu size={20} strokeWidth={3} />}
            </button>
          </motion.div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-4 right-4 z-40 bg-white brutal-border brutal-shadow-static overflow-hidden max-w-7xl mx-auto"
          >
            <div className="brutal-window-header bg-[var(--brutal-pink)]">
              <div className="brutal-dot bg-white" />
              <div className="brutal-dot bg-white" />
              <span className="ml-2 text-sm text-black">NAV.EXE</span>
            </div>
            <div className="flex flex-col">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-6 py-4 font-black uppercase border-b-4 border-black last:border-b-0 hover:bg-[var(--brutal-cyan)] transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
