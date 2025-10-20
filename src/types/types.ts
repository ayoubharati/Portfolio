export interface Project {
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

export interface ProjectCardProps {
  project: Project;
}
export interface TechBadgeProps {
  name: string;
  color?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  color?: string;
}