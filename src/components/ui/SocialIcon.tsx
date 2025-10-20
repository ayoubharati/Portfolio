import { ReactNode } from 'react'

interface SocialIconProps {
  href: string
  icon: ReactNode
  label: string
  color: string
}

export default function SocialIcon({ href, icon, label, color }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`group relative p-4 rounded-full ${color} hover:scale-110 transition-all duration-200 hover:shadow-lg`}
    >
      <div className="text-white group-hover:rotate-12 transition-transform duration-200">
        {icon}
      </div>
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-black/80 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {label}
      </span>
    </a>
  )
}