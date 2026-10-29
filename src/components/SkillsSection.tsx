"use client";

import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const skillCategories = [
  {
    title: "Photography & Visual",
    bg: "bg-[var(--brutal-cyan)]",
    skills: [
      { name: "Event Photography", level: 90 },
      { name: "Low-light Photography", level: 85 },
      { name: "Astrophotography", level: 85 },
      { name: "Street Photography", level: 75 },
      { name: "Portrait Photography", level: 70 },
    ],
  },
  {
    title: "Design & Multimedia",
    bg: "bg-[var(--brutal-pink)]",
    skills: [
      { name: "Graphic Design", level: 70 },
      { name: "Video Editing", level: 70 },
      { name: "Adobe Photoshop", level: 75 },
      { name: "Adobe Lightroom", level: 80 },
      { name: "Canva", level: 70 },
    ],
  },
  {
    title: "Web Development",
    bg: "bg-[var(--brutal-orange)]",
    skills: [
      { name: "HTML & CSS", level: 70 },
      { name: "JavaScript", level: 65 },
      { name: "React / Next.js", level: 60 },
      { name: "PHP", level: 70 },
      { name: "MySQL", level: 70 },
    ],
  },
  {
    title: "Soft Skills",
    bg: "bg-[var(--brutal-green)]",
    skills: [
      { name: "Social Media Management", level: 80 },
      { name: "Event Organizing", level: 75 },
      { name: "Team Collaboration", level: 82 },
      { name: "Communication", level: 78 },
      { name: "Problem Solving", level: 80 },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-32 px-6 relative bg-white">
      <div className="absolute top-0 right-1/4 w-32 h-32 bg-[var(--brutal-cyan)] rounded-full brutal-border brutal-shadow-static" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white brutal-border brutal-shadow-sm text-sm font-bold uppercase mb-6">
            <span className="w-3 h-3 border-2 border-black bg-[var(--brutal-orange)] animate-pulse" />
            Keahlian
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-4 uppercase drop-shadow-[4px_4px_0_#fff]">
            Skills{" "}
            <span className="text-[var(--brutal-cyan)] drop-shadow-[4px_4px_0_#000]">&amp; Expertise.</span>
          </h2>
          <p className="text-xl font-bold max-w-2xl bg-white brutal-border p-4 brutal-shadow-static">
            Kombinasi keahlian teknis dan kreatif yang terus diasah melalui pengalaman nyata dalam berbagai proyek dan organisasi.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, ci) => (
            <motion.div key={ci} variants={fadeUp} className="brutal-card p-0 flex flex-col hover:-translate-y-2 hover:translate-x-2 transition-transform">
              <div className={`brutal-window-header ${cat.bg}`}>
                <div className="brutal-dot bg-white" />
                <div className="brutal-dot bg-white" />
                <h3 className="ml-2 font-black text-xl uppercase tracking-widest">{cat.title}</h3>
              </div>
              <div className="p-8 space-y-6 bg-white flex-1">
                {cat.skills.map((skill, si) => (
                  <div key={si}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-black uppercase tracking-wide">{skill.name}</span>
                      <span className="text-sm font-black bg-[var(--background)] px-1 border-2 border-black">{skill.level}%</span>
                    </div>
                    <div className="w-full h-6 border-4 border-black bg-white flex overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: si * 0.1, ease: "easeOut" }}
                        className={`h-full border-r-4 border-black ${cat.bg}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
