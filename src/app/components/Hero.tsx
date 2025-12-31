'use client';

// app/components/Hero.tsx
import Image from "next/image";
import { Github, Linkedin, Mail, FileText, CheckCircle2, Award, BookOpen } from "lucide-react";

export default function Hero() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-8 md:py-12">
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-12">
        
        {/* Left Side: Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Asef Islam
          </h1>

          <h2 className="mt-4 text-xl text-slate-600 dark:text-slate-400 font-medium">
            I am a continuous learner, explorer and problem solver
          </h2>

          <p className="mt-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg mx-auto md:mx-0">
            I have 10+ years of research experience in ML and CV applications for medicine, <br/>
            3.5 years of full time work experience (+0.5 as an intern), <br/>
            9 publications, 1 patent, and 45+ citations.
          </p>

          {/* Social Links */}
          <div className="mt-2 flex items-center justify-center md:justify-start gap-6">
            <SocialLink href="mailto:asef@cs.stanford.edu" icon={<Mail size={20} />} label="Email" />
            <SocialLink href="https://drive.google.com/file/d/1ok3pihBn92NB4tb9tiKNQFcL4IKPt9m7/view?usp=drive_link" icon={<FileText size={20} />} label="Resume" />
            <SocialLink href="https://linkedin.com/in/asefislam" icon={<Linkedin size={20} />} label="LinkedIn" />
            <SocialLink href="https://scholar.google.com/citations?user=your-id" icon={<BookOpen size={20} />} label="Google Scholar" />
            <SocialLink href="https://github.com/ay-eye-two-five" icon={<Github size={20} />} label="GitHub" />
          </div> <br/>

          {/* University Tiles */}
          <div className="grid grid-cols-2 gap-6">
            <a
              href="https://www.stanford.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-52 h-full md:w-64 bg-transparent rounded-lg overflow-hidden border border-slate-700 hover:scale-105 transform transition-transform relative"
              aria-label="Stanford University"
            >
              <div className="flex items-center gap-3 p-3">
                <Image
                  src="/stanford.png"
                  alt="Stanford block S logo"
                  width={22}
                  height={22}
                  className="object-contain"
                  quality={95}
                />
                <div>
                  <div className="text-4xl md:text-2xl font-semibold text-slate-900 dark:text-slate-900 leading-none">Stanford</div>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-start p-3 text-xs text-slate-700 dark:text-slate-300 space-y-2">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="font-semibold text-slate-900 dark:text-slate-100">MS Computer Science</div>
                    <CheckCircle2 size={16} className="text-green-500" />
                    <button
                      onClick={() => window.open('/Master of Science.pdf', '_blank')}
                      className="inline-block ml-1 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors cursor-pointer bg-none border-none p-0"
                      aria-label="View CS diploma"
                    >
                      <Award size={18} />
                    </button>
                  </div>
                  <div>Specialization: Artificial Intelligence</div>
                  <div>School of Engineering</div>
                  <div className="text-slate-600 dark:text-slate-400">Sep 2021 - June 2024</div>
                  <br/>
                </div>
                <div className="pt-2">
                  <div className="flex items-center gap-2">
                    <div className="font-semibold text-slate-900 dark:text-slate-100">MS Biomedical Informatics</div>
                    <div className="w-12 h-2 bg-slate-300 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full w-4/5 bg-yellow-500"></div>
                    </div>
                  </div>
                  <div>School of Medicine</div>
                  <div className="text-slate-600 dark:text-slate-400">Jan 2023 - Present</div>
                </div>
              </div>
            </a>

            <a
              href="https://www.jhu.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-52 md:w-64 h-full bg-transparent rounded-lg overflow-hidden border border-slate-700 hover:scale-105 transform transition-transform relative"
              aria-label="Johns Hopkins University"
            >
              <div className="flex items-center gap-3 p-3">
                <Image
                  src="/jhu.png"
                  alt="Johns Hopkins Blue Jay logo"
                  width={35}
                  height={35}
                  className="object-contain"
                  quality={95}
                />
                <div>
                  <div className="text-4xl md:text-2xl font-semibold text-slate-900 dark:text-slate-900 leading-none">Johns Hopkins</div>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-start p-3 text-xs text-slate-700 dark:text-slate-300 space-y-2">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="font-semibold text-slate-900 dark:text-slate-100">BS Biomedical Engineering and Computer Science</div>
                    <CheckCircle2 size={28} className="text-green-500" />
                    <button
                      onClick={() => window.open('/diploma-bs.pdf', '_blank')}
                      className="inline-block ml-1 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors cursor-pointer bg-none border-none p-0"
                      aria-label="View BS diploma"
                    >
                      <Award size={18} />
                    </button>
                  </div>
                  <div>Specialization: Biomedical Data Science</div>
                  <div>Whiting School of Engineering</div>
                  <div className="text-slate-600 dark:text-slate-400">Aug 2017 - May 2020</div>
                </div>
                <div className="pt-2">
                  <div className="flex items-center gap-2">
                    <div className="font-semibold text-slate-900 dark:text-slate-100">MBA</div>
                    <div className="w-12 h-2 bg-slate-300 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full w-1/4 bg-yellow-500"></div>
                    </div>
                  </div>
                  <div>Carey Business School</div>
                  <div className="text-slate-600 dark:text-slate-400">January 2025 - Present</div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Right Side: Profile Image */}
        <div className="relative group">
          <div className="relative w-48 h-48 md:w-64 md:h-64 md:mt-6 rounded-full overflow-hidden border-2 
          border-slate-200 dark:border-slate-800 shadow-xl">
            <Image
              src="/japan.jpg"
              alt="Asef Islam"
              width={2048}
              height={2048}
              quality={100}
              sizes="(min-width: 768px) 256px, 192px"
              className="object-cover w-full h-full transform scale-110 transition-transform duration-300 origin-center"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}

// Helper component for the icons
function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors duration-200"
      aria-label={label}
    >
      {icon}
    </a>
  );
}