export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: "featured" | "secondary";
  award?: string;
  github?: string;
  demo?: string;
  coverImage: string;
  images: string[];
  tags: string[];
  highlights: string[];
  problem: string;
  approach: string;
  results: string[];
  period: string;
}

export const projects: Project[] = [
  {
    slug: "healthcare-readmissions",
    title: "Healthcare Readmissions Risk Analytics",
    subtitle: "End-to-end analytics pipeline across 4,000+ U.S. hospitals",
    description:
      "Built an analytics pipeline integrating CMS hospital performance data with CDC Social Vulnerability Index to contextualize readmission risk across socioeconomic factors.",
    category: "featured",
    github: "https://github.com/Suruchi-Bista/readmissions-risk-pipeline",
    coverImage: "/images/projects/healthcare/01-national-overview.png",
    images: [
      "/images/projects/healthcare/01-national-overview.png",
      "/images/projects/healthcare/02-risk-drivers.png",
      "/images/projects/healthcare/03-hospital-explorer.png",
    ],
    tags: ["Python", "Power BI", "SQL", "Pandas", "DAX", "ETL", "Statistical Analysis"],
    highlights: [
      "4,000+ hospitals analyzed",
      "52% serve high-vulnerability communities",
      "15% flagged as highest risk",
      "4-category risk classification",
    ],
    problem:
      "Hospital readmission rates are a key quality indicator, but raw rates without socioeconomic context can be misleading. High-vulnerability communities face structural disadvantages that inflate readmission rates regardless of hospital performance.",
    approach:
      "Merged CMS Hospital Readmissions Reduction Program data with CDC Social Vulnerability Index at the county level. Engineered 4 risk buckets by crossing SVI (High/Low) with Excess Readmission Ratio (High/Low). Built interactive Power BI dashboards with geospatial maps and drill-down filters.",
    results: [
      "Identified 52% of hospitals serve high-vulnerability populations",
      "Flagged 15% as structurally highest-risk",
      "Enabled executives to distinguish operational underperformers from structurally disadvantaged hospitals",
      "3-page Power BI dashboard: National Overview, Risk Drivers, Hospital Explorer",
    ],
    period: "Dec 2025",
  },
  {
    slug: "signal-ai",
    title: "Signal AI",
    subtitle: "Smart Traffic Management — GDSC × MLH Hackathon Winner",
    description:
      "AI-driven traffic management system analyzing patterns across 15 intersections, reducing wait times by 20% and improving throughput by 500+ vehicles/hour.",
    category: "featured",
    award: "Winner — GDSC × MLH Hackathon",
    github: "https://github.com/Suruchi-Bista/SignalAI",
    coverImage: "/images/projects/signal-ai/cover.jpg",
    images: [],
    tags: ["Python", "TypeScript", "React", "Reinforcement Learning", "Data Engineering"],
    highlights: [
      "20% reduction in wait times",
      "500+ vehicles/hour improvement",
      "15 intersections analyzed",
      "Winner among 30+ teams",
    ],
    problem:
      "Urban traffic congestion causes significant delays, fuel waste, and slow emergency response. Static signal timing fails to adapt to real-time conditions.",
    approach:
      "Built a reinforcement learning model to dynamically adjust signal timing based on live traffic data. Integrated emergency vehicle prioritization and pedestrian detection across 15 intersections.",
    results: [
      "Reduced average wait times by 20%",
      "Improved throughput by 500+ vehicles/hour",
      "Emergency vehicle prioritization implemented",
      "Won 1st place among 30+ teams at GDSC × MLH Hackathon",
    ],
    period: "Nov 2025",
  },
  {
    slug: "codeq",
    title: "CodeQ",
    subtitle: "Quality-Driven Automated Grading with AI Code Detection",
    description:
      "Full-stack automated grading system evaluating programming assignments using instructor-defined tests, rubric-based grading, and prototype AI-generated code detection.",
    category: "featured",
    coverImage: "/images/projects/codeq/cover.png",
    images: [],
    tags: ["Python", "FastAPI", "PostgreSQL", "React", "Next.js", "TypeScript", "Docker", "PyTorch"],
    highlights: [
      "Role-based workflows (Student/Faculty/Admin)",
      "AI code detection via Random Forest",
      "Rubric-based grading engine",
      "Docker Compose containerized",
    ],
    problem:
      "Manual grading of programming assignments is slow and inconsistent. With rising AI code generation, academic integrity detection has become critical.",
    approach:
      "Built a FastAPI backend with PostgreSQL, React/Next.js frontend, JWT authentication, and role-based access control. Developed a Random Forest classifier for AI code detection trained on structural and stylistic code features.",
    results: [
      "Automated grading with instructor-defined test suites",
      "Prototype AI detection system distinguishing human vs AI-generated code",
      "Clean role-based UX for students, faculty, and administrators",
      "Fully containerized with Docker Compose",
    ],
    period: "2025–Present",
  },
  {
    slug: "acl-guard",
    title: "ACL Guard",
    subtitle: "ACL Tear Prevention App — Nexus Louisiana devDays Finalist",
    description:
      "ACL tear prevention application built in collaboration with Ochsner Health, selected as a finalist at Nexus Louisiana's devDays competition and presented in Baton Rouge.",
    category: "secondary",
    award: "Finalist — Nexus Louisiana devDays",
    coverImage: "/images/projects/acl-guard/Nexus_DevDays_11-14-25-118.jpg",
    images: [
      "/images/projects/acl-guard/Nexus_DevDays_11-14-25-118.jpg",
      "/images/projects/acl-guard/Nexus_DevDays_11-14-25-279.jpg",
      "/images/projects/acl-guard/Nexus_DevDays_11-14-25-4-2.jpg",
      "/images/projects/acl-guard/Nexus_DevDays_11-14-25-60.jpg",
    ],
    tags: ["Health Tech", "Mobile App", "AI", "Ochsner Collaboration"],
    highlights: [
      "Collaboration with Ochsner Health",
      "Finalist — Nexus Louisiana devDays",
      "Presented in Baton Rouge",
    ],
    problem:
      "ACL tears are among the most common and debilitating sports injuries, yet often preventable with proper training and early risk identification.",
    approach:
      "Developed an application in collaboration with Ochsner Health professionals to identify ACL tear risk factors and provide targeted prevention guidance.",
    results: [
      "Selected as a finalist among teams across Louisiana",
      "Live presentation to industry judges in Baton Rouge",
      "Built with direct collaboration from Ochsner Health professionals",
    ],
    period: "Nov 2025",
  },
  {
    slug: "easeup",
    title: "EaseUp",
    subtitle: "AI Emotional Support Assistant — Girls Who Code Protothon Winner",
    description:
      "AI-powered assistant using Google Gemini APIs to analyze user input, infer emotional context, and generate personalized task recommendations.",
    category: "secondary",
    award: "Winner — Girls Who Code Protothon",
    coverImage: "/images/projects/easeup/IMG_4597.jpeg",
    images: [
      "/images/projects/easeup/IMG_4597.jpeg",
      "/images/projects/easeup/IMG_4610.jpeg",
      "/images/projects/easeup/Screenshot 2026-03-26 112533.png",
    ],
    tags: ["Python", "Google Gemini API", "AI/ML", "NLP"],
    highlights: [
      "Google Gemini API integration",
      "Emotional context inference",
      "Personalized recommendations",
      "Winner — Girls Who Code Protothon",
    ],
    problem:
      "Mental wellbeing is often overlooked in task management tools, leading to burnout — especially among students juggling academic and personal pressures.",
    approach:
      "Used Google Gemini APIs to analyze user-submitted text for emotional context, then generated personalized task recommendations and supportive responses tailored to the user's emotional state.",
    results: [
      "Won 1st place at the Girls Who Code Protothon",
      "Recognized for impactful AI innovation",
      "Delivered emotionally-aware task management through LLM-powered inference",
    ],
    period: "Sep 2025",
  },
  {
    slug: "sketchman-ai",
    title: "SketchMan AI",
    subtitle: "AI-Assisted Sketching Tool — Pelican Cup Finalist",
    description:
      "Data-driven concept for an AI-assisted application aimed at reducing bias and inefficiencies in traditional suspect sketch workflows.",
    category: "secondary",
    award: "Finalist — Pelican Cup Entrepreneurship",
    coverImage:
      "/images/projects/sketchman-ai/431214697_936031874467393_7246662525241517210_n.jpg",
    images: [
      "/images/projects/sketchman-ai/1725085024407.jpg",
      "/images/projects/sketchman-ai/1725085024489.jpg",
      "/images/projects/sketchman-ai/1725085024565.jpg",
      "/images/projects/sketchman-ai/431214697_936031874467393_7246662525241517210_n.jpg",
    ],
    tags: ["AI", "Computer Vision", "Power BI", "Market Research", "Entrepreneurship"],
    highlights: [
      "Bias reduction in suspect workflows",
      "Interactive Power BI dashboards",
      "Market research & adoption modeling",
      "Pelican Cup Finalist",
    ],
    problem:
      "Traditional suspect sketch processes rely on artist skill and witness memory, introducing significant bias and inconsistency in law enforcement.",
    approach:
      "Developed an AI-assisted sketching concept and validated it through market research. Built Power BI dashboards to visualize adoption scenarios and market opportunity for competition judges.",
    results: [
      "Selected as a Pelican Cup finalist",
      "Demonstrated clear market need through data-driven presentations",
      "Power BI dashboards built for stakeholder storytelling",
    ],
    period: "Apr 2024",
  },
  {
    slug: "immerse-ar",
    title: "Immerse AR",
    subtitle: "AR Indoor Navigation Proposal — Pelican Cup Multi-State Finalist",
    description:
      "Business proposal for an AR-based indoor navigation application using augmented reality and AI for building interior wayfinding, selected as a finalist across Louisiana and neighboring states.",
    category: "secondary",
    award: "Finalist — Pelican Cup (Multi-State)",
    coverImage: "/images/projects/immerse-ar/cover.jpg",
    images: [],
    tags: ["AR/VR", "Business Strategy", "Market Research", "Entrepreneurship"],
    highlights: [
      "Multi-state finalist",
      "AR + AI indoor navigation",
      "Expert evaluator presentations",
      "Survey-backed market validation",
    ],
    problem:
      "Indoor navigation in large buildings (hospitals, universities, airports) remains unsolved by GPS, causing frustration and inefficiency for visitors.",
    approach:
      "Developed a comprehensive business proposal for an AR-powered indoor navigation system. Conducted surveys and expert evaluator presentations to validate market need and feasibility.",
    results: [
      "Selected as a Pelican Cup finalist across Louisiana and neighboring states",
      "Presented to expert evaluators with survey-backed market data",
      "Validated strong demand for AR indoor navigation",
    ],
    period: "2024",
  },
];

export const featuredProjects = projects.filter((p) => p.category === "featured");
export const secondaryProjects = projects.filter((p) => p.category === "secondary");
