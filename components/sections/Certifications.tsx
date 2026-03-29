"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck } from "lucide-react";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" className="section">
      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="text-xs font-mono text-[var(--accent-rose)] uppercase tracking-widest">06 — Certifications</span>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-jakarta font-bold text-3xl md:text-4xl text-[var(--text-primary)] mb-10"
        >
          Verified <span className="gradient-text">credentials</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              className="glass rounded-xl p-5 hover:border-[var(--accent-orchid)]/30 transition-all group text-center"
            >
              {/* Badge circle */}
              <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${cert.color} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <ShieldCheck size={22} className="text-white" />
              </div>

              <div className="space-y-1">
                <span className="inline-block px-2 py-0.5 rounded-full text-xs font-mono font-bold bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text-muted)]">
                  {cert.badge}
                </span>
                <h3 className="font-jakarta font-semibold text-[var(--text-primary)] text-sm leading-tight">
                  {cert.name}
                </h3>
                <p className="text-xs text-[var(--accent-orchid)] font-medium">{cert.provider}</p>
                <p className="text-xs text-[var(--text-muted)]">{cert.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
