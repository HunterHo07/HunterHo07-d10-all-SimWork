'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const roles = [
  {
    id: 'developer',
    title: 'Developer',
    description: 'Write, debug, and optimize code across various languages and frameworks.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z" clipRule="evenodd" />
      </svg>
    ),
    color: '#3B82F6',
    skills: [
      'JavaScript/TypeScript',
      'React',
      'Node.js',
      'Python',
      'Database Management',
      'API Integration',
      'Testing',
      'Version Control'
    ],
    image: '/images/roles/developer.png'
  },
  {
    id: 'designer',
    title: 'Designer',
    description: 'Create visually stunning and user-friendly interfaces and assets.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 00-3.471 2.987 10.04 10.04 0 014.815 4.815 18.748 18.748 0 002.987-3.472l3.386-5.079A1.902 1.902 0 0020.599 1.5zm-8.3 14.025a18.76 18.76 0 001.896-1.207 8.026 8.026 0 00-4.513-4.513A18.75 18.75 0 008.475 11.7l-.278.5a5.26 5.26 0 013.601 3.602l.502-.278zM6.75 13.5A3.75 3.75 0 003 17.25a1.5 1.5 0 01-1.601 1.497.75.75 0 00-.7 1.123 5.25 5.25 0 009.8-2.62 3.75 3.75 0 00-3.75-3.75z" clipRule="evenodd" />
      </svg>
    ),
    color: '#EC4899',
    skills: [
      'UI Design',
      'UX Research',
      'Prototyping',
      'Visual Design',
      'Design Systems',
      'Animation',
      'Accessibility',
      'Brand Identity'
    ],
    image: '/images/roles/designer.png'
  },
  {
    id: 'pm',
    title: 'Project Manager',
    description: 'Coordinate teams, track progress, and ensure project success.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 7.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0V12zm2.25-3a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V9.75A.75.75 0 0113.5 9zm3.75-1.5a.75.75 0 00-1.5 0v9a.75.75 0 001.5 0v-9z" clipRule="evenodd" />
      </svg>
    ),
    color: '#10B981',
    skills: [
      'Task Management',
      'Resource Allocation',
      'Risk Assessment',
      'Stakeholder Communication',
      'Agile Methodologies',
      'Budgeting',
      'Documentation',
      'Team Leadership'
    ],
    image: '/images/roles/pm.png'
  },
  {
    id: 'data-entry',
    title: 'Data Entry Specialist',
    description: 'Process and manage data with accuracy and efficiency.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z" />
        <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
      </svg>
    ),
    color: '#6366F1',
    skills: [
      'Data Validation',
      'Form Processing',
      'Spreadsheet Management',
      'Data Cleaning',
      'Record Keeping',
      'Attention to Detail',
      'Process Optimization',
      'Data Security'
    ],
    image: '/images/roles/data-entry.png'
  },
  {
    id: 'ai-engineer',
    title: 'AI Engineer',
    description: 'Develop and optimize AI models and systems.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.75 6.75 0 111.5 0v4.661c0 .326.277.585.6.544.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z" />
        <path fillRule="evenodd" d="M9.75 15.75a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zm4.5 0a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75z" clipRule="evenodd" />
      </svg>
    ),
    color: '#8B5CF6',
    skills: [
      'Prompt Engineering',
      'Machine Learning',
      'Data Analysis',
      'Model Training',
      'AI Integration',
      'Natural Language Processing',
      'Computer Vision',
      'Ethical AI Development'
    ],
    image: '/images/roles/ai-engineer.png'
  }
];

export default function RolesSection() {
  const [activeRole, setActiveRole] = useState(roles[0]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current) return;

    gsap.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full py-20 px-4 overflow-hidden bg-gradient-to-b from-background to-purple-900/10"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text-2">Specialized</span> Role Simulations
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Experience tailored challenges designed for different professional roles, each with unique tools and skill assessments.
          </p>
        </div>
        
        {/* Role selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {roles.map((role) => (
            <motion.button
              key={role.id}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                activeRole.id === role.id
                  ? 'bg-white/10 border border-white/20'
                  : 'hover:bg-white/5'
              }`}
              onClick={() => setActiveRole(role)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: role.color }}
              >
                {role.icon}
              </div>
              <span>{role.title}</span>
              {activeRole.id === role.id && (
                <motion.div
                  className="w-2 h-2 rounded-full bg-white ml-1"
                  layoutId="role-indicator"
                />
              )}
            </motion.button>
          ))}
        </div>
        
        {/* Role content */}
        <div ref={contentRef} className="glass-card p-8 rounded-xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRole.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* Role details */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: activeRole.color }}
                  >
                    {activeRole.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{activeRole.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6">{activeRole.description}</p>
                
                <h4 className="text-lg font-semibold mb-4">Key Skills</h4>
                <div className="grid grid-cols-2 gap-2">
                  {activeRole.skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={activeRole.color} className="w-5 h-5">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                      </svg>
                      <span>{skill}</span>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link href="/dashboard" className="btn-future">
                    Try {activeRole.title} Simulation
                  </Link>
                </motion.div>
              </div>
              
              {/* Role visualization */}
              <div className="relative h-[300px] md:h-auto flex items-center justify-center">
                <div className="absolute inset-0 rounded-xl glass overflow-hidden">
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{ backgroundColor: activeRole.color }}
                  ></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-32 h-32 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: activeRole.color }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    >
                      <div className="w-16 h-16 text-white">
                        {activeRole.icon}
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Floating elements */}
                  {activeRole.skills.slice(0, 4).map((skill, index) => (
                    <motion.div
                      key={skill}
                      className="absolute glass-card px-3 py-1 text-sm rounded-full"
                      style={{ 
                        left: `${20 + (index * 15)}%`,
                        top: `${20 + ((index % 3) * 20)}%`,
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + (index * 0.1) }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function Link({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
