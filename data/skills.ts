export interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Data Analysis",
    icon: "BarChart3",
    skills: ["Python", "Pandas", "NumPy", "SQL", "Excel", "Statistical Analysis", "Pivot Tables", "VLOOKUP"],
  },
  {
    category: "BI & Reporting",
    icon: "PieChart",
    skills: ["Power BI", "DAX", "Power Query", "Dashboard Design", "KPI Development", "Ad-Hoc Reporting"],
  },
  {
    category: "Data Engineering",
    icon: "Database",
    skills: ["ETL/ELT Pipelines", "Snowflake", "Data Modeling", "Data Cleaning", "Data Validation", "Power Automate"],
  },
  {
    category: "Cloud & Tools",
    icon: "Cloud",
    skills: ["AWS", "Docker", "Git / GitHub", "FastAPI", "Google Gemini API", "PyTorch", "React", "Next.js"],
  },
];
