'use client'

import React, { useRef } from 'react'
import { motion } from 'motion/react'
import CustomCursor from '@/components/cursor'
import { ThemeToggle } from '@/components/theme-toggle'

const div = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "110%" }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default function NamezoedCaseStudy() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <motion.main 
      ref={containerRef}
      className="min-h-screen bg-white dark:bg-neutral-950 text-black dark:text-white transition-colors duration-300"
    >
      <CustomCursor />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full p-6 md:p-12 flex justify-between items-center z-[100] font-mono text-xs md:text-sm">
        <a href="/" className="bg-white dark:bg-neutral-900 text-black dark:text-white px-2 py-1 cursor-pointer font-black uppercase tracking-tighter hover:opacity-80 transition-opacity">
          AG [2026]
        </a>
        <div className="absolute top-6 right-6 z-50">
          <ThemeToggle />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 md:px-20 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-7xl md:text-9xl font-display font-black uppercase leading-tight mb-8">
            Namzoed
          </div>
          <p className="text-xl md:text-2xl font-sans opacity-70 max-w-3xl mb-12 leading-relaxed">
            Bhutan's first super app experience — a unified digital ecosystem designed to simplify everyday life through seamless services, localized experiences, and intuitive user-centered design.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-current pt-12">
            <div>
              <p className="font-mono text-xs uppercase opacity-50 mb-2">Role</p>
              <p className="font-sans">UX/UI Designer & Product Strategist</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase opacity-50 mb-2">Timeline</p>
              <p className="font-sans">10 Weeks</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase opacity-50 mb-2">Platform</p>
              <p className="font-sans">Mobile Application</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase opacity-50 mb-2">Tools</p>
              <p className="font-sans">Figma, Miro, Google Forms, Illustrator</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-40 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-5xl md:text-8xl font-display font-black uppercase mb-12">
            Overview
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <p className="text-lg md:text-xl font-sans leading-relaxed">
                Namzoed is a Bhutanese super app designed to centralize multiple daily services into a single mobile platform. The goal was to create an intuitive ecosystem where users could access commerce, transportation, bookings, payments, and community services without switching between different applications.
              </p>
              <p className="text-lg md:text-xl font-sans leading-relaxed opacity-70">
                The challenge was not only building a functional interface, but creating an experience that feels familiar, lightweight, and accessible for Bhutanese users with varying levels of digital literacy.
              </p>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-current pl-6">
                <p className="font-mono text-sm uppercase opacity-60 mb-2">Core Challenge</p>
                <p className="text-lg font-sans">Building a unified experience for multiple services without overwhelming users</p>
              </div>
              <div className="border-l-4 border-current pl-6">
                <p className="font-mono text-sm uppercase opacity-60 mb-2">Key Focus</p>
                <p className="text-lg font-sans">Simplicity, localization, and accessibility for diverse user groups</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-40 px-6 md:px-20 bg-black dark:bg-black/80 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-5xl md:text-8xl font-display font-black uppercase mb-16">
            The Problem
          </div>
          <p className="text-2xl md:text-3xl font-sans mb-12 max-w-3xl leading-relaxed">
            Bhutanese users often rely on multiple disconnected apps for everyday tasks. Existing platforms are either too complicated, poorly localized, or lack smooth user experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Frustrating navigation experiences",
              "Increased cognitive overload",
              "Low digital trust",
              "Inefficient service access",
              "Poor engagement retention",
              "Complex payment workflows"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-6 border border-current/20">
                <span className="w-2 h-2 bg-current rounded-full mt-2 flex-shrink-0" />
                <p className="text-lg font-sans">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-40 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-5xl md:text-8xl font-display font-black uppercase mb-16">
            Business Goals
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {[
              {
                title: "Simplify Everyday Digital Activities",
                desc: "Provide multiple services inside one ecosystem."
              },
              {
                title: "Increase User Adoption",
                desc: "Create intuitive experiences for both tech-savvy and first-time users."
              },
              {
                title: "Build Trust Through Simplicity",
                desc: "Design lightweight and familiar interactions."
              },
              {
                title: "Create a Scalable Design System",
                desc: "Allow future service expansion without redesigning the app."
              }
            ].map((goal, i) => (
              <div key={i} className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-display font-black">{goal.title}</h3>
                <p className="text-lg font-sans opacity-70 leading-relaxed">{goal.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="py-40 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-5xl md:text-8xl font-display font-black uppercase mb-16">
            Research
          </div>
          <div className="space-y-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-3xl font-display font-black mb-8">Research Methods</h3>
                <ul className="space-y-4">
                  {["Online Surveys", "User Interviews", "Competitive Analysis", "User Journey Mapping", "Behavioral Observation"].map((method, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-current rounded-full" />
                      <span className="text-lg font-sans">{method}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-3xl font-display font-black mb-8">Key Findings</h3>
                <div className="space-y-6">
                  <div className="p-6 border border-current">
                    <p className="text-4xl md:text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-black to-black dark:from-white dark:to-white mb-2">72%</p>
                    <p className="font-sans">Preferred "all-in-one" platform over multiple apps</p>
                  </div>
                  <p className="text-lg font-sans opacity-70 leading-relaxed">
                    Users valued simplicity more than feature-heavy interfaces. Most struggled with cluttered navigation, complicated payment flows, and slow interfaces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Personas */}
      <section className="py-40 px-6 md:px-20 bg-black dark:black">
        <div className="max-w-7xl mx-auto">
          <div className="text-5xl md:text-8xl font-display font-black uppercase mb-16">
            User Personas
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                name: "Sonam Choden",
                role: "University Student • 21",
                goals: ["Access services quickly", "Make digital payments easily", "Avoid switching between apps", "Save time during daily activities"],
                painPoints: ["Too many apps consume storage", "Complex interfaces feel overwhelming", "Slow apps reduce trust", "Difficult onboarding processes"]
              },
              {
                name: "Tashi Wangchuk",
                role: "Small Business Owner • 34",
                goals: ["Reach customers digitally", "Manage orders efficiently", "Receive secure payments", "Promote products locally"],
                painPoints: ["Existing tools are difficult to use", "Complex dashboards slow workflow", "Lack of localized business systems", "Poor visibility for small businesses"]
              }
            ].map((persona, i) => (
              <div key={i} className="p-8 border border-current/30 bg-white dark:bg-neutral-900/50">
                <h3 className="text-3xl md:text-4xl font-display font-black mb-2">{persona.name}</h3>
                <p className="font-mono text-sm uppercase opacity-60 mb-8">{persona.role}</p>
                <div className="space-y-8">
                  <div>
                    <p className="font-mono text-xs uppercase opacity-60 mb-4">Goals</p>
                    <ul className="space-y-2">
                      {persona.goals.map((goal, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-current rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm font-sans">{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase opacity-60 mb-4">Pain Points</p>
                    <ul className="space-y-2">
                      {persona.painPoints.map((point, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-current rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm font-sans">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-40 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-5xl md:text-8xl font-display font-black uppercase mb-16">
            Design Process
          </div>
          <div className="space-y-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              <div>
                <h3 className="text-3xl md:text-4xl font-display font-black mb-8">UX Strategy</h3>
                <p className="text-lg font-sans opacity-70 leading-relaxed mb-6">
                  The primary design challenge was balancing multiple services without overwhelming the user.
                </p>
              </div>
              <div className="space-y-4">
                {["Clear information hierarchy", "Minimal navigation depth", "Fast task completion", "Mobile-first usability", "Consistent interaction patterns"].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 border-l-4 border-current pl-6">
                    <p className="font-sans text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-current pt-20">
              <h3 className="text-3xl md:text-4xl font-display font-black mb-8">Information Architecture</h3>
              <p className="text-lg font-sans opacity-70 mb-8 leading-relaxed">
                To simplify navigation, services were grouped into structured categories:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {["Marketplace", "Transportation", "Wallet & Payments", "Community", "Services", "User Profile"].map((cat, i) => (
                  <div key={i} className="p-6 bg-black/5 dark:bg-white/5 border border-current/20 text-center">
                    <p className="font-display font-black text-xl">{cat}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing & Results */}
      <section className="py-40 px-6 md:px-20 bg-black dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-5xl md:text-8xl font-display font-black uppercase mb-16">
            Testing & Iterations
          </div>
          <div className="space-y-12">
            {[
              {
                num: "01",
                title: "Navigation Simplification",
                before: "Too many services displayed at once",
                after: "Structured categories with cleaner spacing",
                result: "Improved navigation speed during testing"
              },
              {
                num: "02",
                title: "Payment Flow Optimization",
                before: "Multiple confirmation screens caused drop-offs",
                after: "Single streamlined payment confirmation",
                result: "Higher task completion rate"
              },
              {
                num: "03",
                title: "Marketplace Experience",
                before: "Dense product layouts reduced readability",
                after: "Cleaner product cards with better spacing",
                result: "Better product discoverability"
              }
            ].map((iteration, i) => (
              <div key={i} className="border border-current/30 p-8 md:p-12">
                <div className="flex gap-6 mb-8">
                  <span className="text-5xl md:text-6xl font-display font-black opacity-30">{iteration.num}</span>
                  <h3 className="text-3xl md:text-4xl font-display font-black self-center">{iteration.title}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <p className="font-mono text-xs uppercase opacity-60 mb-3">Before</p>
                    <p className="font-sans text-lg">{iteration.before}</p>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase opacity-60 mb-3">After</p>
                    <p className="font-sans text-lg">{iteration.after}</p>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase opacity-60 mb-3">Result</p>
                    <p className="font-sans text-lg text-green-600 dark:text-green-400 font-semibold">{iteration.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-40 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-5xl md:text-8xl font-display font-black uppercase mb-16">
            Final Outcomes
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            {[
              { metric: "92%", label: "User Satisfaction" },
              { metric: "87%", label: "Task Completion Rate" },
              { metric: "4.6/5", label: "Usability Rating" }
            ].map((outcome, i) => (
              <div key={i} className="text-center p-8 border border-current/30">
                <p className="text-7xl md:text-8xl font-display font-black mb-4">{outcome.metric}</p>
                <p className="font-mono uppercase text-sm opacity-60">{outcome.label}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-current pt-16">
            <h3 className="text-3xl md:text-4xl font-display font-black mb-8">Key Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Reduced onboarding friction",
                "Simplified multi-service navigation",
                "Improved payment experience",
                "Created scalable UI system",
                "Increased user trust through localization",
                "Optimized for low-connectivity environments"
              ].map((achievement, i) => (
                <div key={i} className="flex items-start gap-4 p-6 bg-black/5 dark:bg-white/5 border border-current/20">
                  <span className="w-1.5 h-1.5 bg-current rounded-full mt-2 flex-shrink-0" />
                  <p className="font-sans text-lg">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-40 px-6 md:px-20 bg-black dark:bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-5xl md:text-8xl font-display font-black uppercase mb-16">
            Future Vision
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "AI Personalization",
                desc: "Smart recommendations based on user behavior and interests"
              },
              {
                title: "AR Commerce",
                desc: "Interactive product previews and virtual experiences"
              },
              {
                title: "Community Ecosystem",
                desc: "Social interaction and local business engagement"
              },
              {
                title: "Financial Insights",
                desc: "Advanced wallet analytics and budgeting tools"
              }
            ].map((future, i) => (
              <div key={i} className="border border-white/30 p-8 hover:bg-white/10 transition-colors">
                <h4 className="text-2xl font-display font-black mb-4">{future.title}</h4>
                <p className="font-sans opacity-80 text-lg">{future.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="py-40 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-5xl md:text-8xl font-display font-black uppercase mb-16">
            Final Reflection
          </div>
          <div className="max-w-3xl">
            <p className="text-2xl md:text-3xl font-sans leading-relaxed mb-8">
              Designing Namzoed was about creating more than just a mobile application — it was about designing a digital ecosystem tailored for Bhutanese users.
            </p>
            <p className="text-xl md:text-2xl font-sans opacity-70 leading-relaxed">
              The project emphasized balancing functionality with simplicity while building a scalable experience capable of evolving into Bhutan's leading super app platform. Through research, iteration, and user-centered design, we created an interface that feels familiar, fast, and trustworthy for diverse user groups.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 md:px-20 font-mono border-t border-current">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 pb-12">
            <div>
              <a href="/" className="text-xl font-black uppercase hover:opacity-60 transition-opacity">
                ← Back to Portfolio
              </a>
            </div>
            <div className="space-y-2 text-sm">
              <p className="opacity-60">PROJECT COMPLETED • MAY 2026</p>
              <p className="opacity-60">BHUTAN'S FIRST SUPER APP</p>
            </div>
          </div>
          <div className="mt-12 pt-12 border-t border-current/20 opacity-30 text-[10px] tracking-[0.2em] uppercase">
            <p>© 2026 ANUP GURUNG. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </motion.main>
  )
}
