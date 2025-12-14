// app/components/Skills.js
'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Code, Laptop, Database, Settings } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Python', 'JavaScript', 'Java', 'C++']
    },
    {
      title: 'Web Technologies',
      icon: Laptop,
      skills: ['React', 'Node.js', 'Next.js', 'Express.js', 'HTML5', 'CSS', 'Tailwind CSS', 'Bootstrap']
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MongoDB', 'SQL', 'Firebase']
    },
    {
      title: 'Development Tools',
      icon: Settings,
      skills: ['Git', 'GitHub', 'Figma', 'AWS', 'Vercel', 'Postman', 'VS Code']
    }
  ]

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-linear-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <category.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-linear-to-r from-primary-500 to-secondary-500 text-white text-sm rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}