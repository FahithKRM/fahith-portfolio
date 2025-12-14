// app/components/About.js
'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { User, Code, Award } from 'lucide-react'

export default function About() {
  const stats = [
    { number: '3+', label: 'Projects Completed', icon: Code },
    { number: '10+', label: 'Technologies', icon: Award },
    { number: '2025', label: 'Expected Graduation', icon: User },
  ]

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="relative inline-block mb-8">
              <div className="w-80 h-80 rounded-full bg-linear-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white text-8xl animate-pulse-glow">
                <User size={120} />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full animate-bounce"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Computer Engineering Student
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a motivated Computer Engineering student at the University of Jaffna with a 
              strong foundation in full-stack development, specializing in the MERN stack and 
              React Native. I'm passionate about creating innovative software solutions and 
              contributing to collaborative projects.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Currently pursuing my BSc.Eng (Hons) in Computer Engineering with expected 
              graduation in 2025. I have hands-on experience in building responsive web 
              applications, implementing secure authentication systems, and designing clean 
              user interfaces.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 card"
                >
                  <stat.icon className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary-500">{stat.number}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
