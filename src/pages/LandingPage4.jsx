import { useState, useEffect, useRef } from 'react'

// Landing Page 4: "The Matrix"
// Animated code rain background, neon glow effects, glass morphism cards, futuristic aesthetic
// Design: True black bg, neon green glow, floating translucent panels, matrix rain canvas

const MatrixRain = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01{}[]<>/=+;:.git push commit diff merge'
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    const drops = Array(columns).fill(1)

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#00ff4120'
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(char, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 50)
    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" />
}

const GlassCard = ({ children, className = '', glow = false }) => (
  <div
    className={`rounded-xl border border-green-500/10 bg-black/40 backdrop-blur-xl ${
      glow ? 'shadow-lg shadow-green-500/10' : ''
    } ${className}`}
  >
    {children}
  </div>
)

const GlowText = ({ children, className = '' }) => (
  <span className={`text-green-400 drop-shadow-[0_0_8px_rgba(0,255,65,0.5)] ${className}`}>
    {children}
  </span>
)

const NeonBorder = ({ children }) => (
  <div className="relative rounded-xl p-px bg-gradient-to-b from-green-500/30 via-green-500/10 to-transparent">
    <div className="rounded-xl bg-black/70 backdrop-blur-xl overflow-hidden">
      {children}
    </div>
  </div>
)

export default function LandingPage4() {
  const [activeFeature, setActiveFeature] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const features = [
    { cmd: 'git push', label: 'Push triggers generation', desc: 'Every push to your configured branches activates the content pipeline automatically.' },
    { cmd: 'analyze --deep', label: 'AI reads your diff', desc: 'The engine parses code changes, commit messages, and project context for accuracy.' },
    { cmd: 'generate --all', label: 'Content drafted instantly', desc: 'Blog posts, tweets, LinkedIn updates — all generated in your tone and style.' },
    { cmd: 'publish --multi', label: 'One-click publishing', desc: 'Push to Dev.to, Medium, Twitter, LinkedIn, Reddit, and Hashnode simultaneously.' },
  ]

  return (
    <div className="min-h-screen bg-black text-green-100 relative overflow-hidden">
      <MatrixRain />

      {/* Nav */}
      <nav className="relative z-20 border-b border-green-500/10 bg-black/50 backdrop-blur-md sticky top-0">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GlowText className="font-mono font-bold text-xl">{'>'}_</GlowText>
            <span className="font-mono font-bold text-white text-lg">CodePost</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs font-mono text-green-600">
            <a href="#features" className="hover:text-green-400 transition-colors">features</a>
            <a href="#platforms" className="hover:text-green-400 transition-colors">platforms</a>
            <a href="#pricing" className="hover:text-green-400 transition-colors">pricing</a>
          </div>
          <button className="relative px-5 py-2 rounded font-mono font-bold text-xs text-black bg-green-500 hover:bg-green-400 transition-colors shadow-[0_0_20px_rgba(0,255,65,0.3)]">
            ENTER
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/20 bg-green-950/20 backdrop-blur-sm text-green-400 text-xs font-mono mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(0,255,65,0.8)]" />
          SYSTEM ONLINE — v1.0 PUBLIC BETA
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-mono font-bold leading-tight mb-6 tracking-tight">
          <span className="text-white">The code</span>
          <br />
          <GlowText className="text-5xl md:text-6xl lg:text-7xl font-bold">
            writes the words.
          </GlowText>
        </h1>
        <p className="text-green-500/60 font-mono text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed">
          Push code to your repository. AI reads every change.
          Blog posts, tweets, and social content appear automatically.
          Marketing on autopilot.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-green-500 hover:bg-green-400 text-black font-mono font-bold px-8 py-4 rounded transition-colors text-sm shadow-[0_0_30px_rgba(0,255,65,0.25)]">
            $ npm install codepost -g
          </button>
          <button className="border border-green-500/30 hover:border-green-500/60 text-green-400 font-mono px-8 py-4 rounded transition-colors text-sm backdrop-blur-sm">
            View source code
          </button>
        </div>
      </section>

      {/* Animated feature cycle */}
      <section id="features" className="relative z-10 max-w-6xl mx-auto px-6 pb-20">
        <NeonBorder>
          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: rotating command display */}
              <div>
                <div className="bg-black/60 border border-green-500/20 rounded-lg p-6 mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="font-mono text-xs text-green-600">codepost process</span>
                  </div>
                  <div className="font-mono text-lg text-green-400">
                    <span className="text-green-700">$</span> codepost{' '}
                    <GlowText>{features[activeFeature].cmd}</GlowText>
                  </div>
                </div>

                <div className="space-y-2">
                  {features.map((f, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveFeature(i)}
                      className={`w-full text-left px-4 py-3 rounded-lg font-mono text-xs transition-all duration-300 ${
                        activeFeature === i
                          ? 'bg-green-500/10 border border-green-500/30 text-green-300'
                          : 'border border-transparent text-green-700 hover:text-green-500'
                      }`}
                    >
                      <span className="text-green-600">[{String(i + 1).padStart(2, '0')}]</span>{' '}
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Right: description */}
              <div>
                <h2 className="text-3xl font-mono font-bold text-white mb-4">
                  <GlowText>#</GlowText> How it works
                </h2>
                <p className="text-green-500/50 font-mono text-sm mb-8">
                  Four stages. Fully automated. Always in your control.
                </p>
                <div className="bg-black/40 border border-green-500/10 rounded-lg p-6">
                  <div className="font-mono text-green-400 font-bold text-sm mb-2">
                    {features[activeFeature].label}
                  </div>
                  <p className="font-mono text-green-600 text-xs leading-relaxed">
                    {features[activeFeature].desc}
                  </p>
                </div>

                {/* Progress bar */}
                <div className="flex gap-2 mt-6">
                  {features.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                        i <= activeFeature
                          ? 'bg-green-500 shadow-[0_0_6px_rgba(0,255,65,0.5)]'
                          : 'bg-green-900/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </NeonBorder>
      </section>

      {/* Content types - floating glass cards */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-mono font-bold text-white mb-2 text-center">
          <GlowText>#</GlowText> Output formats
        </h2>
        <p className="text-green-700 font-mono text-xs text-center mb-14">
          One push generates multiple content types simultaneously.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              type: 'BLOG',
              preview: 'Introducing Real-Time Collaboration — a deep dive into how we built live editing with operational transform...',
              meta: '~1,200 words',
            },
            {
              type: 'TWEET',
              preview: '1/ We just shipped real-time collab. Your team can now edit together with live cursors and zero conflicts...',
              meta: '5-tweet thread',
            },
            {
              type: 'LINKEDIN',
              preview: 'Thrilled to announce our most requested feature: real-time collaboration, built with operational transform...',
              meta: '~300 words',
            },
          ].map((c, i) => (
            <GlassCard key={i} glow className="p-6 hover:bg-green-950/10 transition-all">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-0.5 rounded bg-green-500/10 text-green-400 text-xs font-mono font-bold">
                  {c.type}
                </span>
                <span className="text-green-700 text-xs font-mono">{c.meta}</span>
              </div>
              <p className="text-green-300/60 text-xs font-mono leading-relaxed">{c.preview}</p>
              <div className="mt-4 pt-4 border-t border-green-500/10 flex justify-between items-center">
                <span className="text-green-700 text-xs font-mono">Ready to publish</span>
                <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_6px_rgba(0,255,65,0.8)]" />
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Platforms */}
      <section id="platforms" className="relative z-10 border-y border-green-500/10 bg-black/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-mono font-bold text-white mb-8">
            <GlowText>#</GlowText> Connected platforms
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Dev.to', 'Medium', 'Twitter/X', 'LinkedIn', 'Reddit', 'Hashnode'].map((p) => (
              <span
                key={p}
                className="px-5 py-2.5 rounded border border-green-500/15 bg-black/40 backdrop-blur-sm text-green-400 text-xs font-mono hover:border-green-500/40 hover:shadow-[0_0_12px_rgba(0,255,65,0.1)] transition-all cursor-default"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-mono font-bold text-white mb-12 text-center">
          <GlowText>#</GlowText> Select your plan
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <GlassCard className="p-6">
            <div className="font-mono text-green-700 text-xs mb-1">FREE</div>
            <div className="text-3xl font-mono font-bold text-white mb-4">
              $0<span className="text-sm text-green-800">/mo</span>
            </div>
            <ul className="space-y-2 text-xs text-green-600 font-mono mb-6">
              <li className="flex gap-2"><GlowText>+</GlowText> 5 generations/month</li>
              <li className="flex gap-2"><GlowText>+</GlowText> CLI access</li>
              <li className="flex gap-2"><GlowText>+</GlowText> Dev.to publishing</li>
            </ul>
            <button className="w-full border border-green-500/20 hover:border-green-500/40 text-green-500 font-mono text-xs py-2.5 rounded transition-colors">
              $ install
            </button>
          </GlassCard>

          <div className="relative">
            <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-green-500/40 via-green-500/20 to-green-500/5 blur-sm" />
            <GlassCard className="p-6 relative" glow>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-green-500 text-black font-mono text-xs font-bold rounded-full shadow-[0_0_15px_rgba(0,255,65,0.5)]">
                recommended
              </div>
              <div className="font-mono text-green-400 text-xs mb-1">PRO</div>
              <div className="text-3xl font-mono font-bold text-white mb-4">
                $19<span className="text-sm text-green-800">/mo</span>
              </div>
              <ul className="space-y-2 text-xs text-green-600 font-mono mb-6">
                <li className="flex gap-2"><GlowText>+</GlowText> Unlimited generations</li>
                <li className="flex gap-2"><GlowText>+</GlowText> All platforms</li>
                <li className="flex gap-2"><GlowText>+</GlowText> GitHub Actions</li>
                <li className="flex gap-2"><GlowText>+</GlowText> Dashboard editor</li>
              </ul>
              <button className="w-full bg-green-500 hover:bg-green-400 text-black font-mono font-bold text-xs py-2.5 rounded transition-colors shadow-[0_0_20px_rgba(0,255,65,0.25)]">
                $ subscribe --pro
              </button>
            </GlassCard>
          </div>

          <GlassCard className="p-6">
            <div className="font-mono text-green-700 text-xs mb-1">TEAM</div>
            <div className="text-3xl font-mono font-bold text-white mb-4">
              $49<span className="text-sm text-green-800">/mo</span>
            </div>
            <ul className="space-y-2 text-xs text-green-600 font-mono mb-6">
              <li className="flex gap-2"><GlowText>+</GlowText> Everything in Pro</li>
              <li className="flex gap-2"><GlowText>+</GlowText> 5 team members</li>
              <li className="flex gap-2"><GlowText>+</GlowText> Analytics</li>
              <li className="flex gap-2"><GlowText>+</GlowText> Priority support</li>
            </ul>
            <button className="w-full border border-green-500/20 hover:border-green-500/40 text-green-500 font-mono text-xs py-2.5 rounded transition-colors">
              $ subscribe --team
            </button>
          </GlassCard>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 border-t border-green-500/10">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-5xl font-mono font-bold text-white mb-4">
            Take the <GlowText>green pill.</GlowText>
          </h2>
          <p className="text-green-700 font-mono text-sm mb-8">
            See what your code has been trying to tell the world.
          </p>
          <button className="bg-green-500 hover:bg-green-400 text-black font-mono font-bold text-lg px-10 py-4 rounded transition-colors shadow-[0_0_40px_rgba(0,255,65,0.3)]">
            $ codepost init
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-green-500/10 bg-black/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <GlowText className="font-mono font-bold text-sm">{'>'}_</GlowText>
            <span className="font-mono text-green-800 text-xs">CodePost</span>
          </div>
          <div className="flex gap-6 text-xs font-mono text-green-800">
            <a href="#" className="hover:text-green-400 transition-colors">docs</a>
            <a href="#" className="hover:text-green-400 transition-colors">github</a>
            <a href="#" className="hover:text-green-400 transition-colors">twitter</a>
            <a href="#" className="hover:text-green-400 transition-colors">privacy</a>
          </div>
          <span className="text-green-900 font-mono text-xs">&copy; 2026 CodePost</span>
        </div>
      </footer>
    </div>
  )
}
