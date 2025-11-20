import React from 'react'
import { Atom, Beaker, Cube, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Atom,
    title: 'AI‑augmented docking',
    desc: 'Predict binding poses with hybrid physics + transformer models, then refine with MD.'
  },
  {
    icon: Cube,
    title: 'Real‑time 3D editing',
    desc: 'Manipulate fragments, tautomers, and conformers directly in a responsive 3D canvas.'
  },
  {
    icon: Beaker,
    title: 'Property profiling',
    desc: 'ADMET predictions, synthetic accessibility, and alerts for PAINS/reactive motifs.'
  },
  {
    icon: Sparkles,
    title: 'Neon clarity',
    desc: 'A futuristic, high‑contrast UI tuned for long design sessions and presentations.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(168,85,247,0.15),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.12),transparent_40%),radial-gradient(circle_at_50%_100%,rgba(16,185,129,0.12),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Designed for discovery</h2>
          <p className="mt-3 text-slate-300/90">Intuitive tools that turn structure into insight.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md hover:bg-white/10 transition-colors">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-fuchsia-500 via-cyan-500 to-emerald-500 p-[2px]">
                <div className="h-full w-full rounded-[10px] bg-slate-950 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-white" />
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300/90">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
