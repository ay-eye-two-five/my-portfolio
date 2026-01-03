'use client';

import Image from "next/image";

type Role = {
  title: string;
  department?: string;
  period: string;
  location: string;
  description: string[];
};

type ExperienceItem = {
  company: string;
  logo: string;
  logoClasses: string;
  website: string;
  role: Role; // Flattened structure: 1 role per block to fit the 2-row header layout
};

const experiences: ExperienceItem[] = [
  {
    company: "State of California",
    logo: "/cagov.png",
    logoClasses: "w-16 h-16",
    website: "https://ca.gov",
    role: {
      title: "Data Protection Specialist",
      department: "Health and Human Services",
      period: "November 2023 – Present",
      location: "Sacramento, CA",
      description: [
        "Led implementation of enterprise-wide solutions for data classification and protection and developed web dashboard with PowerBI, Python and Snowflake for continuous monitoring and analytics across a state agency with 2000+ employees"
      ],
    },
  },
  {
    company: "Epic Systems",
    logo: "/epic.png",
    logoClasses: "w-16 h-16",
    website: "https://epic.com",
    role: {
      title: "Software Developer",
      department: "Home Health Mobile Apps",
      period: "May – September 2021",
      location: "Madison, WI",
      description: [
        "Collaborated with cross functional teams to ship key features for remote documentation and secure media capture in Rover mobile app used by nurses in healthcare systems across the world 50% ahead of schedule in multiple quarterly software releases"
      ],
    },
  },
  {
    company: "Qral Group",
    logo: "/qral.ico",
    logoClasses: "w-14 h-14",
    website: "https://qral.com",
    role: {
      title: "Management Consultant",
      department: "Biotech/Pharma",
      period: "July 2020 – May 2021",
      location: "San Francisco, CA",
      description: [
        "Served as principal analyst to inform executives on product launch and sales strategy for multi-billion dollar rare disease clients while developing custom ETL pipelines and data warehousing applications to improve analytics efficiency and ROI by over 50%"
      ],
    },
  },
  {
    company: "Bristol Myers Squibb",
    logo: "/bms2.png",
    logoClasses: "w-16 h-16",
    website: "https://bms.com",
    role: {
      title: "Automation Engineering Intern",
      department: "Process Development",
      period: "May – July 2020",
      location: "Devens, MA",
      description: [
        "Integrated complex sensors and process control to enhance automated monoclonal antibody production for cancer therapeutics"
      ],
    },
  },
  {
    company: "Avanos Medical",
    logo: "/avanos.png",
    logoClasses: "w-16 h-16",
    website: "https://avanos.com",
    role: {
      title: "R&D Engineering Intern",
      department: "Interventional Pain Management Division",
      period: "May – Aug 2019",
      location: "Alpharetta, GA",
      description: [
        "Introduced new automated lesion measurement software to improve accuracy and precision while reducing time needed by 90% in testing probes for “COOLIEF*” RF ablation system with $60M in annual sales and supported V&V manufacturing process",
        "Designed hardware simulation unit allowing hundreds of sales reps to demonstrate device capabilities without biological tissue"
      ],
    },
  },
  {
    company: "Johns Hopkins University Whiting School of Engineering",
    logo: "/jhu1.png",
    logoClasses: "w-16 h-16",
    website: "https://jhu.edu",
    role: {
      title: "Teaching Assistant",
      department: "Computer Science Department",
      period: "January 2019 – May 2020",
      location: "Baltimore, MD",
      description: [
        "Mentored 200+ undergraduates in MATLAB & Java courses through debugging complex code and simplifying engineering concepts by leading weekly discussions and office hours"
      ],
    },
  },
  {
    company:  "Johns Hopkins University Whiting School of Engineering",
    logo: "/cbid.png",
    logoClasses: "w-16 h-16",
    website: "https://jhu.edu",
    role: {
      title: "Design Team Co-Founder",
      department: "Center for Bioengineering Innovation and Design", // Empty to handle formatting logic cleanly
      period: "March 2018 – May 2020",
      location: "Baltimore, MD",
      description: [
        "Invented novel extendable needle using CAD and 3D printing allowing hospitals millions annually in operating room cost savings"
      ],
    },
  },
  {
    company: "Johns Hopkins Medicine, Biomedical Engineering",
    logo: "/jhumed.png",
    logoClasses: "w-16 h-16",
    website: "https://hopkinsmedicine.org",
    role: {
      title: "Undergraduate Researcher",
      department: "I-STAR Lab",
      period: "January 2018 – May 2020",
      location: "Baltimore, MD",
      description: [
        "Applied machine learning and computer vision to rapidly diagnose joint osteoarthritis and provide surgical guidance for fractures"
      ],
    },
  },
  {
    company: "UC Davis Air Quality Research Center",
    logo: "/ucd.png",
    logoClasses: "w-16 h-16",
    website: "https://ucdavis.edu",
    role: {
      title: "Student Researcher",
      department: "Wexler Lab",
      period: "May 2015 – May 2023",
      location: "Davis, CA",
      description: [
        "Developed potential automated early screening tool for autism with machine learning and lung geometry from CT scan data",
        "Engineered low-cost wind sensor prototypes for EPA's “IMPROVE” network of ~160 international weather monitoring stations"
      ],
    },
  },
];

export default function Experience() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8 border-b pb-2 border-slate-200 dark:border-slate-800">
        EXPERIENCE
      </h2>

      <div className="flex flex-col gap-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group relative p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-all shadow-sm hover:shadow-md"
          >
            <div className="flex gap-4 sm:gap-6">
              
              {/* Logo (Optional: kept for visual balance, hidden on mobile for space) */}
              <div className="relative w-16 h-16 shrink-0">
                <div className={`relative ${exp.logoClasses}`}>
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 min-w-0">
                
                {/* Row 1: Employer (Left) --- Dates (Right) */}
                <div className="flex justify-between items-baseline mb-1 gap-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 truncate">
                    {exp.company}
                  </h3>
                  <span className="text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap flex-shrink-0">
                    {exp.role.period}
                  </span>
                </div>

                {/* Row 2: Position, Dept (Left) --- Location (Right) */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-3 gap-1 sm:gap-2">
                  <div className="text-sm text-slate-700 dark:text-slate-300">
                    <span className="font-bold">{exp.role.title}</span>
                    {exp.role.department && (
                      <span>, {exp.role.department}</span>
                    )}
                  </div>
                  <span className="text-xs font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500 flex-shrink-0">
                    {exp.role.location}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="list-disc list-outside ml-4 space-y-1.5 marker:text-slate-300 dark:marker:text-slate-600">
                  {exp.role.description.map((point, j) => (
                    <li key={j} className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-1">
                      {point}
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}