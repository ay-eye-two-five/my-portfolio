'use client';

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { X, Briefcase, Home, Plane, Calendar } from "lucide-react";

// Dynamically import the Globe to avoid server-side issues
const Globe = dynamic(() => import("react-globe.gl"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-[600px] text-slate-400 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
      Loading Map...
    </div>
  ),
});

type LocationCategory = 'lived' | 'worked' | 'traveled';

type LocationData = {
  lat: number;
  lng: number;
  label: string;
  description: string;
  date: string;
  category: LocationCategory;
};

// Define colors based on category
const categoryColors: Record<LocationCategory, string> = {
  lived: "#ef4444",   // Red
  worked: "#3b82f6",  // Blue
  traveled: "#22c55e", // Green
};

const myLocations: LocationData[] = [
  // --- LIVED (Red) ---
  {
    lat: 23.8103,
    lng: 90.4125,
    label: "Dhaka, Bangladesh",
    description: "Born here.",
    date: "Birth",
    category: "lived",
  },
  {
    lat: 43.7615,
    lng: -79.4111,
    label: "North York, Toronto",
    description: "Spent early childhood in Canada.",
    date: "Childhood",
    category: "lived",
  },
  {
    lat: 42.3149,
    lng: -83.0364,
    label: "Windsor, ON",
    description: "Lived near the Detroit border.",
    date: "Childhood",
    category: "lived",
  },
  {
    lat: 38.6324,
    lng: -121.5057,
    label: "Natomas, CA",
    description: "Sacramento area.",
    date: "Growing Up",
    category: "lived",
  },
  {
    lat: 38.6780,
    lng: -121.1761,
    label: "Folsom, CA",
    description: "Sacramento area.",
    date: "Growing Up",
    category: "lived",
  },
  {
    lat: 38.5449,
    lng: -121.7405,
    label: "Davis, CA",
    description: "Undergraduate & Researcher at UC Davis.",
    date: "2015 - 2023",
    category: "lived",
  },
  {
    lat: 39.3289,
    lng: -76.6169,
    label: "Charles Village, Baltimore",
    description: "Lived here while attending Johns Hopkins graduate school.",
    date: "2018 - 2020",
    category: "lived",
  },
  {
    lat: 37.4419,
    lng: -122.1430,
    label: "Palo Alto, CA",
    description: "Lived in the Bay Area during consulting work.",
    date: "c. 2020 - 2021",
    category: "lived",
  },
  {
    lat: 33.9526,
    lng: -84.5499,
    label: "Marietta, GA",
    description: "Lived near Atlanta during internship.",
    date: "2019",
    category: "lived",
  },

  // --- WORKED (Blue) ---
  {
    lat: 42.9841,
    lng: -89.5350,
    label: "Verona, WI",
    description: "Software Developer at Epic Systems.",
    date: "2021",
    category: "worked",
  },
  {
    lat: 34.0754,
    lng: -84.2941,
    label: "Alpharetta, GA",
    description: "R&D Internship at Avanos Medical.",
    date: "2019",
    category: "worked",
  },
  {
    lat: 42.5562,
    lng: -71.6139,
    label: "Devens, MA",
    description: "Engineering Internship at Bristol Myers Squibb.",
    date: "2020",
    category: "worked",
  },
  {
    lat: 37.7749,
    lng: -122.4194,
    label: "San Francisco, CA",
    description: "Management Consulting in Biotech/Pharma.",
    date: "2020 - 2021",
    category: "worked",
  },
  {
    lat: 38.5816,
    lng: -121.4944,
    label: "Sacramento, CA",
    description: "Current role: Data Protection Specialist for the State of CA.",
    date: "2023 - Present",
    category: "worked",
  },

  // --- TRAVELED (Green examples) ---
  {
    lat: 51.5072,
    lng: 0.1276,
    label: "London, UK",
    description: "Exploring history and architecture.",
    date: "Summer 2022",
    category: "traveled",
  },
  {
    lat: 35.6762,
    lng: 139.6503,
    label: "Tokyo, Japan",
    description: "Tech conference visit.",
    date: "2019",
    category: "traveled",
  },
];

export default function InteractiveGlobe() {
  const [selectedLocation, setSelectedLocation] = useState<LocationData | null>(null);
  const globeEl = useRef<any>(null);

  // Auto-rotate the globe slowly
  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;
    }
  }, []);

  const getCategoryIcon = (category: LocationCategory) => {
    switch (category) {
      case 'lived': return <Home size={20} className="text-red-500" />;
      case 'worked': return <Briefcase size={20} className="text-blue-500" />;
      case 'traveled': return <Plane size={20} className="text-green-500" />;
    }
  }

  return (
    <div className="relative w-full h-[600px] flex justify-center bg-slate-50 dark:bg-slate-950 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm cursor-move group">
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundColor="rgba(0,0,0,0)"
        pointsData={myLocations}
        
        // Pin Styling
        pointAltitude={0.05}
        pointColor={(d: object) => categoryColors[(d as LocationData).category]}
        pointRadius={0.5} 
        pointPulseRing={true}
        
        // Interaction
        onPointClick={(point: object) => {
          setSelectedLocation(point as LocationData);
          if (globeEl.current) {
            globeEl.current.controls().autoRotate = false;
          }
        }}
        // No labels on globe surface
      />
      
      {/* Helper text when nothing is selected */}
      {!selectedLocation && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm font-medium text-slate-400/70 bg-slate-900/20 backdrop-blur-sm px-3 py-1 rounded-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-0">
           Click a pin for details
        </div>
      )}

      {/* Central, Large Info Pop-up */}
      {selectedLocation && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-md md:max-w-lg bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xl cursor-default animate-in fade-in zoom-in-95 duration-200">
          <button
            onClick={() => {
              setSelectedLocation(null);
              if (globeEl.current) {
                globeEl.current.controls().autoRotate = true;
              }
            }}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
          >
            <X size={18} />
          </button>

          {/* Header: Icon & Title */}
          <div className="flex items-start gap-3 mb-4 pr-10">
            <div className="mt-1 p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                 {getCategoryIcon(selectedLocation.category)}
            </div>
            <div>
                <h3 className="font-bold text-xl text-slate-900 dark:text-slate-100 leading-tight mb-1">
                {selectedLocation.label}
                </h3>
                {/* Date with Calendar Icon */}
                <div className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                    <Calendar size={14} />
                    {selectedLocation.date}
                </div>
            </div>
          </div>

          {/* Description (Larger text area) */}
          <div className="text-base text-slate-700 dark:text-slate-300 leading-relaxed max-h-60 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-700">
            <p>{selectedLocation.description}</p>
            {/* You can add <img> tags here later if needed */}
          </div>
        </div>
      )}
    </div>
  );
}