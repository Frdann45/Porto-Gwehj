"use client";

import { motion, Variants } from "framer-motion";
import { Code2, Camera, Palette, Users } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const highlights = [
  {
    icon: <Code2 size={28} strokeWidth={2.5} />,
    label: "Web Development",
    desc: "Membangun aplikasi web modern menggunakan teknologi terkini",
    bg: "bg-[var(--brutal-cyan)]",
  },
  {
    icon: <Camera size={28} strokeWidth={2.5} />,
    label: "Photography",
    desc: "Menangkap momen berharga dengan kepekaan artistik tinggi",
    bg: "bg-[var(--brutal-pink)]",
  },
  {
    icon: <Palette size={28} strokeWidth={2.5} />,
    label: "Graphic Design",
    desc: "Merancang visual yang estetis dan komunikatif",
    bg: "bg-[var(--brutal-orange)]",
  },
  {
    icon: <Users size={28} strokeWidth={2.5} />,
    label: "Social Media",
    desc: "Mengelola konten dan strategi media sosial secara profesional",
    bg: "bg-[var(--brutal-green)]",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 relative bg-white">
      {/* Background Decor */}
      <div className="absolute top-20 right-20 w-12 h-12 bg-black rounded-full" />
      <div className="absolute top-40 left-10 w-24 h-6 bg-black rotate-45" />

      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--brutal-green)] brutal-border brutal-shadow-sm text-sm font-bold uppercase mb-6">
              <span className="w-3 h-3 border-2 border-black bg-white animate-pulse" />
              Tentang Saya
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-8 uppercase leading-none">
              Mahasiswa Teknik{" "}
              <span className="text-[var(--brutal-cyan)] drop-shadow-[4px_4px_0_#000]">Aktif &amp; Berpengalaman</span>
            </h2>
            
            <div className="bg-[var(--background)] brutal-border p-6 brutal-shadow-static mb-8">
              <p className="text-xl font-bold leading-relaxed mb-4">
                Saya adalah Mahasiswa Teknik Informatika di STMIK DCI Tasikmalaya yang memiliki semangat tinggi dalam dunia kreatif dan teknologi. Adaptif, fleksibel, dan selalu siap menghadapi tantangan baru.
              </p>
              <p className="text-xl font-bold leading-relaxed">
                Aktif dalam berbagai organisasi kemahasiswaan sebagai Social Media Specialist, dengan keahlian di bidang desain grafis, fotografi, dan pengembangan web.
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              {[
                { number: "10+", label: "Proyek Selesai", color: "bg-[var(--brutal-cyan)]" },
                { number: "5+", label: "Organisasi", color: "bg-[var(--brutal-pink)]" },
                { number: "3+", label: "Tahun Aktif", color: "bg-[var(--brutal-green)]" },
              ].map((stat) => (
                <div key={stat.label} className={`brutal-border brutal-shadow-sm p-4 text-center flex-1 min-w-[120px] ${stat.color}`}>
                  <div className="text-4xl font-black mb-1 drop-shadow-[2px_2px_0_#fff]">{stat.number}</div>
                  <div className="text-sm font-bold uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, i) => (
              <motion.div key={i} variants={fadeUp}
                className="brutal-card p-0 flex flex-col h-full hover:-translate-y-2 hover:translate-x-2 transition-transform">
                <div className={`brutal-window-header ${item.bg}`}>
                  <div className="brutal-dot bg-white" />
                  <div className="brutal-dot bg-white" />
                  <span className="ml-auto font-black text-xl">{item.icon}</span>
                </div>
                <div className="p-6 bg-white flex-1">
                  <h3 className="font-black text-xl uppercase mb-3">{item.label}</h3>
                  <p className="font-bold text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
