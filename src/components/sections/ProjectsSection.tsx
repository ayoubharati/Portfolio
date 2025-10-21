"use client";

import { useRef, useEffect, useState } from "react";
import { Github, ArrowRight } from "lucide-react";

// ========== Inline ProjectCard (you can import your existing version instead) ==========
function ProjectCard({
  project,
}: {
  project: typeof projects[0] & { github?: string };
}) {
  return (
    <div
      className="flex-shrink-0 w-[360px] rounded-xl border border-white/10 overflow-hidden transition-all hover:border-white/20 hover:shadow-2xl group"
      style={{
        background: "rgba(25,25,28,0.6)",
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Thumbnail */}
      <div className="relative h-36 bg-gradient-to-br from-blue-600/20 to-purple-600/20 overflow-hidden">
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-6xl opacity-20">🚀</div>
          </div>
        )}

        {/* Date Badge */}
        <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-mono bg-black/60 backdrop-blur-sm text-white/90">
          {project.date}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
          {project.title}
        </h3>

        <p className="text-sm text-white/70 leading-relaxed line-clamp-3 font-mono">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-white/80"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-3 py-1 text-xs text-white/60">
              +{project.techStack.length - 4} more
            </span>
          )}
        </div>

        <div className="flex gap-3 pt-2">
          {project.link && (
            <a
              href={project.link}
              className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors"
            >
              Visit <ArrowRight size={14} />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white/90 text-sm font-medium px-4 py-2 rounded-md border border-white/10 transition-colors"
            >
              <Github size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ========== Projects Data ==========
const projects = [
  {
    id: 1,
    title: "PharmaChain - Blockchain-based Medicine Traceability",
    date: "Feb 2024 - Now",
    description:
      "A full-stack blockchain and IoT platform ensuring secure traceability of pharmaceutical products. It integrates smart contracts, IPFS, and AI verification to monitor and validate medicine quality throughout the supply chain.",
    techStack: [
      "React.js",
      "React Native",
      "Solidity",
      "Ethereum",
      "IPFS",
      "Node-RED",
      "Python",
      "AI/ML",
    ],
    link: "https://github.com/ayoubharati/medProject",
    thumbnail: "/assets/pharmachain_cover.png",
  },
  {
    id: 2,
    title: "MarkerGo – Mobile Marketplace App",
    date: "Mar 2024 - Now",
    description:
      "A modern cross-platform mobile application built with Expo & React Native for discovering and managing local market listings. Includes geolocation, image uploads, native device support (iOS/Android/Web), and state management with Zustand.",
    techStack: [
      "React Native",
      "Expo",
      "TypeScript",
      "NativeWind (Tailwind for React Native)",
      "Zustand",
      "Expo Router",
      "GeoLocation APIs",
      "Async Storage"
    ],
    link: "https://github.com/abdellah-elgharbi/MarkerGo",
    thumbnail: "/assets/market_cover.png",
  },  
  {
    id: 3,
    title: "Paraphrase FR – French Paraphrase Detection Benchmark",
    date: "Apr 2024 – Now",
    description:
      "A research-driven NLP project focused on French paraphrase detection using the PAWS-X dataset. It benchmarks multiple approaches — from TF-IDF baselines to fine-tuned CamemBERT and hybrid models — and provides an interactive Streamlit app for real-time paraphrase analysis.",
    techStack: [
      "Python",
      "Transformers (CamemBERT)",
      "Sentence Transformers",
      "Scikit-learn",
      "Streamlit",
      "PyTorch",
      "NLTK / spaCy",
      "Matplotlib / Seaborn"
    ],
    link: "https://github.com/ayoubharati/paraphrase_fr",
    thumbnail: "/assets/paraphrase_fr_cover.png",
  },
  {
    id: 4,
    title: "SqlRag - AI-Powered Data Warehouse Chatbot",
    date: "Aug 2024 - Present",
    description: "A full-stack AI-powered data warehouse chatbot that transforms natural language queries into SQL queries through a sophisticated 7-step workflow. Features React frontend with real-time chat interface, Flask backend with Google Gemini AI integration, FAISS vector search, and automated chart generation for data visualization.",
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Vite",
      "Flask",
      "Python",
      "Google Gemini AI",
      "FAISS",
      "PostgreSQL",
      "Chart.js",
      "Plotly.js",
      "SQLAlchemy",
      "Pandas",
      "Node.js"
    ],
    link: "https://github.com/ayoubharati/dataware_chatbot",
    thumbnail: "/assets/sqlrag_cover.png"
  },
  {
    id: 5,
    title: "ExamSessionManager – Web App for Exam Supervision",
    date: "Mar 2024 - Jun 2024",
    description:
      "A full-stack web application for managing and automating exam supervision within universities. It streamlines scheduling, teacher assignments, and session monitoring with a secure interface and real-time updates.",
    techStack: [
      "React.js",
      "Spring Boot",
      "Spring Security",
      "Hibernate (JPA)",
      "MySQL",
      "Tailwind CSS",
      "Chart.js",
      "Lucide-React",
    ],
    link: "https://github.com/YounesAO/ExamSessionManger",
    thumbnail: "/assets/examsessionmanager_cover.png",
  },
  {
    id: 6,
    title: "Smart Rehab – Intelligent Rehabilitation Platform",
    date: "Dec 2024 – Now",
    description:
      "A smart rehabilitation platform that leverages real-time pose detection and motion analysis to assist patients and therapists in monitoring and improving physical recovery. Integrates AI-based movement tracking with web and mobile interfaces to provide actionable feedback and prevent improper exercises.",
    techStack: [
      "Vite.js",
      "Spring Boot",
      "MySQL",
      "Tailwind CSS",
      "Java (Android)",
      "Docker",
      "REST API",
      "Pose Detection / Computer Vision"
    ],
    link: "https://github.com/Ballouk12/SmartRehab",
    thumbnail: "/assets/smartrehab_cover.png",
  }
];

// ========== Projects Section ==========
export default function ProjectsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrame: number;
    let speed = 0.8; // control scroll speed
    let scroll = 0;

    const animate = () => {
      if (!container) return;

      container.scrollLeft += speed;
      scroll = container.scrollLeft;

      // Reset to start when halfway through (loop illusion)
      if (scroll >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
        scroll = 0;
      }

      // Update looping progress bar
      setProgress((scroll / (container.scrollWidth / 2)) * 100);

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section id="projects" className="h-screen flex flex-col justify-start bg-[#1a1a1d] font-mono overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 space-y-2">
        {/* Header */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white pl-20">
            PROJECTS
          </h2>
        </div>

        {/* Infinite Slider */}
        <div ref={scrollContainerRef} className="flex gap-6 overflow-x-hidden pb-8">
          {[...projects, ...projects].map((p, i) => (
            <ProjectCard key={`${p.id}-${i}`} project={p} />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 rounded-full transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>

        
      </div>
    </section>
  );
}
