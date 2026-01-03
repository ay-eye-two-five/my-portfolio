'use client';

import Image from "next/image";
import { ExternalLink } from "lucide-react";

type Project = {
  title: string;
  place: string;
  date: string;
  image: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "Comparison of Manual & Automated Measurements of Tracheobronchial Airway Geometry in Three BALB/c Mice",
    place: "Anatomical Record",
    date: "2017",
    image: "/mouse.png",
    link: "https://anatomypubs.onlinelibrary.wiley.com/doi/pdfdirect/10.1002/ar.23624",
  },
  {
    title: "Coupled active shape models for automated segmentation & landmark localization in high-resolution CT of the foot & ankle",
    place: "SPIE Medical Imaging",
    date: "2019",
    image: "/foot.PNG",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6647836/pdf/nihms-1041163.pdfD",
  },
  {
    title: "Quantifying Similarity in Histopathology Images Using Pathology-specific Deep-learned Features",
    place: "American Physical Society",
    date: "2020",
    image: "/pathology.jpg",
    link: "https://meetings.aps.org/Meeting/MAR20/Session/B06.8",
  },
  {
    title: "Diffeomorphic morphometry of the tibio-femoral joint for quantitative assessment of osteoarthritis",
    place: "American Physical Society",
    date: "2020",
    image: "/oa.jpg",
    link: "https://archive.aps.org/mar/2020/b06/4/",
  },
  {
    title: "Design Of An Extendable Tuohy Needle For Use In Epidural Anesthesia For Adult Patients Of All Body-mass-indices",
    place: "American Society of Anesthesiologists",
    date: "2020",
    image: "/needle9.png",
    link: "https://www.bme.jhu.edu/academics/bme-design/bme-project-gallery/epix/",
  },
  {
    title: "Landmark-free morphometric analysis of knee OA using joint statistical models of bone shape and articular space variability",
    place: "Journal of Medical Imaging",
    date: "2021",
    image: "/knee.jpg",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8257000/pdf/JMI-008-044001.pdf",
  },
  {
    title: "U.S. Patent Application 17/797970: “Extendable Needle”",
    place: "U.S. Patent Office",
    date: "2021",
    image: "/needle.PNG",
    link: "https://patentimages.storage.googleapis.com/eb/62/a4/73606e94f5d5d8/US20230200846A1.pdf",
  },
  {
    title: "Can lung airway geometry be used to predict autism? A preliminary machine learning-based study",
    place: "Anatomical Record",
    date: "2023",
    image: "/ct.PNG",
    link: "https://anatomypubs.onlinelibrary.wiley.com/doi/epdf/10.1002/ar.25332",
  },
  {
    title: "Image Guidance for Robot-Assisted Ankle Fracture Repair",
    place: "arXiv Electrical Engineering",
    date: "2023",
    image: "/ankle.PNG",
    link: "https://arxiv.org/pdf/2303.08105",
  },
// {
//     title: "Game-theoretic Model of Blepharisma Population and Cannibalism Dynamics",
//     place: "IB Diploma Extended Essay",
//     date: "2017",
//     image: "/game.png",
//     link: "https://docs.google.com/document/d/1fLTz32iuOFt32VhnFL5cc8VTKiCCgznIolIBtPy0Ktg/edit?usp=sharing",
//   },
  // {
  //   title: "Game-theoretic Model of Blepharisma Population and Cannibalism Dynamics",
  //   place: "IB Diploma Extended Essay",
  //   date: "2017",
  //   image: "/game.png",
  //   link: "https://docs.google.com/document/d/1fLTz32iuOFt32VhnFL5cc8VTKiCCgznIolIBtPy0Ktg/edit?usp=sharing",
  // },
  // {
  //   title: "Machine learning for Air Quality Models",
  //   place: "IB Diploma Extended Essay",
  //   date: "2017",
  //   image: "/game.png",
  //   link: "https://docs.google.com/document/d/1fLTz32iuOFt32VhnFL5cc8VTKiCCgznIolIBtPy0Ktg/edit?usp=sharing",
  // },
  // https://github.com/obin1/MLAQ?tab=readme-ov-file
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-12"> {/* Increased max-width to fit 3 cols better */}
      <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8 border-b pb-2 border-slate-200 dark:border-slate-800">
        PROJECTS & RESEARCH
      </h2>

      {/* Grid changed to lg:grid-cols-3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
          >
            {/* 1. Title, Place, Date */}
            <div className="p-4 pb-2 h-32"> {/* Fixed height for header to align images */}
              <div className="flex justify-between items-start gap-2 mb-2">
                <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 leading-snug line-clamp-4">
                  {project.title}
                </h3>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400 whitespace-nowrap bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded flex-shrink-0">
                  {project.date}
                </span>
              </div>
              <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 truncate">
                {project.place}
              </p>
            </div>

            {/* 2. Central Photo of Focus */}
            <div className="relative w-full h-40 bg-slate-100 dark:bg-slate-800 border-t border-b border-slate-100 dark:border-slate-800">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>

            {/* 3. Link to Paper/Publication */}
            <div className="p-3 bg-slate-50 dark:bg-slate-950/50 mt-auto">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:underline transition-all"
              >
                <ExternalLink size={14} />
                View Paper
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}