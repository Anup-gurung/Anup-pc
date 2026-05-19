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

export default function MarpasMontessoriCaseStudy() {
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
            Marpa's Montessori
          </div>
          <p className="text-xl md:text-2xl font-sans opacity-70 max-w-3xl mb-12 leading-relaxed">
            A modern educational platform designed to create a seamless connection between parents, teachers, and students while supporting engaging early childhood learning experiences through intuitive UI/UX design.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-current pt-12">
            <div>
              <p className="font-mono text-xs uppercase opacity-50 mb-2">Role</p>
              <p className="font-sans">UX/UI Designer & Researcher</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase opacity-50 mb-2">Timeline</p>
              <p className="font-sans">7 Weeks</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase opacity-50 mb-2">Platform</p>
              <p className="font-sans">Web & Mobile Experience</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase opacity-50 mb-2">Tools</p>
              <p className="font-sans">Figma, Miro, Google Forms, Adobe Illustrator</p>
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
                Marpa's Montessori is an early childhood education institution focused on creating a nurturing, creative, and child-friendly learning environment.
              </p>
              <p className="text-lg md:text-xl font-sans leading-relaxed opacity-70">
                The project aimed to design a digital platform that simplifies communication between parents and the school while providing an engaging and accessible experience for managing learning activities, announcements, student progress, and school information.
              </p>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-current pl-6">
                <p className="font-mono text-sm uppercase opacity-60 mb-2">Core Challenge</p>
                <p className="text-lg font-sans">Creating a warm, trustworthy platform reflecting Montessori philosophy while bridging communication gaps</p>
              </div>
              <div className="border-l-4 border-current pl-6">
                <p className="font-mono text-sm uppercase opacity-60 mb-2">Key Focus</p>
                <p className="text-lg font-sans">Simplicity, warmth, accessibility, and child-centered design principles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-40 px-6 md:px-20 bg-black dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-5xl md:text-8xl font-display font-black uppercase mb-16">
            The Problem
          </div>
          <p className="text-2xl md:text-3xl font-sans mb-12 max-w-3xl leading-relaxed">
            Many school platforms are overly complex, outdated, and difficult for parents and teachers to navigate. Important information such as announcements, student progress, schedules, and learning updates often becomes hard to access.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Poor parent-school communication",
              "Confusing navigation experiences",
              "Difficulty accessing student information",
              "Low engagement from parents",
              "Inefficient management of school updates",
              "Missing important announcements"
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
                title: "Improve Parent-School Communication",
                desc: "Create a centralized platform for announcements, updates, and interactions."
              },
              {
                title: "Simplify Information Access",
                desc: "Allow parents and teachers to quickly access important student and school information."
              },
              {
                title: "Create a Child-Friendly Experience",
                desc: "Design a warm and visually engaging interface inspired by Montessori learning principles."
              },
              {
                title: "Build a Scalable Educational Platform",
                desc: "Support future features such as online learning resources and activity management."
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
                  {["Parent Interviews", "Teacher Feedback Sessions", "Online Surveys", "Competitive Analysis", "User Journey Mapping"].map((method, i) => (
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
                    <p className="text-4xl md:text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-black to-black dark:from-white dark:to-white mb-2">74%</p>
                    <p className="font-sans">Preferred mobile-friendly communication systems over traditional notice methods</p>
                  </div>
                  <p className="text-lg font-sans opacity-70 leading-relaxed">
                    Teachers needed faster ways to share updates, simplified attendance management, and easy media uploads. Emotional trust and welcoming interfaces mattered significantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Personas */}
      <section className="py-40 px-6 md:px-20 bg-black dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-5xl md:text-8xl font-display font-black uppercase mb-16">
            User Personas
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                name: "Dechen Wangmo",
                role: "Parent • 30",
                goals: ["Stay updated on her child's activities", "Access school notices easily", "Communicate with teachers quickly", "Track learning progress"],
                painPoints: ["Missing important announcements", "Complicated school apps", "Too many disconnected communication channels", "Limited visibility into classroom activities"]
              },
              {
                name: "Karma Dorji",
                role: "Montessori Teacher • 27",
                goals: ["Share classroom updates efficiently", "Manage student information easily", "Upload activity photos quickly", "Communicate with parents smoothly"],
                painPoints: ["Manual communication processes", "Difficult dashboard systems", "Time-consuming content uploads", "Poor organization of student records"]
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
                  The design focused on creating a calm, friendly, and easy-to-navigate educational environment.
                </p>
              </div>
              <div className="space-y-4">
                {["Simplicity", "Warm visual design", "Accessibility for all age groups", "Fast communication workflows", "Emotional connection through visuals"].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 border-l-4 border-current pl-6">
                    <p className="font-sans text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-current pt-20">
              <h3 className="text-3xl md:text-4xl font-display font-black mb-8">Information Architecture</h3>
              <p className="text-lg font-sans opacity-70 mb-8 leading-relaxed">
                Platform structure organized into clear sections for easy navigation:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {["Student Dashboard", "Announcements", "Classroom Activities", "Attendance", "Parent Communication", "School Information", "Events & Calendar"].map((cat, i) => (
                  <div key={i} className="p-6 bg-black/5 dark:bg-white/5 border border-current/20 text-center">
                    <p className="font-display font-black text-lg">{cat}</p>
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
                title: "Parent Dashboard Simplification",
                before: "Too much information displayed at once",
                after: "Organized content into clear priority sections",
                result: "Parents accessed updates faster during testing"
              },
              {
                num: "02",
                title: "Teacher Workflow Optimization",
                before: "Uploading classroom updates required multiple steps",
                after: "Simplified upload process with quick actions",
                result: "Reduced time spent managing daily updates"
              },
              {
                num: "03",
                title: "Notification Visibility",
                before: "Important announcements were overlooked",
                after: "Introduced highlighted announcement cards and reminders",
                result: "Improved parent engagement and update visibility"
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
          <div className="text-5xl md:text-8xl font-display font-black uppercase mb-16">
            Final Outcomes
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            {[
              { metric: "93%", label: "Parent Satisfaction Rate" },
              { metric: "89%", label: "Task Completion Rate" },
              { metric: "4.8/5", label: "Usability Rating" }
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
                "Improved parent-school communication",
                "Simplified educational workflows",
                "Increased engagement with school activities",
                "Created warm and accessible digital experiences",
                "Built scalable education-focused design system",
                "Enhanced emotional connection to school platform"
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
                title: "Online Learning Modules",
                desc: "Interactive digital learning resources for students"
              },
              {
                title: "AI Learning Insights",
                desc: "Personalized progress tracking and recommendations"
              },
              {
                title: "Parent Community Features",
                desc: "Community engagement and school discussion forums"
              },
              {
                title: "Digital Portfolio System",
                desc: "Student activity and achievement tracking over time"
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
              Designing Marpa's Montessori focused on creating a meaningful educational experience that strengthens the connection between schools, teachers, parents, and students.
            </p>
            <p className="text-xl md:text-2xl font-sans opacity-70 leading-relaxed">
              The project emphasized warmth, simplicity, and accessibility while building a scalable platform capable of supporting the future of modern early childhood education. By understanding the emotional and practical needs of both parents and educators, we created an interface that feels welcoming and supports the foundational years of learning.
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
              <p className="opacity-60">EARLY CHILDHOOD EDUCATION PLATFORM</p>
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
