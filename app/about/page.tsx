'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Hero section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About</span> SimulEx
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We're revolutionizing how organizations train, assess, and hire talent through immersive simulations.
          </p>
        </motion.div>
        
        {/* Mission section */}
        <div className="glass-card p-8 rounded-xl mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-300 mb-4">
                SimulEx was founded with a clear mission: to bridge the gap between theoretical knowledge and practical skills in the workplace.
              </p>
              <p className="text-gray-300 mb-4">
                We believe that traditional training and assessment methods fail to capture the complexity of real-world work environments. Our platform creates immersive, adaptive simulations that accurately reflect the challenges professionals face daily.
              </p>
              <p className="text-gray-300">
                By combining game design principles with cutting-edge AI technology, we're creating a new paradigm for workforce development that's engaging, effective, and data-driven.
              </p>
            </motion.div>
            
            <motion.div
              className="relative h-[300px] rounded-xl overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-16 h-16"
                  >
                    <path d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 01.878.645 49.17 49.17 0 01.376 5.452.657.657 0 01-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 00-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 01-.595 4.845.75.75 0 01-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 01-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 01-.658.643 49.118 49.118 0 01-4.708-.36.75.75 0 01-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 005.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 00.659-.663 47.703 47.703 0 00-.31-4.82.75.75 0 01.83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 00.657-.642z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Team section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Alex Chen', role: 'CEO & Founder', image: '/images/team/alex.png' },
              { name: 'Sarah Johnson', role: 'CTO', image: '/images/team/sarah.png' },
              { name: 'Michael Rodriguez', role: 'Head of Design', image: '/images/team/michael.png' },
              { name: 'Priya Patel', role: 'Head of AI', image: '/images/team/priya.png' },
            ].map((member, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-gray-400 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Roadmap section */}
        <div id="roadmap" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Roadmap</h2>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-purple-500/50 transform -translate-x-1/2"></div>
            
            {/* Phases */}
            {[
              { 
                title: 'Phase 1: MVP',
                date: 'Current',
                description: 'Web-based 2.5D simulation game with basic role-based quests and embedded tools.',
                color: 'from-purple-500 to-indigo-500',
                side: 'left'
              },
              { 
                title: 'Phase 2: Enhanced Features',
                date: 'Q3 2024',
                description: 'Desktop/mobile applications, expanded scenarios, advanced analytics.',
                color: 'from-cyan-500 to-blue-500',
                side: 'right'
              },
              { 
                title: 'Phase 3: Enterprise Integration',
                date: 'Q1 2025',
                description: 'VR/AR support, multiplayer capabilities, enterprise SSO, custom scenario builder.',
                color: 'from-pink-500 to-rose-500',
                side: 'left'
              },
              { 
                title: 'Phase 4: Global Expansion',
                date: 'Q4 2025',
                description: 'Localization, industry-specific templates, AI-driven NPCs with natural language processing.',
                color: 'from-amber-500 to-orange-500',
                side: 'right'
              },
            ].map((phase, index) => (
              <motion.div
                key={index}
                className={`relative mb-12 grid grid-cols-1 md:grid-cols-2 gap-4 items-center ${
                  phase.side === 'right' ? 'md:text-left' : 'md:text-right'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              >
                {/* Circle on timeline */}
                <div className="absolute left-1/2 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 transform -translate-x-1/2 -translate-y-1/2"></div>
                
                {/* Content */}
                <div className={`md:col-span-1 ${phase.side === 'right' ? 'md:col-start-2' : 'md:col-start-1'}`}>
                  <div className="glass-card p-6">
                    <div className={`w-full h-1 rounded-full bg-gradient-to-r ${phase.color} mb-4`}></div>
                    <div className="text-sm text-purple-300 mb-2">{phase.date}</div>
                    <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                    <p className="text-gray-300">{phase.description}</p>
                  </div>
                </div>
                
                {/* Empty column for spacing */}
                <div className="hidden md:block md:col-span-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* CTA section */}
        <motion.div
          className="glass-card p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            We're on a mission to transform how organizations develop their workforce. Be part of the future of training and assessment.
          </p>
          <Link href="/contact" className="btn-future px-8 py-3 text-lg inline-block">
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
