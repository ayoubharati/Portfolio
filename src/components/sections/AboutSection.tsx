import { Github, Mail, Code, Pen, Monitor, Palette } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="bg-[#1a1a1d] text-white/85 font-mono">
      <div className="flex flex-col md:flex-row justify-between items-start max-w-[1200px] mx-auto py-16 px-8 md:px-20 gap-16">
        
        {/* Left Column - Text Content */}
        <div className="flex-1 max-w-[600px]">
          <h2 className="text-3xl font-bold text-white mb-6">
            About me<span className="text-blue-500">.</span>
          </h2>
          
          <p className="text-base leading-relaxed text-white/75 mb-[18px] tracking-wide">
            I'm a 5th-year software engineering student at ENSA El Jadida, specializing in full-stack development, mobile applications, and business intelligence solutions.
          </p>
          
          <p className="text-base leading-relaxed text-white/75 mb-[18px] tracking-wide">
            My foundation spans Java, Python, JavaScript, and SQL, with hands-on expertise in Spring Boot, React.js, and modern cloud technologies through AWS Academy certifications.
          </p>
          
          <p className="text-base leading-relaxed text-white/75 mb-[18px] tracking-wide">
            I've built impactful projects including AI-powered mobile applications, real-time detection systems, and enterprise-level exam management platforms using ETL pipelines and interactive dashboards.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a 
              href="https://github.com/ayoubharati" 
              className="flex items-center justify-center gap-2 bg-blue-600 text-white text-sm font-medium px-5 py-3 rounded-md hover:bg-blue-500 transition-colors"
            >
              <Github size={16} />
              View my Github →
            </a>
            
            <a 
              href="mailto:ayoubharati987@gmail.com" 
              className="flex items-center justify-center gap-2 bg-neutral-700/60 text-white/85 text-sm font-medium px-5 py-3 rounded-md hover:bg-neutral-600 transition-colors"
            >
              Contact me →
            </a>
          </div>
        </div>
        
        {/* Right Column - My Studio Card */}
        <div 
          className="w-full md:w-[450px] border border-white/10 rounded-xl p-8 shadow-xl"
          style={{
            background: 'rgba(25,25,28,0.6)',
            backdropFilter: 'blur(10px)'
          }}
        >
          {/* Studio Header */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <Code size={16} className="text-white" />
            </div>
            <h3 className="text-sm uppercase tracking-widest text-white font-semibold" style={{
              letterSpacing: '0.1em'
            }}>
              MY EXPERTISE
            </h3>
          </div>
          
          {/* Intro Paragraph */}
          <p className="text-white/90 leading-relaxed mb-6" style={{
            fontSize: '15px',
            lineHeight: '1.7'
          }}>
            Welcome! This is my professional portfolio showcasing my journey through software engineering, mobile/web development, and intelligent systems. Explore my work.
          </p>
          
          {/* Download CV Button */}
          <button 
            className="px-6 py-2 border border-white/20 rounded-md text-white/90 text-sm hover:bg-white/10 transition mb-8"
            style={{
              background: 'rgba(255,255,255,0.05)'
            }}
          >
            Download CV
          </button>
          
          
        </div>
        
      </div>
    </section>
  );
}