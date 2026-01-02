// src/app/components/Education.tsx
import Image from "next/image";

const education = [
  {
    school: "Stanford University",
    degree: "MS Computer Science (AI) & MS Biomedical Informatics",
    period: "2021 - Present",
    gpa: "GPA: 3.7",
    logo: "/stanford.png", // Make sure to put this image in your public folder
    description: "Specializing in Artificial Intelligence and Systems Biology. Dual Master's degrees.",
  },
  {
    school: "Johns Hopkins University",
    degree: "BS Biomedical Engineering & CS, MBA",
    period: "2017 - 2020",
    gpa: "GPA: 3.9",
    logo: "/jhu.png", // Make sure to put this image in your public folder
    description: "Double major in BME and CS. Currently pursuing MBA at Carey Business School.",
  },
];

export default function Education() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8">
        Education
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className="group relative h-full p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-all shadow-sm hover:shadow-md flex flex-col"
          >
            {/* Header: Logo and School Name */}
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-12 h-12 flex-shrink-0 rounded-full overflow-hidden border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800">
                {/* For now, this is a placeholder. 
                   Once you add 'stanford.png' and 'jhu.png' to your public folder, 
                   uncomment the Image component below.
                */}
                <div className="w-full h-full flex items-center justify-center text-xs text-slate-400 font-bold">
                  {edu.school[0]}
                </div>
                {/* <Image 
                  src={edu.logo} 
                  alt={edu.school} 
                  fill 
                  className="object-cover" 
                /> 
                */}
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {edu.school}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-500 font-medium">
                  {edu.period}
                </p>
              </div>
            </div>

            {/* Degree Info */}
            <div className="flex-1">
              <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                {edu.degree}
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {edu.description}
              </p>
            </div>

            {/* GPA Badge */}
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="px-3 py-1 text-xs font-semibold text-emerald-700 bg-emerald-50 dark:bg-emerald-900/30 dark:text-emerald-400 rounded-full">
                {edu.gpa}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}