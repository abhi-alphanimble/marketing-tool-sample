import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import LandingPage1 from './pages/LandingPage1'
import LandingPage2 from './pages/LandingPage2'
import LandingPage3 from './pages/LandingPage3'
import LandingPage4 from './pages/LandingPage4'
import LandingPage5 from './pages/LandingPage5'
import LandingPage6 from './pages/LandingPage6'

function PageSelector() {
  const pages = [
    {
      id: 1,
      path: '/page-1',
      title: 'The Terminal',
      description: 'Dark theme, green-on-black, terminal window hero with typing animation, git-command CTAs, monospace typography.',
      accent: 'bg-green-500',
    },
    {
      id: 2,
      path: '/page-2',
      title: 'The Hacker News',
      description: 'Retro amber-on-black, ASCII art hero, live scrolling log feed, manual/spec sections, tree-style pricing, scanline texture.',
      accent: 'bg-amber-500',
    },
    {
      id: 3,
      path: '/page-3',
      title: 'The Blueprint',
      description: 'Dark navy with dotted grid, split-screen IDE panel hero with diff viewer + output tabs, cyan/blue accent, code-diff visuals.',
      accent: 'bg-cyan-500',
    },
    {
      id: 4,
      path: '/page-4',
      title: 'The Matrix',
      description: 'Animated code rain canvas background, neon green glow effects, glass morphism cards, auto-cycling feature display, futuristic.',
      accent: 'bg-green-400',
    },
    {
      id: 5,
      path: '/page-5',
      title: 'The README',
      description: 'Styled like a GitHub README.md file — repo nav, badge shields, code fences, markdown tables, yaml config blocks, file-header UI.',
      accent: 'bg-gray-400',
    },
    {
      id: 6,
      path: '/page-6',
      title: 'The Pipeline',
      description: 'CI/CD inspired with animated pipeline stages, expandable job logs, status badges everywhere, purple/violet accent, build-status aesthetic.',
      accent: 'bg-purple-500',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight font-mono">
            CodePost Landing Pages
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            6 developer-focused landing page designs. Same product, same dark/terminal DNA — each with a unique visual direction.
          </p>
        </div>

        <div className="space-y-4">
          {pages.map((page) => (
            <Link
              key={page.id}
              to={page.path}
              className="block group"
            >
              <div className="flex items-start gap-5 p-6 rounded-xl border border-gray-800 bg-gray-900/50 hover:bg-gray-900 hover:border-gray-700 transition-all duration-200">
                <div className="flex items-center gap-4 shrink-0">
                  <div className={`w-3 h-3 rounded-full ${page.accent}`} />
                  <span className="text-2xl font-bold text-gray-600 group-hover:text-gray-400 transition-colors font-mono">
                    {String(page.id).padStart(2, '0')}
                  </span>
                </div>
                <div className="min-w-0">
                  <h2 className="text-xl font-bold text-white group-hover:text-gray-100 mb-1 font-mono">
                    {page.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {page.description}
                  </p>
                </div>
                <div className="ml-auto shrink-0 text-gray-600 group-hover:text-gray-400 transition-colors text-xl">
                  &rarr;
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageSelector />} />
        <Route path="/page-1" element={<LandingPage1 />} />
        <Route path="/page-2" element={<LandingPage2 />} />
        <Route path="/page-3" element={<LandingPage3 />} />
        <Route path="/page-4" element={<LandingPage4 />} />
        <Route path="/page-5" element={<LandingPage5 />} />
        <Route path="/page-6" element={<LandingPage6 />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
