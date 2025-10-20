import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function WorkPage() {
  return (
    <main className="min-h-screen px-4 py-12 max-w-6xl mx-auto">
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
      >
        <ArrowLeft size={20} />
        Back to Home
      </Link>
      
      <h1 className="text-4xl font-bold mb-4">All Projects</h1>
      <p className="text-gray-400 mb-12">
        A comprehensive collection of my work and side projects.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Add more projects here */}
        <p className="text-gray-500">More projects coming soon...</p>
      </div>
    </main>
  )
}