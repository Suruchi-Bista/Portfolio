"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Trophy, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { Project, projects } from "@/data/projects";

export default function ProjectCaseStudy({ project }: { project: Project }) {
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[currentIndex - 1];
  const next = projects[currentIndex + 1];

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-6">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--accent-rose)] transition-colors mb-10"
          >
            <ArrowLeft size={14} /> All Projects
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          {project.award && (
            <div className="flex items-center gap-2 mb-4">
              <Trophy size={14} className="text-[var(--accent-rose)]" />
              <span className="text-sm text-[var(--accent-rose)] font-medium">{project.award}</span>
            </div>
          )}
          <h1 className="font-jakarta font-bold text-4xl md:text-5xl text-[var(--text-primary)] mb-3 leading-tight">
            {project.title}
          </h1>
          <p className="text-xl text-[var(--text-secondary)] mb-6">{project.subtitle}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-sm bg-[var(--accent-orchid)]/10 text-[var(--accent-orchid)] border border-[var(--accent-orchid)]/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border)] text-sm text-[var(--text-secondary)] hover:border-[var(--accent-orchid)]/50 hover:text-[var(--text-primary)] transition-all"
              >
                <GithubIcon size={16} /> View Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-accent text-white text-sm hover:opacity-90 transition-all"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
          </div>
        </motion.div>

        {/* Cover image */}
        {project.coverImage && !project.coverImage.includes("cover.jpg") && !project.coverImage.includes("cover.png") && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative h-72 md:h-96 rounded-2xl overflow-hidden mb-10 bg-[var(--surface-2)]"
          >
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover"
            />
          </motion.div>
        )}

        {/* Key metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12"
        >
          {project.highlights.map((h) => (
            <div key={h} className="glass rounded-xl p-4 text-center">
              <p className="font-mono text-sm font-semibold gradient-text-warm">{h}</p>
            </div>
          ))}
        </motion.div>

        {/* Case study body */}
        <div className="space-y-10">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="font-jakarta font-bold text-2xl text-[var(--text-primary)] mb-3 flex items-center gap-2">
              <span className="text-[var(--accent-rose)] text-base font-mono">01</span> The Problem
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">{project.problem}</p>
          </motion.div>

          {/* Approach */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <h2 className="font-jakarta font-bold text-2xl text-[var(--text-primary)] mb-3 flex items-center gap-2">
              <span className="text-[var(--accent-orchid)] text-base font-mono">02</span> My Approach
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">{project.approach}</p>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="font-jakarta font-bold text-2xl text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <span className="text-[var(--accent-teal)] text-base font-mono">03</span> Key Results
            </h2>
            <ul className="space-y-3">
              {project.results.map((r) => (
                <li key={r} className="flex items-start gap-3 text-[var(--text-secondary)]">
                  <CheckCircle2 size={18} className="text-[var(--accent-teal)] flex-shrink-0 mt-0.5" />
                  {r}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Additional images */}
          {project.images.length > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <h2 className="font-jakarta font-bold text-2xl text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <span className="text-[var(--accent-rose)] text-base font-mono">04</span> Gallery
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.images
                  .filter(
                    (img) =>
                      !img.includes("cover.jpg") &&
                      !img.includes("cover.png") &&
                      img !== project.coverImage
                  )
                  .map((img, i) => (
                    <div key={i} className="relative h-52 rounded-xl overflow-hidden bg-[var(--surface-2)]">
                      <Image src={img} alt={`${project.title} screenshot ${i + 2}`} fill className="object-cover" />
                    </div>
                  ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Prev / Next */}
        <div className="mt-16 pt-8 border-t border-[var(--border)] grid grid-cols-2 gap-4">
          {prev ? (
            <Link
              href={`/projects/${prev.slug}`}
              className="glass rounded-xl p-4 hover:border-[var(--accent-rose)]/30 transition-all group"
            >
              <p className="text-xs text-[var(--text-muted)] mb-1">&larr; Previous</p>
              <p className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-rose)] transition-colors">
                {prev.title}
              </p>
            </Link>
          ) : <div />}
          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="glass rounded-xl p-4 hover:border-[var(--accent-orchid)]/30 transition-all group text-right"
            >
              <p className="text-xs text-[var(--text-muted)] mb-1">Next &rarr;</p>
              <p className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-orchid)] transition-colors">
                {next.title}
              </p>
            </Link>
          ) : <div />}
        </div>
      </div>
    </main>
  );
}
