import { useState, useEffect } from 'react'

// Landing Page 6: "The Pipeline"
// CI/CD inspired, horizontal pipeline hero, status badges, log-output sections, purple accent
// Design: Dark bg, purple/violet accents, pipeline stages, build-status aesthetic, job logs

const PipelineStage = ({ label, status, delay, children }) => {
  const [currentStatus, setCurrentStatus] = useState('waiting')

  useEffect(() => {
    const t1 = setTimeout(() => setCurrentStatus('running'), delay)
    const t2 = setTimeout(() => setCurrentStatus(status), delay + 1200)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [delay, status])

  const statusConfig = {
    waiting: { dot: 'bg-gray-600', ring: '', text: 'text-gray-600', label: 'waiting' },
    running: { dot: 'bg-purple-500 animate-pulse', ring: 'ring-2 ring-purple-500/30', text: 'text-purple-400', label: 'running' },
    passed: { dot: 'bg-green-500', ring: '', text: 'text-green-400', label: 'passed' },
    skipped: { dot: 'bg-gray-600', ring: '', text: 'text-gray-500', label: 'skipped' },
  }

  const cfg = statusConfig[currentStatus]

  return (
    <div className="flex flex-col items-center gap-2 min-w-[140px]">
      <div className={`w-10 h-10 rounded-full ${cfg.dot} ${cfg.ring} flex items-center justify-center transition-all duration-500`}>
        {currentStatus === 'passed' && (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        )}
        {currentStatus === 'running' && (
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
        )}
      </div>
      <span className="font-mono text-xs text-white font-bold">{label}</span>
      <span className={`font-mono text-[10px] ${cfg.text}`}>{cfg.label}</span>
      {children}
    </div>
  )
}

const PipelineConnector = ({ active }) => (
  <div className={`w-12 md:w-20 h-0.5 mt-[-28px] transition-colors duration-500 ${active ? 'bg-purple-500' : 'bg-gray-800'}`} />
)

const StatusBadge = ({ status, label }) => {
  const styles = {
    passed: 'bg-green-900/30 text-green-400 border-green-800',
    running: 'bg-purple-900/30 text-purple-400 border-purple-800',
    failed: 'bg-red-900/30 text-red-400 border-red-800',
    pending: 'bg-gray-900/30 text-gray-400 border-gray-700',
  }

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-mono font-bold ${styles[status]}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${
        status === 'passed' ? 'bg-green-400' :
        status === 'running' ? 'bg-purple-400 animate-pulse' :
        status === 'failed' ? 'bg-red-400' :
        'bg-gray-500'
      }`} />
      {label}
    </span>
  )
}

const JobLog = ({ lines }) => (
  <div className="bg-black rounded-lg border border-gray-800 overflow-hidden font-mono text-xs">
    <div className="px-3 py-1.5 border-b border-gray-800 bg-gray-900/50 flex items-center gap-2">
      <span className="text-gray-500">Job log</span>
    </div>
    <div className="p-3 space-y-0.5">
      {lines.map((line, i) => (
        <div key={i} className="flex gap-3">
          <span className="text-gray-700 shrink-0 select-none w-5 text-right">{i + 1}</span>
          <span className={line.color || 'text-gray-400'}>{line.text}</span>
        </div>
      ))}
    </div>
  </div>
)

export default function LandingPage6() {
  const [pipelineRan, setPipelineRan] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setPipelineRan(true), 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-[#0c0c14] text-gray-300">
      {/* Nav */}
      <nav className="border-b border-gray-800 bg-[#0c0c14]/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded bg-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs font-mono">CP</span>
            </div>
            <span className="font-mono font-bold text-white">CodePost</span>
            <StatusBadge status="passed" label="build passing" />
          </div>
          <div className="hidden md:flex items-center gap-6 text-xs font-mono text-gray-500">
            <a href="#pipeline" className="hover:text-purple-400 transition-colors">pipeline</a>
            <a href="#jobs" className="hover:text-purple-400 transition-colors">jobs</a>
            <a href="#config" className="hover:text-purple-400 transition-colors">config</a>
            <a href="#pricing" className="hover:text-purple-400 transition-colors">pricing</a>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-gray-500 hover:text-white text-xs font-mono transition-colors">sign in</button>
            <button className="bg-purple-600 hover:bg-purple-500 text-white font-mono font-bold text-xs px-4 py-2 rounded transition-colors">
              Get started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero: Pipeline visualization */}
      <section id="pipeline" className="max-w-6xl mx-auto px-6 pt-16 pb-20">
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold text-white leading-tight mb-4">
            Your content pipeline,
            <br />
            <span className="text-purple-400">fully automated.</span>
          </h1>
          <p className="text-gray-500 font-mono text-sm max-w-xl mx-auto mb-4">
            CodePost adds a content generation stage to your dev workflow.
            Push code, and marketing content builds alongside your software.
          </p>
          <div className="flex gap-2 justify-center mb-12">
            <StatusBadge status="passed" label="v1.0.0" />
            <StatusBadge status="passed" label="2K+ users" />
            <StatusBadge status="passed" label="50K+ posts" />
          </div>
        </div>

        {/* Pipeline visualization */}
        <div className="border border-gray-800 rounded-xl bg-[#0e0e18] p-8 overflow-x-auto">
          <div className="flex items-center gap-2 mb-6">
            <span className="font-mono text-xs text-gray-500">Pipeline</span>
            <span className="font-mono text-xs text-white font-bold">#1247</span>
            <span className="text-gray-700 font-mono text-xs">— triggered by push to main</span>
          </div>

          <div className="flex items-start justify-center gap-0 min-w-[600px]">
            <PipelineStage label="Push" status="passed" delay={200} />
            <PipelineConnector active={pipelineRan} />
            <PipelineStage label="Detect" status="passed" delay={1000} />
            <PipelineConnector active={pipelineRan} />
            <PipelineStage label="Analyze" status="passed" delay={2000} />
            <PipelineConnector active={pipelineRan} />
            <PipelineStage label="Generate" status="passed" delay={3000} />
            <PipelineConnector active={pipelineRan} />
            <PipelineStage label="Review" status="passed" delay={4000} />
          </div>

          <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-xs font-mono text-gray-500">
              <span>Duration: <span className="text-white">18s</span></span>
              <span>Commits: <span className="text-white">3</span></span>
              <span>Files: <span className="text-white">12</span></span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-gray-500">Outputs:</span>
              <StatusBadge status="passed" label="Blog" />
              <StatusBadge status="passed" label="Tweet" />
              <StatusBadge status="passed" label="LinkedIn" />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10">
          <button className="bg-purple-600 hover:bg-purple-500 text-white font-mono font-bold text-sm px-6 py-3 rounded transition-colors">
            Start your pipeline
          </button>
          <button className="border border-gray-700 hover:border-gray-500 text-gray-400 font-mono text-sm px-6 py-3 rounded transition-colors">
            View documentation
          </button>
        </div>
      </section>

      {/* Jobs / How it works */}
      <section id="jobs" className="border-y border-gray-800 bg-[#0a0a12]">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-mono font-bold text-white mb-2 text-center">
            <span className="text-purple-400">#</span> Pipeline jobs
          </h2>
          <p className="text-gray-500 font-mono text-xs text-center mb-14">
            Each stage in detail. Click to expand the job log.
          </p>

          <div className="space-y-4 max-w-3xl mx-auto">
            {/* Job 1 */}
            <details className="border border-gray-800 rounded-lg overflow-hidden group" open>
              <summary className="flex items-center gap-4 px-5 py-4 bg-[#0e0e18] cursor-pointer hover:bg-[#121220] transition-colors">
                <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div className="flex-1">
                  <span className="font-mono text-sm font-bold text-white">detect-changes</span>
                  <span className="ml-3 font-mono text-xs text-gray-600">2s</span>
                </div>
                <StatusBadge status="passed" label="passed" />
              </summary>
              <div className="px-5 pb-5">
                <JobLog lines={[
                  { text: 'Received push event from GitHub webhook', color: 'text-gray-400' },
                  { text: 'Repository: myapp/main', color: 'text-gray-400' },
                  { text: 'Commits: 3 (a1b2c3d..f4e5d6c)', color: 'text-gray-400' },
                  { text: 'Files changed: 12 (+847 -23)', color: 'text-gray-400' },
                  { text: 'Change type detected: NEW FEATURE', color: 'text-purple-400' },
                  { text: 'Proceeding to analysis stage...', color: 'text-green-400' },
                ]} />
              </div>
            </details>

            {/* Job 2 */}
            <details className="border border-gray-800 rounded-lg overflow-hidden">
              <summary className="flex items-center gap-4 px-5 py-4 bg-[#0e0e18] cursor-pointer hover:bg-[#121220] transition-colors">
                <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div className="flex-1">
                  <span className="font-mono text-sm font-bold text-white">analyze-context</span>
                  <span className="ml-3 font-mono text-xs text-gray-600">4s</span>
                </div>
                <StatusBadge status="passed" label="passed" />
              </summary>
              <div className="px-5 pb-5">
                <JobLog lines={[
                  { text: 'Reading git diff for 3 commits...', color: 'text-gray-400' },
                  { text: 'Parsing commit messages...', color: 'text-gray-400' },
                  { text: 'Reading README.md for project context...', color: 'text-gray-400' },
                  { text: 'Reading CHANGELOG.md...', color: 'text-gray-400' },
                  { text: 'Context: real-time collaboration, OT engine, cursor tracking', color: 'text-purple-400' },
                  { text: 'Audience: developers, technical leads', color: 'text-purple-400' },
                  { text: 'Analysis complete. Passing to generation.', color: 'text-green-400' },
                ]} />
              </div>
            </details>

            {/* Job 3 */}
            <details className="border border-gray-800 rounded-lg overflow-hidden">
              <summary className="flex items-center gap-4 px-5 py-4 bg-[#0e0e18] cursor-pointer hover:bg-[#121220] transition-colors">
                <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div className="flex-1">
                  <span className="font-mono text-sm font-bold text-white">generate-content</span>
                  <span className="ml-3 font-mono text-xs text-gray-600">12s</span>
                </div>
                <StatusBadge status="passed" label="passed" />
              </summary>
              <div className="px-5 pb-5">
                <JobLog lines={[
                  { text: 'Generating blog post...', color: 'text-gray-400' },
                  { text: 'Blog: "Introducing Real-Time Collaboration" (1,247 words) ✓', color: 'text-green-400' },
                  { text: 'Generating tweet thread...', color: 'text-gray-400' },
                  { text: 'Tweet: 5-tweet thread ✓', color: 'text-green-400' },
                  { text: 'Generating LinkedIn post...', color: 'text-gray-400' },
                  { text: 'LinkedIn: 312 words ✓', color: 'text-green-400' },
                  { text: '3 drafts queued to dashboard', color: 'text-purple-400' },
                  { text: 'Pipeline complete. All jobs passed.', color: 'text-green-400' },
                ]} />
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Config / Features */}
      <section id="config" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-mono font-bold text-white mb-2 text-center">
          <span className="text-purple-400">#</span> Configuration
        </h2>
        <p className="text-gray-500 font-mono text-xs text-center mb-14">
          Three ways to set up your content pipeline.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* CLI */}
          <div className="border border-gray-800 rounded-lg overflow-hidden bg-[#0e0e18]">
            <div className="px-5 py-3 border-b border-gray-800 flex items-center gap-2">
              <StatusBadge status="passed" label="CLI" />
            </div>
            <div className="p-5">
              <pre className="bg-black rounded p-3 font-mono text-xs text-gray-300 overflow-x-auto mb-3">
{`$ npm i -g codepost
$ codepost init
$ codepost generate`}
              </pre>
              <p className="text-gray-500 text-xs font-mono">
                Run manually from your terminal after any commit or merge.
              </p>
            </div>
          </div>

          {/* GitHub Actions */}
          <div className="border border-purple-800/50 rounded-lg overflow-hidden bg-purple-950/10">
            <div className="px-5 py-3 border-b border-purple-800/30 flex items-center gap-2">
              <StatusBadge status="running" label="GitHub Actions" />
              <span className="text-[10px] text-purple-500 font-mono">recommended</span>
            </div>
            <div className="p-5">
              <pre className="bg-black rounded p-3 font-mono text-xs text-gray-300 overflow-x-auto mb-3">
{`on:
  push:
    branches: [main]
steps:
  - uses: codepost/action@v1`}
              </pre>
              <p className="text-gray-500 text-xs font-mono">
                Fully automated. Content generated on every push to configured branches.
              </p>
            </div>
          </div>

          {/* VS Code */}
          <div className="border border-gray-800 rounded-lg overflow-hidden bg-[#0e0e18]">
            <div className="px-5 py-3 border-b border-gray-800 flex items-center gap-2">
              <StatusBadge status="pending" label="VS Code" />
              <span className="text-[10px] text-gray-600 font-mono">coming soon</span>
            </div>
            <div className="p-5">
              <pre className="bg-black rounded p-3 font-mono text-xs text-gray-300 overflow-x-auto mb-3">
{`Cmd+Shift+P
> CodePost: Generate
> CodePost: Publish`}
              </pre>
              <p className="text-gray-500 text-xs font-mono">
                Generate content without leaving your editor. Phase 3.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="border-y border-gray-800 bg-[#0a0a12]">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-mono font-bold text-white mb-8">
            <span className="text-purple-400">#</span> Publish targets
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: 'Dev.to', status: 'passed' },
              { name: 'Medium', status: 'passed' },
              { name: 'Twitter/X', status: 'passed' },
              { name: 'LinkedIn', status: 'passed' },
              { name: 'Reddit', status: 'passed' },
              { name: 'Hashnode', status: 'passed' },
            ].map((p) => (
              <div key={p.name} className="flex items-center gap-2 px-4 py-2 rounded border border-gray-800 bg-[#0e0e18] font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-gray-300">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-mono font-bold text-white mb-12 text-center">
          <span className="text-purple-400">#</span> Plans
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="border border-gray-800 rounded-lg p-6 bg-[#0e0e18]">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-gray-500 text-xs">FREE</span>
              <StatusBadge status="passed" label="available" />
            </div>
            <div className="text-3xl font-mono font-bold text-white mb-4">$0<span className="text-sm text-gray-600">/mo</span></div>
            <ul className="space-y-2 text-xs text-gray-500 font-mono mb-6">
              <li className="flex gap-2"><span className="text-purple-500">+</span> 5 generations/month</li>
              <li className="flex gap-2"><span className="text-purple-500">+</span> CLI access</li>
              <li className="flex gap-2"><span className="text-purple-500">+</span> Dev.to + Medium</li>
            </ul>
            <button className="w-full border border-gray-700 hover:border-gray-500 text-gray-400 font-mono text-xs py-2.5 rounded transition-colors">
              Install free
            </button>
          </div>

          <div className="border-2 border-purple-700 rounded-lg p-6 bg-purple-950/10 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-purple-600 text-white font-mono text-xs font-bold rounded-full">
              recommended
            </div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-purple-400 text-xs">PRO</span>
              <StatusBadge status="running" label="popular" />
            </div>
            <div className="text-3xl font-mono font-bold text-white mb-4">$19<span className="text-sm text-gray-600">/mo</span></div>
            <ul className="space-y-2 text-xs text-gray-500 font-mono mb-6">
              <li className="flex gap-2"><span className="text-purple-500">+</span> Unlimited generations</li>
              <li className="flex gap-2"><span className="text-purple-500">+</span> All 6 platforms</li>
              <li className="flex gap-2"><span className="text-purple-500">+</span> GitHub Actions</li>
              <li className="flex gap-2"><span className="text-purple-500">+</span> Dashboard editor</li>
            </ul>
            <button className="w-full bg-purple-600 hover:bg-purple-500 text-white font-mono font-bold text-xs py-2.5 rounded transition-colors">
              Start free trial
            </button>
          </div>

          <div className="border border-gray-800 rounded-lg p-6 bg-[#0e0e18]">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-gray-500 text-xs">TEAM</span>
              <StatusBadge status="pending" label="5 seats" />
            </div>
            <div className="text-3xl font-mono font-bold text-white mb-4">$49<span className="text-sm text-gray-600">/mo</span></div>
            <ul className="space-y-2 text-xs text-gray-500 font-mono mb-6">
              <li className="flex gap-2"><span className="text-purple-500">+</span> Everything in Pro</li>
              <li className="flex gap-2"><span className="text-purple-500">+</span> 5 team members</li>
              <li className="flex gap-2"><span className="text-purple-500">+</span> Analytics</li>
              <li className="flex gap-2"><span className="text-purple-500">+</span> Priority support</li>
            </ul>
            <button className="w-full border border-gray-700 hover:border-gray-500 text-gray-400 font-mono text-xs py-2.5 rounded transition-colors">
              Contact sales
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-4">
            Add content to your pipeline.
            <br />
            <span className="text-purple-400">Ship marketing on every deploy.</span>
          </h2>
          <p className="text-gray-500 font-mono text-xs mb-8">
            2,000+ developers already have content in their CI/CD. Join them.
          </p>
          <button className="bg-purple-600 hover:bg-purple-500 text-white font-mono font-bold text-lg px-8 py-4 rounded transition-colors">
            Start your pipeline
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-[#0a0a12]">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-[8px] font-mono">CP</span>
            </div>
            <span className="font-mono text-gray-500 text-xs">CodePost</span>
          </div>
          <div className="flex gap-6 text-xs font-mono text-gray-600">
            <a href="#" className="hover:text-gray-300 transition-colors">docs</a>
            <a href="#" className="hover:text-gray-300 transition-colors">github</a>
            <a href="#" className="hover:text-gray-300 transition-colors">twitter</a>
            <a href="#" className="hover:text-gray-300 transition-colors">status</a>
          </div>
          <div className="flex items-center gap-2">
            <StatusBadge status="passed" label="all systems operational" />
          </div>
        </div>
      </footer>
    </div>
  )
}
