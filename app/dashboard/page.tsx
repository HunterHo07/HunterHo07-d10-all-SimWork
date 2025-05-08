'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Mock user data
const mockUser = {
  id: 'user1',
  name: 'Alex Johnson',
  email: 'alex@example.com',
  role: 'developer',
  level: 5,
  xp: 750,
  progress: 75,
  nextLevel: 1000,
  badges: ['Code Ninja', 'Bug Hunter', 'API Master'],
  completedQuests: 12,
  totalQuests: 25,
};

// Mock quests data
const mockQuests = [
  {
    id: 'quest1',
    title: 'Debug the Authentication Flow',
    role: 'developer',
    difficulty: 'medium',
    status: 'in-progress',
    progress: 60,
    dueDate: '2024-06-15',
  },
  {
    id: 'quest2',
    title: 'Optimize Database Queries',
    role: 'developer',
    difficulty: 'hard',
    status: 'not-started',
    progress: 0,
    dueDate: '2024-06-20',
  },
  {
    id: 'quest3',
    title: 'Implement User Settings UI',
    role: 'developer',
    difficulty: 'easy',
    status: 'completed',
    progress: 100,
    dueDate: '2024-06-10',
  },
];

// Mock stats data
const mockStats = [
  { name: 'Accuracy', value: 87, color: 'from-purple-500 to-indigo-500' },
  { name: 'Speed', value: 92, color: 'from-cyan-500 to-blue-500' },
  { name: 'Problem Solving', value: 85, color: 'from-pink-500 to-rose-500' },
  { name: 'Teamwork', value: 78, color: 'from-amber-500 to-orange-500' },
];

export default function DashboardPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  
  // Simulate authentication check
  useEffect(() => {
    const checkAuth = setTimeout(() => {
      setIsLoading(false);
      // For demo purposes, we'll default to logged out
      setIsLoggedIn(false);
    }, 1000);
    
    return () => clearTimeout(checkAuth);
  }, []);
  
  // Handle login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoggedIn(true);
      setIsLoading(false);
    }, 1500);
  };

  if (isLoading) {
    return (
      <div className="pt-24 pb-16 px-4 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 animate-pulse"></div>
          <p className="text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-md">
          <motion.div 
            className="glass-card p-8 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-2">Welcome to SimulEx</h1>
              <p className="text-gray-400">Sign in to access your dashboard</p>
            </div>
            
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  defaultValue="demo@simulex.ai"
                  className="w-full px-4 py-2 bg-white/5 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  defaultValue="password"
                  className="w-full px-4 py-2 bg-white/5 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <div className="flex justify-end mt-1">
                  <a href="#" className="text-sm text-purple-400 hover:text-purple-300">
                    Forgot password?
                  </a>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full btn-future py-2"
              >
                Sign In
              </button>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-400">
                  Don't have an account?{' '}
                  <a href="#" className="text-purple-400 hover:text-purple-300">
                    Sign up
                  </a>
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Dashboard header */}
        <motion.div 
          className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, {mockUser.name}</h1>
            <p className="text-gray-400">Level {mockUser.level} {mockUser.role.charAt(0).toUpperCase() + mockUser.role.slice(1)}</p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <button className="btn-future">
              Start New Quest
            </button>
          </div>
        </motion.div>
        
        {/* Dashboard tabs */}
        <div className="mb-8 border-b border-gray-800">
          <div className="flex overflow-x-auto">
            {['overview', 'quests', 'skills', 'badges', 'settings'].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 font-medium whitespace-nowrap ${
                  activeTab === tab
                    ? 'text-white border-b-2 border-purple-500'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        {/* Dashboard content */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Progress card */}
            <motion.div
              className="glass-card p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-xl font-bold mb-4">Level Progress</h2>
              
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <span>Level {mockUser.level}</span>
                  <span>{mockUser.xp} / {mockUser.nextLevel} XP</span>
                </div>
                <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 to-indigo-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${mockUser.progress}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                  ></motion.div>
                </div>
              </div>
              
              <div className="text-sm text-gray-400">
                {mockUser.nextLevel - mockUser.xp} XP needed for next level
              </div>
            </motion.div>
            
            {/* Quests card */}
            <motion.div
              className="glass-card p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-xl font-bold mb-4">Quest Progress</h2>
              
              <div className="flex items-center justify-center h-32">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#374151"
                      strokeWidth="10"
                    />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray={251.2}
                      initial={{ strokeDashoffset: 251.2 }}
                      animate={{ 
                        strokeDashoffset: 251.2 - (251.2 * mockUser.completedQuests / mockUser.totalQuests) 
                      }}
                      transition={{ duration: 1, delay: 0.5 }}
                      transform="rotate(-90 50 50)"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#6366F1" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-2xl font-bold">{mockUser.completedQuests}</span>
                    <span className="text-sm text-gray-400">of {mockUser.totalQuests}</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-4">
                <span className="text-sm text-gray-400">
                  {mockUser.totalQuests - mockUser.completedQuests} quests remaining
                </span>
              </div>
            </motion.div>
            
            {/* Badges card */}
            <motion.div
              className="glass-card p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-xl font-bold mb-4">Recent Badges</h2>
              
              <div className="flex flex-wrap gap-2">
                {mockUser.badges.map((badge, index) => (
                  <div
                    key={index}
                    className="px-3 py-1 rounded-full bg-white/10 text-sm"
                  >
                    {badge}
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <Link href="#" className="text-purple-400 hover:text-purple-300 text-sm">
                  View all badges
                </Link>
              </div>
            </motion.div>
            
            {/* Active quests */}
            <motion.div
              className="md:col-span-2 glass-card p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-xl font-bold mb-4">Active Quests</h2>
              
              <div className="space-y-4">
                {mockQuests.filter(q => q.status !== 'completed').map((quest) => (
                  <div key={quest.id} className="border border-gray-700 rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <h3 className="font-medium">{quest.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        quest.difficulty === 'easy' ? 'bg-green-500/20 text-green-400' :
                        quest.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {quest.difficulty.charAt(0).toUpperCase() + quest.difficulty.slice(1)}
                      </span>
                    </div>
                    
                    <div className="mb-2">
                      <div className="flex justify-between mb-1 text-xs">
                        <span>Progress</span>
                        <span>{quest.progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-purple-500 to-indigo-500"
                          style={{ width: `${quest.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>Due: {new Date(quest.dueDate).toLocaleDateString()}</span>
                      <Link href="#" className="text-purple-400 hover:text-purple-300">
                        Continue
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 text-center">
                <Link href="#" className="text-purple-400 hover:text-purple-300 text-sm">
                  View all quests
                </Link>
              </div>
            </motion.div>
            
            {/* Skills */}
            <motion.div
              className="glass-card p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="text-xl font-bold mb-4">Skill Ratings</h2>
              
              <div className="space-y-4">
                {mockStats.map((stat) => (
                  <div key={stat.name}>
                    <div className="flex justify-between mb-1">
                      <span>{stat.name}</span>
                      <span>{stat.value}/100</span>
                    </div>
                    <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${stat.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${stat.value}%` }}
                        transition={{ duration: 1, delay: 0.7 }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <Link href="#" className="text-purple-400 hover:text-purple-300 text-sm">
                  View detailed skills
                </Link>
              </div>
            </motion.div>
          </div>
        )}
        
        {activeTab !== 'overview' && (
          <div className="glass-card p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
            <p className="text-gray-400 mb-6">
              The {activeTab} section is under development and will be available soon.
            </p>
            <button
              onClick={() => setActiveTab('overview')}
              className="btn-future"
            >
              Back to Overview
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
