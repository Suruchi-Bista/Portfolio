"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, ArrowRight } from "lucide-react";

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="blog" className="section bg-[var(--surface)]">
      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="text-xs font-mono text-[var(--accent-rose)] uppercase tracking-widest">07 — Blog</span>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass rounded-2xl p-10 md:p-16 text-center relative overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-rose)]/5 via-transparent to-[var(--accent-orchid)]/5 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-xl shadow-[var(--accent-rose)]/20">
              <BookOpen size={26} className="text-white" />
            </div>

            <div>
              <h2 className="font-jakarta font-bold text-3xl md:text-4xl text-[var(--text-primary)] mb-3">
                Thoughts &amp; <span className="gradient-text">Insights</span>
              </h2>
              <p className="text-[var(--text-secondary)] max-w-md mx-auto leading-relaxed">
                I&apos;m working on articles about data analysis, machine learning, and the tools I use
                every day. Check back soon.
              </p>
            </div>

            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--accent-rose)]/30 bg-[var(--accent-rose)]/10 text-[var(--accent-rose)] text-sm font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-rose)] animate-pulse" />
              Coming Soon
              <ArrowRight size={14} />
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4 w-full max-w-sm opacity-40">
              {["Data Pipelines 101", "Power BI Tips", "ML for Beginners"].map((title) => (
                <div key={title} className="glass rounded-lg p-3 text-xs text-center text-[var(--text-muted)]">
                  {title}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
