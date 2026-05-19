'use client'

import React, { useRef } from 'react'
import { motion } from 'motion/react'
import CustomCursor from '@/components/cursor'
import { ThemeToggle } from '@/components/theme-toggle'

const TextReveal = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
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

export default function TimelessTravelsCaseStudy() {
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
          <TextReveal className="text-7xl md:text-9xl font-display font-black uppercase leading-tight mb-8">
            Timeless Travels
          </TextReveal>
          <p className="text-xl md:text-2xl font-sans opacity-70 max-w-3xl mb-12 leading-relaxed">
            A modern travel experience platform designed to simplify trip planning, bookings, and personalized travel experiences through intuitive and immersive UI/UX design.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-current pt-12">
            <div>
              <p className="font-mono text-xs uppercase opacity-50 mb-2">Role</p>
              <p className="font-sans">UX/UI Designer & Product Strategist</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase opacity-50 mb-2">Timeline</p>
              <p className="font-sans">8 Weeks</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase opacity-50 mb-2">Platform</p>
              <p className="font-sans">Web & Mobile Experience</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase opacity-50 mb-2">Tools</p>
              <p className="font-sans">Figma, Miro, Adobe Illustrator, Google Forms</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-40 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <TextReveal className="text-5xl md:text-8xl font-display font-black uppercase mb-12">
            Overview
          </TextReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <p className="text-lg md:text-xl font-sans leading-relaxed">
                Timeless Travels is a travel and tourism platform created to help users explore destinations, book travel experiences, and manage journeys seamlessly through a unified digital experience.
              </p>
              <p className="text-lg md:text-xl font-sans leading-relaxed opacity-70">
                The platform was designed to reduce the complexity of trip planning by offering a clean, visually engaging, and user-friendly interface that allows travelers to discover destinations, customize itineraries, and make bookings effortlessly.
              </p>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-current pl-6">
                <p className="font-mono text-sm uppercase opacity-60 mb-2">Core Challenge</p>
                <p className="text-lg font-sans">Creating an inspiring yet practical travel platform that simplifies complex booking processes</p>
              </div>
              <div className="border-l-4 border-current pl-6">
                <p className="font-mono text-sm uppercase opacity-60 mb-2">Key Focus</p>
                <p className="text-lg font-sans">Visual storytelling, frictionless bookings, and premium user experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-40 px-6 md:px-20 bg-black/5 dark:bg-white/5">
        <div className="max-w-7xl mx-auto">
          <TextReveal className="text-5xl md:text-8xl font-display font-black uppercase mb-16">
            The Problem
          </TextReveal>
          <p className="text-2xl md:text-3xl font-sans mb-12 max-w-3xl leading-relaxed">
            Many travel booking platforms overwhelm users with excessive information, cluttered layouts, and complicated booking processes. Users often struggle to compare travel packages, manage itineraries, and complete bookings smoothly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Confusing booking experiences",
              "Information overload",
              "Slow decision-making",
              "Poor travel planning workflows",
              "Low trust during payments",
              "Hidden costs and complex pricing"
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
          <TextReveal className="text-5xl md:text-8xl font-display font-black uppercase mb-16">
            Business Goals
          </TextReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {[
              {
                title: "Simplify Travel Planning",
                desc: "Create an easy-to-use platform for discovering and booking travel experiences."
              },
              {
                title: "Improve User Engagement",
                desc: "Design visually immersive experiences that encourage exploration."
              },
              {
                title: "Increase Booking Completion",
                desc: "Reduce friction during reservation and checkout flows."
              },
              {
                title: "Build Brand Trust",
                desc: "Deliver a premium and reliable digital experience."
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
          <TextReveal className="text-5xl md:text-8xl font-display font-black uppercase mb-16">
            Research
          </TextReveal>
          <div className="space-y-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-3xl font-display font-black mb-8">Research Methods</h3>
                <ul className="space-y-4">
                  {["Online Surveys", "Traveler Interviews", "Competitive Analysis", "User Journey Mapping", "Booking Behavior Analysis"].map((method, i) => (
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
                    <p className="text-4xl md:text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-black to-black dark:from-white dark:to-white mb-2">68%</p>
                    <p className="font-sans">Abandoned bookings due to complicated checkout processes</p>
                  </div>
                  <p className="text-lg font-sans opacity-70 leading-relaxed">
                    Travelers preferred visual destination previews, simple package comparisons, faster booking systems, and clear pricing transparency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Personas */}
      <section className="py-40 px-6 md:px-20 bg-black/5 dark:bg-white/5">
        <div className="max-w-7xl mx-auto">
          <TextReveal className="text-5xl md:text-8xl font-display font-black uppercase mb-16">
            User Personas
          </TextReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                name: "Pema Lhamo",
                role: "Young Traveler • 24",
                goals: ["Discover beautiful destinations", "Book trips quickly", "Share experiences online", "Find affordable travel packages"],
                painPoints: ["Too many confusing booking options", "Hidden pricing during checkout", "Slow mobile websites", "Hard-to-compare travel packages"]
              },
              {
                name: "Sonam Tenzin",
                role: "Corporate Professional • 32",
                goals: ["Plan trips efficiently", "Manage itineraries easily", "Access reliable booking services", "Save time during reservations"],
                painPoints: ["Complex booking workflows", "Poor customer support systems", "Difficult itinerary management", "Time-consuming search experiences"]
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
          <TextReveal className="text-5xl md:text-8xl font-display font-black uppercase mb-16">
            Design Process
          </TextReveal>
          <div className="space-y-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              <div>
                <h3 className="text-3xl md:text-4xl font-display font-black mb-8">UX Strategy</h3>
                <p className="text-lg font-sans opacity-70 leading-relaxed mb-6">
                  The design process focused on creating a seamless travel journey from destination discovery to final booking.
                </p>
              </div>
              <div className="space-y-4">
                {["Visual storytelling", "Simplified booking flows", "Faster navigation", "Mobile-first interactions", "Emotional engagement through imagery"].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 border-l-4 border-current pl-6">
                    <p className="font-sans text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-current pt-20">
              <h3 className="text-3xl md:text-4xl font-display font-black mb-8">Information Architecture</h3>
              <p className="text-lg font-sans opacity-70 mb-8 leading-relaxed">
                Platform structure was optimized for intuitive navigation and discovery:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {["Destinations", "Tour Packages", "Hotels & Stays", "Transportation", "Bookings", "User Dashboard"].map((cat, i) => (
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
      <section className="py-40 px-6 md:px-20 bg-black/5 dark:bg-white/5">
        <div className="max-w-7xl mx-auto">
          <TextReveal className="text-5xl md:text-8xl font-display font-black uppercase mb-16">
            Testing & Iterations
          </TextReveal>
          <div className="space-y-12">
            {[
              {
                num: "01",
                title: "Booking Simplification",
                before: "Long reservation forms with too many required fields",
                after: "Streamlined booking process with progressive steps",
                result: "Improved booking completion rates"
              },
              {
                num: "02",
                title: "Destination Discovery",
                before: "Text-heavy destination listings",
                after: "Visual card-based browsing experience",
                result: "Higher user engagement during exploration"
              },
              {
                num: "03",
                title: "Mobile Experience",
                before: "Crowded mobile layouts reduced usability",
                after: "Optimized spacing and mobile-first navigation",
                result: "Improved mobile interaction and browsing comfort"
              }
            ].map((iteration, i) => (
              <div key={i} className="border border-current/30 p-8 md:p-12 bg-white dark:bg-neutral-900/50">
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
          <TextReveal className="text-5xl md:text-8xl font-display font-black uppercase mb-16">
            Final Outcomes
          </TextReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            {[
              { metric: "91%", label: "User Satisfaction Score" },
              { metric: "85%", label: "Booking Task Completion Rate" },
              { metric: "4.7/5", label: "Usability Rating" }
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
                "Reduced booking friction significantly",
                "Improved destination discoverability",
                "Increased mobile usability metrics",
                "Built scalable travel design system",
                "Enhanced trust through clean UI/UX",
                "Optimized for high-speed checkout experiences"
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
      <section className="py-40 px-6 md:px-20 bg-black dark:bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto">
          <TextReveal className="text-5xl md:text-8xl font-display font-black uppercase mb-16">
            Future Vision
          </TextReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "AI Travel Recommendations",
                desc: "Personalized trip suggestions based on user interests and travel patterns"
              },
              {
                title: "AR Destination Previews",
                desc: "Immersive previews of travel locations and experiences"
              },
              {
                title: "Community Travel Features",
                desc: "Travel reviews, shared itineraries, and social experiences"
              },
              {
                title: "Smart Itinerary Planning",
                desc: "Automated schedule and activity management based on preferences"
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
          <TextReveal className="text-5xl md:text-8xl font-display font-black uppercase mb-16">
            Final Reflection
          </TextReveal>
          <div className="max-w-3xl">
            <p className="text-2xl md:text-3xl font-sans leading-relaxed mb-8">
              Designing Timeless Travels was about creating a digital experience that transforms travel planning into an inspiring and stress-free journey.
            </p>
            <p className="text-xl md:text-2xl font-sans opacity-70 leading-relaxed">
              The project focused on balancing immersive visual storytelling with practical usability while building a scalable travel platform capable of evolving into a complete modern tourism ecosystem.
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
              <p className="opacity-60">MODERN TRAVEL EXPERIENCE PLATFORM</p>
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
