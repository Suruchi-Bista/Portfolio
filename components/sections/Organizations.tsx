"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Code2, Users } from "lucide-react";
import { organizations } from "@/data/organizations";

const iconMap: Record<string, React.ElementType> = { Award, Code2, Users };

export default function Organizations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="organizations" className="section bg-[var(--surface)]">
      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="text-xs font-mono text-[var(--accent-rose)] uppercase tracking-widest">05 — Organizations</span>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-jakarta font-bold text-3xl md:text-4xl text-[var(--text-primary)] mb-10"
        >
          Communities I&apos;ve <span className="gradient-text">shaped</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-5">
          {organizations.map((org, i) => {
            const Icon = iconMap[org.icon];
            return (
              <motion.div
                key={org.name}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className="glass rounded-xl p-6 hover:border-[var(--accent-orchid)]/30 transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-accent flex items-center justify-center shadow-lg shadow-[var(--accent-rose)]/20 group-hover:scale-110 transition-transform">
                    {Icon && <Icon size={18} className="text-white" />}
                  </div>
                  <div>
                    <h3 className="font-jakarta font-semibold text-[var(--text-primary)] text-sm leading-tight">
                      {org.name}
                    </h3>
                    <p className="text-xs text-[var(--accent-orchid)] font-medium">{org.role}</p>
                  </div>
                </div>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {org.description}
                </p>

                <span className="text-xs font-mono text-[var(--text-muted)]">{org.period}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
