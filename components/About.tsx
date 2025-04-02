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
    <motion.section
      id="about"
      className="py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Intro */}
      <div className="max-w-6xl mx-auto px-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-md p-10 flex flex-col md:flex-row items-center gap-12">
        <motion.img
          src="/profile.jpeg"
          alt="Dilkhush Choudhary"
          className="w-40 h-40 rounded-full object-cover ring-4 ring-blue-500 shadow-xl"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
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
      </div>

      {/* Skills */}
      <motion.div
        className="mt-20 max-w-4xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.1 }}
        viewport={{ once: true }}
      >
        <motion.h3
          className="text-2xl font-semibold mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills & Technologies
        </motion.h3>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {skills.map(({ name, icon: Icon }, index) => (
            <motion.div
              key={index}
              className="card-glass shadow-md flex items-center gap-2 px-5 py-2 text-sm text-white border border-white/10 hover:scale-105 hover:shadow-blue-500/20 transition-transform duration-300"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
            >
              <Icon className="text-lg shrink-0" />
              <span className="whitespace-nowrap">{name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Experience */}
      <div className="mt-20 max-w-4xl mx-auto px-6">
        <h3 className="text-2xl font-semibold mb-8 text-center">Experience</h3>
        <div className="space-y-6 border-l border-white/10 pl-6">
          {experience.map((exp, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-3 w-6 h-6 bg-blue-600 rounded-full border-4 border-zinc-950 dark:border-white" />
              <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
              <span className="text-sm text-gray-400 block mb-2">
                {exp.company} · {exp.date}
              </span>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
