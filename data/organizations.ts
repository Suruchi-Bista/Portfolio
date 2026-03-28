export interface Organization {
  name: string;
  role: string;
  period: string;
  description: string;
  icon: string;
}

export const organizations: Organization[] = [
  {
    name: "Upsilon Pi Epsilon",
    role: "Selected Member",
    period: "2024 – Present",
    description:
      "International Honor Society for the Computing and Information Disciplines — selected based on academic excellence and contributions to computing.",
    icon: "Award",
  },
  {
    name: "Girls Who Code",
    role: "Graphic Designer",
    period: "2023 – Present",
    description:
      "Contributed as Graphic Designer, creating visual materials to promote initiatives advancing women in technology and computer science.",
    icon: "Code2",
  },
  {
    name: "Google Developer Student Club",
    role: "Treasurer",
    period: "Aug 2024 – Apr 2025",
    description:
      "Managed $5,000+ in budgets across 10+ technical events, ensuring transparent fund allocation and cost-efficient execution of developer initiatives.",
    icon: "Users",
  },
];
