'use client'

interface TechBadgeProps {
  name: string
  color?: string
}

export default function TechBadge({ name, color }: TechBadgeProps) {
  return (
    <div className="group relative px-6 py-3 rounded-full bg-card border border-border backdrop-blur-sm hover:bg-card/80 hover:border-primary/30 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20">
      <span className="text-sm font-medium text-textLight group-hover:text-textDark transition-colors">
        {name}
      </span>
      {color && (
        <div
          className="absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-background"
          style={{ backgroundColor: color }}
        />
      )}
    </div>
  )
}
