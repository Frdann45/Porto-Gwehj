"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { Camera, Users, GraduationCap, Film, Image as ImageIcon, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectSection() {
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);

  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [lightbox]);

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightbox) {
      const isFirst = lightbox.index === 0;
      const newIndex = isFirst ? lightbox.images.length - 1 : lightbox.index - 1;
      setLightbox({ ...lightbox, index: newIndex });
    }
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightbox) {
      const isLast = lightbox.index === lightbox.images.length - 1;
      const newIndex = isLast ? 0 : lightbox.index + 1;
      setLightbox({ ...lightbox, index: newIndex });
    }
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const accentStyles = [
    { accent: "bg-[var(--brutal-cyan)]" },
    { accent: "bg-[var(--brutal-pink)]" },
    { accent: "bg-[var(--brutal-green)]" },
    { accent: "bg-[var(--brutal-orange)]" },
    { accent: "bg-[var(--background)]" },
  ];

  const projects = [
    {
      title: "Media Partner Suara yang Terbungkam Vol.5",
      client: "UKM Musik STMIK DCI",
      type: "Event Documentation • Music",
      tagIcon: <Camera size={14} strokeWidth={3} />,
      description: "Mendokumentasikan energi, emosi, dan atmosfer panggung pertunjukan musik indie 'Suara yang Terbungkam Vol.5' yang diselenggarakan oleh UKM Musik STMIK DCI.",
      techStack: ["Musical Event","Photography", "Event Media", "Low-light Photography"],
      images: [
        "/images/syt/1.webp", "/images/syt/2.webp", "/images/syt/3.webp",
        "/images/syt/4.webp", "/images/syt/5.webp", "/images/syt/6.webp"
      ]
    },
    {
      title: "Media Partner Mubes 2025 Himmaji STMIK DCI",
      client: "Himmaji (Himpunan Mahasiswa Jurusan Manajemen Informatika)",
      type: "Organizational Event Documentation",
      tagIcon: <Users size={14} strokeWidth={3} />,
      description: "Menjadi tim media partner untuk mendokumentasikan Musyawarah Besar (Mubes) Himpunan Mahasiswa Manajemen Informatika (Himmaji) STMIK DCI 2025. Menangkap momen penting diskusi, musyawarah, dan formalitas acara organisasi kemahasiswaan.",
      techStack: ["Event Photography", "Documentation", "Formal Event"],
      images: [
        "/images/himmaji/1.webp", "/images/himmaji/2.webp", "/images/himmaji/3.webp",
        "/images/himmaji/4.webp", "/images/himmaji/5.webp", "/images/himmaji/6.webp"
      ]
    },
    {
      title: "Media Partner Pelantikan Pengurus UKM LDK STMIK DCI 2025/2026",
      client: "UKM LDK STMIK DCI",
      type: "Event Documentation",
      tagIcon: <GraduationCap size={14} strokeWidth={3} />,
      description: "Bertanggung jawab sebagai media partner dalam mendokumentasikan prosesi Pelantikan dan Pelatihan Pengurus UKM Lembaga Dakwah Kampus (LDK) STMIK DCI periode 2025/2026. Menangkap momen formalitas kegiatan, penyampaian materi, hingga antusiasme dan interaksi para peserta.",
      techStack: ["Event Photography", "Media Partner", "Campus Event"],
      images: [
        "/images/ldk/1.webp", "/images/ldk/2.webp", "/images/ldk/3.webp",
        "/images/ldk/4.webp", "/images/ldk/5.webp", "/images/ldk/6.webp"
      ]
    },
    {
      title: "Tim PDD DIKAFOM 2025 UKM Format STMIK DCI",
      client: "UKM Fotografi & Multimedia (Format) STMIK DCI",
      type: "Event Organizer • Multimedia",
      tagIcon: <Film size={14} strokeWidth={3} />,
      description: "Mengambil peran strategis dalam divisi PDD (Publikasi, Dekorasi, dan Dokumentasi) untuk menyukseskan acara puncak DIKAFOM 2025. Bertanggung jawab dalam mengelola alur multimedia, pengeditan visual secara langsung, serta mendokumentasikan keseluruhan dinamika peserta.",
      techStack: ["Photography", "Multimedia", "Video Editing", "Event Organizing"],
      images: [
        "/images/dikafom/1.webp", "/images/dikafom/2.webp", "/images/dikafom/3.webp",
        "/images/dikafom/4.webp", "/images/dikafom/5.webp", "/images/dikafom/6.webp"
      ]
    },
    {
      title: "Media partner RAKERDA & SEMINAR KEBANGSAAN BEM NUSANTARA JAWA BARAT",
      client: "BEM NUSANTARA JAWA BARAT",
      type: "Event Documentation",
      tagIcon: <Users size={14} strokeWidth={3} />,
      description: "Berperan sebagai media partner untuk mendokumentasikan Rapat Kerja Daerah (RAKERDA) & Seminar Kebangsaan yang diselenggarakan oleh BEM Nusantara Jawa Barat di Kampus STMIK DCI Tasikmalaya.",
      techStack: ["Event Photography", "Media Partner", "Formal Event"],
      images: [
        "/images/rakerda/1.webp", "/images/rakerda/2.webp", "/images/rakerda/3.webp",
        "/images/rakerda/4.webp", "/images/rakerda/5.webp", "/images/rakerda/6.webp"
      ]
    },
    {
      title: "Hasil Karya Lainnya",
      client: "Personal Project • Eksplorasi Visual",
      type: "Visual Art • Photography",
      tagIcon: <ImageIcon size={14} strokeWidth={3} />,
      description: "Kumpulan eksplorasi visual personal yang mencakup berbagai genre; mulai dari dinamika street photography, keindahan detail alam, hingga ketekunan dalam menangkap pesona astrofotografi (bintang dan bimasakti). Karya ini mencerminkan kepekaan seni dan fleksibilitas teknis dalam memanfaatkan cahaya.",
      techStack: ["Astrophotography", "Street Photography", "Nature/Macro"],
      images: [
        "/images/pbd/1.webp", "/images/pbd/2.webp", "/images/pbd/3.webp",
        "/images/pbd/4.webp", "/images/pbd/5.webp", "/images/pbd/6.webp"
      ]
    }
  ];

  return (
    <>
      <section id="projects" className="py-32 px-6 max-w-7xl mx-auto relative">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeUp} 
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white brutal-border brutal-shadow-sm text-sm font-bold uppercase mb-6">
            <span className="w-3 h-3 border-2 border-black bg-[var(--brutal-pink)] animate-pulse" />
            Portofolio
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-4 uppercase drop-shadow-[4px_4px_0_#fff]">
            Proyek{" "}
            <span className="text-[var(--brutal-pink)] drop-shadow-[4px_4px_0_#000]">
              &amp; Karya.
            </span>
          </h2>
          <p className="text-xl font-bold max-w-2xl bg-white brutal-border p-4 brutal-shadow-static">
            Eksplorasi visual dan dokumentasi event yang telah dikerjakan selama masa perkuliahan. Klik gambar untuk melihat resolusi penuh.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, idx) => {
            const { accent } = accentStyles[idx % accentStyles.length];
            return (
            <motion.div 
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="brutal-card p-0 flex flex-col relative overflow-hidden"
            >
              {/* Brutalist Window Header */}
              <div className={`brutal-window-header ${accent}`}>
                <div className="brutal-dot bg-white" />
                <div className="brutal-dot bg-white" />
                <div className="brutal-dot bg-white" />
                <span className="ml-2 font-black">PROJECT_0{idx + 1}.EXE</span>
              </div>

              {/* Bagian Teks & Info Proyek */}
              <div className="flex flex-col md:flex-row justify-between gap-6 border-b-4 border-black p-8 md:p-10 bg-white">
                <div className="md:w-2/3">
                  {/* Type tag */}
                  <p className="inline-flex items-center gap-2 text-xs font-black mb-4 px-3 py-1.5 brutal-border bg-black text-white uppercase tracking-widest">
                    {project.tagIcon} {project.type}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-black mb-3 uppercase leading-tight">{project.title}</h3>
                  <p className="text-sm font-bold uppercase mb-4 bg-[var(--background)] px-2 py-1 inline-block border-2 border-black">{project.client}</p>
                  <p className="text-base font-bold leading-relaxed max-w-3xl">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 md:justify-end content-start md:w-1/3">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-sm font-bold brutal-border bg-white whitespace-nowrap uppercase brutal-shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bagian Visual: GRID FOTO */}
              {project.images && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-0 bg-white">
                  {project.images.map((img, i) => (
                    <div 
                      key={i} 
                      onClick={() => setLightbox({ images: project.images, index: i })}
                      className="relative overflow-hidden aspect-video md:aspect-square cursor-zoom-in group/img border-r-4 border-b-4 border-black last:border-r-0 md:[&:nth-child(3n)]:border-r-0"
                    >
                      <Image 
                        src={img} 
                        alt={`Dokumentasi ${project.title} ${i+1}`} 
                        fill
                        sizes="(max-width: 768px) 50vw, 33vw"
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-300 ease-in-out hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
            );
          })}
        </div>
      </section>

      {/* OVERLAY LIGHTBOX FULLSCREEN DENGAN NAVIGASI */}
      <AnimatePresence>
        {lightbox && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--background)]/90 backdrop-blur-md p-4 md:p-12 cursor-zoom-out"
            onClick={() => setLightbox(null)}
          >
            {/* Tombol Close */}
            <button 
              className="absolute top-6 right-6 z-[110] p-3 brutal-border bg-[var(--brutal-pink)] text-black hover:translate-x-1 hover:-translate-y-1 brutal-shadow transition-transform"
              onClick={() => setLightbox(null)}
            >
              <X size={32} strokeWidth={3} />
            </button>

            {/* Tombol Kiri (Previous) */}
            <button 
              className="absolute left-4 md:left-8 z-[110] p-3 brutal-border bg-[var(--brutal-cyan)] text-black hover:translate-x-1 hover:-translate-y-1 brutal-shadow transition-transform"
              onClick={showPrev}
            >
              <ChevronLeft size={32} strokeWidth={3} />
            </button>
            
            {/* Wadah Gambar Full */}
            <div 
              className="relative w-full h-full max-w-7xl flex items-center justify-center cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[80vh] brutal-border brutal-shadow-static bg-white p-2">
                <Image 
                  src={lightbox.images[lightbox.index]} 
                  alt="Preview Karya Fullscreen" 
                  fill
                  className="object-contain"
                  sizes="100vw"
                  quality={100}
                  priority
                />
              </div>
            </div>

            {/* Tombol Kanan (Next) */}
            <button 
              className="absolute right-4 md:right-8 z-[110] p-3 brutal-border bg-[var(--brutal-cyan)] text-black hover:translate-x-1 hover:-translate-y-1 brutal-shadow transition-transform"
              onClick={showNext}
            >
              <ChevronRight size={32} strokeWidth={3} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}