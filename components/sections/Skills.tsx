"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, PieChart, Database, Cloud } from "lucide-react";
import { skillGroups } from "@/data/skills";

const iconMap: Record<string, React.ElementType> = {
  BarChart3,
  PieChart,
  Database,
  Cloud,
};

const cardAccents = [
  "hover:border-[var(--accent-rose)]/40",
  "hover:border-[var(--accent-orchid)]/40",
  "hover:border-[var(--accent-teal)]/40",
  "hover:border-[var(--accent-rose)]/40",
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="section">
      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="text-xs font-mono text-[var(--accent-rose)] uppercase tracking-widest">02 — Skills</span>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <h2 className="font-jakarta font-bold text-3xl md:text-4xl text-[var(--text-primary)]">
            Technical <span className="gradient-text">Toolkit</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {skillGroups.map((group, i) => {
            const Icon = iconMap[group.icon];
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className={`glass rounded-xl p-6 ${cardAccents[i]} transition-all group`}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-gradient-accent flex items-center justify-center shadow-lg shadow-[var(--accent-rose)]/20 group-hover:scale-110 transition-transform">
                    {Icon && <Icon size={16} className="text-white" />}
                  </div>
                  <h3 className="font-jakarta font-semibold text-[var(--text-primary)]">
                    {group.category}
                  </h3>
                </div>

                {/* Skill chips */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent-orchid)]/50 hover:text-[var(--accent-orchid)] transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
