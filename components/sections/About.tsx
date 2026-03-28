"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { MapPin, GraduationCap, Calendar } from "lucide-react";

const stats = [
  { value: "3.75", label: "GPA", sub: "Computer Science" },
  { value: "2×", label: "Hackathon Winner", sub: "GDSC × MLH · GWC" },
  { value: "4", label: "Certifications", sub: "Microsoft · AWS · EC-Council" },
  { value: "10K+", label: "Records Analyzed", sub: "Kisan Microfinance" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section bg-[var(--surface)]">
      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="text-xs font-mono text-accent-indigo uppercase tracking-widest">01 — About</span>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden gradient-border glow-indigo">
                <Image
                  src="/images/profile/headshot.jpg"
                  alt="Suruchi Bista"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-2 shadow-lg">
                <p className="text-xs text-[var(--text-muted)]">Graduating</p>
                <p className="font-jakarta font-semibold text-[var(--text-primary)] text-sm">May 2026</p>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h2 className="font-jakarta font-bold text-3xl md:text-4xl text-[var(--text-primary)] mb-4">
                Turning data into{" "}
                <span className="gradient-text">decisions</span>
              </h2>
              <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
                <p>
                  I&apos;m a Computer Science student at the University of Louisiana Monroe
                  with a passion for transforming raw, messy data into insights that drive real decisions.
                  Whether it&apos;s building ETL pipelines, designing Power BI dashboards, or
                  training ML models that win hackathons — I work where data meets impact.
                </p>
                <p>
                  As a Microsoft-certified Power BI Data Analyst and AWS AI Practitioner, I bring
                  both technical depth and business intuition. I&apos;ve cleaned 10,000+ financial records,
                  analyzed 4,000+ hospitals, and built systems that reduce wait times and prevent injuries —
                  all before finishing my degree.
                </p>
              </div>
            </div>

            {/* Info chips */}
            <div className="flex flex-wrap gap-3">
              {[
                { Icon: MapPin, text: "Monroe, LA" },
                { Icon: GraduationCap, text: "BS Computer Science" },
                { Icon: Calendar, text: "Graduating May 2026" },
              ].map(({ Icon, text }) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--surface-2)] border border-[var(--border)] text-sm text-[var(--text-secondary)]"
                >
                  <Icon size={13} className="text-accent-indigo" />
                  {text}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map(({ value, label, sub }) => (
            <div
              key={label}
              className="glass rounded-xl p-5 text-center hover:border-accent-indigo/40 transition-all group"
            >
              <p className="font-jakarta font-bold text-3xl gradient-text group-hover:scale-105 transition-transform">
                {value}
              </p>
              <p className="font-semibold text-[var(--text-primary)] text-sm mt-1">{label}</p>
              <p className="text-[var(--text-muted)] text-xs mt-0.5">{sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
