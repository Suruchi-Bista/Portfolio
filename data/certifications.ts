export interface Certification {
  name: string;
  provider: string;
  year: string;
  badge: string;
  color: string;
}

export const certifications: Certification[] = [
  {
    name: "Power BI Data Analyst Associate",
    provider: "Microsoft",
    year: "2024",
    badge: "PL-300",
    color: "from-rose-400 to-pink-600",
  },
  {
    name: "AWS AI Practitioner",
    provider: "Amazon Web Services",
    year: "2024",
    badge: "AIF-C01",
    color: "from-purple-400 to-violet-600",
  },
  {
    name: "AWS Cloud Practitioner",
    provider: "Amazon Web Services",
    year: "2024",
    badge: "CLF-C02",
    color: "from-teal-400 to-cyan-600",
  },
  {
    name: "Ethical Hacking Essentials",
    provider: "EC-Council",
    year: "2025",
    badge: "EHE",
    color: "from-fuchsia-400 to-purple-600",
  },
];
