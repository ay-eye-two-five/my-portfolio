'use client';

import { useState } from "react";
import Image from "next/image";
import InteractiveGlobe from "@/app/components/InteractiveGlobe";
import CourseList from "@/app/components/CourseList"; // IMPORT THIS
//import { MapPin, Calendar, X, Globe as GlobeIcon, Activity, GraduationCap } from "lucide-react";
import {X, Globe as GlobeIcon, Activity, GraduationCap } from "lucide-react";

// --- Data Definitions ---

const newsItems = [
  {
    year: "January 2025",
    place: "Baltimore, MD",
    event: "I have been accepted into the Flex MBA program at Johns Hopkins Carey Business School with a Dean's Scholarship!",
  },
  {
    year: "December 2024",
    place: "Stanford, CA",
    event: "I have completed the degree requirements for the MS in Computer Science at Stanford University!",
  },
  {
    year: "September 2021",
    place: "Sacramento, CA",
    event: "Moved back to California to start grad school at Stanford and later join the State Government.",
  },
  {
    year: "May 2021",
    place: "Madison, WI",
    event: "Experienced the Midwest while working at Epic Systems.",
  },
  {
    year: "July 2020",
    place: "San Francisco, CA",
    event: "Started career in consulting during the pandemic.",
  },
  {
    year: "May 2020",
    place: "Baltimore, MD",
    event: (
      <>
        I graduated from Johns Hopkins during the pandemic after summer semester in my 3rd year! Thank you to the entire BME and CS faculty+staff and my advisors, <a href="https://en.wikipedia.org/wiki/Ren%C3%A9_Vidal" target="_blank" className="dark:text-blue-600 hover:underline">René Vidal</a> and <a href="https://www.cs.jhu.edu/~abhishek/" target="_blank" className="dark:text-blue-600 hover:underline">Abhishek Jain</a>.
        This summer I will be interning as an Automation Engineer at BMS.
      </>
    ), 
  },
    {
    year: "June 2017",
    place: "Sacramento, CA",
    event: (
      <>
        I just graduated from the IB Diploma Program at Mira Loma High School and will start this fall as a freshman at Johns Hopkins! 
      </>
    ), 
  },
];

type Interest = {
  id: string;
  title: string;
  description?: string;
  image: string;
  // Added 'list' as a valid type
  type: 'globe' | 'gallery' | 'list';
  icon: React.ElementType;
  fullContent?: string;
};

const interests: Interest[] = [
  {
    id: "travel",
    title: "Travel",
    //description: "Mapping my journey across cities, homes, and adventures.",
    image: "/globe.PNG", 
    type: "globe",
    icon: GlobeIcon,
  },
  {
    id: "soccer",
    title: "Soccer",
    //description: "Player and fan. From Sunday leagues to watching the World Cup.",
    image: "/soccer.PNG", 
    type: "gallery",
    icon: Activity,
    fullContent: "I played throughout my childhood until high school. Currently, I am a USSF and CIF certified referee.",
  },
  {
    id: "classes",
    title: "Classes & Learning",
    //description: "Continuous learning in ML, Systems Design, and Public Policy.",
    image: "/grad.jpg", 
    type: "list", // SPECIAL TYPE
    icon: GraduationCap,
  },
];

export default function AboutPage() {
  const [selectedInterest, setSelectedInterest] = useState<Interest | null>(null);

  // Helper to render the correct modal content
  const renderModalContent = () => {
    if (!selectedInterest) return null;

    if (selectedInterest.type === 'globe') {
      return (
        <div className="w-full min-h-full flex flex-col items-center justify-center p-4 py-8">
          <div className="w-full max-w-5xl">
            <InteractiveGlobe />
            <p className="text-center text-slate-500 mt-6 animate-pulse">
              Drag to explore • Click pins for memories
            </p>
          </div>
        </div>
      );
    }

    if (selectedInterest.type === 'list') {
      return <CourseList />;
    }

// Default: Gallery (Soccer)
    return (
      <div className="w-full min-h-full p-8 md:p-12">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* 1. TEXT AT THE TOP */}
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              {selectedInterest.fullContent}
            </p>
          </div>

          {/* 2. IMAGE GALLERY LAYOUT */}
          {/* Mobile: h-auto (let it grow vertically). Desktop: h-[600px] (lock the bento box height) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto md:h-[600px]">
            
            {/* --- LEFT COLUMN (Vertical Image) --- */}
            {/* Mobile: h-[500px] box. Desktop: h-full (matches parent 600px) */}
            <div className="relative w-full h-[500px] md:h-full rounded-2xl shadow-lg overflow-hidden bg-slate-100 dark:bg-slate-800">
              <Image 
                src="/3129.JPG"
                alt="Main soccer photo"
                fill
                // MOBILE: object-contain (Show WHOLE image, no cropping)
                // DESKTOP: object-cover (Fill the box neatly)
                className="object-contain md:object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* --- RIGHT COLUMN (Stack of 2) --- */}
            {/* Mobile: h-auto (stack them). Desktop: h-full (fill parent) */}
            <div className="flex flex-col gap-4 h-auto md:h-full">
              
              {/* Top Right Image */}
              {/* Mobile: h-64 (fixed height). Desktop: flex-1 (fill half of column) */}
              <div className="relative w-full h-64 md:flex-1 rounded-2xl overflow-hidden shadow-lg bg-slate-100 dark:bg-slate-800">
                <Image 
                  src="/IMG_5602.jpeg"
                  alt="Soccer action shot"
                  fill
                  // MOBILE: object-contain. DESKTOP: object-cover.
                  className="object-contain md:object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Bottom Right Image */}
              {/* Mobile: h-64. Desktop: flex-1 */}
              <div className="relative w-full h-64 md:flex-1 bg-slate-100 dark:bg-slate-800 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-center overflow-hidden">
                <Image 
                  src="/ref2.PNG"
                  alt="Referee photo"
                  fill
                  // MOBILE: object-contain. DESKTOP: object-cover.
                  className="object-contain md:object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

            </div>

          </div>

        </div>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-20">
      
      {/* 1. News Section
      <section>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-8 border-b pb-4 border-slate-200 dark:border-slate-800">
          News
        </h2>
        <div className="space-y-8 border-l-2 border-slate-200 dark:border-slate-800 ml-3 pl-8 relative">
          {newsItems.map((item, i) => (
            <div key={`${item.place}-${item.year}`} className="relative">
              <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white dark:border-slate-950 bg-blue-500" />
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400 flex items-center gap-2">
                  <Calendar size={14} /> {item.year}
                </span>
                <span className="hidden sm:inline text-slate-300">•</span>
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                  <MapPin size={14} /> {item.place}
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                {item.event}
              </p>
            </div>
          ))}
        </div>
      </section> */}

      {/* 2. Interests Grid */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-8 border-b pb-4 border-slate-200 dark:border-slate-800">
          Learn about me and my interests
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {interests.map((interest) => (
            <button
              key={interest.id}
              onClick={() => setSelectedInterest(interest)}
              className="group relative h-64 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 text-left w-full"
            >
              <Image 
                src={interest.image}
                alt={interest.title}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center gap-2 text-blue-400 mb-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <interest.icon size={20} />
                  <span className="text-xs font-bold uppercase tracking-wider">Click to view</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-1">{interest.title}</h3>
                <p className="text-slate-200 text-sm font-medium leading-snug opacity-90">{interest.description}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* --- FULL SCREEN MODAL --- */}
      {selectedInterest && (
        <div className="fixed inset-0 z-[100] bg-white dark:bg-slate-950 flex flex-col animate-in fade-in duration-200">
          
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shrink-0">
             <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                   <selectedInterest.icon size={24} />
                </div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  {selectedInterest.title}
                </h2>
             </div>
             
             <button 
                onClick={() => setSelectedInterest(null)}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
             >
               <X size={28} className="text-slate-500 dark:text-slate-400" />
             </button>
          </div>

          {/* Modal Content - Dynamic based on Type */}
          {/* We remove overflow-y-auto here because CourseList handles its own scrolling.
              For others, we might want it. */}
          <div className="flex-1 relative bg-slate-50 dark:bg-slate-900 overflow-hidden">
             {selectedInterest.type === 'list' ? (
                // Course List has its own scroll container
                renderModalContent()
             ) : (
                // Wrapper for scrollable content (Globe/Soccer)
                <div className="w-full h-full overflow-y-auto">
                    {renderModalContent()}
                </div>
             )}
          </div>
        </div>
      )}

      {/* 3. TIMELINE / NEWS SECTION */}
      <section className="pb-20">
        {/* <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-8 border-b pb-4 border-slate-200 dark:border-slate-800">
          Timeline & Updates
        </h2> */}

        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 space-y-10">
          {newsItems.map((item, index) => (
            <div key={index} className="relative pl-8 group">
              
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-white dark:border-slate-950 bg-blue-500 group-hover:scale-125 transition-transform duration-300" />
              
              {/* Content */}
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                <span className="font-bold text-blue-600 dark:text-blue-400 text-sm whitespace-nowrap">
                  {item.year}
                </span>
                <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  {item.place}
                </h3>
              </div>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                {item.event}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
    
  );
}