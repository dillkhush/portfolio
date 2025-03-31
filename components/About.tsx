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
      className="py-24 bg-[#111] text-white dark:bg-white dark:text-black"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
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
          <p className="text-lg text-gray-300 dark:text-gray-800 leading-relaxed mb-4">
          I'm → I&apos;m<span className="text-white dark:text-black font-semibold">Dilkhush Choudhary</span>, a
            Computer Science Engineer and full-stack developer with a passion for
            building clean, fast, and modern web applications. I specialize in
            React, Next.js, and creating stunning UIs with Tailwind and Framer
            Motion.
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
        className="mt-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.1 }}
        viewport={{ once: true }}
      >
        <motion.h3
          className="text-2xl font-semibold mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills & Technologies
        </motion.h3>

        <motion.div
          className="flex flex-wrap justify-center gap-3"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {skills.map(({ name, icon: Icon }, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 text-sm text-gray-200 dark:bg-gray-200 dark:text-black border border-gray-600 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition max-w-xs break-words"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
            >
              <Icon className="text-lg shrink-0" />
              <span className="truncate">{name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Timeline */}
      <div className="mt-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-semibold mb-8 text-center">Experience</h3>
        <div className="space-y-6 border-l border-gray-600 pl-6">
          {experience.map((exp, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-3 w-6 h-6 bg-blue-600 rounded-full border-4 border-[#111] dark:border-white" />
              <h4 className="text-lg font-semibold">{exp.title}</h4>
              <span className="text-sm text-gray-400 dark:text-gray-600 block mb-2">
                {exp.company} · {exp.date}
              </span>
              <p className="text-gray-300 dark:text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
