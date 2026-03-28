import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

export const metadata = {
  title: "Blog — Suruchi Bista",
  description: "Thoughts and insights on data analytics, machine learning, and BI tools.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors mb-10"
        >
          <ArrowLeft size={14} /> Back home
        </Link>

        <div className="text-center py-20">
          <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center mx-auto mb-6 shadow-xl shadow-accent-indigo/20">
            <BookOpen size={26} className="text-white" />
          </div>
          <h1 className="font-jakarta font-bold text-4xl text-[var(--text-primary)] mb-4">
            Blog — <span className="gradient-text">Coming Soon</span>
          </h1>
          <p className="text-[var(--text-secondary)] max-w-md mx-auto leading-relaxed">
            I&apos;m working on articles about data pipelines, Power BI, Python tips, and lessons
            learned from hackathons and internships. Stay tuned.
          </p>
        </div>
      </div>
    </main>
  );
}
