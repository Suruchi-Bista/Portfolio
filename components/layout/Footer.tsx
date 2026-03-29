import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm text-[var(--text-muted)]">
          &copy; 2026 <span className="gradient-text-warm font-semibold">Suruchi Bista</span>
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Suruchi-Bista"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-muted)] hover:text-[var(--accent-rose)] transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/suruchi-bista/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-muted)] hover:text-[var(--accent-orchid)] transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="mailto:suruchibista1@gmail.com"
            className="text-[var(--text-muted)] hover:text-[var(--accent-teal)] transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
        <p className="text-xs text-[var(--text-muted)]">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
