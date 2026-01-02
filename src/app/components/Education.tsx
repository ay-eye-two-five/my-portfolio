// src/app/components/Education.tsx
'use client';

import Image from "next/image";
import { CheckCircle, FileText } from "lucide-react";

type Degree = {
  title: string;
  subSchool: string;
  period: string;
  gpa: string;
  description?: string;
  status: "completed" | "in-progress";
  progress?: number; 
  diplomaUrl?: string; 
};

type School = {
  school: string;
  logo: string;
  logoClasses: string; // <--- NEW: Controls size per school
  website: string;
  degrees: Degree[];
};

const education: School[] = [
  {
    school: "Stanford University",
    logo: "/stanford.png", 
    // CHANGE THIS STRING TO ADJUST STANFORD SIZE INDEPENDENTLY
    logoClasses: "w-20 h-20", 
    website: "https://www.stanford.edu",
    degrees: [
      {
        title: "MS Computer Science",
        subSchool: "School of Engineering",
        period: "2021 - 2024", 
        gpa: "3.5",
        description: "Specializing in Artificial Intelligence",
        status: "completed", 
        diplomaUrl: "/mscs.pdf", 
      },
      {
        title: "MS Biomedical Data Science",
        subSchool: "School of Medicine",
        period: "2023 - Present",
        gpa: "3.5",
        //description: "Specializing in Systems Biology.",
        status: "in-progress",
        progress: 75, 
      },
    ],
  },
  {
    school: "Johns Hopkins University",
    logo: "/jhu.png", 
    // CHANGE THIS STRING TO ADJUST JHU SIZE INDEPENDENTLY
    logoClasses: "w-20 h-20", 
    website: "https://www.jhu.edu",
    degrees: [
      {
        title: "BS Biomedical Engineering & Computer Science",
        subSchool: "Whiting School of Engineering",
        period: "2017 - 2020",
        gpa: "3.9",
        description: "Specializing in Biomedical Data Science",
        status: "completed",
        diplomaUrl: "/bs.pdf", 
      },
      {
        title: "MBA",
        subSchool: "Carey Business School",
        period: "2025 - Present", 
        gpa: "3.6",
        //description: "Dean's Scholarship",
        status: "in-progress", 
        progress: 20, 
      },
    ],
  },
];

export default function Education() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-2">      
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className="group relative h-full p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-all shadow-sm hover:shadow-md flex flex-col"
          >
            {/* Main Header: Logo and University Name (Links to School) */}
            <a 
              href={edu.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4 group/header"
            >
              {/* UPDATED LOGO: Uses the custom class from data */}
              <div className={`relative ${edu.logoClasses} flex-shrink-0`}>
                <Image 
                  src={edu.logo} 
                  alt={edu.school} 
                  fill 
                  className="object-contain" 
                />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover/header:text-blue-600 dark:group-hover/header:text-blue-400 transition-colors">
                {edu.school}
              </h3>
            </a>

            {/* List of Degrees */}
            <div className="flex-1 space-y-2">
              {edu.degrees.map((degree, i) => (
                <div key={i} className="relative pl-4 border-l-2 border-slate-200 dark:border-slate-700">
                  
                  {/* Row 1: Degree Name + Date + Status Icon/Bar */}
                  <div className="flex justify-between items-start gap-4">
                    
                    {/* Title with Date inline */}
                    <h4 className="text-md font-bold text-slate-900 dark:text-slate-100 leading-tight">
                      {degree.title}
                      {/* Date directly after title */}
                      <span className="ml-2 text-sm font-normal text-slate-400 dark:text-slate-500">
                        {degree.period}
                      </span>
                    </h4>

                    {/* STATUS LOGIC */}
                    <div className="flex items-center gap-2 flex-shrink-0 pt-0.5">
                      {degree.status === "completed" ? (
                        <>
                          <CheckCircle className="text-emerald-500" size={18} />
                          
                          {degree.diplomaUrl && (
                            <a 
                              href={degree.diplomaUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-slate-400 hover:text-blue-600 transition-colors"
                              title="View Diploma"
                              onClick={(e) => e.stopPropagation()} 
                            >
                              <FileText size={18} />
                            </a>
                          )}
                        </>
                      ) : (
                        <div className="w-24 flex flex-col items-end gap-1">
                          <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-blue-500 rounded-full" 
                              style={{ width: `${degree.progress}%` }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Row 2: Sub-School (Left) -- GPA (Right) */}
                  <div className="mt-1 flex flex-wrap items-center justify-between text-xs font-medium uppercase tracking-wide">
                    <span className="text-slate-500 dark:text-slate-400">
                      {degree.subSchool}
                    </span>

                    {/* Just GPA on the right */}
                    <span className="text-emerald-600 dark:text-emerald-400">
                      GPA: {degree.gpa}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {degree.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}