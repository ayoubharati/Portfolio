'use client'

export default function SocialStatsBar() {
  return (
    <section className="py-8 bg-[#1A1A1A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center items-center space-x-8">
          <div className="flex items-center gap-2 text-gray-400">
            <span>⭐</span>
            <span>0 stars</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <span>💬</span>
            <span>0 commits</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <span>📁</span>
            <span>0 repositories</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <span>👥</span>
            <span>0 Github followers</span>
          </div>
        </div>
      </div>
    </section>
  )
}
