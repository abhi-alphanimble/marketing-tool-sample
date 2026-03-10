import React, { useState } from 'react';

const CheckIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function LandingPage8() {
  const [isAnnual, setIsAnnual] = useState(true);

  const tiers = [
    {
      name: 'Starter',
      description: 'Perfect for individuals and side projects.',
      monthlyPrice: 15,
      annualPrice: 12,
      features: [
        'Up to 3 projects',
        'Basic analytics',
        '24-hour support response time',
        'Community access',
      ],
      cta: 'Start for free',
      highlighted: false,
    },
    {
      name: 'Pro',
      description: 'Ideal for growing teams and serious creators.',
      monthlyPrice: 49,
      annualPrice: 39,
      features: [
        'Unlimited projects',
        'Advanced analytics dashboard',
        '1-hour support response time',
        'Custom domains',
        'Team collaboration (up to 5)',
      ],
      cta: 'Get Started',
      highlighted: true,
      badge: 'Most Popular',
    },
    {
      name: 'Enterprise',
      description: 'Dedicated support and infrastructure for your company.',
      monthlyPrice: 199,
      annualPrice: 159,
      features: [
        'Everything in Pro',
        'Unlimited team members',
        'Dedicated success manager',
        '99.9% Uptime SLA',
        'Custom integrations',
        'SAML SSO',
      ],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ];

  const faqs = [
    {
      question: "Can I switch plans later?",
      answer: "Absolutely. You can upgrade or downgrade your plan at any time. Prorated charges will be applied automatically."
    },
    {
      question: "What forms of payment do you accept?",
      answer: "We accept all major credit cards, PayPal, and for Enterprise plans, we can arrange invoice payments."
    },
    {
      question: "Is there a discount for non-profits?",
      answer: "Yes, we offer a 50% discount for qualified non-profit organizations. Please contact our support team with your details."
    },
    {
      question: "Do I need a credit card to sign up?",
      answer: "For the Starter plan's trial period, no credit card is required. You will only need one if you decide to upgrade or continue past the trial."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-rose-500/30 font-sans">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-rose-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg leading-none">C</span>
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:block">CodePost</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#" className="hover:text-white transition-colors">Features</a>
            <a href="#" className="hover:text-white transition-colors">Testimonials</a>
            <a href="#" className="text-white">Pricing</a>
            <a href="#" className="hover:text-white transition-colors">Blog</a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer hidden sm:block">Log in</span>
            <button className="text-sm font-semibold bg-white text-slate-900 px-4 py-2 rounded-full hover:bg-slate-200 transition-colors">
              Sign up
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20">
        {/* Header Section */}
        <section className="max-w-4xl mx-auto text-center px-6 pt-16 pb-12 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-rose-500/20 blur-[120px] rounded-full pointer-events-none" />
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 relative z-10">
            Simple, transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-rose-600">pricing</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 relative z-10">
            No hidden fees. No surprise charges. Choose the plan that best fits your needs and start building today.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-3 relative z-10">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-slate-400'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-7 rounded-full bg-slate-800 border border-slate-700 p-1 relative transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500/50"
              aria-label="Toggle annual billing"
            >
              <div
                className={`w-5 h-5 rounded-full bg-rose-500 transition-transform duration-300 shadow-sm ${
                  isAnnual ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm font-medium flex items-center gap-2 ${isAnnual ? 'text-white' : 'text-slate-400'}`}>
              Annually <span className="text-[10px] uppercase tracking-wider font-bold bg-rose-500/10 text-rose-400 px-2 py-0.5 rounded-full">Save 20%</span>
            </span>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="max-w-7xl mx-auto px-6 py-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-3xl p-8 ${
                  tier.highlighted
                    ? 'bg-slate-900 border-2 border-rose-500 shadow-2xl shadow-rose-500/10 md:-mt-4 md:mb-[-1rem]'
                    : 'bg-slate-900/50 border border-white/10 hover:border-white/20 transition-colors'
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-rose-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-lg">
                      {tier.badge}
                    </span>
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-sm text-slate-400 h-10">{tier.description}</p>
                </div>
                
                <div className="mb-8 flex items-end gap-1">
                  <span className="text-5xl font-extrabold tracking-tight">
                    ${isAnnual ? tier.annualPrice : tier.monthlyPrice}
                  </span>
                  <span className="text-slate-400 font-medium mb-1">/mo</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-300">
                      <CheckIcon className={`w-5 h-5 shrink-0 ${tier.highlighted ? 'text-rose-400' : 'text-slate-500'}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`w-full py-3 px-4 rounded-xl font-semibold text-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                    tier.highlighted
                      ? 'bg-rose-500 hover:bg-rose-600 text-white focus:ring-rose-500 shadow-lg shadow-rose-500/25'
                      : 'bg-white hover:bg-slate-200 text-slate-900 focus:ring-white'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-20 border-t border-white/5 mt-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-sm font-medium text-slate-500 mb-8 uppercase tracking-widest">
              Trusted by innovative teams worldwide
            </p>
            <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Dummy logos */}
              {['Acme Corp', 'GlobalNet', 'TechFlow', 'Vanguard', 'Nexus'].map((logo) => (
                <div key={logo} className="text-xl font-black tracking-tighter flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-current opacity-20" />
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-3xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently asked questions</h2>
            <p className="text-slate-400">Everything you need to know about the product and billing.</p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-900/50 border border-white/5 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Bottom CTA */}
        <section className="max-w-4xl mx-auto px-6 py-12 text-center">
           <div className="bg-gradient-to-br from-rose-500/20 to-indigo-500/20 border border-rose-500/20 rounded-3xl p-12 relative overflow-hidden">
             <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm" />
             <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to scale your business?</h2>
              <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                Join thousands of developers and teams who trust CodePost to power their web presence.
              </p>
              <button className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-slate-200 transition-colors shadow-xl shadow-white/10">
                Start your free trial today
              </button>
             </div>
           </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 blur-[1px] hover:blur-none transition-all cursor-crosshair">
            <div className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center">
              <span className="text-slate-400 font-bold text-xs leading-none">C</span>
            </div>
            <span className="font-semibold text-sm text-slate-400">CodePost</span>
          </div>
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} CodePost Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">GitHub</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Discord</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
