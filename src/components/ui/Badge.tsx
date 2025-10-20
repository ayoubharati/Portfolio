import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'tech'
  className?: string
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    default: 'bg-white/5 border-white/10 text-gray-300',
    primary: 'bg-purple-500/20 border-purple-500/30 text-purple-400',
    success: 'bg-green-500/20 border-green-500/30 text-green-400',
    warning: 'bg-yellow-500/20 border-yellow-500/30 text-yellow-400',
    tech: 'bg-blue-500/20 border-blue-500/30 text-blue-400'
  }
  
  return (
    <span 
      className={`
        inline-flex items-center px-3 py-1 rounded-full border text-xs font-medium
        ${variants[variant]} ${className}
      `}
    >
      {children}
    </span>
  )
}