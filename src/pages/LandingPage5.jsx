import { useState } from 'react'

// Landing Page 5: "The README"
// Styled like a GitHub README.md file - markdown headings, badge shields, code fences, tables
// Design: Dark GitHub-style bg, markdown rendering aesthetic, repo-file feel, monospace + sans mix

const Badge = ({ label, value, color = 'green' }) => {
  const colors = {
    green: { left: 'bg-gray-700', right: 'bg-green-700' },
    blue: { left: 'bg-gray-700', right: 'bg-blue-700' },
    orange: { left: 'bg-gray-700', right: 'bg-orange-700' },
    purple: { left: 'bg-gray-700', right: 'bg-purple-700' },
    cyan: { left: 'bg-gray-700', right: 'bg-cyan-700' },
  }
  const c = colors[color] || colors.green

  return (
    <span className="inline-flex rounded overflow-hidden text-[10px] font-mono leading-none">
      <span className={`${c.left} text-gray-200 px-2 py-1`}>{label}</span>
      <span className={`${c.right} text-white px-2 py-1`}>{value}</span>
    </span>
  )
}

const CodeFence = ({ lang, children }) => (
  <div className="rounded-lg border border-gray-700 overflow-hidden my-4">
    <div className="bg-gray-800 px-4 py-1.5 border-b border-gray-700 flex items-center justify-between">
      <span className="text-xs text-gray-400 font-mono">{lang}</span>
      <button className="text-xs text-gray-500 hover:text-gray-300 font-mono transition-colors">copy</button>
    </div>
    <pre className="bg-gray-900 p-4 overflow-x-auto text-sm font-mono text-gray-300 leading-relaxed">
      {children}
    </pre>
  </div>
)

const MarkdownH2 = ({ children }) => (
  <h2 className="text-2xl font-bold text-white pb-2 border-b border-gray-800 mb-6 mt-12">
    {children}
  </h2>
)

const MarkdownH3 = ({ children }) => (
  <h3 className="text-lg font-bold text-white mb-3 mt-6">
    {children}
  </h3>
)

const TableRow = ({ cells, isHeader = false }) => (
  <tr className={isHeader ? 'bg-gray-800/50' : 'border-t border-gray-800 hover:bg-gray-800/20'}>
    {cells.map((cell, i) => (
      isHeader ? (
        <th key={i} className="px-4 py-2 text-left text-xs font-bold text-gray-300 font-mono">{cell}</th>
      ) : (
        <td key={i} className="px-4 py-2 text-xs text-gray-400 font-mono">{cell}</td>
      )
    ))}
  </tr>
)

export default function LandingPage5() {
  const [showInstall, setShowInstall] = useState('npm')

  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-300">
      {/* Repo-style nav */}
      <nav className="border-b border-gray-800 bg-[#161b22] sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-gray-300" viewBox="0 0 16 16" fill="currentColor">
              <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
            </svg>
            <span className="font-mono text-gray-300 text-sm">
              <span className="text-blue-400 hover:underline cursor-pointer">codepost</span>
              <span className="text-gray-500"> / </span>
              <span className="font-bold text-white">codepost</span>
            </span>
            <span className="px-2 py-0.5 rounded-full border border-gray-700 text-xs text-gray-400 font-mono">Public</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1 text-xs font-mono text-gray-400 hover:text-white px-3 py-1.5 rounded border border-gray-700 bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
              <span>Star</span>
            </button>
            <button className="bg-green-700 hover:bg-green-600 text-white text-xs font-mono font-bold px-4 py-1.5 rounded transition-colors">
              Get started
            </button>
          </div>
        </div>
      </nav>

      {/* README.md file header */}
      <div className="max-w-4xl mx-auto px-6 mt-6">
        <div className="border border-gray-800 rounded-lg overflow-hidden">
          <div className="bg-gray-800/30 px-4 py-2 border-b border-gray-800 flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-500" viewBox="0 0 16 16" fill="currentColor">
              <path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z" />
            </svg>
            <span className="text-sm text-gray-300 font-mono">README.md</span>
          </div>

          {/* README content */}
          <div className="px-8 py-6 bg-[#0d1117]">
            {/* Title + badges */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              CodePost
            </h1>

            <p className="text-gray-400 text-base mb-6 leading-relaxed">
              <strong className="text-white">Autopilot for developer marketing.</strong> Push code, get blog posts, tweets, and social updates — automatically.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              <Badge label="version" value="1.0.0" color="green" />
              <Badge label="license" value="MIT" color="blue" />
              <Badge label="platforms" value="6" color="purple" />
              <Badge label="build" value="passing" color="green" />
              <Badge label="users" value="2,000+" color="orange" />
              <Badge label="posts generated" value="50K+" color="cyan" />
            </div>

            <hr className="border-gray-800 my-6" />

            {/* The problem */}
            <MarkdownH2>The Problem</MarkdownH2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Developers push updates constantly but hate writing about them. Most dev tools
              go unnoticed because engineers don't have time or desire to market their work.
            </p>
            <blockquote className="border-l-4 border-gray-700 pl-4 my-4 text-gray-500 italic">
              "I ship features every week but haven't written a blog post in 6 months."
              <br />— Every developer, ever.
            </blockquote>

            {/* Quick start */}
            <MarkdownH2>Quick Start</MarkdownH2>

            <div className="flex gap-2 mb-2">
              {['npm', 'yarn', 'pnpm'].map((pkg) => (
                <button
                  key={pkg}
                  onClick={() => setShowInstall(pkg)}
                  className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
                    showInstall === pkg
                      ? 'bg-blue-900/30 text-blue-400 border border-blue-700/50'
                      : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  {pkg}
                </button>
              ))}
            </div>

            <CodeFence lang={showInstall === 'npm' ? 'bash' : showInstall}>
              {showInstall === 'npm' && '$ npm install -g codepost\n$ codepost init\n$ codepost generate'}
              {showInstall === 'yarn' && '$ yarn global add codepost\n$ codepost init\n$ codepost generate'}
              {showInstall === 'pnpm' && '$ pnpm add -g codepost\n$ codepost init\n$ codepost generate'}
            </CodeFence>

            <p className="text-gray-400 text-sm mb-2">Or use GitHub Actions:</p>

            <CodeFence lang="yaml">
{`# .github/workflows/codepost.yml
name: Generate Content
on:
  push:
    branches: [main]

jobs:
  content:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: codepost/action@v1
        with:
          api-key: \${{ secrets.CODEPOST_API_KEY }}
          formats: blog,tweet,linkedin`}
            </CodeFence>

            {/* How it works */}
            <MarkdownH2>How It Works</MarkdownH2>

            <div className="overflow-x-auto my-4">
              <table className="w-full border border-gray-800 rounded">
                <thead>
                  <TableRow
                    isHeader
                    cells={['Step', 'What happens', 'You do']}
                  />
                </thead>
                <tbody>
                  <TableRow cells={['1. Push', 'CodePost detects the push via webhook', 'git push origin main']} />
                  <TableRow cells={['2. Analyze', 'AI reads diff, commits, changelog, README', 'Nothing (automatic)']} />
                  <TableRow cells={['3. Generate', 'Blog post + tweet thread + LinkedIn drafted', 'Nothing (automatic)']} />
                  <TableRow cells={['4. Review', 'Drafts appear in your dashboard', 'Review & edit (optional)']} />
                  <TableRow cells={['5. Publish', 'One click → 6 platforms', 'Click "Publish"']} />
                </tbody>
              </table>
            </div>

            {/* Features */}
            <MarkdownH2>Features</MarkdownH2>

            <ul className="space-y-2 text-gray-400 text-sm mb-6">
              {[
                '**Git-native** — Works with your existing workflow, zero config after init',
                '**Multi-format** — Blog posts, tweet threads, LinkedIn, Reddit, changelogs',
                '**Context-aware AI** — Reads diffs, commits, README for technical accuracy',
                '**Multiple triggers** — CLI, GitHub Actions, VS Code extension',
                '**Dashboard editor** — Review and edit every draft before publishing',
                '**6 platforms** — Dev.to, Medium, Twitter/X, LinkedIn, Reddit, Hashnode',
                '**Voice settings** — Customize tone, style, and target audience',
                '**Team support** — Collaborate on drafts, shared publishing accounts',
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-green-500 shrink-0">-</span>
                  <span dangerouslySetInnerHTML={{
                    __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
                  }} />
                </li>
              ))}
            </ul>

            {/* Supported platforms */}
            <MarkdownH2>Supported Platforms</MarkdownH2>

            <div className="overflow-x-auto my-4">
              <table className="w-full border border-gray-800 rounded">
                <thead>
                  <TableRow isHeader cells={['Platform', 'Type', 'Status', 'Min Plan']} />
                </thead>
                <tbody>
                  <TableRow cells={['Dev.to', 'Blog', '✅ Active', 'Free']} />
                  <TableRow cells={['Medium', 'Blog', '✅ Active', 'Free']} />
                  <TableRow cells={['Twitter/X', 'Social', '✅ Active', 'Pro']} />
                  <TableRow cells={['LinkedIn', 'Social', '✅ Active', 'Pro']} />
                  <TableRow cells={['Reddit', 'Forum', '✅ Active', 'Pro']} />
                  <TableRow cells={['Hashnode', 'Blog', '✅ Active', 'Pro']} />
                </tbody>
              </table>
            </div>

            {/* Pricing */}
            <MarkdownH2>Pricing</MarkdownH2>

            <div className="grid md:grid-cols-3 gap-4 my-6">
              <div className="border border-gray-800 rounded-lg p-5 bg-gray-900/30">
                <MarkdownH3>Free</MarkdownH3>
                <div className="text-2xl font-bold text-white font-mono mb-3">$0<span className="text-sm text-gray-600">/mo</span></div>
                <CodeFence lang="text">
{`• 5 generations/month
• CLI access
• Dev.to + Medium`}
                </CodeFence>
                <button className="w-full border border-gray-700 hover:border-gray-500 text-gray-400 text-xs font-mono py-2 rounded transition-colors mt-2">
                  $ codepost install
                </button>
              </div>

              <div className="border-2 border-green-700/50 rounded-lg p-5 bg-green-950/10 relative">
                <div className="absolute -top-2.5 left-4">
                  <Badge label="" value="recommended" color="green" />
                </div>
                <MarkdownH3>Pro — $19/mo</MarkdownH3>
                <div className="text-2xl font-bold text-white font-mono mb-3">$19<span className="text-sm text-gray-600">/mo</span></div>
                <CodeFence lang="text">
{`• Unlimited generations
• All 6 platforms
• GitHub Actions
• Dashboard editor
• Custom voice`}
                </CodeFence>
                <button className="w-full bg-green-700 hover:bg-green-600 text-white text-xs font-mono font-bold py-2 rounded transition-colors mt-2">
                  $ codepost subscribe --pro
                </button>
              </div>

              <div className="border border-gray-800 rounded-lg p-5 bg-gray-900/30">
                <MarkdownH3>Team — $49/mo</MarkdownH3>
                <div className="text-2xl font-bold text-white font-mono mb-3">$49<span className="text-sm text-gray-600">/mo</span></div>
                <CodeFence lang="text">
{`• Everything in Pro
• 5 team members
• Analytics
• Priority support`}
                </CodeFence>
                <button className="w-full border border-gray-700 hover:border-gray-500 text-gray-400 text-xs font-mono py-2 rounded transition-colors mt-2">
                  $ codepost subscribe --team
                </button>
              </div>
            </div>

            {/* Example output */}
            <MarkdownH2>Example Output</MarkdownH2>
            <p className="text-gray-400 text-sm mb-4">
              Given this commit:
            </p>

            <CodeFence lang="bash">
{`commit a1b2c3d
Author: you <you@company.com>
Date:   Mon Mar 2 2026

    feat: add real-time collaboration with live cursors

    - Implement operational transform engine
    - Add cursor tracking across sessions
    - WebSocket sync with < 50ms latency

 12 files changed, 847 insertions(+), 23 deletions(-)`}
            </CodeFence>

            <p className="text-gray-400 text-sm mb-4">
              CodePost generates:
            </p>

            <CodeFence lang="markdown">
{`# Introducing Real-Time Collaboration

Today we're shipping real-time collaboration to all Pro users.
This has been our most requested feature, and we're thrilled
to finally deliver it.

## What Changed

Your team can now see each other's cursors, edits happen in
real-time, and conflicts are resolved automatically using
operational transform...

[continues for ~1,200 words]`}
            </CodeFence>

            {/* CTA */}
            <MarkdownH2>Get Started</MarkdownH2>
            <p className="text-gray-400 text-sm mb-4">
              Install CodePost in 30 seconds:
            </p>

            <CodeFence lang="bash">
{`$ npm install -g codepost
$ codepost init
# That's it. Push code and watch the magic happen.`}
            </CodeFence>

            <div className="flex flex-col sm:flex-row gap-3 mt-8 mb-4">
              <button className="bg-green-700 hover:bg-green-600 text-white font-mono font-bold text-sm px-6 py-3 rounded transition-colors">
                Start free
              </button>
              <button className="border border-gray-700 hover:border-gray-500 text-gray-400 font-mono text-sm px-6 py-3 rounded transition-colors">
                Read the docs
              </button>
            </div>

            <hr className="border-gray-800 my-6" />

            {/* License */}
            <MarkdownH2>License</MarkdownH2>
            <p className="text-gray-500 text-xs font-mono">
              MIT &copy; 2026 CodePost. See <a href="#" className="text-blue-400 hover:underline">LICENSE</a> for details.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 mt-6">
        <span className="text-gray-600 text-xs font-mono">codepost/codepost</span>
        <div className="flex gap-4 text-xs font-mono text-gray-600">
          <a href="#" className="hover:text-blue-400 transition-colors">Docs</a>
          <a href="#" className="hover:text-blue-400 transition-colors">GitHub</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Twitter</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
        </div>
        <span className="text-gray-700 text-xs">&copy; 2026</span>
      </footer>
    </div>
  )
}
