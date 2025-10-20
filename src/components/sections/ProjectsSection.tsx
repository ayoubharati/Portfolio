"use client";

import { useRef, useEffect, useState } from "react";
import { Github, ArrowRight } from "lucide-react";

// ========== Inline ProjectCard (you can import your existing version instead) ==========
function ProjectCard({ project }: { project: typeof projects[0] }) {
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
    title: "Online Booking Platform - Next.js",
    date: "Jan 2024 - Now",
    description:
      "A comprehensive online booking platform for accommodation and travel services with responsive design, booking templates, and interactive UI. Built with Next.js, React, and Google Maps.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "HeadlessUI",
      "Google Maps",
    ],
    link: "https://example.com",
    thumbnail: "/assets/online-booking/1.png",
  },
  {
    id: 2,
    title: "ByteCrew - NammaSuraksha (AI Scam Detection System)",
    date: "Recent",
    description:
      "AI-powered scam and phishing detection system using OpenAI GPT-4 with integrations for web, mobile, and browser extensions.",
    techStack: [
      "Next.js",
      "React Native",
      "Express.js",
      "PostgreSQL",
      "OpenAI",
      "TensorFlow",
    ],
    github: "https://github.com/example",
  },
  {
    id: 3,
    title: "E-Commerce Dashboard",
    date: "Nov 2023",
    description:
      "A modern admin dashboard with real-time analytics, inventory management, and order tracking. Features responsive design and beautiful charts.",
    techStack: ["React", "Node.js", "MongoDB", "Chart.js", "Stripe"],
    github: "https://github.com/example",
  },
  {
    id: 4,
    title: "Social Media Analytics Platform",
    date: "Sep 2023",
    description:
      "Advanced analytics platform for social media metrics with AI-powered insights and automated reporting across multiple platforms.",
    techStack: ["Vue.js", "Python", "FastAPI", "Redis", "Docker"],
    link: "https://example.com",
  },
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
