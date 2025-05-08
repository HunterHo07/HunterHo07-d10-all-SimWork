'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const features = [
  {
    id: 'immersive-environment',
    title: 'Immersive 2.5D Environment',
    description: 'Navigate a stylized workspace with different department zones and interactive stations.',
    details: 'Our 2.5D environment creates a visually stunning yet performant simulation that works across devices. Users can navigate between different zones representing various departments, interact with NPCs, and access specialized workstations for different roles.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z" />
        <path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z" />
        <path d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z" />
      </svg>
    ),
    color: 'from-purple-500 to-indigo-500',
  },
  {
    id: 'role-simulations',
    title: 'Role-Based Simulations',
    description: 'Experience tailored challenges for Developer, Designer, PM, Data Entry, and AI Engineer roles.',
    details: 'Each role in SimulEx has a dedicated simulation environment with tools and challenges specific to that profession. Developers work with code editors and terminals, designers with canvas tools, project managers with planning interfaces, and more.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
      </svg>
    ),
    color: 'from-cyan-500 to-blue-500',
  },
  {
    id: 'embedded-tools',
    title: 'Embedded Tools',
    description: 'Access terminal emulators, code editors, design canvases, and more within the simulation.',
    details: 'SimulEx integrates specialized tools directly into the simulation environment. Users can write and execute code, create designs, manage project timelines, and process data all within the platform, eliminating the need to switch between applications.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 7.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0V12zm2.25-3a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V9.75A.75.75 0 0113.5 9zm3.75-1.5a.75.75 0 00-1.5 0v9a.75.75 0 001.5 0v-9z" clipRule="evenodd" />
      </svg>
    ),
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 'quest-system',
    title: 'AI-Powered Quest System',
    description: 'Tackle procedurally generated challenges that adapt to your skill level and role.',
    details: "Our AI-driven quest system creates personalized challenges based on the user's role, skill level, and learning objectives. As users complete quests, the system adapts difficulty and complexity to ensure optimal learning progression and engagement.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M16.5 7.5h-9v9h9v-9z" />
        <path fillRule="evenodd" d="M8.25 2.25A.75.75 0 019 3v.75h2.25V3a.75.75 0 011.5 0v.75H15V3a.75.75 0 011.5 0v.75h.75a3 3 0 013 3v.75H21A.75.75 0 0121 9h-.75v2.25H21a.75.75 0 010 1.5h-.75V15H21a.75.75 0 010 1.5h-.75v.75a3 3 0 01-3 3h-.75V21a.75.75 0 01-1.5 0v-.75h-2.25V21a.75.75 0 01-1.5 0v-.75H9V21a.75.75 0 01-1.5 0v-.75h-.75a3 3 0 01-3-3v-.75H3A.75.75 0 013 15h.75v-2.25H3a.75.75 0 010-1.5h.75V9H3a.75.75 0 010-1.5h.75v-.75a3 3 0 013-3h.75V3a.75.75 0 01.75-.75zM6 6.75A.75.75 0 016.75 6h10.5a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V6.75z" clipRule="evenodd" />
      </svg>
    ),
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'analytics',
    title: 'Real-Time Analytics',
    description: 'Track performance metrics that correlate directly to job readiness and skill mastery.',
    details: 'SimulEx provides comprehensive analytics that go beyond simple completion metrics. Our platform tracks detailed performance indicators like code quality, problem-solving approach, attention to detail, and collaboration skills, providing actionable insights for both learners and managers.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z" clipRule="evenodd" />
      </svg>
    ),
    color: 'from-amber-500 to-orange-500',
  },
  {
    id: 'adaptive-difficulty',
    title: 'Adaptive Difficulty',
    description: 'Experience AI-driven scenario adjustment based on your performance and learning curve.',
    details: 'Our adaptive difficulty system ensures that users are always in their optimal learning zone. If a user is struggling, the system will provide additional guidance and simplify tasks. If a user is excelling, it will increase complexity and introduce new challenges to maintain engagement.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
      </svg>
    ),
    color: 'from-violet-500 to-purple-500',
  },
];

export default function FeaturesPage() {
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
            <span className="gradient-text">Platform</span> Features
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover the innovative features that make SimulEx the future of work simulation.
          </p>
        </motion.div>

        {/* Features list */}
        <div className="space-y-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              id={feature.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:grid-flow-dense' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Feature image/visualization */}
              <div className={`${index % 2 === 1 ? 'md:col-start-1' : 'md:col-start-2'}`}>
                <div className="glass-card p-8 rounded-xl h-[300px] flex items-center justify-center">
                  <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                    <div className="w-16 h-16 text-white">
                      {feature.icon}
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature content */}
              <div className={`${index % 2 === 1 ? 'md:col-start-2' : 'md:col-start-1'}`}>
                <div className={`w-16 h-1 rounded-full bg-gradient-to-r ${feature.color} mb-6`}></div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{feature.title}</h2>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <p className="text-gray-400">{feature.details}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA section */}
        <motion.div
          className="glass-card p-8 text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Experience SimulEx?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Try our platform today and see how our innovative features can transform your training and hiring processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard" className="btn-future px-8 py-3 text-lg inline-block">
              Start Free Trial
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 text-lg border border-purple-500 rounded-lg hover:bg-purple-500/10 transition-colors inline-block"
            >
              Schedule Demo
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
