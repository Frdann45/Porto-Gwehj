"use client";

import { motion } from "framer-motion";
import { ReactLenis } from "@studio-freight/react-lenis";
import { Mail, MapPin, Download, Sparkles, ArrowDown } from "lucide-react";
import ProjectSection from "@/components/ProjectSection";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import CertificatesSection from "@/components/CertificatesSection";

export default function Portfolio() {
  return (
    <ReactLenis root>
      <div className="min-h-screen text-black">
        <Navbar />

        {/* HERO */}
        <section id="home" className="min-h-screen flex flex-col justify-center px-6 max-w-7xl mx-auto pt-32 relative overflow-hidden">
          {/* Brutalist Decor elements */}
          <div className="absolute top-32 right-20 w-32 h-32 bg-[var(--brutal-pink)] brutal-border brutal-shadow-static rotate-12 hidden md:block" />
          <div className="absolute bottom-40 left-10 w-24 h-24 bg-[var(--brutal-cyan)] brutal-border brutal-shadow-static -rotate-6 hidden md:block rounded-full" />
          <div className="absolute top-1/2 right-10 w-16 h-16 bg-[var(--brutal-green)] brutal-border brutal-shadow-static rotate-45 hidden md:block" />

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="relative z-10">


            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8 uppercase">
              <span className="block drop-shadow-[4px_4px_0_#000] text-white">Muhamad</span>
              <span className="block text-[var(--brutal-cyan)] drop-shadow-[4px_4px_0_#000]">Fardan</span>
              <span className="block text-5xl md:text-7xl drop-shadow-[4px_4px_0_#000] text-white">Rahmansyah.</span>
            </h1>

            <p className="max-w-2xl text-lg md:text-xl font-bold leading-relaxed mb-10 border-4 border-black bg-white p-6 brutal-shadow-static">
              Mahasiswa Teknik Informatika yang adaptif dan fleksibel. Aktif berorganisasi dan berpengalaman sebagai{" "}
              <span className="text-[var(--brutal-cyan)] bg-black px-1.5 uppercase tracking-wide">Social Media Specialist</span>, serta memiliki keahlian dalam{" "}
              <span className="text-[var(--brutal-pink)] bg-black px-1.5 uppercase tracking-wide">desain grafis</span>,{" "}
              <span className="text-[var(--brutal-green)] bg-black px-1.5 uppercase tracking-wide">fotografi</span>, dan{" "}
              <span className="text-[var(--brutal-orange)] bg-black px-1.5 uppercase tracking-wide">pengembangan web</span>.
            </p>

            <div className="flex flex-wrap gap-6 mb-16">
              <a
                href="/docs/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[var(--brutal-cyan)] text-black brutal-btn gap-2"
              >
                <Download size={20} strokeWidth={3} /> Download CV
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="px-8 py-4 bg-white text-black brutal-btn gap-2"
              >
                Hubungi Saya
              </a>
            </div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-2 border-black bg-white px-4 py-2 inline-flex mb-12"
            >
              <ArrowDown size={18} strokeWidth={3} /> Scroll
            </motion.div>
          </motion.div>
        </section>

        <div className="h-4 w-full bg-black" />
        <AboutSection />
        <div className="h-4 w-full bg-black" />
        <ProjectSection />
        <div className="h-4 w-full bg-black" />
        <SkillsSection />
        <div className="h-4 w-full bg-black" />
        <CertificatesSection />
        <div className="h-4 w-full bg-black" />

        {/* CONTACT */}
        <section id="contact" className="py-32 px-6 relative bg-[var(--brutal-pink)]">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white brutal-border brutal-shadow-sm text-sm font-bold uppercase mb-6">
                <span className="w-3 h-3 border-2 border-black bg-[var(--brutal-green)] animate-pulse" />
                Hubungi Saya
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-4 uppercase drop-shadow-[4px_4px_0_#000] text-white">
                Mari Terhubung.
              </h2>
              <p className="text-xl font-bold max-w-2xl mx-auto bg-white brutal-border p-4 brutal-shadow-static">
                Tersedia untuk peluang kerja paruh waktu atau proyek freelance di bidang IT, Fotografi, dan Multimedia.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="max-w-3xl mx-auto">
              <div className="brutal-card bg-white p-0 overflow-hidden">
                <div className="brutal-window-header bg-[var(--brutal-cyan)]">
                  <div className="brutal-dot bg-[var(--brutal-pink)]" />
                  <div className="brutal-dot bg-[var(--brutal-orange)]" />
                  <div className="brutal-dot bg-[var(--brutal-green)]" />
                  <span className="ml-2 text-sm">CONTACT.EXE</span>
                </div>
                <div className="p-8 md:p-10 space-y-6 bg-white">
                  <a href="mailto:danzzrhmnsyh@gmail.com" className="flex items-center gap-6 p-4 bg-[var(--background)] brutal-border brutal-shadow hover:translate-x-2 transition-transform">
                    <div className="w-16 h-16 bg-white brutal-border flex items-center justify-center text-black">
                      <Mail size={28} strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="text-sm mb-1 uppercase font-bold">Email</p>
                      <span className="text-xl md:text-2xl font-black">danzzrhmnsyh@gmail.com</span>
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/in/muhammad-fardan-rahmansyah-9b0199318?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-4 bg-[var(--brutal-green)] brutal-border brutal-shadow hover:translate-x-2 transition-transform overflow-hidden">
                    <div className="w-16 h-16 bg-white brutal-border flex flex-shrink-0 items-center justify-center text-black">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-sm mb-1 uppercase font-bold">LinkedIn</p>
                      <span className="text-xl md:text-2xl font-black truncate block">Muhamad Fardan R.</span>
                    </div>
                  </a>
                  <a href="https://instagram.com/dann.dng" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-4 bg-[var(--brutal-cyan)] brutal-border brutal-shadow hover:translate-x-2 transition-transform">
                    <div className="w-16 h-16 bg-white brutal-border flex items-center justify-center text-black">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm mb-1 uppercase font-bold">Instagram</p>
                      <span className="text-xl md:text-2xl font-black">@dann.dng</span>
                    </div>
                  </a>
                  <a href="https://github.com/Frdann45" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-4 bg-white brutal-border brutal-shadow hover:translate-x-2 transition-transform">
                    <div className="w-16 h-16 bg-[var(--brutal-orange)] brutal-border flex items-center justify-center text-black">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.4 13.4 0 0 0-7 0C6.1 2.5 4.9 2.9 4.9 2.9a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3.3 10.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm mb-1 uppercase font-bold">GitHub</p>
                      <span className="text-xl md:text-2xl font-black">Frdann45</span>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-10 border-t-8 border-black text-center font-bold uppercase bg-white">
          <p className="text-lg">
            © {new Date().getFullYear()}{" "}
            <span className="text-[var(--brutal-pink)] brutal-text-shadow">
              Muhamad Fardan Rahmansyah
            </span>
            . Built with Next.js
          </p>
        </footer>
      </div>
    </ReactLenis>
  );
}