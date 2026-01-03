'use client';

import { useState } from "react";
import Image from "next/image";
import InteractiveGlobe from "@/app/components/InteractiveGlobe";
import { MapPin, Calendar, X, Globe as GlobeIcon, Camera, Cpu, Activity, GraduationCap } from "lucide-react";

// --- Data Definitions ---

const newsItems = [
  {
    year: "2023 - Present",
    place: "Sacramento, CA",
    event: "Moved back to California to join the State Government.",
  },
  {
    year: "2021",
    place: "Madison, WI",
    event: "Experienced the Midwest while working at Epic Systems.",
  },
  {
    year: "2020",
    place: "San Francisco, CA",
    event: "Started career in consulting during the pandemic.",
  },
  {
    year: "2018 - 2020",
    place: "Baltimore, MD",
    event: "Completed Master's at Johns Hopkins University.",
  },
];

type Interest = {
  id: string;
  title: string;
  description?: string;
  image: string; // Thumbnail image
  type: 'globe' | 'gallery'; // Special type to know if we render the map
  icon: React.ElementType;
  fullContent?: string; // Text for non-globe modals
};

const interests: Interest[] = [
  {
    id: "travel",
    title: "Travel",
    //description: "Mapping my journey across cities, homes, and adventures.",
    image: "/globe.png", // You'll need a generic travel photo here
    type: "globe",
    icon: GlobeIcon,
  },
  {
    id: "photo",
    title: "Soccer",
    //description: "Capturing landscapes, urban geometry, and moments in time.",
    image: "/photo-interest.jpg",
    type: "gallery",
    icon: Activity,
    fullContent: "Here is where you would put a longer description of your photography hobby, or perhaps a grid of your favorite shots. Photography allows me to document the rapid changes in urban environments...",
  },
  {
    id: "classes",
    title: "Classes",
    //description: "Prototyping useful gadgets, fixing things, and makerspace projects.",
    image: "/3dprint-interest.jpg",
    type: "gallery",
    icon: GraduationCap,
    fullContent: "I enjoy the intersection of hardware and software. My 3D printing projects range from practical household fixes to complex mechanical prototypes...",
  },
];

export default function AboutPage() {
  const [selectedInterest, setSelectedInterest] = useState<Interest | null>(null);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-20">
      
      {/* 1. News Section (Now at the top)
      <section>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-8 border-b pb-4 border-slate-200 dark:border-slate-800">
          News
        </h2>
        <div className="space-y-8 border-l-2 border-slate-200 dark:border-slate-800 ml-3 pl-8 relative">
          {newsItems.map((item, i) => (
            <div key={i} className="relative">
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
          Learn more about me and my interests.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {interests.map((interest) => (
            <button
              key={interest.id}
              onClick={() => setSelectedInterest(interest)}
              className="group relative h-64 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 text-left w-full"
            >
              {/* Thumbnail Image */}
              <Image 
                src={interest.image}
                alt={interest.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Overlay Text */}
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
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
             <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                   <selectedInterest.icon size={24} />
                </div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  {selectedInterest.title}
                </h2>
             </div>
             
             {/* Close Button */}
             <button 
                onClick={() => setSelectedInterest(null)}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
             >
               <X size={28} className="text-slate-500 dark:text-slate-400" />
             </button>
          </div>

          {/* Modal Content Area */}
          <div className="flex-1 overflow-y-auto relative bg-slate-50 dark:bg-slate-900">
            
            {/* CONDITIONAL RENDER: Check if it's the Map or just a normal card */}
            {selectedInterest.type === 'globe' ? (
               // Render the Globe Full Screen
               <div className="w-full min-h-full flex items-center justify-center p-4">
                  <div className="w-full max-w-5xl h-full max-h-[800px]">
                     <InteractiveGlobe />
                     <p className="text-center text-slate-500 mt-4 animate-pulse">
                        Drag to explore • Click pins for memories
                     </p>
                  </div>
               </div>
            ) : (
               // Render Standard Content (Photo/Tech)
               <div className="w-full h-full overflow-y-auto p-8 md:p-12">
                  <div className="max-w-3xl mx-auto space-y-8">
                     <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
                        <Image 
                           src={selectedInterest.image}
                           alt={selectedInterest.title}
                           fill
                           className="object-cover"
                        />
                     </div>
                     <div className="prose dark:prose-invert max-w-none">
                        <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                           {selectedInterest.fullContent}
                        </p>
                     </div>
                  </div>
               </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}