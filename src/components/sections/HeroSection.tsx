import Image from 'next/image';
import imageSrc from '../../assets/IMG_1039.jpg';
import { GitBranch, Code2 } from 'lucide-react';

export default function HeroSection() {
  return (
    <div
      id="hero"
      className="min-h-screen bg-[#1b1a1d] flex items-start justify-center px-4 pt-24 pb-10"
      style={{
        background:
          'linear-gradient(180deg, rgba(27,26,29,0.95) 0%, rgba(8,8,10,1) 100%)',
      }}
    >
      <div className="w-[92vw] max-w-[1200px] relative overflow-hidden rounded-2xl shadow-[0_18px_40px_rgba(0,0,0,0.7)] h-[56vh] min-h-[460px] max-h-[640px]">
        {/* Background Image */}
        <div className="absolute inset-y-0 right-0 w-2/5">
          <Image
            src={imageSrc}
            alt="Profile photo"
            fill
            className="object-cover object-right rounded-2xl"
            priority
          />
        </div>

        {/* Overlay Layers */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              'linear-gradient(90deg, rgba(8, 95, 79, 0.25) 0%, rgba(121, 40, 202, 0.18) 35%, rgba(0, 0, 0, 0.6) 100%)',
            mixBlendMode: 'overlay',
          }}
        ></div>

        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              'radial-gradient(600px 400px at 10% 10%, rgba(20,200,150,0.15) 0%, rgba(200,60,240,0.12) 30%, transparent 70%)',
            mixBlendMode: 'screen',
          }}
        ></div>

        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              'radial-gradient(closest-side, transparent 60%, rgba(0,0,0,0.45) 100%)',
          }}
        ></div>

        {/* Main Content */}
        <div className="relative z-20 h-full flex">
          <div className="w-3/5 p-8 pt-9 pl-10 flex flex-col justify-start">
            <div>
              {/* About Me Label */}
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xs">💻</span>
                <span
                  className="text-xs uppercase tracking-widest font-semibold text-white/80"
                  style={{
                    letterSpacing: '0.22em',
                  }}
                >
                  SOFTWARE ENGINEER
                </span>
              </div>

              {/* Main Heading */}
              <h1
                className="font-mono font-bold text-white mb-5"
                style={{
                  fontSize: 'clamp(32px, 6.5vw, 64px)',
                  textShadow: '0 2px 6px rgba(0,0,0,0.6)',
                  lineHeight: '1.1',
                }}
              >
                hey, I'm AYOUB 👋
              </h1>

              {/* Description */}
              <p
                className="text-base leading-relaxed text-white/90 font-medium max-w-[85%]"
                style={{
                  lineHeight: '1.5',
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.88)',
                }}
              >
                Engineer passionate about building scalable systems that solve
                real problems. Driven by crafting high-performance solutions and
                innovative digital experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Floating Mission Card */}
        <div
          className="absolute left-10 bottom-[0%] w-[42%] p-6 rounded-xl border border-white/6 shadow-xl z-30"
          style={{
            background:
              'linear-gradient(180deg, rgba(18, 18, 20, 0.55), rgba(18, 18, 20, 0.7))',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 8px 26px rgba(0,0,0,0.55)',
            borderRadius: '16px',
          }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm">🎯</span>
            <h3
              className="text-xs uppercase font-semibold"
              style={{
                letterSpacing: '0.18em',
                color: '#e6edf0',
                fontSize: '12px',
              }}
            >
              MY FOCUS
            </h3>
          </div>

          <p
            className="text-white/90 mb-3"
            style={{
              fontSize: '14px',
              lineHeight: '1.5',
            }}
          >
            I'm into creating robust, high-performance solutions. Whether it's
            architecting backend systems, crafting seamless user experiences, or
            leveraging data to drive decisions—I thrive at the intersection of
            innovation and engineering excellence.
          </p>

          <p
            className="text-white/90 italic mb-4"
            style={{
              fontSize: '14px',
            }}
          >
            Cloud • DevOps • Full-Stack • BI • Big Data 🚀
          </p>

          <div className="flex items-center gap-6 text-xs text-white/60 pt-3 border-t border-white/10">
            <div className="flex items-center gap-1">
              <Code2 size={12} />
              <span>3+ major projects</span>
            </div>

            <div className="flex items-center gap-1">
              <GitBranch size={12} />
              <span>Java • React • Python</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
