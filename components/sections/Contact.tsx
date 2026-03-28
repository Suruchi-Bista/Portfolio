"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="section">
      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="text-xs font-mono text-accent-indigo uppercase tracking-widest">08 — Contact</span>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl"
        >
          <h2 className="font-jakarta font-bold text-3xl md:text-4xl text-[var(--text-primary)] mb-4">
            Let&apos;s <span className="gradient-text">work together</span>
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-10">
            I&apos;m actively looking for internship and full-time opportunities in data analytics,
            business intelligence, and AI/ML. If you have a role, project, or just want to connect —
            my inbox is always open.
          </p>

          <div className="space-y-4">
            {/* Email CTA */}
            <a
              href="mailto:suruchibista1@gmail.com"
              className="flex items-center gap-4 glass rounded-xl p-5 hover:border-accent-indigo/40 transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-accent flex items-center justify-center flex-shrink-0 shadow-lg shadow-accent-indigo/20 group-hover:scale-110 transition-transform">
                <Mail size={18} className="text-white" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-[var(--text-muted)] mb-0.5">Email me at</p>
                <p className="font-semibold text-[var(--text-primary)]">suruchibista1@gmail.com</p>
              </div>
              <Send size={16} className="text-[var(--text-muted)] group-hover:text-accent-indigo transition-colors" />
            </a>

            {/* Social links row */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://www.linkedin.com/in/suruchi-bista/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 glass rounded-xl p-4 hover:border-accent-indigo/40 transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#0A66C2]/20 border border-[#0A66C2]/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <LinkedinIcon size={16} className="text-[#0A66C2]" />
                </div>
                <div>
                  <p className="text-xs text-[var(--text-muted)]">LinkedIn</p>
                  <p className="text-sm font-medium text-[var(--text-primary)]">suruchi-bista</p>
                </div>
              </a>

              <a
                href="https://github.com/Suruchi-Bista"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 glass rounded-xl p-4 hover:border-accent-indigo/40 transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <GithubIcon size={16} className="text-[var(--text-primary)]" />
                </div>
                <div>
                  <p className="text-xs text-[var(--text-muted)]">GitHub</p>
                  <p className="text-sm font-medium text-[var(--text-primary)]">Suruchi-Bista</p>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
