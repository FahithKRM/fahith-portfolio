// app/components/Projects.js
'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ShoppingCart, Utensils, BookOpen } from 'lucide-react'

export default function Projects() {
  // This will be fetched from database in real implementation
  const projects = [
    {
      title: "Full-Stack E-commerce Website",
      description: "A complete e-commerce solution with user authentication, product management, and secure payment processing. Features responsive design and admin panel for inventory management.",
      icon: ShoppingCart,
      technologies: ["MongoDB", "Express", "React", "Node.js", "REST APIs"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Food Order Website",
      description: "Online food ordering platform with real-time order tracking, user authentication, and restaurant management system. Built with modern web technologies.",
      icon: Utensils,
      technologies: ["MongoDB", "Express", "React", "Node.js", "CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Blog Website",
      description: "Modern blog platform with user authentication, post creation, editing and deletion features. Clean and responsive design with optimized performance.",
      icon: BookOpen,
      technologies: ["MongoDB", "Express", "Next.js", "Node.js", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    }
  ]

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
            >
              {/* Project Image/Icon */}
              <div className="h-48 bg-linear-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white relative overflow-hidden">
                <project.icon size={60} className="z-10" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-4 border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white rounded-lg transition-colors duration-300"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

