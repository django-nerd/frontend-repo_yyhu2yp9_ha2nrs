import React from 'react'

export default function CTA() {
  return (
    <section id="request-demo" className="relative bg-slate-950 py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(80%_60%_at_50%_100%,rgba(56,189,248,0.12),transparent)]" />
      <div className="relative max-w-3xl mx-auto text-center px-6">
        <h3 className="text-3xl sm:text-4xl font-bold text-white">See it on your targets</h3>
        <p className="mt-3 text-slate-300/90">Share a PDB ID or SDF and we’ll walk you through docking, scoring, and design workflows customized for your program.</p>

        <form className="mt-8 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3">
          <input
            type="text"
            placeholder="Your email or lab address"
            className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
          />
          <button type="button" className="rounded-xl bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-emerald-500 px-6 py-3 text-white font-semibold shadow-[0_0_25px_rgba(168,85,247,0.45)] hover:shadow-[0_0_35px_rgba(16,185,129,0.55)] transition-shadow">
            Request demo
          </button>
        </form>

        <p className="mt-4 text-xs text-slate-400">We respect IP. No data is stored without your consent.</p>
      </div>
    </section>
  )
}
