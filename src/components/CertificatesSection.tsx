"use client";

import { motion, Variants } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const certificates = [
  {
    title: "Intro to Software Engineering",
    issuer: "RevoU - Coding Camp",
    description: "Certificate of attendance — a 1-week certified online course offered by RevoU",
    date: "11 July 2025",
    category: "Online Course",
    image: "/images/certificates/revou-intro-software-engineering.jpg",
    bg: "bg-[var(--brutal-cyan)]",
  },
  {
    title: "Introduction to Financial Literacy",
    issuer: "Dicoding Indonesia",
    description: "Sertifikat Kompetensi Kelulusan — Diberikan kepada Muhamad Fardan Rahmansyah",
    date: "18 Maret 2026",
    category: "Online Course",
    image: "/images/certificates/dicoding-financial-literacy.jpg",
    bg: "bg-[var(--brutal-pink)]",
  },
  {
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    description: "Sertifikat Kompetensi Kelulusan — Diberikan kepada Muhamad Fardan Rahmansyah",
    date: "26 Maret 2026",
    category: "Online Course",
    image: "/images/certificates/dicoding-belajar-dasar-ai.jpg",
    bg: "bg-[var(--brutal-orange)]",
  },
  {
    title: "Prompt Engineering untuk Software Developer",
    issuer: "Dicoding Indonesia",
    description: "Sertifikat Kompetensi Kelulusan — Diberikan kepada Muhamad Fardan Rahmansyah",
    date: "29 Maret 2026",
    category: "Online Course",
    image: "/images/certificates/dicoding-prompt-engineering.jpg",
    bg: "bg-[var(--brutal-green)]",
  },
  {
    title: "Webinar Implementasi IoT & Robotika",
    issuer: "LPPM STMIK DCI & Polmanda",
    description: "Sertifikat Peserta Webinar Solusi Cerdas Berbasis Teknologi",
    date: "15 Juli 2026",
    category: "Webinar",
    image: "/images/certificates/webinar-iot-robotika.png",
    bg: "bg-[var(--brutal-cyan)]",
  },
];

export default function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  return (
    <>
      <section id="certificates" className="py-32 px-6 relative bg-white">
        <div className="absolute top-10 left-10 w-20 h-20 bg-[var(--brutal-pink)] rounded-full brutal-border brutal-shadow-static" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white brutal-border brutal-shadow-sm text-sm font-bold uppercase mb-6">
              <span className="w-3 h-3 border-2 border-black bg-[var(--brutal-cyan)] animate-pulse" />
              Penghargaan &amp; Pengalaman
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-4 uppercase drop-shadow-[4px_4px_0_#fff]">
              Sertifikat{" "}
              <span className="text-[var(--brutal-orange)] drop-shadow-[4px_4px_0_#000]">&amp; Pencapaian.</span>
            </h2>
            <p className="text-xl font-bold max-w-2xl bg-white brutal-border p-4 brutal-shadow-static">
              Dokumentasi perjalanan kontribusi, pencapaian, dan pengalaman selama aktif di dunia organisasi dan kegiatan kampus.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-8">
            {certificates.map((cert, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="brutal-card p-0 flex flex-col hover:-translate-y-2 hover:translate-x-2 transition-transform cursor-pointer overflow-hidden group"
                onClick={() => setSelectedCert(i)}
              >
                <div className={`brutal-window-header ${cert.bg}`}>
                  <div className="brutal-dot bg-white" />
                  <div className="brutal-dot bg-white" />
                  <div className="brutal-dot bg-white" />
                  <span className="ml-2 font-black uppercase tracking-widest text-sm truncate">CERT_0{i+1}.DOC</span>
                </div>

                <div className="relative w-full aspect-[16/11] border-b-4 border-black overflow-hidden bg-white">
                  <Image
                    src={cert.image}
                    alt={`Sertifikat ${cert.title}`}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out grayscale group-hover:grayscale-0"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 bg-white brutal-border brutal-shadow-sm px-4 py-2 font-bold flex items-center gap-2 uppercase tracking-wider transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                      <ExternalLink size={18} strokeWidth={3} />
                      Lihat Detail
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div>
                        <span className={`inline-block px-3 py-1 text-xs font-black brutal-border uppercase mb-3 bg-white brutal-shadow-sm`}>
                          {cert.category}
                        </span>
                        <h3 className="font-black text-2xl uppercase leading-none">{cert.title}</h3>
                      </div>
                      <div className={`flex-shrink-0 w-12 h-12 brutal-border brutal-shadow-sm flex items-center justify-center ${cert.bg}`}>
                        <Award size={24} strokeWidth={2.5} />
                      </div>
                    </div>
                    <p className="text-base font-bold mb-4">{cert.description}</p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t-4 border-black">
                    <span className="text-sm font-black uppercase">{cert.issuer}</span>
                    <span className="text-sm font-black bg-[var(--background)] px-2 py-1 border-2 border-black">{cert.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedCert !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--background)]/90 backdrop-blur-md p-4 md:p-8 cursor-pointer"
          onClick={() => setSelectedCert(null)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col bg-white brutal-border brutal-shadow cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`brutal-window-header ${certificates[selectedCert].bg}`}>
              <div className="brutal-dot bg-white" />
              <div className="brutal-dot bg-white" />
              <div className="brutal-dot bg-white" />
              <span className="ml-2 font-black uppercase truncate">VIEWER.EXE - {certificates[selectedCert].title}</span>
              <button
                onClick={() => setSelectedCert(null)}
                className="ml-auto w-8 h-8 flex items-center justify-center brutal-border bg-white hover:bg-[var(--brutal-pink)] transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="relative w-full aspect-[16/11] md:aspect-auto md:flex-1 min-h-[40vh] md:min-h-[60vh] p-4 bg-[var(--background)] border-b-4 border-black">
              <Image
                src={certificates[selectedCert].image}
                alt={`Sertifikat ${certificates[selectedCert].title}`}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 90vw"
                priority
              />
            </div>
            <div className="p-6 bg-white text-center flex flex-col md:flex-row items-center justify-between gap-4">
              <h3 className="text-xl font-black uppercase text-left">{certificates[selectedCert].title}</h3>
              <p className="text-sm font-bold uppercase bg-[var(--background)] px-3 py-1 border-2 border-black whitespace-nowrap">
                {certificates[selectedCert].issuer} • {certificates[selectedCert].date}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
