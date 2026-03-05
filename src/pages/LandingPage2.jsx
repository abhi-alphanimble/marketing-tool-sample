import { useState, useEffect } from 'react'

// Landing Page 2: "The Hacker News"
// Retro amber-on-black, ASCII art hero, scrolling log feed, old-school terminal aesthetic
// Design: Amber/orange monochrome, scanline texture, newspaper-column features, log-output sections

const LogLine = ({ timestamp, level, message, delay }) => {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  if (!visible) return null

  const levelColors = {
    INFO: 'text-amber-400',
    OK: 'text-green-400',
    WARN: 'text-yellow-500',
    DONE: 'text-amber-300',
    SEND: 'text-orange-400',
  }

  return (
    <div className="flex gap-3 font-mono text-xs md:text-sm animate-[fadeIn_0.3s_ease-out]">
      <span className="text-amber-700 shrink-0">{timestamp}</span>
      <span className={`shrink-0 w-12 ${levelColors[level] || 'text-amber-400'}`}>[{level}]</span>
      <span className="text-amber-200/80">{message}</span>
    </div>
  )
}

export default function LandingPage2() {
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowAll(true), 4000)
    return () => clearTimeout(timer)
  }, [])

  const asciiArt = `
 ██████╗ ██████╗ ██████╗ ███████╗██████╗  ██████╗ ███████╗████████╗
██╔════╝██╔═══██╗██╔══██╗██╔════╝██╔══██╗██╔═══██╗██╔════╝╚══██╔══╝
██║     ██║   ██║██║  ██║█████╗  ██████╔╝██║   ██║███████╗   ██║   
██║     ██║   ██║██║  ██║██╔══╝  ██╔═══╝ ██║   ██║╚════██║   ██║   
╚██████╗╚██████╔╝██████╔╝███████╗██║     ╚██████╔╝███████║   ██║   
 ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝╚═╝      ╚═════╝ ╚══════╝   ╚═╝`.trim()

  return (
    <div className="min-h-screen bg-[#0a0a00] text-amber-200 relative">
      {/* Scanline overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-40 opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,180,0,0.1) 1px, rgba(255,180,0,0.1) 2px)',
        }}
      />

      {/* Nav */}
      <nav className="border-b border-amber-900/40 sticky top-0 z-50 bg-[#0a0a00]/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="font-mono text-amber-400 font-bold text-sm tracking-wider">
            CODEPOST v1.0.0
          </div>
          <div className="hidden md:flex items-center gap-6 text-xs font-mono text-amber-600">
            <a href="#log" className="hover:text-amber-300 transition-colors">[LOG]</a>
            <a href="#manual" className="hover:text-amber-300 transition-colors">[MANUAL]</a>
            <a href="#specs" className="hover:text-amber-300 transition-colors">[SPECS]</a>
            <a href="#pricing" className="hover:text-amber-300 transition-colors">[PRICING]</a>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-amber-600 hover:text-amber-300 text-xs font-mono transition-colors">
              [LOGIN]
            </button>
            <button className="bg-amber-600 hover:bg-amber-500 text-black font-mono font-bold text-xs px-4 py-1.5 rounded-sm transition-colors">
              INIT
            </button>
          </div>
        </div>
      </nav>

      {/* Hero: ASCII Art */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-16">
        <pre className="text-amber-500/70 text-[0.35rem] sm:text-[0.5rem] md:text-xs leading-tight font-mono text-center overflow-x-auto mb-8 select-none">
          {asciiArt}
        </pre>
        <div className="text-center mb-12">
          <p className="font-mono text-amber-500 text-sm mb-2 tracking-widest">
            — AUTOPILOT FOR DEVELOPER MARKETING —
          </p>
          <h1 className="font-mono text-2xl md:text-4xl text-amber-100 font-bold leading-tight mb-6">
            Your git history is a goldmine of content.
            <br />
            <span className="text-amber-500">Stop leaving it buried.</span>
          </h1>
          <p className="font-mono text-amber-600 text-sm max-w-2xl mx-auto leading-relaxed mb-8">
            CodePost monitors your repositories, reads every push, and automatically
            drafts blog posts, tweets, and social updates from your code changes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-amber-500 hover:bg-amber-400 text-black font-mono font-bold text-sm px-6 py-3 rounded-sm transition-colors">
              &gt; INITIALIZE CODEPOST
            </button>
            <button className="border border-amber-800 hover:border-amber-600 text-amber-500 font-mono text-sm px-6 py-3 rounded-sm transition-colors">
              &gt; VIEW SOURCE
            </button>
          </div>
        </div>

        {/* Live log feed */}
        <div id="log" className="border border-amber-900/40 rounded-sm bg-[#080800] overflow-hidden">
          <div className="px-4 py-2 border-b border-amber-900/40 flex items-center justify-between">
            <span className="font-mono text-xs text-amber-600">SYSTEM LOG — codepost daemon</span>
            <span className="font-mono text-xs text-amber-800 animate-pulse">● LIVE</span>
          </div>
          <div className="p-4 space-y-1.5 max-h-64 overflow-y-auto">
            <LogLine timestamp="14:23:01" level="INFO" message="Watching repository: myapp/main" delay={200} />
            <LogLine timestamp="14:23:01" level="INFO" message="Connected to GitHub webhook endpoint" delay={600} />
            <LogLine timestamp="14:23:15" level="WARN" message="Incoming push event — 3 commits detected" delay={1200} />
            <LogLine timestamp="14:23:15" level="INFO" message='Reading diff: feat(collab): add real-time editing' delay={1600} />
            <LogLine timestamp="14:23:16" level="INFO" message="Analyzing 12 files changed (+847 -23)" delay={2000} />
            <LogLine timestamp="14:23:18" level="OK" message="Context extracted: new feature, real-time, collaboration" delay={2400} />
            <LogLine timestamp="14:23:20" level="DONE" message="Blog post draft generated (1,247 words)" delay={2800} />
            <LogLine timestamp="14:23:21" level="DONE" message="Tweet thread generated (5 tweets)" delay={3200} />
            <LogLine timestamp="14:23:21" level="DONE" message="LinkedIn post generated (312 words)" delay={3400} />
            <LogLine timestamp="14:23:22" level="SEND" message="3 drafts queued → dashboard.codepost.dev" delay={3800} />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-amber-900/30 font-mono text-xs text-amber-800 py-2 text-center">
          ═══════════════════════════════ MANUAL ═══════════════════════════════
        </div>
      </div>

      {/* How it works — manual-style */}
      <section id="manual" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="font-mono text-xl font-bold text-amber-300 mb-2">
          SECTION 1: OPERATION
        </h2>
        <p className="font-mono text-xs text-amber-700 mb-10">
          How CodePost processes your code into marketing content.
        </p>

        <div className="grid md:grid-cols-3 gap-px bg-amber-900/20">
          {[
            {
              step: 'STEP.01',
              cmd: '$ git push origin main',
              title: 'TRIGGER',
              desc: 'Push code to your repository. CodePost detects changes via webhook, CLI command, or GitHub Action. No configuration beyond initial setup.',
            },
            {
              step: 'STEP.02',
              cmd: 'analyzing: diff + context',
              title: 'ANALYZE',
              desc: 'The AI engine reads your git diff, commit messages, changelog, and README. It extracts what changed, the technical impact, and the target audience.',
            },
            {
              step: 'STEP.03',
              cmd: 'output: blog + social',
              title: 'GENERATE',
              desc: 'Drafts are generated for blog posts, tweet threads, LinkedIn updates, and more. Review in the dashboard, edit if needed, publish with one click.',
            },
          ].map((item, i) => (
            <div key={i} className="bg-[#0a0a00] p-6">
              <div className="font-mono text-xs text-amber-700 mb-3">{item.step}</div>
              <div className="font-mono text-sm text-amber-400 bg-[#080800] border border-amber-900/30 rounded-sm px-3 py-2 mb-4">
                {item.cmd}
              </div>
              <h3 className="font-mono text-amber-200 font-bold mb-2">{item.title}</h3>
              <p className="font-mono text-xs text-amber-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Specs / Features — newspaper columns */}
      <section id="specs" className="border-y border-amber-900/30 bg-[#080800]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="font-mono text-xl font-bold text-amber-300 mb-2">
            SECTION 2: SPECIFICATIONS
          </h2>
          <p className="font-mono text-xs text-amber-700 mb-10">
            Technical capabilities and supported integrations.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left column */}
            <div className="space-y-6">
              <div className="border-l-2 border-amber-700 pl-4">
                <h3 className="font-mono text-amber-300 font-bold text-sm mb-1">INPUT SOURCES</h3>
                <p className="font-mono text-xs text-amber-600 leading-relaxed">
                  Git diff, commit messages, changelog files, README.md, package.json metadata.
                  The engine combines all available context for maximum accuracy.
                </p>
              </div>
              <div className="border-l-2 border-amber-700 pl-4">
                <h3 className="font-mono text-amber-300 font-bold text-sm mb-1">OUTPUT FORMATS</h3>
                <p className="font-mono text-xs text-amber-600 leading-relaxed">
                  Long-form blog posts (800-2000 words), tweet threads (3-8 tweets),
                  LinkedIn posts, Reddit submissions, changelog entries, release notes.
                </p>
              </div>
              <div className="border-l-2 border-amber-700 pl-4">
                <h3 className="font-mono text-amber-300 font-bold text-sm mb-1">TRIGGER METHODS</h3>
                <p className="font-mono text-xs text-amber-600 leading-relaxed">
                  GitHub webhook (automatic), CLI command (manual), GitHub Actions (CI/CD),
                  VS Code extension (editor). All methods produce identical output.
                </p>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-6">
              <div className="border-l-2 border-amber-700 pl-4">
                <h3 className="font-mono text-amber-300 font-bold text-sm mb-1">AI ENGINE</h3>
                <p className="font-mono text-xs text-amber-600 leading-relaxed">
                  Powered by OpenRouter. Models selected for technical writing accuracy.
                  Custom fine-tuning available on Team plan for brand voice matching.
                </p>
              </div>
              <div className="border-l-2 border-amber-700 pl-4">
                <h3 className="font-mono text-amber-300 font-bold text-sm mb-1">PUBLISHING</h3>
                <p className="font-mono text-xs text-amber-600 leading-relaxed">
                  Native API integration with Dev.to, Medium, Twitter/X, LinkedIn, Reddit,
                  and Hashnode. OAuth-based auth. One-click or scheduled publishing.
                </p>
              </div>
              <div className="border-l-2 border-amber-700 pl-4">
                <h3 className="font-mono text-amber-300 font-bold text-sm mb-1">DASHBOARD</h3>
                <p className="font-mono text-xs text-amber-600 leading-relaxed">
                  Web-based editor for reviewing and refining drafts. Markdown support,
                  preview mode, platform-specific formatting, and publishing queue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supported platforms table */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="font-mono text-xl font-bold text-amber-300 mb-2">
          SECTION 3: SUPPORTED PLATFORMS
        </h2>
        <p className="font-mono text-xs text-amber-700 mb-8">
          Publish to all major developer platforms from a single dashboard.
        </p>

        <div className="border border-amber-900/40 rounded-sm overflow-hidden font-mono text-xs">
          <div className="grid grid-cols-4 bg-amber-900/20 text-amber-500 px-4 py-2 border-b border-amber-900/40">
            <span>PLATFORM</span>
            <span>TYPE</span>
            <span>STATUS</span>
            <span>PLAN</span>
          </div>
          {[
            { name: 'Dev.to', type: 'Blog', status: 'ACTIVE', plan: 'Free+' },
            { name: 'Medium', type: 'Blog', status: 'ACTIVE', plan: 'Free+' },
            { name: 'Twitter/X', type: 'Social', status: 'ACTIVE', plan: 'Pro+' },
            { name: 'LinkedIn', type: 'Social', status: 'ACTIVE', plan: 'Pro+' },
            { name: 'Reddit', type: 'Forum', status: 'ACTIVE', plan: 'Pro+' },
            { name: 'Hashnode', type: 'Blog', status: 'ACTIVE', plan: 'Pro+' },
          ].map((p, i) => (
            <div
              key={i}
              className={`grid grid-cols-4 px-4 py-2.5 text-amber-400 ${
                i % 2 === 0 ? 'bg-[#0a0a00]' : 'bg-[#080800]'
              }`}
            >
              <span className="text-amber-200">{p.name}</span>
              <span className="text-amber-600">{p.type}</span>
              <span className="text-green-500">{p.status}</span>
              <span className="text-amber-600">{p.plan}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-y border-amber-900/30 bg-[#080800]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="font-mono text-xl font-bold text-amber-300 mb-2">
            SECTION 4: PRICING
          </h2>
          <p className="font-mono text-xs text-amber-700 mb-10">
            All plans include the dashboard editor and CLI tool.
          </p>

          <div className="grid md:grid-cols-3 gap-px bg-amber-900/20">
            <div className="bg-[#0a0a00] p-6">
              <div className="font-mono text-amber-700 text-xs mb-1">TIER: FREE</div>
              <div className="font-mono text-3xl font-bold text-amber-200 mb-4">
                $0<span className="text-amber-700 text-sm">/mo</span>
              </div>
              <div className="space-y-2 font-mono text-xs text-amber-500 mb-6">
                <div>├── 5 generations/month</div>
                <div>├── CLI access</div>
                <div>├── Dev.to publishing</div>
                <div>└── Medium publishing</div>
              </div>
              <button className="w-full border border-amber-800 hover:border-amber-600 text-amber-500 font-mono text-xs py-2 rounded-sm transition-colors">
                &gt; INSTALL FREE
              </button>
            </div>

            <div className="bg-[#0a0a00] p-6 border-x border-amber-500/30 relative">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-amber-500" />
              <div className="font-mono text-amber-400 text-xs mb-1">TIER: PRO ★</div>
              <div className="font-mono text-3xl font-bold text-amber-200 mb-4">
                $19<span className="text-amber-700 text-sm">/mo</span>
              </div>
              <div className="space-y-2 font-mono text-xs text-amber-500 mb-6">
                <div>├── Unlimited generations</div>
                <div>├── All 6 platforms</div>
                <div>├── GitHub Actions</div>
                <div>├── Dashboard editor</div>
                <div>└── Custom voice settings</div>
              </div>
              <button className="w-full bg-amber-600 hover:bg-amber-500 text-black font-mono font-bold text-xs py-2 rounded-sm transition-colors">
                &gt; SUBSCRIBE PRO
              </button>
            </div>

            <div className="bg-[#0a0a00] p-6">
              <div className="font-mono text-amber-700 text-xs mb-1">TIER: TEAM</div>
              <div className="font-mono text-3xl font-bold text-amber-200 mb-4">
                $49<span className="text-amber-700 text-sm">/mo</span>
              </div>
              <div className="space-y-2 font-mono text-xs text-amber-500 mb-6">
                <div>├── Everything in Pro</div>
                <div>├── 5 team members</div>
                <div>├── Analytics dashboard</div>
                <div>└── Priority support</div>
              </div>
              <button className="w-full border border-amber-800 hover:border-amber-600 text-amber-500 font-mono text-xs py-2 rounded-sm transition-colors">
                &gt; SUBSCRIBE TEAM
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <pre className="font-mono text-amber-700 text-xs mb-6 select-none">
{`╔══════════════════════════════════════════════════════╗
║                                                      ║
║   YOUR CODE ALREADY WRITES ITSELF.                   ║
║   LET YOUR MARKETING DO THE SAME.                    ║
║                                                      ║
╚══════════════════════════════════════════════════════╝`}
        </pre>
        <p className="font-mono text-amber-600 text-xs mb-8">
          2,000+ developers. 50,000+ posts generated. Join them.
        </p>
        <button className="bg-amber-500 hover:bg-amber-400 text-black font-mono font-bold text-sm px-8 py-3 rounded-sm transition-colors">
          &gt; CODEPOST INIT
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t border-amber-900/30 bg-[#080800]">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs">
          <span className="text-amber-600">CODEPOST v1.0.0</span>
          <div className="flex gap-6 text-amber-700">
            <a href="#" className="hover:text-amber-400 transition-colors">[DOCS]</a>
            <a href="#" className="hover:text-amber-400 transition-colors">[GITHUB]</a>
            <a href="#" className="hover:text-amber-400 transition-colors">[TWITTER]</a>
            <a href="#" className="hover:text-amber-400 transition-colors">[PRIVACY]</a>
          </div>
          <span className="text-amber-800">&copy; 2026 CODEPOST</span>
        </div>
      </footer>
    </div>
  )
}
