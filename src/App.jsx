import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <header className="fixed top-0 inset-x-0 z-40">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 md:px-12 lg:px-16 py-4">
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md px-4 py-3">
            <a href="#" className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-fuchsia-500 via-cyan-500 to-emerald-500 p-[2px]">
                <div className="h-full w-full rounded-[10px] bg-slate-950" />
              </div>
              <span className="font-semibold text-white">NeonDock</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200/90">
              <a href="#features" className="hover:text-white">Features</a>
              <a href="#request-demo" className="hover:text-white">Request demo</a>
            </nav>
            <a href="#request-demo" className="hidden sm:inline-flex items-center justify-center rounded-xl bg-white/10 px-4 py-2 text-white font-medium border border-white/10 hover:bg-white/15">
              Get started
            </a>
          </div>
        </div>
      </header>

      <main className="">
        <Hero />
        <Features />
        <CTA />
      </main>

      <footer className="bg-slate-950 border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-12 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} NeonDock. All rights reserved.</p>
          <div className="text-slate-400 text-sm">Built for biotech and pharma innovators.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
