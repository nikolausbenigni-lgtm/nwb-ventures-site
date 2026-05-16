"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Building2, Mail, Menu, Phone, Sparkles, Target, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  { icon: Target, title: "Venture Advisory", text: "Helping founders and business owners refine strategy, positioning, and operations to build scalable ventures." },
  { icon: BarChart3, title: "Strategic Partnerships", text: "Connecting businesses with the right operators, partners, and opportunities to move faster and smarter." },
  { icon: Building2, title: "Growth Infrastructure", text: "Building systems, workflows, and AI-enabled solutions that streamline operations and support growth." },
  { icon: Zap, title: "Capital & Expansion", text: "Preparing companies for fundraising, market entry, stronger positioning, and long-term expansion." }
];

const principles = [
  { title: "Founder-First Approach", text: "We help clarify the next move with practical thinking, direct communication, and a focus on execution." },
  { title: "Modern Growth Systems", text: "We design workflows, automation, and AI-enabled processes that make the business easier to operate." },
  { title: "Results That Matter", text: "We focus on sustainable progress, stronger decision-making, and measurable business momentum." }
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ["Home", "About", "Services", "Approach", "Contact"];

  return (
    <main className="min-h-screen bg-[#05080d] text-white selection:bg-sky-400 selection:text-black">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 right-10 h-[30rem] w-[30rem] rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute top-[34rem] -left-40 h-[26rem] w-[26rem] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[34rem] w-[34rem] rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,.18),transparent_32%),linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:auto,72px_72px,72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
      </div>

      <header className="relative z-20 border-b border-white/10 bg-[#05080d]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <a href="#home" className="group flex items-center gap-3" aria-label="NWB Ventures home">
            <div className="relative h-12 w-12 shrink-0">
              <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-gradient-to-br from-cyan-300 via-sky-400 to-blue-600 shadow-lg shadow-sky-500/30" />
              <div className="absolute bottom-1 left-4 h-11 w-4 rotate-[30deg] rounded-full bg-gradient-to-b from-cyan-300 via-sky-400 to-blue-600 shadow-lg shadow-sky-500/30" />
            </div>
            <div className="leading-none text-white">
              <div className="text-[1.65rem] font-light tracking-[-0.08em]">nwb</div>
              <div className="text-[1.65rem] font-light tracking-[-0.08em]">ventures</div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-white/70 transition hover:text-sky-300">{item}</a>)}
          </nav>

          <a href="mailto:info@nwbventures.com" className="hidden md:block">
            <Button className="rounded-xl border border-sky-400/70 bg-sky-500 px-6 py-3 text-white shadow-lg shadow-sky-500/20 hover:bg-sky-400">
              Book a Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      {menuOpen && (
        <div className="relative z-30 mx-4 mt-4 rounded-3xl border border-white/10 bg-black/80 p-5 backdrop-blur md:hidden">
          <div className="grid gap-4">
            {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="text-white/80" onClick={() => setMenuOpen(false)}>{item}</a>)}
            <a href="mailto:info@nwbventures.com"><Button className="w-full rounded-xl bg-sky-500 py-3 text-white hover:bg-sky-400">Book a Strategy Call</Button></a>
          </div>
        </div>
      )}

      <section id="home" className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-20 lg:grid-cols-[.95fr_1.05fr] lg:px-8 lg:pb-28 lg:pt-24">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/5 px-4 py-2 text-sm text-white/70 backdrop-blur"><Sparkles className="h-4 w-4 text-sky-300" /> Strategy, growth, and execution for modern ventures</div>
          <h1 className="max-w-4xl text-6xl font-semibold leading-[0.93] tracking-tight text-white md:text-7xl lg:text-8xl">Strategy.<br /> Growth.<br /> <span className="bg-gradient-to-r from-sky-300 via-sky-400 to-blue-600 bg-clip-text text-transparent">Execution.</span></h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-white/65">NWB Ventures partners with founders and businesses to build, scale, and lead in a rapidly evolving world.</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="mailto:info@nwbventures.com"><Button className="w-full rounded-xl bg-sky-500 px-7 py-4 text-base text-white shadow-xl shadow-sky-500/20 hover:bg-sky-400 sm:w-auto">Book a Strategy Call <ArrowRight className="ml-2 h-4 w-4" /></Button></a>
            <a href="#services"><Button variant="outline" className="w-full rounded-xl border-white/20 bg-black/20 px-7 py-4 text-base text-white hover:bg-white/10 hover:text-white sm:w-auto">Explore Services</Button></a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative overflow-hidden rounded-[2rem] border border-sky-400/20 bg-[#07111d] p-5 shadow-2xl shadow-sky-950/50 sm:p-6 lg:rounded-[2.5rem] lg:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,.20),transparent_34%)]" />
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-700/15 blur-3xl" />
          <div className="relative flex min-h-[28rem] items-center justify-center rounded-[1.5rem] border border-white/10 bg-black/20 p-8 backdrop-blur-xl sm:min-h-[32rem]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,.12),transparent_60%)]" />
            <div className="relative flex flex-col items-center text-center">
              <div className="mb-8 flex h-28 w-28 items-center justify-center rounded-full border border-sky-400/30 bg-sky-400/10 shadow-2xl shadow-sky-500/20 backdrop-blur-xl sm:h-36 sm:w-36"><BarChart3 className="h-12 w-12 text-sky-300 sm:h-16 sm:w-16" /></div>
              <p className="text-sm uppercase tracking-[0.35em] text-sky-300">NWB Ventures</p>
              <h3 className="mt-5 max-w-md text-3xl font-semibold leading-tight text-white sm:text-4xl">Building smarter businesses with clarity and execution.</h3>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="services" className="relative z-10 border-y border-white/10 bg-white/[0.025] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <div><p className="text-sm uppercase tracking-[0.35em] text-sky-400">What we do</p><h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight md:text-6xl">End-to-end advisory for high-growth ventures.</h2></div>
            <p className="max-w-xl text-lg leading-8 text-white/60 lg:justify-self-end">From early stage to expansion, we provide the strategy, systems, and connections that drive sustainable growth.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => { const Icon = service.icon; return <Card key={service.title} className="group rounded-[1.5rem] border-white/10 bg-black/30 transition hover:-translate-y-1 hover:border-sky-400/40 hover:bg-sky-400/[0.04]"><CardContent className="p-7"><div className="grid h-12 w-12 place-items-center rounded-full bg-sky-500 shadow-lg shadow-sky-500/20"><Icon className="h-6 w-6 text-white" /></div><h3 className="mt-8 text-xl font-semibold text-white">{service.title}</h3><p className="mt-4 leading-7 text-white/55">{service.text}</p><ArrowRight className="mt-8 h-5 w-5 text-white/70 transition group-hover:translate-x-1 group-hover:text-sky-300" /></CardContent></Card>; })}
          </div>
        </div>
      </section>

      <section id="about" className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
        <div><p className="text-sm uppercase tracking-[0.35em] text-sky-400">Why choose NWB Ventures</p><h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">More than advisors. We’re builders.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-white/60">We bring an entrepreneurial mindset, strategic perspective, and hands-on operating support to every engagement.</p><a href="#contact"><Button className="mt-8 rounded-xl bg-sky-500 px-7 py-3 text-white hover:bg-sky-400">About NWB Ventures <ArrowRight className="ml-2 h-4 w-4" /></Button></a></div>
        <div className="grid gap-5">{principles.map((item, index) => <div key={item.title} className="flex gap-5 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6"><div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-sky-400/30 bg-sky-400/10 text-sky-300">0{index + 1}</div><div><h3 className="text-xl font-semibold">{item.title}</h3><p className="mt-2 leading-7 text-white/55">{item.text}</p></div></div>)}</div>
      </section>

      <section id="approach" className="relative z-10 px-6 py-20 lg:px-8"><div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-sky-400/10 via-white/[0.04] to-black p-8 md:p-12 lg:p-16"><div className="grid gap-10 lg:grid-cols-2 lg:items-center"><div><p className="text-sm uppercase tracking-[0.35em] text-sky-400">Our approach</p><h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">Clear thinking. Practical moves. Stronger outcomes.</h2></div><div className="space-y-5 text-lg leading-8 text-white/65"><p>We identify what is working, what is blocking growth, and where the best opportunities sit.</p><p>Then we convert insight into a focused plan with priorities, owners, timelines, and decision points.</p><p>Finally, we support implementation so strategy becomes progress, not another document that sits untouched.</p></div></div></div></section>

      <section id="contact" className="relative z-10 mx-auto max-w-7xl px-6 pb-16 pt-8 lg:px-8"><div className="rounded-[2rem] border border-sky-400/20 bg-gradient-to-br from-sky-400/[0.12] to-white/[0.03] p-8 md:p-12 lg:p-16"><div className="grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-end"><div><p className="text-sm uppercase tracking-[0.35em] text-sky-400">Contact</p><h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">Ready to build what’s next?</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-white/60">Tell us what you are working on. We will be in touch shortly to explore how NWB Ventures can help.</p></div><div className="space-y-4 rounded-[1.5rem] bg-black/35 p-6"><a className="flex items-center gap-3 text-white/75 transition hover:text-sky-300" href="mailto:info@nwbventures.com"><Mail className="h-5 w-5" /> info@nwbventures.com</a><a className="flex items-center gap-3 text-white/75 transition hover:text-sky-300" href="tel:+13053083772"><Phone className="h-5 w-5" /> (305) 308-3772</a><a href="mailto:info@nwbventures.com"><Button className="mt-3 w-full rounded-xl bg-sky-500 py-3 text-white hover:bg-sky-400">Book a Strategy Call</Button></a></div></div></div></section>

      <footer className="relative z-10 mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 px-6 py-8 text-sm text-white/45 md:flex-row md:items-center md:justify-between lg:px-8"><p>© 2026 NWB Ventures. All rights reserved.</p><p>Strategy • Growth • Ventures • AI</p></footer>
    </main>
  );
}
