import { useState } from 'react'

// Landing Page 3: "The Blueprint"
// Split-screen diff viewer hero, dotted grid background, cyan/blue accent, IDE-panel layout
// Design: Dark navy bg, cyan accents, code-diff visuals, tab-based panels, grid patterns

const DiffLine = ({ type, lineNum, content }) => {
  const styles = {
    add: 'bg-green-950/40 text-green-300 border-l-2 border-green-500',
    remove: 'bg-red-950/40 text-red-300 border-l-2 border-red-500',
    context: 'text-gray-500 border-l-2 border-transparent',
    header: 'bg-cyan-950/30 text-cyan-400 border-l-2 border-cyan-500',
  }

  const prefix = { add: '+', remove: '-', context: ' ', header: '@' }

  return (
    <div className={`flex font-mono text-xs leading-relaxed ${styles[type]}`}>
      <span className="w-10 text-right pr-2 text-gray-600 shrink-0 select-none">{lineNum}</span>
      <span className="px-2 text-gray-600 shrink-0 select-none">{prefix[type]}</span>
      <span className="pr-4">{content}</span>
    </div>
  )
}

const PanelTab = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-xs font-mono transition-colors ${
      isActive
        ? 'bg-gray-900 text-cyan-400 border-t-2 border-cyan-400'
        : 'bg-gray-950 text-gray-500 border-t-2 border-transparent hover:text-gray-300'
    }`}
  >
    {label}
  </button>
)

const StatusDot = ({ status }) => {
  const colors = {
    active: 'bg-green-400',
    pending: 'bg-yellow-400',
    upcoming: 'bg-gray-600',
  }
  return <span className={`w-2 h-2 rounded-full ${colors[status]} ${status === 'active' ? 'animate-pulse' : ''}`} />
}

export default function LandingPage3() {
  const [activePanel, setActivePanel] = useState('output')

  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-300">
      {/* Grid bg */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #58a6ff 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Nav */}
      <nav className="relative z-10 border-b border-gray-800 bg-[#0d1117]/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border-2 border-cyan-500 rounded-sm flex items-center justify-center">
              <div className="w-2 h-2 bg-cyan-400 rounded-sm" />
            </div>
            <span className="font-mono font-bold text-white">CodePost</span>
            <span className="hidden sm:inline text-xs font-mono text-gray-600 ml-1">blueprint</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-xs font-mono text-gray-500">
            <a href="#diff" className="hover:text-cyan-400 transition-colors">diff</a>
            <a href="#features" className="hover:text-cyan-400 transition-colors">features</a>
            <a href="#integrations" className="hover:text-cyan-400 transition-colors">integrations</a>
            <a href="#pricing" className="hover:text-cyan-400 transition-colors">pricing</a>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-gray-500 hover:text-white text-xs font-mono transition-colors">sign in</button>
            <button className="bg-cyan-600 hover:bg-cyan-500 text-white font-mono font-bold text-xs px-4 py-2 rounded transition-colors">
              get started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero: Split screen — diff on left, output on right */}
      <section id="diff" className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-800/50 bg-cyan-950/30 text-cyan-400 text-xs font-mono mb-6">
            <StatusDot status="active" />
            <span>Analyzing your latest push</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold text-white leading-tight mb-4">
            From <span className="text-red-400">diff</span> to <span className="text-cyan-400">draft</span>
            <br />
            in seconds.
          </h1>
          <p className="text-gray-500 text-sm font-mono max-w-xl mx-auto">
            CodePost reads your code changes and generates publication-ready marketing content.
            Blog posts, tweets, LinkedIn — all from your git history.
          </p>
        </div>

        {/* IDE Split Panel */}
        <div className="border border-gray-800 rounded-lg overflow-hidden bg-gray-900 shadow-2xl shadow-cyan-900/10">
          {/* Panel header */}
          <div className="flex items-center bg-gray-950 border-b border-gray-800">
            <div className="flex">
              <PanelTab label="DIFF" isActive={activePanel === 'diff'} onClick={() => setActivePanel('diff')} />
              <PanelTab label="OUTPUT" isActive={activePanel === 'output'} onClick={() => setActivePanel('output')} />
              <PanelTab label="PREVIEW" isActive={activePanel === 'preview'} onClick={() => setActivePanel('preview')} />
            </div>
            <div className="ml-auto px-4 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
          </div>

          {activePanel === 'diff' && (
            <div className="overflow-x-auto">
              <div className="min-w-[500px]">
                <DiffLine type="header" lineNum="" content="@@ -1,8 +1,24 @@ // src/collaboration/engine.ts" />
                <DiffLine type="context" lineNum="1" content="import { EventEmitter } from 'events';" />
                <DiffLine type="context" lineNum="2" content="import { WebSocket } from 'ws';" />
                <DiffLine type="add" lineNum="3" content="import { OperationalTransform } from './ot';" />
                <DiffLine type="add" lineNum="4" content="import { CursorTracker } from './cursors';" />
                <DiffLine type="add" lineNum="5" content="" />
                <DiffLine type="add" lineNum="6" content="export class CollaborationEngine extends EventEmitter {" />
                <DiffLine type="add" lineNum="7" content="  private ot: OperationalTransform;" />
                <DiffLine type="add" lineNum="8" content="  private cursors: CursorTracker;" />
                <DiffLine type="add" lineNum="9" content="" />
                <DiffLine type="add" lineNum="10" content="  constructor(private ws: WebSocket) {" />
                <DiffLine type="add" lineNum="11" content="    super();" />
                <DiffLine type="add" lineNum="12" content="    this.ot = new OperationalTransform();" />
                <DiffLine type="add" lineNum="13" content="    this.cursors = new CursorTracker();" />
                <DiffLine type="add" lineNum="14" content="  }" />
                <DiffLine type="context" lineNum="15" content="" />
                <DiffLine type="remove" lineNum="16" content="  // TODO: implement real-time sync" />
                <DiffLine type="add" lineNum="16" content="  async sync(operation: Operation): Promise&lt;void&gt; {" />
                <DiffLine type="add" lineNum="17" content="    const transformed = this.ot.transform(operation);" />
                <DiffLine type="add" lineNum="18" content="    this.ws.send(JSON.stringify(transformed));" />
                <DiffLine type="add" lineNum="19" content="    this.emit('sync', transformed);" />
                <DiffLine type="add" lineNum="20" content="  }" />
              </div>
            </div>
          )}

          {activePanel === 'output' && (
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-4">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                Generated from commit a1b2c3d — 3 outputs ready
              </div>

              <div className="border border-gray-800 rounded-lg p-4 bg-gray-950">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded bg-orange-900/30 text-orange-400 text-xs font-mono">BLOG</span>
                  <span className="text-xs text-gray-600 font-mono">1,247 words</span>
                </div>
                <h4 className="text-white font-mono font-bold text-sm mb-1">Introducing Real-Time Collaboration</h4>
                <p className="text-gray-500 text-xs font-mono leading-relaxed">
                  We shipped real-time collaboration using operational transform.
                  Multiple users can now edit simultaneously with live cursor tracking...
                </p>
              </div>

              <div className="border border-gray-800 rounded-lg p-4 bg-gray-950">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded bg-sky-900/30 text-sky-400 text-xs font-mono">TWEET</span>
                  <span className="text-xs text-gray-600 font-mono">5 tweets</span>
                </div>
                <p className="text-gray-500 text-xs font-mono leading-relaxed">
                  1/ We just shipped real-time collaboration. Your team can now edit together
                  with live cursors and zero conflicts...
                </p>
              </div>

              <div className="border border-gray-800 rounded-lg p-4 bg-gray-950">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded bg-blue-900/30 text-blue-400 text-xs font-mono">LINKEDIN</span>
                  <span className="text-xs text-gray-600 font-mono">312 words</span>
                </div>
                <p className="text-gray-500 text-xs font-mono leading-relaxed">
                  Thrilled to announce real-time collaboration — our most requested feature.
                  Built with operational transform for consistency guarantees...
                </p>
              </div>
            </div>
          )}

          {activePanel === 'preview' && (
            <div className="p-6">
              <div className="max-w-2xl mx-auto">
                <div className="flex items-center gap-2 text-xs font-mono text-gray-600 mb-6">
                  <span>Preview:</span>
                  <span className="px-2 py-0.5 rounded bg-gray-800 text-cyan-400">Blog Post</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-mono">
                  Introducing Real-Time Collaboration
                </h3>
                <div className="space-y-3 text-sm text-gray-400 font-mono leading-relaxed">
                  <p>
                    Today we're shipping real-time collaboration to all Pro users.
                    This has been our most requested feature, and building it taught us
                    a lot about distributed systems.
                  </p>
                  <p>
                    We evaluated three approaches: CRDTs, operational transform, and a
                    custom sync engine. We chose OT for its consistency guarantees in
                    our specific use case.
                  </p>
                  <p className="text-cyan-600">[Full article continues for 1,247 words...]</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10">
          <button className="bg-cyan-600 hover:bg-cyan-500 text-white font-mono font-bold text-sm px-6 py-3 rounded transition-colors">
            Start generating content
          </button>
          <button className="border border-gray-700 hover:border-gray-500 text-gray-400 font-mono text-sm px-6 py-3 rounded transition-colors">
            View on GitHub
          </button>
        </div>
      </section>

      {/* Features - IDE sidebar style */}
      <section id="features" className="relative z-10 border-y border-gray-800 bg-[#0a0f14]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-mono font-bold text-white mb-2 text-center">
            <span className="text-cyan-400">//</span> Features
          </h2>
          <p className="text-gray-500 font-mono text-xs text-center mb-14">
            Everything you need to turn code into content.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: '01', label: 'Git-native workflow', desc: 'Push code, get content. No new tools. Works with GitHub, GitLab, and Bitbucket.' },
              { icon: '02', label: 'Multi-format output', desc: 'Blog posts, tweets, LinkedIn updates, Reddit posts, changelogs — all from one push.' },
              { icon: '03', label: 'Diff-aware AI', desc: 'Reads your actual code changes, not just commit messages. Technically accurate content.' },
              { icon: '04', label: 'CLI + CI/CD', desc: 'Trigger from terminal, GitHub Actions, or VS Code extension. Fits your workflow.' },
              { icon: '05', label: 'Dashboard editor', desc: 'Markdown editor with platform-specific preview. Edit before publishing.' },
              { icon: '06', label: '6 platforms', desc: 'Dev.to, Medium, Twitter/X, LinkedIn, Reddit, Hashnode. One click to publish.' },
            ].map((f, i) => (
              <div
                key={i}
                className="flex gap-4 p-5 rounded-lg border border-gray-800 bg-gray-900/30 hover:bg-gray-900/60 hover:border-cyan-900/50 transition-all"
              >
                <div className="w-10 h-10 rounded border border-gray-700 bg-gray-900 flex items-center justify-center shrink-0">
                  <span className="text-cyan-400 font-mono text-xs font-bold">{f.icon}</span>
                </div>
                <div>
                  <h3 className="font-mono font-bold text-white text-sm mb-1">{f.label}</h3>
                  <p className="text-gray-500 text-xs font-mono leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations - connection diagram */}
      <section id="integrations" className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-mono font-bold text-white mb-2 text-center">
          <span className="text-cyan-400">//</span> Integrations
        </h2>
        <p className="text-gray-500 font-mono text-xs text-center mb-14">
          Input from your repo. Output to every platform.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
          {/* Input side */}
          <div className="space-y-3">
            {['GitHub', 'CLI', 'VS Code'].map((s) => (
              <div key={s} className="px-4 py-2 border border-gray-700 rounded bg-gray-900 font-mono text-xs text-gray-300 text-center min-w-[120px]">
                {s}
              </div>
            ))}
          </div>

          {/* Arrow */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-px h-8 md:w-8 md:h-px bg-cyan-800" />
            <div className="w-12 h-12 rounded-lg border-2 border-cyan-500 bg-cyan-950/30 flex items-center justify-center">
              <span className="text-cyan-400 font-mono text-xs font-bold">AI</span>
            </div>
            <div className="w-px h-8 md:w-8 md:h-px bg-cyan-800" />
          </div>

          {/* Output side */}
          <div className="grid grid-cols-2 gap-3">
            {['Dev.to', 'Medium', 'Twitter/X', 'LinkedIn', 'Reddit', 'Hashnode'].map((p) => (
              <div key={p} className="px-4 py-2 border border-gray-700 rounded bg-gray-900 font-mono text-xs text-gray-300 text-center">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative z-10 border-y border-gray-800 bg-[#0a0f14]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-mono font-bold text-white mb-12 text-center">
            <span className="text-cyan-400">//</span> Pricing
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="border border-gray-800 rounded-lg p-6 bg-gray-900/50">
              <div className="font-mono text-gray-500 text-xs mb-1">FREE</div>
              <div className="text-3xl font-mono font-bold text-white mb-4">$0<span className="text-sm text-gray-600">/mo</span></div>
              <ul className="space-y-2 text-xs text-gray-500 font-mono mb-6">
                <li className="flex gap-2"><span className="text-cyan-500">+</span> 5 generations/month</li>
                <li className="flex gap-2"><span className="text-cyan-500">+</span> CLI access</li>
                <li className="flex gap-2"><span className="text-cyan-500">+</span> Dev.to + Medium</li>
              </ul>
              <button className="w-full border border-gray-700 hover:border-gray-500 text-gray-400 font-mono text-xs py-2 rounded transition-colors">
                install free
              </button>
            </div>

            <div className="border-2 border-cyan-700 rounded-lg p-6 bg-cyan-950/10 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-cyan-600 text-white font-mono text-xs font-bold rounded-full">
                recommended
              </div>
              <div className="font-mono text-cyan-400 text-xs mb-1">PRO</div>
              <div className="text-3xl font-mono font-bold text-white mb-4">$19<span className="text-sm text-gray-600">/mo</span></div>
              <ul className="space-y-2 text-xs text-gray-500 font-mono mb-6">
                <li className="flex gap-2"><span className="text-cyan-500">+</span> Unlimited generations</li>
                <li className="flex gap-2"><span className="text-cyan-500">+</span> All 6 platforms</li>
                <li className="flex gap-2"><span className="text-cyan-500">+</span> GitHub Actions</li>
                <li className="flex gap-2"><span className="text-cyan-500">+</span> Dashboard editor</li>
              </ul>
              <button className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-mono font-bold text-xs py-2 rounded transition-colors">
                subscribe pro
              </button>
            </div>

            <div className="border border-gray-800 rounded-lg p-6 bg-gray-900/50">
              <div className="font-mono text-gray-500 text-xs mb-1">TEAM</div>
              <div className="text-3xl font-mono font-bold text-white mb-4">$49<span className="text-sm text-gray-600">/mo</span></div>
              <ul className="space-y-2 text-xs text-gray-500 font-mono mb-6">
                <li className="flex gap-2"><span className="text-cyan-500">+</span> Everything in Pro</li>
                <li className="flex gap-2"><span className="text-cyan-500">+</span> 5 team members</li>
                <li className="flex gap-2"><span className="text-cyan-500">+</span> Analytics</li>
                <li className="flex gap-2"><span className="text-cyan-500">+</span> Priority support</li>
              </ul>
              <button className="w-full border border-gray-700 hover:border-gray-500 text-gray-400 font-mono text-xs py-2 rounded transition-colors">
                subscribe team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-4">
          Every diff has a story.
          <br />
          <span className="text-cyan-400">Let CodePost write it.</span>
        </h2>
        <p className="text-gray-500 font-mono text-xs mb-8">
          Join 2,000+ developers automating their content pipeline.
        </p>
        <button className="bg-cyan-600 hover:bg-cyan-500 text-white font-mono font-bold text-sm px-8 py-4 rounded transition-colors">
          Get started free
        </button>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 bg-[#0a0f14]">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 border-2 border-cyan-500 rounded-sm flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-sm" />
            </div>
            <span className="font-mono text-gray-500 text-xs">CodePost</span>
          </div>
          <div className="flex gap-6 text-xs font-mono text-gray-600">
            <a href="#" className="hover:text-gray-300 transition-colors">docs</a>
            <a href="#" className="hover:text-gray-300 transition-colors">github</a>
            <a href="#" className="hover:text-gray-300 transition-colors">twitter</a>
            <a href="#" className="hover:text-gray-300 transition-colors">privacy</a>
          </div>
          <div className="text-gray-700 font-mono text-xs">&copy; 2026 CodePost</div>
        </div>
      </footer>
    </div>
  )
}
