'use client'

import { motion } from 'framer-motion'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiFramer,
} from 'react-icons/si'
import Reveal from '@/components/Reveal'

const skills = [
  { name: 'HTML', icon: SiHtml5 },
  { name: 'CSS', icon: SiCss3 },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Framer Motion', icon: SiFramer },
]

const experience = [
  {
    title: 'Full-Stack Developer Intern',
    company: 'XYZ Tech',
    date: 'June 2023 – Dec 2023',
    description:
      'Built and deployed web apps using Next.js, Node.js, and MongoDB. Integrated REST APIs and improved performance across the board.',
  },
  {
    title: 'Frontend Developer',
    company: 'Freelance Projects',
    date: '2022 – Present',
    description:
      'Designed and developed responsive websites using React and Tailwind. Worked closely with clients to deliver custom UIs.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-md p-10 flex flex-col md:flex-row items-center gap-12">
        <Reveal>
          <motion.img
            src="/profile.jpeg"
            alt="Dilkhush Choudhary"
            className="w-40 h-40 rounded-full object-cover ring-4 ring-blue-500 shadow-xl"
          />
        </Reveal>

        <Reveal delay={0.2}>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              I&apos;m <span className="text-white font-semibold">Dilkhush Choudhary</span>, a full-stack developer with a passion for building fast, modern, and user-focused web applications using React, Next.js, and Framer Motion.
            </p>
            <a
              href="/resume.pdf"
              download
              className="inline-block mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-500 transition rounded-full text-white font-medium"
            >
              Download Resume
            </a>
          </div>
        </Reveal>
      </div>

      {/* Skills */}
      <div className="mt-20 max-w-4xl mx-auto px-6">
        <Reveal>
          <h3 className="text-2xl font-semibold mb-6 text-center text-white">Skills & Technologies</h3>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map(({ name, icon: Icon }, index) => (
            <Reveal key={index} delay={0.05 * index}>
              <div className="card-glass shadow-md flex items-center gap-2 px-5 py-2 text-sm text-white border border-white/10 hover:scale-105 hover:shadow-blue-500/20 transition-transform duration-300">
                <Icon className="text-lg shrink-0" />
                <span className="whitespace-nowrap">{name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="mt-20 max-w-4xl mx-auto px-6">
        <Reveal>
          <h3 className="text-2xl font-semibold mb-8 text-center text-white">Experience</h3>
        </Reveal>

        <div className="space-y-6 border-l border-white/10 pl-6">
          {experience.map((exp, index) => (
            <Reveal key={index} delay={0.1 * index}>
              <div className="relative">
                <div className="absolute -left-3 w-6 h-6 bg-blue-600 rounded-full border-4 border-zinc-950 dark:border-white" />
                <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                <span className="text-sm text-gray-400 block mb-2">
                  {exp.company} · {exp.date}
                </span>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
