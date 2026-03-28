export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    title: "Teaching Assistant",
    company: "University of Louisiana Monroe",
    location: "Monroe, LA",
    period: "Aug 2025 – Present",
    current: true,
    bullets: [
      "Support 40+ students in Python-based data manipulation using Pandas and NumPy for data cleaning, transformation, and exploratory analysis",
      "Develop clear examples and exercises focused on data cleaning, data modeling, and analytical thinking — improving students' practical skills",
    ],
  },
  {
    title: "Data Analyst Intern",
    company: "Kisan Microfinance Ltd.",
    location: "Nepal",
    period: "Dec 2024 – Jan 2025",
    current: false,
    bullets: [
      "Built an automated ETL pipeline in Power Query consolidating 50+ Excel files monthly, cutting manual data prep by 40%",
      "Performed data cleaning and quality checks on 10,000+ financial records using Python, identifying root causes of data inconsistencies",
      "Generated routine and ad-hoc Power BI reports tracking 8 KPIs, enabling data-driven lending decisions for stakeholders",
    ],
  },
  {
    title: "IT Support Technician",
    company: "University of Louisiana Monroe",
    location: "Monroe, LA",
    period: "Oct 2023 – Present",
    current: true,
    bullets: [
      "Analyzed 8,000+ support tickets using statistical tools to identify error patterns, reducing repeat incidents by 25%",
      "Scripted system imaging workflows for 50+ computers, automating deployment and reducing manual errors",
      "Built a searchable knowledge base to improve team efficiency and knowledge reuse across incidents",
    ],
  },
  {
    title: "Treasurer",
    company: "Google Developer Student Club (GDSC)",
    location: "Monroe, LA",
    period: "Aug 2024 – Apr 2025",
    current: false,
    bullets: [
      "Managed $5,000+ in budgets across 10+ events, analyzing spending data in Excel to reduce unnecessary costs by 20%",
      "Collaborated with cross-functional teams to ensure transparent, data-driven fund allocation across technical workshops",
    ],
  },
];
