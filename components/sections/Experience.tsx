"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";
import { experiences } from "@/data/experience";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="section">
      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="text-xs font-mono text-[var(--accent-rose)] uppercase tracking-widest">04 — Experience</span>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-jakarta font-bold text-3xl md:text-4xl text-[var(--text-primary)] mb-10"
        >
          Where I&apos;ve <span className="gradient-text">contributed</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent-rose)] via-[var(--accent-orchid)] to-[var(--border)] hidden md:block" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.title}`}
                initial={{ opacity: 0, x: -24 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className="md:pl-16 relative"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-0 top-5 w-12 items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[var(--accent-rose)] ring-4 ring-[var(--background)]" />
                </div>

                <div className="glass rounded-xl p-6 hover:border-[var(--accent-orchid)]/30 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <Briefcase size={14} className="text-[var(--accent-orchid)]" />
                        <h3 className="font-jakarta font-semibold text-[var(--text-primary)]">
                          {exp.title}
                        </h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 rounded-full text-xs bg-[var(--accent-rose)]/10 text-[var(--accent-rose)] border border-[var(--accent-rose)]/20">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-[var(--accent-orchid)] font-medium">{exp.company}</p>
                      <p className="text-xs text-[var(--text-muted)]">{exp.location}</p>
                    </div>
                    <span className="text-xs font-mono text-[var(--text-muted)] whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent-rose)]/60 flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
