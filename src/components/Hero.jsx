import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/D17NpA0ni2BTjUzp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Neon gradient veil to match theme (doesn't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 md:px-12 lg:px-16 py-24 flex items-center min-h-[90vh]">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-fuchsia-400 animate-pulse" />
            <span className="text-xs text-white/80">Futuristic molecular modeling platform</span>
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Accelerate drug discovery with interactive 3D intelligence
          </h1>

          <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-200/90 leading-relaxed">
            Explore protein–ligand interactions, run AI-augmented docking, and design molecules in a neon-lit, real‑time 3D workspace. Built for medicinal chemistry, structural biology, and biotech teams.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#request-demo" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-emerald-500 px-6 py-3 text-white font-semibold shadow-[0_0_25px_rgba(168,85,247,0.45)] hover:shadow-[0_0_35px_rgba(16,185,129,0.55)] transition-shadow">
              Request a demo
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-white font-semibold border border-white/10 backdrop-blur hover:bg-white/15 transition-colors">
              See capabilities
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-slate-300/80">
            <div className="flex -space-x-3">
              <img src="https://i.pravatar.cc/40?img=1" alt="avatar" className="h-8 w-8 rounded-full ring-2 ring-slate-900" />
              <img src="https://i.pravatar.cc/40?img=2" alt="avatar" className="h-8 w-8 rounded-full ring-2 ring-slate-900" />
              <img src="https://i.pravatar.cc/40?img=3" alt="avatar" className="h-8 w-8 rounded-full ring-2 ring-slate-900" />
            </div>
            <p className="text-sm">Trusted by research teams across biotech and academia</p>
          </div>
        </div>
      </div>
    </section>
  )
}
