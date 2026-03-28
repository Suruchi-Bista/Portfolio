import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectCaseStudy from "@/components/sections/ProjectCaseStudy";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Suruchi Bista`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();
  return <ProjectCaseStudy project={project} />;
}
