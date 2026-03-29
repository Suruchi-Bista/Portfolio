"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowDown, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

const roles = [
  "Data & BI Analyst",
  "AI Enthusiast",
  "ML Engineer",
  "Problem Solver",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute inset-0 dot-grid opacity-40" />

      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 left-[15%] w-72 h-72 rounded-full bg-[var(--accent-rose)] opacity-[0.06] blur-3xl pointer-events-none animate-float" />
      <div className="absolute bottom-1/3 right-[15%] w-80 h-80 rounded-full bg-[var(--accent-orchid)] opacity-[0.06] blur-3xl pointer-events-none animate-float" style={{ animationDelay: "-3s" }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-[var(--accent-teal)] opacity-[0.04] blur-3xl pointer-events-none animate-float" style={{ animationDelay: "-1.5s" }} />

      {/* Decorative scatter dots (data-viz feel) */}
      <div className="scatter-dots" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div className="flex flex-col items-center gap-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--accent-rose)]/30 bg-[var(--accent-rose)]/10 text-[var(--accent-rose)] text-sm font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-rose)] animate-pulse" />
              Open to internships &amp; full-time roles
            </span>
          </motion.div>

          {/* Greeting + name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-2"
          >
            <p className="text-[var(--text-secondary)] font-inter text-lg">
              Hi, I&apos;m
            </p>
            <h1 className="font-jakarta font-bold text-5xl md:text-7xl leading-tight">
              <span className="gradient-text">Suruchi Bista</span>
            </h1>
          </motion.div>

          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="h-10 flex items-center"
          >
            <span className="font-jakarta text-2xl md:text-3xl text-[var(--text-secondary)]">
              {displayed}
              <span className="inline-block w-0.5 h-7 bg-[var(--accent-orchid)] ml-1 animate-blink align-middle" />
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="max-w-2xl text-[var(--text-secondary)] text-lg leading-relaxed"
          >
            I turn messy data into actionable insights — and build intelligent
            systems to back it up.
          </motion.p>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap justify-center gap-8 py-3"
          >
            {[
              { value: "2×", label: "Hackathon Winner" },
              { value: "4", label: "Certifications" },
              { value: "3.75", label: "GPA" },
              { value: "10K+", label: "Records Analyzed" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center group">
                <p className="font-jakarta font-bold text-2xl gradient-text-warm group-hover:scale-110 transition-transform">{value}</p>
                <p className="text-xs text-[var(--text-muted)]">{label}</p>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-gradient-accent text-white font-semibold text-sm hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[var(--accent-rose)]/20"
            >
              View My Work
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 rounded-xl border border-[var(--border)] text-[var(--text-primary)] font-semibold text-sm hover:border-[var(--accent-orchid)]/60 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex items-center gap-5"
          >
            {[
              { href: "https://github.com/Suruchi-Bista", Icon: GithubIcon, label: "GitHub" },
              { href: "https://www.linkedin.com/in/suruchi-bista/", Icon: LinkedinIcon, label: "LinkedIn" },
              { href: "mailto:suruchibista1@gmail.com", Icon: Mail, label: "Email" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-lg border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--accent-rose)] hover:border-[var(--accent-rose)]/50 transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[var(--text-muted)]"
        >
          <span className="text-xs">scroll</span>
          <ArrowDown size={14} className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
