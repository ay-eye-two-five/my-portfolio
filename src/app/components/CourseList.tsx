'use client';

import { useState } from "react";
import { Search, BookOpen } from "lucide-react";

type Course = {
  title: string;
  code: string;
  institution: string;
  year: string;
  instructor?: string;
  description: string;
};

// FULL DATA DUMP
const courses: Course[] = [
  {
    title: "Artificial Intelligence: Principles and Techniques",
    code: "CS221",
    institution: "Stanford",
    year: "2022",
    instructor: "Percy Liang, Dorsa Sadigh",
    description: "The goal of artificial intelligence (AI) is to tackle complex real-world problems with rigorous mathematical tools. Topics include machine learning, search, Markov decision processes, game playing, constraint satisfaction, graphical models, and logic."
  },
  {
    title: "Machine Learning",
    code: "CS 229",
    institution: "Stanford",
    year: "2022",
    instructor: "Andrew Ng",
    description: "Broad introduction to machine learning and statistical pattern recognition. Supervised learning (generative/discriminative learning, parametric/non-parametric learning, neural networks, SVMs); unsupervised learning (clustering, dimensionality reduction); reinforcement learning."
  },
  {
    title: "Modeling Biomedical Systems",
    code: "CS 270",
    institution: "Stanford",
    year: "2023",
    instructor: "Mark Musen",
    description: "Explores methods for modeling biomedical systems with an emphasis on contemporary semantic technology, including knowledge graphs. Topics: data modeling, knowledge representation, ontologies, and reusable problem solvers."
  },
  {
    title: "Data Management and Data Systems",
    code: "CS 145",
    institution: "Stanford",
    year: "2022",
    instructor: "Shiva Shivakumar",
    description: "Covers how to use databases in applications, principles on how to scale for large data sets, and designing good data systems. Relational data models, SQL, and scaling systems."
  },
  {
    title: "Departmental Lecture Series",
    code: "CS 300",
    institution: "Stanford",
    year: "2022",
    instructor: "Omer Reingold",
    description: "Seminar for incoming CS PhD students giving faculty the opportunity to speak about their research areas."
  },
  {
    title: "Introduction to Algorithms",
    code: "CS 433",
    institution: "Johns Hopkins",
    year: "2020",
    instructor: "Vladimir Braverman",
    description: "Design of algorithms and rigorous analysis of efficiency. Complexity (worst/average case), dynamic programming, sorting, searching, advanced data structures, and graph algorithms."
  },
  {
    title: "Data Structures",
    code: "CS 226",
    institution: "Johns Hopkins",
    year: "2019",
    instructor: "Joanne Selinski",
    description: "Analysis, design, and implementation of data structures including arrays, stacks, queues, linked lists, binary trees, heaps, balanced trees, and graphs. Sorting, hashing, and Java generics."
  },
  {
    title: "Computer Integrated Surgery",
    code: "CS 455",
    institution: "Johns Hopkins",
    year: "2019",
    instructor: "Russell H. Taylor",
    description: "Computer-based techniques, systems, and applications exploiting quantitative information from medical images and sensors to assist clinicians in all phases of treatment."
  },
  {
    title: "Computer Integrated Surgery II",
    code: "CS 456",
    institution: "Johns Hopkins",
    year: "2020",
    instructor: "Russell H. Taylor",
    description: "Projects course for graduate students working on semester-long projects related to computer-integrated interventions, AI in medicine, and medical image analysis."
  },
  {
    title: "Machine Learning (App-Driven)",
    code: "CS 475",
    institution: "Johns Hopkins",
    year: "2019",
    instructor: "Mark Dredze",
    description: "Application driven approach to current topics in machine learning. Supervised, unsupervised, and semi-supervised learning applied to real world applications."
  },
  {
    title: "Genomic Data Science",
    code: "CS 350",
    institution: "Johns Hopkins",
    year: "2020",
    instructor: "Steven Salzberg",
    description: "Project-based approach to computational biology and genomics. Students take large data sets derived from recent research and learn the computational steps to convert raw data into polished analysis."
  },
  {
    title: "Biomedical Data Science",
    code: "BME 475/477",
    institution: "Johns Hopkins",
    year: "2019",
    instructor: "Brian Caffo",
    description: "Introduction to data science and ML for biomedical engineering. Data processing (convolution, denoising), reduction (PCA), regression, classification (deep learning), and clustering."
  },
  {
    title: "Computational Medicine: Cardiology",
    code: "BME 485/487",
    institution: "Johns Hopkins",
    year: "2019",
    instructor: "Eileen Haase",
    description: "Quantitative, model-oriented investigation of the cardiovascular system. Focus on cardiac electrophysiology, mechanics, and hemodynamics using multi-scale physiology-driven models."
  },
  {
    title: "Intro Programming in Java",
    code: "CS 107",
    institution: "Johns Hopkins",
    year: "2017",
    instructor: "Joanne Selinski",
    description: "Fundamental programming concepts in Java. Control structures, arrays, functions, recursion, dynamic memory allocation, simple data structures, and object-oriented design."
  },
  {
    title: "Intermediate Programming",
    code: "CS 120",
    institution: "Johns Hopkins",
    year: "2018",
    instructor: "Sara Miner More",
    description: "Intermediate to advanced programming using C and C++. Low-level programming techniques, memory allocation, polymorphism, overloading, inheritance, templates, and exceptions."
  },
  {
    title: "Systems Biology of the Cell",
    code: "BME 248",
    institution: "Johns Hopkins",
    year: "2019",
    instructor: "Joel Bader",
    description: "Theoretical and quantitative understanding of interactions between DNA, RNA, and proteins. First-principles models for the central dogma, signal transduction, and gene regulation."
  },
  {
    title: "Nonlinear Dynamics of Biological Systems",
    code: "BME 244",
    institution: "Johns Hopkins",
    year: "2019",
    instructor: "Michael Beer",
    description: "Analysis and simulation of nonlinear behavior in biological systems: bifurcations, limit cycles, chaos, and maps. Matlab simulation of these systems."
  },
  {
    title: "Biological Models and Simulations",
    code: "BME 242",
    institution: "Johns Hopkins",
    year: "2019",
    instructor: "Aleksander S. Popel",
    description: "Modeling and analysis of linear biological systems. Viscoelastic materials, pharmacokinetics, reaction-diffusion-convection equations. Introduction to Matlab modeling."
  },
  {
    title: "Linear Signals and Systems",
    code: "BME 243",
    institution: "Johns Hopkins",
    year: "2018",
    instructor: "Michael I. Miller",
    description: "First and second order systems, linear time variant discrete and continuous systems, convolution, Fourier series, and Fourier transforms."
  },
  {
    title: "Systems and Controls",
    code: "BME 246",
    institution: "Johns Hopkins",
    year: "2019",
    instructor: "Sridevi V. Sarma",
    description: "Analysis and synthesis of controllers for linear systems. LaPlace transforms, state space representations, stability, observability, controlability, and PID controller design."
  },
  {
    title: "Build an Imager",
    code: "BME 494",
    institution: "Johns Hopkins",
    year: "2020",
    instructor: "J. Webster Stayman",
    description: "Hands-on course to build an imaging device. Application of signals and systems knowledge, 2D signal processing, imaging principles, modeling, and optimization."
  },
  {
    title: "BME Design Group",
    code: "BME 211/212",
    institution: "Johns Hopkins",
    year: "2019",
    instructor: "Elizabeth Logsdon, Nicholas Durr",
    description: "Team-based development of solutions to healthcare needs. Design teams complete medical device projects considering biological, physiological, and medical constraints."
  },
  {
    title: "Cell and Tissue Engineering Lab",
    code: "BME 452",
    institution: "Johns Hopkins",
    year: "2020",
    instructor: "Jessica Dunleavey",
    description: "Hands-on experience in cell and tissue engineering. Cell culture techniques, gene transfection, metabolic glycoengineering, and cell encapsulation."
  },
  {
    title: "Automata, Grammars, and Computability",
    code: "CSC 333",
    institution: "NC State",
    year: "2020",
    instructor: "Nagiza Samatova",
    description: "Formal models of computation: finite state machines, context-free grammars, and Turing machines. P, NP, and NP-completeness."
  },
  {
    title: "Introduction to Optimization",
    code: "AMS 361",
    institution: "Johns Hopkins",
    year: "2018",
    instructor: "Donniell Fishkind",
    description: "Algorithms for linear, network, integer, and nonlinear optimization. Simplex methods, network flow, branch and bound, interior point methods."
  },
  {
    title: "Linear Algebra",
    code: "MATH 201",
    institution: "Johns Hopkins",
    year: "2018",
    instructor: "W. Stephen Wilson",
    description: "Vector spaces, matrices, linear transformations, systems of linear equations, eigenvalues, eigenvectors, and diagonalization."
  },
  {
    title: "Differential Equations and Applications",
    code: "MATH 302",
    institution: "Johns Hopkins",
    year: "2018",
    instructor: "Richard J. Brown",
    description: "First/Second/Higher order linear equations, systems of linear equations, nonlinear differential equations and stability, numerical methods, Laplace transform."
  },
  {
    title: "Calculus III",
    code: "MATH 202",
    institution: "Johns Hopkins",
    year: "2017",
    instructor: "James M. Murphy",
    description: "Geometry of Euclidean Space, Differentiation, Higher-Order Derivatives, Vector-Valued Functions, Double and Triple Integrals, Integral Theorems of Vector Analysis."
  },
  {
    title: "Practical Ethics for Future Leaders",
    code: "CLE 400",
    institution: "Johns Hopkins",
    year: "2019",
    instructor: "Lawrence Aronhime",
    description: "Interdisciplinary course on leadership, decision making, and the application of ethics to real world problems in engineering, business, and government."
  },
  {
    title: "Introduction to Computer Systems",
    code: "COMP 2130",
    institution: "Thompson Rivers",
    year: "2019",
    instructor: "Mridula Sharma",
    description: "Basic concepts of computer systems, architecture, C and assembly programming, memory organization, and Linux OS."
  },
  {
    title: "Leadership Theory",
    code: "CLE 332",
    institution: "Johns Hopkins",
    year: "2020",
    instructor: "Mary Clare Coghlan",
    description: "History of Leadership Theory from the \"Great Man\" theory of born leaders to Transformational Leadership theory of non-positional learned leadership. Transformational Leadership theory postulates that leadership can be learned and enhanced. The course will explore the knowledge base and skills necessary to be an effective leader.",
  },
  {
    title: "Biochemistry and Molecular Engineering",
    code: "BME 221",
    institution: "Johns Hopkins",
    year: "2018",
    instructor: "Eileen Haase, Elizabeth Logsdon, Kevin Yarema",
    description: "Quantitative analysis of reactions between molecules, including receptor-ligand and antigen-antibody specificity, enzyme catalysis, genetic information, protein processing and secretion, cell physiology and cell functions"
  },
  {
    title: "BME Modeling & Design",
    code: "BME 111",
    institution: "Johns Hopkins",
    year: "2017",
    instructor: "Eileen Haase, Elizabeth Logsdon",
    description: "Introduces engineering principles to solve design problems that are biological, physiological, and/or medical."
  },
  {
    title: "Discrete Mathematics",
    code: "MATH 208",
    institution: "UND",
    year: "2020",
    description: "Introduction to proof by induction, modular arithmetic, introductory graph theory, and propositional and predicate logic." 
  },
  {
    title: "Elements in Microeconomics",
    code: "ECON 102",
    institution: "Johns Hopkins",
    year: "2020",
    instructor: "Muhammad Husain",
    description: "Introduction to microeconomic principles including supply and demand,relative prices, the allocation of resources and the distribution of goods and services; theory of consumer behavior, theory of the firm, and competition and monopoly."
  },
  {
    title: "Expository Writing",
    code: "ENGL 114",
    institution: "Johns Hopkins",
    year: "2018",
    description: "Introduction to the elements of academic argument, including the Fundamental Structure of Academic Argument."
  },
  {
    title: "General Physics and Lab",
    code: "PHYS 101/102",
    institution: "Johns Hopkins",
    year: "2017",
    description: "Mechanics, heat, sound, electricity, magnetism, light, and modern physics."
  },
  {
    title: "General Psychology",
    code: "PSYC 300",
    institution: "Sacramento City College",
    year: "2015",
    description: "Scientific method, statistics, biological determinants, as well as general processes of behavior, such as development, learning, language, intelligence, perception, motivation, emotion, personality, and mental health.."
  },
  {
    title: "Introductory Chemistry and Lab",
    code: "CHEM 101/102",
    institution: "Johns Hopkins",
    year: "2017",
    description: "Introduction to the principles and concepts of chemistry including atomic structure, chemical bonding, stoichiometry, and laboratory techniques."
  },
  {
    title: "Cognitive Psychology",
    code: "PSYC 110",
    institution: "Johns Hopkins",
    year: "2020",
    instructor: "Jonathan Flombaum",
    description: "Introduction to the scientific study of human cognition including perception, attention, memory, language, problem solving, reasoning, and decision making."
  },
  {
    title: "Probability and Statistics",
    code: "AMS 110",
    institution: "Stony Brook",
    year: "2019",
    description: "Introduction to probability theory and statistical inference. Topics include Markov chain models; binomial, Poisson normal, exponential and chi-square random variables; tests of hypotheses; confidence intervals; t-tests; analysis of variance, regression and contingency tables."
  },
  {
    title: "Software Engineering",
    code: "COMP 3520",
    institution: "Software Engineering",
    year: "2019",
    instructor: "Nagiza Samatova",
    description: "Software engineering techniques for dependable and secure systems, reliability engineering, software evolution, software maintenance, quality management, configuration management and more."
  },
  {
    title: "Statistical Physics",
    code: "BME 241",
    institution: "Johns Hopkins",
    year: "2018",
    instructor: "Michael Beer",
    description: "Topics included quantitative statistical formulation of entropy and its application in thermodynamic optimization and conversion principles, the Gibbs/Boltzmann distribution, mixing, and phase transitions."
  },
  {
    title: "Stories of People, Science, and Medicine",
    code: "MSCH 211",
    institution: "Johns Hopkins",
    year: "2018",
    instructor: "Peter Agre",
    description: "Intersession class taught by a Nobel Laureate. Fun fact: Peter Agre said I 'might be the next Francis Collins' (I think he was joking)."
  }


  
];

export default function CourseList() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter((course) => 
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.institution.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full h-full flex flex-col bg-slate-50 dark:bg-slate-900">
      
      {/* Sticky Search Header */}
      <div className="sticky top-0 z-10 p-6 bg-slate-50/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-3xl mx-auto relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text"
            placeholder="Search courses, codes, or schools..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 font-medium">
            {filteredCourses.length} Courses
          </div>
        </div>
      </div>

      {/* Scrollable List */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredCourses.map((course, index) => (
            <div 
              key={index} 
              className="group p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">
                    <span className="bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded text-slate-700 dark:text-slate-300">
                      {course.code}
                    </span>
                    <span>•</span>
                    <span>{course.institution}</span>
                    <span>•</span>
                    <span>{course.year}</span>
                  </div>
                </div>
                {course.instructor && (
                  <div className="text-xs font-medium text-slate-400 bg-slate-50 dark:bg-slate-900/50 px-2 py-1 rounded self-start shrink-0">
                    {course.instructor}
                  </div>
                )}
              </div>
              
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-3">
                {course.description}
              </p>
            </div>
          ))}

          {filteredCourses.length === 0 && (
            <div className="text-center py-20 text-slate-400">
              <BookOpen className="mx-auto mb-3 opacity-50" size={48} />
              <p>No courses found for "{searchTerm}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}