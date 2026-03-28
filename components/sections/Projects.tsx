"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Trophy } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { featuredProjects, secondaryProjects } from "@/data/projects";

function FeaturedCard({ project, index }: { project: (typeof featuredProjects)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="glass rounded-2xl overflow-hidden hover:border-accent-indigo/40 transition-all group"
    >
      {/* Cover image */}
      <div className="relative h-52 bg-[var(--surface-2)] overflow-hidden">
        {project.coverImage && !project.coverImage.includes("cover.jpg") && !project.coverImage.includes("cover.png") ? (
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-navy-800 to-navy-700">
            <span className="font-jakarta font-bold text-4xl gradient-text opacity-30">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
        {project.award && (
          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent-indigo/90 text-white text-xs font-medium backdrop-blur-sm">
            <Trophy size={11} />
            {project.award}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="font-jakarta font-bold text-xl text-[var(--text-primary)] mb-1">
            {project.title}
          </h3>
          <p className="text-sm text-accent-indigo font-medium">{project.subtitle}</p>
        </div>

        <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="grid grid-cols-2 gap-2">
          {project.highlights.slice(0, 4).map((h) => (
            <div
              key={h}
              className="px-2.5 py-1.5 rounded-lg bg-[var(--surface-2)] border border-[var(--border)] text-xs text-[var(--text-secondary)] font-mono"
            >
              {h}
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full text-xs bg-accent-indigo/10 text-accent-indigo border border-accent-indigo/20"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2 py-0.5 rounded-full text-xs text-[var(--text-muted)]">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-1">
          <Link
            href={`/projects/${project.slug}`}
            className="flex items-center gap-1.5 text-sm font-semibold text-[var(--text-primary)] hover:text-accent-indigo transition-colors"
          >
            Case Study <ArrowUpRight size={14} />
          </Link>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors ml-auto"
            >
              <GithubIcon size={15} /> GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function SecondaryCard({ project, index }: { project: (typeof secondaryProjects)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="glass rounded-xl p-5 hover:border-accent-indigo/30 transition-all group"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="font-jakarta font-semibold text-[var(--text-primary)] mb-0.5">
            {project.title}
          </h3>
          {project.award && (
            <span className="inline-flex items-center gap-1 text-xs text-accent-violet font-medium">
              <Trophy size={10} /> {project.award}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            >
              <GithubIcon size={16} />
            </a>
          )}
          <Link
            href={`/projects/${project.slug}`}
            className="text-[var(--text-muted)] hover:text-accent-indigo transition-colors"
          >
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3 line-clamp-2">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded-full text-xs bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text-muted)]"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="section bg-[var(--surface)]">
      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="text-xs font-mono text-accent-indigo uppercase tracking-widest">03 — Projects</span>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10"
        >
          <h2 className="font-jakarta font-bold text-3xl md:text-4xl text-[var(--text-primary)]">
            Work that <span className="gradient-text">makes an impact</span>
          </h2>
          <p className="mt-3 text-[var(--text-secondary)] max-w-xl">
            From hackathon wins to real-world analytics pipelines — here&apos;s what I&apos;ve built.
          </p>
        </motion.div>

        {/* Featured */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {featuredProjects.map((project, i) => (
            <FeaturedCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        {/* Secondary */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest mb-4"
        >
          More Projects
        </motion.p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {secondaryProjects.map((project, i) => (
            <SecondaryCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
