// app/components/Home.tsx
import Image from "next/image";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      target={href.startsWith("/") ? undefined : "_blank"}
      rel={href.startsWith("/") ? undefined : "noopener noreferrer"}
      className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
    >
      {icon}
    </a>
  );
}

export default function Hero() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 md:py-32">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Asef Islam
          </h1>
          
          <h2 className="mt-4 text-xl text-slate-600 dark:text-slate-400 font-medium">
            MSCS @ Stanford University
          </h2>
          
          <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg mx-auto md:mx-0">
            Specializing in Artificial Intelligence and Biomedical Informatics. 
            Building the intersection of systems biology and scalable ML.
            Previously at Johns Hopkins.
          </p>

          {/* Social Links */}
          <div className="mt-8 flex items-center justify-center md:justify-start gap-6">
            <SocialLink href="https://github.com/yourusername" icon={<Github size={20} />} label="GitHub" />
            <SocialLink href="https://linkedin.com/in/asefislam" icon={<Linkedin size={20} />} label="LinkedIn" />
            <SocialLink href="mailto:your-email@stanford.edu" icon={<Mail size={20} />} label="Email" />
            <SocialLink href="/resume.pdf" icon={<FileText size={20} />} label="Resume" />
          </div>
        </div>

        {/* Right Side: Profile Image */}
        <div className="relative group">
          {/* Decorative crisp border effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full opacity-25 group-hover:opacity-50 transition duration-500 blur-sm"></div>
          
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-white dark:border-slate-800 shadow-xl">
            {/* NOTE: Place your photo in the 'public' folder and name it 'profile.jpg' 
               If you don't have one yet, this will show a placeholder.
            */}
            <Image 
              src="/profile.jpg" 
              alt="Asef Islam" 
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}

// Simple helper component for the icons
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