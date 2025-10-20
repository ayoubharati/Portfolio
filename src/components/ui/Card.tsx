import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div 
      className={`
        rounded-2xl bg-white/5 border border-white/10 p-6
        ${hover ? 'hover:bg-white/10 hover:border-purple-500/30 hover:scale-[1.02] transition-all duration-300' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}