import { useState } from 'react'

const FeatureCard = ({ icon, title, description }) => (
  <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all duration-300">
    <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-2xl mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
)

export default function LandingPage7() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Top Banner */}
      <div className="bg-indigo-600 text-indigo-50 text-sm font-medium py-2.5 text-center px-4">
        Introducing CodePost 2.0. The smartest marketing tool for developers.{' '}
        <a href="#" className="underline hover:text-white transition-colors">Read the announcement &rarr;</a>
      </div>

      {/* Navigation */}
      <nav className="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg leading-none shrink-0" style={{ marginTop: '-2px' }}>C</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">CodePost</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#product" className="hover:text-indigo-600 transition-colors">Product</a>
            <a href="#solutions" className="hover:text-indigo-600 transition-colors">Solutions</a>
            <a href="#customers" className="hover:text-indigo-600 transition-colors">Customers</a>
            <a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Log in
            </button>
            <button className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-sm">
              Start for free
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50/50 via-white to-white pt-24 pb-32">
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
          <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-200/40 to-blue-200/40 blur-3xl opacity-50" />
        </div>
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3">
          <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-violet-200/40 to-indigo-200/40 blur-3xl opacity-50" />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-600 mb-8 shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            New AI model is now available
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8">
            Ship code.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500">
              Grow your audience.
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            CodePost automatically turns your Git commits into highly engaging blog posts, tweets, and changelogs. Marketing, solved by code.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold px-8 py-4 rounded-full transition-all shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2">
              Get started for free
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
            <button className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-lg font-semibold px-8 py-4 rounded-full transition-all shadow-sm">
              Book a demo
            </button>
          </div>
          <p className="mt-6 text-sm text-slate-500">No credit card required. Free forever plan available.</p>
        </div>

        {/* Dashboard Preview Interface */}
        <div className="max-w-6xl mx-auto px-6 mt-20 relative z-10">
          <div className="rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden">
            {/* Fake Browser header */}
            <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
              </div>
              <div className="mx-auto bg-white border border-slate-200 rounded-md px-3 py-1 flex items-center gap-2 w-full max-w-sm text-xs text-slate-500 shadow-sm">
                <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                app.codepost.dev/dashboard
              </div>
            </div>
            {/* Complex internal UI resembling modern SaaS dashboard */}
            <div className="grid grid-cols-12 h-[500px]">
              {/* Sidebar */}
              <div className="col-span-3 border-r border-slate-100 p-4 space-y-2 hidden md:block">
                <div className="h-8 rounded-md bg-indigo-50 flex items-center px-3 gap-2">
                  <div className="w-4 h-4 rounded bg-indigo-500"></div>
                  <div className="w-24 h-2 rounded bg-indigo-200"></div>
                </div>
                <div className="h-8 rounded-md hover:bg-slate-50 flex items-center px-3 gap-2 transition-colors">
                  <div className="w-4 h-4 rounded bg-slate-200"></div>
                  <div className="w-20 h-2 rounded bg-slate-200"></div>
                </div>
                <div className="h-8 rounded-md hover:bg-slate-50 flex items-center px-3 gap-2 transition-colors">
                  <div className="w-4 h-4 rounded bg-slate-200"></div>
                  <div className="w-32 h-2 rounded bg-slate-200"></div>
                </div>
                
                <div className="mt-8 mb-2 px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Recent Drafts</div>
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-12 rounded-lg border border-slate-100 p-2 flex flex-col justify-center gap-1.5 hover:border-indigo-100 hover:bg-indigo-50/50 cursor-pointer transition-colors m-1">
                    <div className="w-3/4 h-2 rounded bg-slate-200"></div>
                    <div className="w-1/2 h-1.5 rounded bg-slate-100"></div>
                  </div>
                ))}
              </div>
              
              {/* Main Content Area */}
              <div className="col-span-12 md:col-span-9 p-8 bg-slate-50/50 flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-lg font-semibold text-slate-800">Draft: Authentication Rewrite</h2>
                    <p className="text-sm text-slate-500">Generated from 4 commits • 2 mins ago</p>
                  </div>
                  <button className="bg-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-sm">
                    Publish Draft
                  </button>
                </div>
                
                {/* Editor Area */}
                <div className="flex-1 bg-white border border-slate-200 rounded-xl shadow-sm p-6 overflow-hidden relative">
                  <div className="absolute top-4 right-4 flex gap-2">
                    <span className="px-2 py-1 bg-emerald-50 text-emerald-600 rounded text-xs font-medium border border-emerald-100">Ready</span>
                    <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium border border-slate-200">Dev.to</span>
                  </div>
                  <div className="space-y-4 max-w-2xl mt-8">
                    <div className="h-6 rounded bg-slate-100 w-3/4"></div>
                    <div className="h-4 rounded bg-slate-50 w-full mt-6"></div>
                    <div className="h-4 rounded bg-slate-50 w-full"></div>
                    <div className="h-4 rounded bg-slate-50 w-5/6"></div>
                    
                    <div className="h-32 rounded-lg bg-slate-50 border border-slate-100 mt-6 w-full flex items-center justify-center">
                      <div className="w-10 h-10 border-4 border-slate-200 border-t-indigo-500 rounded-full animate-spin opacity-50"></div>
                    </div>
                    
                    <div className="h-4 rounded bg-slate-50 w-full mt-6"></div>
                    <div className="h-4 rounded bg-slate-50 w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-white py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-8">
            Trusted by developers at forward-thinking companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale">
            <div className="text-2xl font-bold font-serif text-slate-700">Acme Corp</div>
            <div className="text-2xl font-black tracking-tight text-slate-700">GLOBEX</div>
            <div className="text-2xl font-bold italic text-slate-700">Initech</div>
            <div className="text-2xl font-medium tracking-widest text-slate-700">SOYUZ</div>
            <div className="text-2xl font-extrabold text-slate-700">Hooli</div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Everything you need to grow</h2>
            <p className="text-lg text-slate-600">
              Stop writing marketing updates manually. CodePost brings the precision of code to your content strategy, automatically formatting updates for every platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon="⚡️"
              title="Real-time Sync"
              description="Connects directly to your GitHub or GitLab repositories. Pushes trigger generations instantly via webhooks."
            />
            <FeatureCard 
              icon="🎯"
              title="Context Aware"
              description="Our LLM analyzes commit messages, changed lines, and pull request descriptions to understand the true value of your work."
            />
            <FeatureCard 
              icon="🌍"
              title="Multi-channel Delivery"
              description="Write once in your code, distribute everywhere. Automatically reformats drafts for Twitter, LinkedIn, Dev.to, and Medium."
            />
            <FeatureCard 
              icon="🎨"
              title="Custom Templates"
              description="Make it sound like you. Train the AI on your brand voice and specify exact structures for different types of updates."
            />
            <FeatureCard 
              icon="📊"
              title="Engagement Analytics"
              description="Track how your technical updates perform across platforms right from the dashboard."
            />
            <FeatureCard 
              icon="🔒"
              title="Enterprise Security"
              description="Your code stays yours. We don't store your source files, and our models are never trained on your private repositories."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-600/5 skew-y-3 origin-bottom-left -z-10 transform scale-150"></div>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Ready to launch faster?</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Join thousands of developers turning their shipping momentum into marketing leverage.
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold px-10 py-5 rounded-full transition-all shadow-xl shadow-indigo-500/30">
            Create your free account
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg leading-none shrink-0" style={{ marginTop: '-2px' }}>C</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-white">CodePost</span>
            </div>
            <p className="text-sm text-slate-400 max-w-xs mb-6">
              Automated changelogs and marketing content directly from your codebase. Built for modern shipping speeds.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 cursor-pointer flex items-center justify-center transition-colors">𝕏</div>
              <div className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 cursor-pointer flex items-center justify-center transition-colors">in</div>
              <div className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 cursor-pointer flex items-center justify-center transition-colors">gh</div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Customers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <div>&copy; {new Date().getFullYear()} CodePost, Inc. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
