'use client'
import React from 'react'
import NavbarLanding from '../components/landing/NavbarLanding'

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col overflow-y-auto bg-white">
      <NavbarLanding />

      {/* Hero / Banner */}
      <section className="flex flex-col items-center justify-center bg-[#fff9f0] px-6 py-28 text-center">
        <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight text-[#212121] md:text-6xl">
          Bring your AI Agents to market faster.
        </h1>
        <p className="mb-10 max-w-3xl text-lg text-[#212121] md:text-xl">
          The ultimate Agent builder platform with built-in Responsible AI and Hallucination Manager.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="rounded-lg bg-[#ab713b] px-8 py-3 font-medium text-white transition hover:bg-[#945d31]">
            Get a Demo
          </button>
          <button className="rounded-lg border-2 border-[#ab713b] px-8 py-3 font-medium text-[#ab713b] transition hover:bg-[#ab713b]/10">
            Learn More
          </button>
        </div>
      </section>

      {/* Trusted / Logos */}
      <section className="bg-white px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-8">
          {/* Placeholder logos */}
          <div className="h-12 w-28 bg-[#ddd6ce]" />
          <div className="h-12 w-28 bg-[#ddd6ce]" />
          <div className="h-12 w-28 bg-[#ddd6ce]" />
          <div className="h-12 w-28 bg-[#ddd6ce]" />
        </div>
      </section>

      {/* Use Cases / Industry Sections */}
      <section className="bg-[#fff9f0] px-6 py-20">
        <h2 className="mb-12 text-center text-3xl font-semibold text-[#212121] md:text-4xl">
          Use Cases Across Industries
        </h2>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-3">
          <Card title="Healthcare" desc="Virtual assistants, diagnostics support, patient scheduling." />
          <Card title="Finance" desc="Conversational banking, fraud detection, KYC workflows." />
          <Card title="Retail & E-Commerce" desc="Shopping bots, inventory alerts, personalized service." />
        </div>
      </section>

      {/* Features / Capabilities */}
      <section className="bg-white px-6 py-20">
        <h2 className="mb-12 text-center text-3xl font-semibold text-[#212121] md:text-4xl">
          Built for Performance & Scale
        </h2>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-2">
          <Feature title="Seamless Integrations" desc="Connect to your existing databases, APIs & CRMs easily." />
          <Feature title="Autonomous Workflow" desc="Let agents act based on rules, context, and real-time data." />
          <Feature title="Secure & Compliant" desc="Enterprise-grade security, audit logs, role-based access." />
          <Feature title="Insight & Analytics" desc="Track performance, discover trends, and optimize agents." />
        </div>
      </section>

      {/* Testimonials / Clients */}
      <section className="bg-[#fff9f0] px-6 py-20">
        <h2 className="mb-12 text-center text-3xl font-semibold text-[#212121] md:text-4xl">
          What Clients Say
        </h2>
        <div className="mx-auto max-w-3xl space-y-8 text-center">
          <blockquote className="text-lg italic text-[#212121] md:text-xl">
            “AILifeBOT’s agents scaled our customer support, and the ROI was visible in 3 months.”
          </blockquote>
          <p className="font-semibold text-[#212121]">— Head of Support, Some Company</p>
          <blockquote className="text-lg italic text-[#212121] md:text-xl">
            “Their autonomous agents allow us to focus on growth instead of operations.”
          </blockquote>
          <p className="font-semibold text-[#212121]">— CTO, Another Company</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="flex flex-col items-center justify-center bg-[#4ea8de] px-6 py-24 text-center text-white">
        <h2 className="mb-6 max-w-3xl text-3xl font-bold md:text-4xl">
          Ready to automate your business with AILifeBOT?
        </h2>
        <button className="rounded-lg border-2 border-white bg-transparent px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#4ea8de]">
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-[#212121] py-12 text-center text-sm text-white">
        <p>© {new Date().getFullYear()} AILifeBOT. All rights reserved.</p>
      </footer>
    </main>
  )
}

type FeatureProps = {
  title: string;
  desc: string;
}

function Feature({ title, desc }: FeatureProps) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl font-semibold text-[#212121]">{title}</h3>
      <p className="text-[#212121]">{desc}</p>
    </div>
  )
}

type CardProps = {
  title: string;
  desc: string;
}

function Card({ title, desc }: CardProps) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow transition hover:shadow-lg">
      <h4 className="mb-3 text-xl font-bold text-[#212121]">{title}</h4>
      <p className="text-[#212121]">{desc}</p>
    </div>
  )
}
