// // ═══════════════════════════════════════════════════════════════
// // 📄 app/components/Hero.js - UPDATED FOR TAILWIND CSS V4
// // ═══════════════════════════════════════════════════════════════

// 'use client'
// import React, { useEffect, useState } from 'react'
// import { motion } from 'framer-motion'
// import { ArrowDown, Download, Mail } from 'lucide-react'

// export default function Hero() {
//   // ═══════════════════════════════════════════════════════════════
//   // STATE MANAGEMENT
//   // ═══════════════════════════════════════════════════════════════
  
//   // This stores the text that's currently being displayed
//   const [displayText, setDisplayText] = useState('')
  
//   // This tracks which title we're currently showing (0-4)
//   const [currentIndex, setCurrentIndex] = useState(0)
  
//   // This tracks if we're deleting text or typing it
//   const [isDeleting, setIsDeleting] = useState(false)

//   // ═══════════════════════════════════════════════════════════════
//   // TYPING ANIMATION - Array of titles to rotate through
//   // ═══════════════════════════════════════════════════════════════
  
//   const titles = [
//     'Full-Stack Developer',
//     'MERN Stack Specialist',
//     'React Native Developer',
//     'Computer Engineering Student',
//     'Problem Solver'
//   ]

//   // ═══════════════════════════════════════════════════════════════
//   // TYPEWRITER EFFECT - Runs on component mount and when text changes
//   // ═══════════════════════════════════════════════════════════════
  
//   useEffect(() => {
//     const typeWriter = () => {
//       const current = titles[currentIndex]
      
//       // If deleting, remove one character
//       if (isDeleting) {
//         setDisplayText(current.substring(0, displayText.length - 1))
//       } 
//       // If typing, add one character
//       else {
//         setDisplayText(current.substring(0, displayText.length + 1))
//       }

//       // Speed of typing/deleting
//       let typeSpeed = isDeleting ? 50 : 100

//       // When finished typing, wait 2 seconds then start deleting
//       if (!isDeleting && displayText === current) {
//         typeSpeed = 2000
//         setIsDeleting(true)
//       } 
//       // When finished deleting, move to next title
//       else if (isDeleting && displayText === '') {
//         setIsDeleting(false)
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length)
//         typeSpeed = 500
//       }

//       setTimeout(typeWriter, typeSpeed)
//     }

//     const timer = setTimeout(typeWriter, 100)
//     return () => clearTimeout(timer)
//   }, [displayText, currentIndex, isDeleting, titles])

//   // ═══════════════════════════════════════════════════════════════
//   // JSX COMPONENT - The actual rendered HTML
//   // ═══════════════════════════════════════════════════════════════

//   return (
//     <section 
//       id="home" 
//       className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden"
//     >
//       {/* ═══════════════════════════════════════════════════════════
//           ANIMATED BACKGROUND PARTICLES
//           ════════════════════════════════════════════════════════ */}
      
//       <div className="absolute inset-0 pointer-events-none">
//         {/* Create 50 floating particles */}
//         {[...Array(50)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute rounded-full bg-white/10"
//             style={{
//               // Random size for each particle (2-8px)
//               width: Math.random() * 6 + 2,
//               height: Math.random() * 6 + 2,
//               // Random position on screen
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               // Float up and rotate
//               y: [-20, -100],
//               opacity: [0, 1, 0],
//               rotate: [0, 360],
//             }}
//             transition={{
//               duration: Math.random() * 10 + 10, // 10-20 seconds
//               repeat: Infinity,
//               delay: Math.random() * 5, // Random start time
//             }}
//           />
//         ))}
//       </div>

//       {/* ═══════════════════════════════════════════════════════════
//           MAIN CONTENT CONTAINER
//           ════════════════════════════════════════════════════════ */}
      
//       <div className="container-custom px-4 text-center relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-white"
//         >
//           {/* ═══════════════════════════════════════════════════════
//               NAME/TITLE - Main heading with gradient text
//               ═══════════════════════════════════════════════════ */}
          
//           <motion.h1 
//             className="text-5xl md:text-7xl font-bold mb-6 text-gradient-hero"
//             initial={{ scale: 0.8 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             Fahith KRM
//           </motion.h1>

//           {/* ═══════════════════════════════════════════════════════
//               TYPING ANIMATION - Shows rotating job titles
//               ═══════════════════════════════════════════════════ */}
          
//           <div className="h-8 mb-6">
//             <p className="text-xl md:text-2xl font-medium">
//               {displayText}
//               {/* Blinking cursor */}
//               <span className="inline-block w-0.5 h-6 bg-white ml-1 animate-pulse">|</span>
//             </p>
//           </div>

//           {/* ═══════════════════════════════════════════════════════
//               DESCRIPTION - Brief introduction paragraph
//               ═══════════════════════════════════════════════════ */}
          
//           <motion.p 
//             className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto px-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//           >
//             Passionate about creating innovative web solutions using modern technologies. 
//             Currently pursuing Computer Engineering at University of Jaffna.
//           </motion.p>

//           {/* ═══════════════════════════════════════════════════════
//               CALL-TO-ACTION BUTTONS - Three main action buttons
//               ═══════════════════════════════════════════════════ */}
          
//           <motion.div 
//             className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.7 }}
//           >
//             {/* Button 1: View Projects */}
//             <a
//               href="#projects"
//               className="btn btn-primary inline-flex items-center space-x-2 shadow-glow"
//             >
//               <span>View My Work</span>
//               <ArrowDown size={20} />
//             </a>
            
//             {/* Button 2: Contact Me */}
//             <a
//               href="#contact"
//               className="btn btn-outline inline-flex items-center space-x-2"
//             >
//               <Mail size={20} />
//               <span>Get In Touch</span>
//             </a>

//             {/* Button 3: Download Resume */}
//             <a
//               href="/resume.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="btn btn-outline inline-flex items-center space-x-2"
//             >
//               <Download size={20} />
//               <span>Resume</span>
//             </a>
//           </motion.div>
//         </motion.div>

//         {/* ═══════════════════════════════════════════════════════
//             SCROLL INDICATOR - Bouncing arrow at bottom
//             ═══════════════════════════════════════════════════ */}
        
//         <motion.div
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//         >
//           <ArrowDown className="text-white opacity-70" size={24} />
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// // ═══════════════════════════════════════════════════════════════
// // 📝 DETAILED EXPLANATION
// // ═══════════════════════════════════════════════════════════════

// /*
// ╔══════════════════════════════════════════════════════════════╗
// ║                    COMPONENT BREAKDOWN                       ║
// ╚══════════════════════════════════════════════════════════════╝

// 1. TYPEWRITER EFFECT
//    ├─ Creates rotating text animation
//    ├─ Types out each title character by character
//    ├─ Pauses for 2 seconds when complete
//    ├─ Deletes the text character by character
//    └─ Moves to next title and repeats

// 2. BACKGROUND ANIMATION
//    ├─ Creates 50 floating particles
//    ├─ Each particle has random size, position, duration
//    ├─ Particles float upward while rotating
//    └─ Fades in and out during animation

// 3. FRAMER MOTION ANIMATIONS
//    ├─ initial: Starting state (hidden/moved)
//    ├─ animate: End state (visible/normal position)
//    ├─ transition: How to animate between states
//    └─ Creates smooth entrance effects

// 4. RESPONSIVE DESIGN
//    ├─ text-5xl md:text-7xl: Smaller on mobile, larger on desktop
//    ├─ flex-col sm:flex-row: Stacked on mobile, row on tablet+
//    └─ px-4, max-w-3xl: Proper padding and max width

// ╔══════════════════════════════════════════════════════════════╗
// ║                  TAILWIND V4 CLASSES USED                    ║
// ╚══════════════════════════════════════════════════════════════╝

// LAYOUT CLASSES:
// ├─ min-h-screen: Minimum 100vh height
// ├─ flex, items-center, justify-center: Center content
// ├─ relative, absolute: Positioning context
// ├─ overflow-hidden: Hide overflow particles
// └─ z-10: Stack order

// SPACING CLASSES:
// ├─ px-4, mb-6, mb-8: Padding and margins
// ├─ gap-4: Space between flex items
// └─ space-x-2: Horizontal space in buttons

// TEXT CLASSES:
// ├─ text-5xl md:text-7xl: Responsive text sizes
// ├─ font-bold, font-medium: Font weights
// ├─ text-white: White text color
// ├─ text-center: Center align text
// └─ opacity-90: 90% opacity

// CUSTOM CLASSES (from globals.css):
// ├─ bg-hero-gradient: Purple gradient background
// ├─ container-custom: Max-width container
// ├─ btn, btn-primary, btn-outline: Button styles
// ├─ text-gradient-hero: Gradient text effect
// └─ shadow-glow: Glowing shadow effect

// RESPONSIVE BREAKPOINTS:
// ├─ sm: 640px and up
// ├─ md: 768px and up
// └─ lg: 1024px and up

// ╔══════════════════════════════════════════════════════════════╗
// ║                    HOW IT WORKS                              ║
// ╚══════════════════════════════════════════════════════════════╝

// STEP 1: Component Mounts
//   → Typewriter effect starts
//   → Begins typing first title
//   → Background particles start animating

// STEP 2: User Interaction
//   → Clicks "View My Work" → Scrolls to #projects
//   → Clicks "Get In Touch" → Scrolls to #contact
//   → Clicks "Resume" → Opens resume.pdf in new tab

// STEP 3: Animations Loop
//   → Typewriter continuously cycles through titles
//   → Particles continuously float upward
//   → Scroll indicator bounces infinitely

// ╔══════════════════════════════════════════════════════════════╗
// ║                    KEY FEATURES                              ║
// ╚══════════════════════════════════════════════════════════════╝

// ✅ Smooth entrance animations
// ✅ Typewriter effect with 5 rotating titles
// ✅ 50 animated background particles
// ✅ Responsive design (mobile to desktop)
// ✅ Three clear call-to-action buttons
// ✅ Bouncing scroll indicator
// ✅ Gradient background and text
// ✅ Accessible (semantic HTML)
// ✅ SEO friendly (proper headings)
// ✅ Performance optimized

// ╔══════════════════════════════════════════════════════════════╗
// ║                  CUSTOMIZATION GUIDE                         ║
// ╚══════════════════════════════════════════════════════════════╝

// TO CHANGE YOUR NAME:
//   Line 107: Change "Fahith KRM" to your name

// TO CHANGE TITLES:
//   Lines 36-42: Edit the titles array

// TO CHANGE DESCRIPTION:
//   Lines 128-131: Edit the paragraph text

// TO CHANGE BUTTON LINKS:
//   Line 145: Change #projects to your section
//   Line 152: Change #contact to your section
//   Line 158: Change /resume.pdf to your file

// TO CHANGE COLORS:
//   Modify globals.css @theme section
//   Or use different Tailwind color classes

// TO ADD MORE PARTICLES:
//   Line 95: Change 50 to higher number

// TO CHANGE GRADIENT:
//   Line 86: Change bg-hero-gradient to other gradient
//   Or define new gradient in globals.css
// */