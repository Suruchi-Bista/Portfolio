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
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "AWS AI Practitioner",
    provider: "Amazon Web Services",
    year: "2024",
    badge: "AIF-C01",
    color: "from-orange-400 to-amber-500",
  },
  {
    name: "AWS Cloud Practitioner",
    provider: "Amazon Web Services",
    year: "2024",
    badge: "CLF-C02",
    color: "from-orange-400 to-amber-500",
  },
  {
    name: "Ethical Hacking Essentials",
    provider: "EC-Council",
    year: "2025",
    badge: "EHE",
    color: "from-red-500 to-rose-600",
  },
];
