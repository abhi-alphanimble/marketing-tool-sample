import { useState, useEffect } from 'react'

// Landing Page 1: "The Terminal"
// Dark theme, developer-focused, terminal/code aesthetic
// Design: Monospace typography, terminal window UI, git-inspired visuals

const TerminalLine = ({ prompt, text, delay, onComplete }) => {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1))
          i++
        } else {
          clearInterval(interval)
          setDone(true)
          onComplete?.()
        }
      }, 30)
      return () => clearInterval(interval)
    }, delay)
    return () => clearTimeout(timer)
  }, [text, delay])

  return (
    <div className="flex gap-2 font-mono text-sm md:text-base">
      <span className="text-green-400 shrink-0">{prompt}</span>
      <span className="text-gray-200">
        {displayed}
        {!done && <span className="animate-pulse text-green-400">|</span>}
      </span>
    </div>
  )
}

const TerminalWindow = ({ title, children }) => (
  <div className="rounded-lg border border-gray-700 bg-gray-950 overflow-hidden shadow-2xl shadow-green-900/20">
    <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-900 border-b border-gray-700">
      <div className="w-3 h-3 rounded-full bg-red-500" />
      <div className="w-3 h-3 rounded-full bg-yellow-500" />
      <div className="w-3 h-3 rounded-full bg-green-500" />
      <span className="ml-3 text-xs text-gray-400 font-mono">{title}</span>
    </div>
    <div className="p-5 space-y-2">{children}</div>
  </div>
)

const CodeBlock = ({ children }) => (
  <pre className="bg-gray-950 border border-gray-800 rounded-lg p-4 overflow-x-auto text-sm font-mono text-gray-300">
    {children}
  </pre>
)

const FeatureCard = ({ icon, title, description }) => (
  <div className="group border border-gray-800 rounded-lg p-6 bg-gray-900/50 hover:bg-gray-900 hover:border-green-800 transition-all duration-300">
    <div className="text-green-400 text-2xl mb-3 font-mono">{icon}</div>
    <h3 className="text-white font-mono font-bold text-lg mb-2">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </div>
)

const PlatformBadge = ({ name }) => (
  <span className="px-3 py-1.5 rounded border border-gray-700 bg-gray-900 text-gray-300 text-xs font-mono hover:border-green-600 hover:text-green-400 transition-colors cursor-default">
    {name}
  </span>
)

export default function LandingPage1() {
  const [step, setStep] = useState(0)

  return (
    <div className="min-h-screen bg-black text-gray-200">
      {/* Nav */}
      <nav className="border-b border-gray-800 bg-black/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-green-400 font-mono font-bold text-xl">&gt;_</span>
            <span className="text-white font-mono font-bold text-xl">CodePost</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-mono text-gray-400">
            <a href="#how-it-works" className="hover:text-green-400 transition-colors">how-it-works</a>
            <a href="#features" className="hover:text-green-400 transition-colors">features</a>
            <a href="#platforms" className="hover:text-green-400 transition-colors">platforms</a>
            <a href="#pricing" className="hover:text-green-400 transition-colors">pricing</a>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-gray-400 hover:text-white text-sm font-mono transition-colors">
              login
            </button>
            <button className="bg-green-600 hover:bg-green-500 text-black font-mono font-bold text-sm px-5 py-2 rounded transition-colors">
              $ get-started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-3 py-1 rounded-full border border-green-800 bg-green-950/50 text-green-400 text-xs font-mono mb-6">
              v1.0 — now in public beta
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold text-white leading-tight mb-6">
              Your commits
              <br />
              <span className="text-green-400">write your</span>
              <br />
              marketing.
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
              Push code. Get blog posts, tweets, and LinkedIn updates drafted automatically. 
              Stop context-switching between shipping and marketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="bg-green-600 hover:bg-green-500 text-black font-mono font-bold px-6 py-3 rounded transition-colors text-sm">
                $ npm install codepost --global
              </button>
              <button className="border border-gray-700 hover:border-gray-500 text-gray-300 font-mono px-6 py-3 rounded transition-colors text-sm">
                View on GitHub
              </button>
            </div>
          </div>

          <div>
            <TerminalWindow title="~/my-project — zsh">
              <TerminalLine
                prompt="$"
                text='git commit -m "feat: add real-time collaboration"'
                delay={500}
                onComplete={() => setStep(1)}
              />
              {step >= 1 && (
                <TerminalLine
                  prompt="$"
                  text="git push origin main"
                  delay={300}
                  onComplete={() => setStep(2)}
                />
              )}
              {step >= 2 && (
                <div className="mt-3 space-y-1">
                  <div className="text-yellow-400 font-mono text-sm">
                    [CodePost] Detected push to main...
                  </div>
                  <div className="text-green-400 font-mono text-sm">
                    [CodePost] Analyzing 3 commits, 12 files changed...
                  </div>
                  <div className="text-green-400 font-mono text-sm">
                    [CodePost] Drafting blog post... done
                  </div>
                  <div className="text-green-400 font-mono text-sm">
                    [CodePost] Drafting tweet thread... done
                  </div>
                  <div className="text-green-400 font-mono text-sm">
                    [CodePost] Drafting LinkedIn post... done
                  </div>
                  <div className="text-cyan-400 font-mono text-sm mt-2">
                    → 3 drafts ready at dashboard.codepost.dev
                  </div>
                </div>
              )}
            </TerminalWindow>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="border-y border-gray-800 bg-gray-950/50">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-mono font-bold text-white mb-4 text-center">
            <span className="text-green-400">#</span> How it works
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-xl mx-auto font-mono text-sm">
            Three steps. Zero marketing expertise required.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-lg border border-gray-700 bg-gray-900 flex items-center justify-center mx-auto mb-5">
                <span className="text-green-400 font-mono text-2xl font-bold">01</span>
              </div>
              <h3 className="text-white font-mono font-bold mb-2">Push your code</h3>
              <CodeBlock>
                <span className="text-green-400">$</span> git push origin main
              </CodeBlock>
              <p className="text-gray-400 text-sm mt-3">
                Use GitHub Actions, our CLI, or VS Code extension to trigger content generation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-lg border border-gray-700 bg-gray-900 flex items-center justify-center mx-auto mb-5">
                <span className="text-green-400 font-mono text-2xl font-bold">02</span>
              </div>
              <h3 className="text-white font-mono font-bold mb-2">AI reads your diff</h3>
              <CodeBlock>
                <span className="text-yellow-400">analyzing:</span> git diff, commits, changelog
              </CodeBlock>
              <p className="text-gray-400 text-sm mt-3">
                Our AI engine parses your changes and understands context, impact, and audience.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-lg border border-gray-700 bg-gray-900 flex items-center justify-center mx-auto mb-5">
                <span className="text-green-400 font-mono text-2xl font-bold">03</span>
              </div>
              <h3 className="text-white font-mono font-bold mb-2">Review & publish</h3>
              <CodeBlock>
                <span className="text-cyan-400">publish:</span> blog, twitter, linkedin
              </CodeBlock>
              <p className="text-gray-400 text-sm mt-3">
                Edit drafts in our dashboard. One click to publish to 6+ platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-mono font-bold text-white mb-12 text-center">
          <span className="text-green-400">#</span> Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon="{ }"
            title="Git-native"
            description="Works with your existing workflow. No new tools to learn. Push code, get content."
          />
          <FeatureCard
            icon="~>"
            title="Multi-format output"
            description="Blog posts, tweet threads, LinkedIn posts, Reddit submissions — all from one push."
          />
          <FeatureCard
            icon="[AI]"
            title="Context-aware AI"
            description="Reads your diff, commit messages, and changelog to generate technically accurate content."
          />
          <FeatureCard
            icon="</>"
            title="CLI + GitHub Actions"
            description="Trigger from your terminal or automate with CI/CD. Your choice."
          />
          <FeatureCard
            icon=">>"
            title="Dashboard editor"
            description="Review, edit, and refine AI drafts before publishing. You're always in control."
          />
          <FeatureCard
            icon="$$"
            title="One-click publish"
            description="Connected to Dev.to, Medium, Twitter, LinkedIn, Reddit, and Hashnode."
          />
        </div>
      </section>

      {/* Platforms */}
      <section id="platforms" className="border-y border-gray-800 bg-gray-950/50">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-mono font-bold text-white mb-4">
            <span className="text-green-400">#</span> Publish everywhere
          </h2>
          <p className="text-gray-400 mb-10 font-mono text-sm">
            One push. Six platforms. Zero effort.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <PlatformBadge name="Dev.to" />
            <PlatformBadge name="Medium" />
            <PlatformBadge name="Twitter/X" />
            <PlatformBadge name="LinkedIn" />
            <PlatformBadge name="Reddit" />
            <PlatformBadge name="Hashnode" />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-mono font-bold text-white mb-12 text-center">
          <span className="text-green-400">#</span> Pricing
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="border border-gray-800 rounded-lg p-6 bg-gray-900/50">
            <div className="font-mono text-gray-400 text-sm mb-1">free</div>
            <div className="text-3xl font-mono font-bold text-white mb-4">$0<span className="text-sm text-gray-500">/mo</span></div>
            <ul className="space-y-2 text-sm text-gray-400 font-mono mb-6">
              <li className="flex gap-2"><span className="text-green-400">+</span> 5 generations/month</li>
              <li className="flex gap-2"><span className="text-green-400">+</span> CLI access</li>
              <li className="flex gap-2"><span className="text-green-400">+</span> Dev.to publishing</li>
            </ul>
            <button className="w-full border border-gray-700 hover:border-gray-500 text-gray-300 font-mono py-2 rounded text-sm transition-colors">
              $ install
            </button>
          </div>

          <div className="border border-green-700 rounded-lg p-6 bg-green-950/20 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-green-600 text-black font-mono text-xs font-bold rounded-full">
              recommended
            </div>
            <div className="font-mono text-green-400 text-sm mb-1">pro</div>
            <div className="text-3xl font-mono font-bold text-white mb-4">$19<span className="text-sm text-gray-500">/mo</span></div>
            <ul className="space-y-2 text-sm text-gray-400 font-mono mb-6">
              <li className="flex gap-2"><span className="text-green-400">+</span> Unlimited generations</li>
              <li className="flex gap-2"><span className="text-green-400">+</span> All platforms</li>
              <li className="flex gap-2"><span className="text-green-400">+</span> GitHub Actions</li>
              <li className="flex gap-2"><span className="text-green-400">+</span> Dashboard editor</li>
            </ul>
            <button className="w-full bg-green-600 hover:bg-green-500 text-black font-mono font-bold py-2 rounded text-sm transition-colors">
              $ subscribe --pro
            </button>
          </div>

          <div className="border border-gray-800 rounded-lg p-6 bg-gray-900/50">
            <div className="font-mono text-gray-400 text-sm mb-1">team</div>
            <div className="text-3xl font-mono font-bold text-white mb-4">$49<span className="text-sm text-gray-500">/mo</span></div>
            <ul className="space-y-2 text-sm text-gray-400 font-mono mb-6">
              <li className="flex gap-2"><span className="text-green-400">+</span> Everything in Pro</li>
              <li className="flex gap-2"><span className="text-green-400">+</span> 5 team members</li>
              <li className="flex gap-2"><span className="text-green-400">+</span> Analytics</li>
              <li className="flex gap-2"><span className="text-green-400">+</span> Priority support</li>
            </ul>
            <button className="w-full border border-gray-700 hover:border-gray-500 text-gray-300 font-mono py-2 rounded text-sm transition-colors">
              $ subscribe --team
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-4">
            Stop writing marketing copy.
            <br />
            <span className="text-green-400">Start shipping.</span>
          </h2>
          <p className="text-gray-400 font-mono text-sm mb-8">
            Join 2,000+ developers who autopilot their marketing.
          </p>
          <button className="bg-green-600 hover:bg-green-500 text-black font-mono font-bold text-lg px-8 py-4 rounded transition-colors">
            $ codepost init
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-green-400 font-mono font-bold">&gt;_</span>
            <span className="text-gray-400 font-mono text-sm">CodePost</span>
          </div>
          <div className="flex gap-6 text-sm font-mono text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">docs</a>
            <a href="#" className="hover:text-gray-300 transition-colors">github</a>
            <a href="#" className="hover:text-gray-300 transition-colors">twitter</a>
            <a href="#" className="hover:text-gray-300 transition-colors">privacy</a>
          </div>
          <div className="text-gray-600 font-mono text-xs">
            &copy; 2026 CodePost. MIT License.
          </div>
        </div>
      </footer>
    </div>
  )
}
