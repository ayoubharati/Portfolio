'use client'

import { useState } from 'react'
import { Mail, Send } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [charCount, setCharCount] = useState(0)
  const maxChars = 500

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value
    if (text.length <= maxChars) {
      setFormData({ ...formData, message: text })
      setCharCount(text.length)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section id="contact" className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center px-6 bg-background mt-10">
      <div className="max-w-3xl w-full space-y-8">
        {/* Title */}
        <div className="text-center space-y-3">
          <h2 className="text-5xl md:text-6xl font-bold text-textDark">
            Contact me<span className="text-primary">.</span>
          </h2>
          <p className="text-textLight text-lg md:text-xl">
            Let’s connect! Feel free to reach out by email or Instagram.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-textLight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              required
            />
            <input
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-textLight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              required
            />
          </div>

          <textarea
            rows={4}
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleMessageChange}
            className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-textLight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
            required
          />
          <div className="flex justify-between items-center">
            <span className="text-sm text-textLight">
              {charCount}/{maxChars} characters
            </span>
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary hover:bg-primary/80 text-textDark font-medium transition-all duration-300"
            >
              <Send size={18} />
              Send
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="relative py-2">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-background px-4 text-sm text-textLight">
            </span>
          </div>
        </div>

        {/* Contact Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <a
            href="ayoubharati987@gmail.com"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-card border border-border text-foreground hover:bg-card/80 transition-all duration-300"
          >
            <Mail size={18} />
            Email →
          </a>

          <a
            href="https://www.instagram.com/ayoub_aav/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-card border border-border text-foreground hover:bg-card/80 transition-all duration-300"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            Instagram →
          </a>
        </div>
      </div>
    </section>
  )
}
