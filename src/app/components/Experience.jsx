// app/components/Experience.js
'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Building } from 'lucide-react'

export default function Experience() {
  // This will be fetched from database in real implementation
  const experiences = [
    {
      title: "Computer Engineering Student",
      company: "University of Jaffna",
      location: "Jaffna, Sri Lanka",
      startDate: "2021",
      endDate: "2025",
      current: true,
      type: "education",
      description: "Pursuing BSc.Eng (Hons) in Computer Engineering with focus on software development, algorithms, and system design.",
      responsibilities: [
        "Studying advanced computer science concepts and engineering principles",
        "Working on various projects using MERN stack and React Native",
        "Collaborating with peers on academic and personal projects",
        "Maintaining high academic standards while building practical skills"
      ],
      technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Python", "Java"]
    }
  ]

  return (
    <section id="experience" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-4 top-12 w-0.5 h-full bg-primary-200 dark:bg-primary-800"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-6 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                <Building size={16} className="text-white" />
              </div>

              <div className="card p-6 ml-4 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center text-primary-500 mb-1">
                      <Building size={16} className="mr-2" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                      <MapPin size={16} className="mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Calendar size={16} className="mr-2" />
                    <span>
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </span>
                    {exp.current && (
                      <span className="ml-2 px-2 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 text-xs rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {exp.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Key Activities:
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex}>{resp}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

