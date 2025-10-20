import { ArrowRight, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  date: string;
  description: string;
  images?: string[];
  techStack: string[];
  link?: string;
  github?: string;
  thumbnail?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div 
      className="flex-shrink-0 w-[420px] rounded-xl border border-white/10 overflow-hidden transition-all hover:border-white/20 hover:shadow-2xl group"
      style={{
        background: 'rgba(25,25,28,0.6)',
        backdropFilter: 'blur(10px)'
      }}
    >
      {/* Thumbnail */}
      <div className="relative h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 overflow-hidden">
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
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-white/70 leading-relaxed line-clamp-3 font-mono">
          {project.description}
        </p>

        {/* Tech Stack */}
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

        {/* Buttons */}
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