'use client';

import Image from "next/image";
import InteractiveGlobe from "@/app/components/InteractiveGlobe";
import { MapPin, Calendar } from "lucide-react";

// Add your personal photos to /public folder
const interests = [
  {
    title: "Photography",
    description: "Capturing landscapes and urban geometry.",
    image: "/photo-interest.jpg", // REPLACE THIS
  },
  {
    title: "Hiking",
    description: "Exploring national parks and trails.",
    image: "/hiking-interest.jpg", // REPLACE THIS
  },
  {
    title: "3D Printing",
    description: "Prototyping useful gadgets and tools.",
    image: "/3dprint-interest.jpg", // REPLACE THIS
  },
];

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

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8 space-y-16">
      
      {/* 1. Globe Section (No Title) */}
      <section>
        <InteractiveGlobe />
        <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-4">
          Drag to rotate • Click pins for details
        </p>
      </section>

      {/* 2. News Section */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-8 border-b pb-4 border-slate-200 dark:border-slate-800">
          News
        </h2>
        <div className="space-y-8 border-l-2 border-slate-200 dark:border-slate-800 ml-3 pl-8 relative">
          {newsItems.map((item, i) => (
            <div key={i} className="relative">
              {/* Dot on the timeline */}
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
      </section>

      {/* 3. Interests Section */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-8 border-b pb-4 border-slate-200 dark:border-slate-800">
          Interests
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <div key={index} className="group relative h-64 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-sm hover:shadow-md transition-shadow">
              {/* Image with overlay */}
              <Image 
                src={interest.image}
                alt={interest.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-lg mb-1">{interest.title}</h3>
                <p className="text-slate-200 text-sm font-medium leading-snug opacity-90">{interest.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}