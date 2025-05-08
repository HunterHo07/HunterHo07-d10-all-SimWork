'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { gsap } from 'gsap';

// Mock roles data
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
    position: { x: 10, y: 0, z: 5 },
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
    position: { x: -10, y: 0, z: 5 },
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
    position: { x: 0, y: 0, z: 10 },
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
    position: { x: -5, y: 0, z: -5 },
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
    position: { x: 5, y: 0, z: -5 },
  },
];

// Mock character data
const mockCharacter = {
  name: 'Alex',
  level: 5,
  role: 'developer',
  position: { x: 0, y: 0, z: 0 },
};

export default function SimulationPage() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [character, setCharacter] = useState(mockCharacter);
  const [gameState, setGameState] = useState<'intro' | 'selection' | 'simulation'>('intro');
  const [showQuestModal, setShowQuestModal] = useState(false);
  const simulationRef = useRef<HTMLDivElement>(null);
  const characterRef = useRef<HTMLDivElement>(null);
  
  // Handle character movement
  useEffect(() => {
    if (!simulationRef.current || !characterRef.current) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameState !== 'simulation') return;
      
      const speed = 10;
      let newPosition = { ...character.position };
      
      switch (e.key) {
        case 'ArrowUp':
        case 'w':
          newPosition.z -= speed;
          break;
        case 'ArrowDown':
        case 's':
          newPosition.z += speed;
          break;
        case 'ArrowLeft':
        case 'a':
          newPosition.x -= speed;
          break;
        case 'ArrowRight':
        case 'd':
          newPosition.x += speed;
          break;
      }
      
      setCharacter(prev => ({
        ...prev,
        position: newPosition,
      }));
      
      // Check if character is near any role station
      const nearbyRole = roles.find(role => {
        const distance = Math.sqrt(
          Math.pow(newPosition.x - role.position.x, 2) +
          Math.pow(newPosition.z - role.position.z, 2)
        );
        return distance < 15;
      });
      
      if (nearbyRole && nearbyRole.id !== selectedRole) {
        setSelectedRole(nearbyRole.id);
        setShowQuestModal(true);
      } else if (!nearbyRole && selectedRole) {
        setSelectedRole(null);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [character, gameState, selectedRole]);
  
  // Handle intro animation
  useEffect(() => {
    if (gameState === 'intro') {
      const introTimeout = setTimeout(() => {
        setGameState('selection');
      }, 3000);
      
      return () => clearTimeout(introTimeout);
    }
  }, [gameState]);
  
  // Handle role selection
  const handleRoleSelect = (roleId: string) => {
    setCharacter(prev => ({
      ...prev,
      role: roleId,
    }));
    setGameState('simulation');
  };
  
  // Calculate character position in the UI
  const getCharacterPosition = () => {
    const { x, z } = character.position;
    
    // Convert 3D coordinates to 2D screen position
    // This is a simple isometric projection
    const screenX = 50 + (x - z) * 0.7; // percentage from left
    const screenY = 50 + (x + z) * 0.4; // percentage from top
    
    return {
      left: `${screenX}%`,
      top: `${screenY}%`,
    };
  };
  
  return (
    <div className="pt-16 h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {gameState === 'intro' && (
          <motion.div
            key="intro"
            className="absolute inset-0 flex items-center justify-center bg-background z-50"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-12 h-12"
                >
                  <path d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 01.878.645 49.17 49.17 0 01.376 5.452.657.657 0 01-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 00-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 01-.595 4.845.75.75 0 01-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 01-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 01-.658.643 49.118 49.118 0 01-4.708-.36.75.75 0 01-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 005.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 00.659-.663 47.703 47.703 0 00-.31-4.82.75.75 0 01.83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 00.657-.642z" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold mb-2 gradient-text">SimulEx</h1>
              <p className="text-xl text-gray-300">Entering Simulation...</p>
            </motion.div>
          </motion.div>
        )}
        
        {gameState === 'selection' && (
          <motion.div
            key="selection"
            className="absolute inset-0 flex items-center justify-center bg-background z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-4xl w-full px-4">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center mb-12"
              >
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Role</h1>
                <p className="text-lg text-gray-300">
                  Select a professional role to begin your simulation experience
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {roles.map((role, index) => (
                  <motion.div
                    key={role.id}
                    className="glass-card p-6 cursor-pointer hover:border border-white/20 transition-all"
                    onClick={() => handleRoleSelect(role.id)}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div 
                      className="w-16 h-16 rounded-full mb-4 flex items-center justify-center"
                      style={{ backgroundColor: role.color }}
                    >
                      <div className="text-white">
                        {role.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{role.title}</h3>
                    <p className="text-gray-400 text-sm">{role.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
        
        {gameState === 'simulation' && (
          <div 
            ref={simulationRef}
            className="relative w-full h-full bg-gradient-to-b from-background to-purple-900/10 overflow-hidden"
          >
            {/* Grid lines */}
            <div className="grid-lines"></div>
            
            {/* Game UI */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
              <div className="glass p-2 rounded-lg flex items-center gap-2">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ 
                    backgroundColor: roles.find(r => r.id === character.role)?.color || '#6d28d9' 
                  }}
                >
                  {roles.find(r => r.id === character.role)?.icon}
                </div>
                <div>
                  <div className="text-sm font-medium">{character.name}</div>
                  <div className="text-xs text-gray-400">Level {character.level}</div>
                </div>
              </div>
              
              <div className="glass p-2 rounded-lg">
                <div className="text-xs text-gray-400">Use WASD or arrow keys to move</div>
              </div>
              
              <Link href="/dashboard" className="glass p-2 rounded-lg text-sm">
                Exit Simulation
              </Link>
            </div>
            
            {/* Character */}
            <motion.div
              ref={characterRef}
              className="absolute w-12 h-12 z-20"
              style={getCharacterPosition()}
              animate={{ 
                left: getCharacterPosition().left,
                top: getCharacterPosition().top,
              }}
              transition={{ type: 'spring', damping: 20 }}
            >
              <div 
                className="w-full h-full rounded-full flex items-center justify-center"
                style={{ 
                  backgroundColor: roles.find(r => r.id === character.role)?.color || '#6d28d9',
                  boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)'
                }}
              >
                <span className="text-white font-bold">{character.name.charAt(0)}</span>
              </div>
            </motion.div>
            
            {/* Role stations */}
            {roles.map((role) => (
              <div
                key={role.id}
                className="absolute w-16 h-16 z-10"
                style={{
                  left: `${50 + (role.position.x - role.position.z) * 0.7}%`,
                  top: `${50 + (role.position.x + role.position.z) * 0.4}%`,
                }}
              >
                <motion.div 
                  className="w-full h-full rounded-full flex items-center justify-center"
                  style={{ backgroundColor: role.color }}
                  animate={{ 
                    y: [0, -10, 0],
                    boxShadow: [
                      `0 0 20px ${role.color}50`,
                      `0 0 30px ${role.color}70`,
                      `0 0 20px ${role.color}50`,
                    ]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                >
                  <div className="text-white">
                    {role.icon}
                  </div>
                </motion.div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs whitespace-nowrap">
                  {role.title}
                </div>
              </div>
            ))}
            
            {/* Quest modal */}
            <AnimatePresence>
              {showQuestModal && selectedRole && (
                <motion.div
                  className="absolute inset-0 bg-black/50 flex items-center justify-center z-30"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="glass-card p-6 max-w-md w-full"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ 
                          backgroundColor: roles.find(r => r.id === selectedRole)?.color 
                        }}
                      >
                        {roles.find(r => r.id === selectedRole)?.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">
                          {roles.find(r => r.id === selectedRole)?.title} Station
                        </h3>
                        <p className="text-sm text-gray-400">
                          {roles.find(r => r.id === selectedRole)?.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-medium mb-2">Available Quests:</h4>
                      <div className="space-y-2">
                        <div className="glass p-3 rounded-lg cursor-pointer hover:bg-white/5">
                          <div className="flex justify-between mb-1">
                            <span className="font-medium">Debug Authentication Flow</span>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-400">
                              Medium
                            </span>
                          </div>
                          <p className="text-sm text-gray-400">
                            Fix critical bugs in the login system that cause users to be logged out immediately.
                          </p>
                        </div>
                        <div className="glass p-3 rounded-lg cursor-pointer hover:bg-white/5">
                          <div className="flex justify-between mb-1">
                            <span className="font-medium">Optimize Database Queries</span>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-red-500/20 text-red-400">
                              Hard
                            </span>
                          </div>
                          <p className="text-sm text-gray-400">
                            Improve performance by optimizing slow database queries in the user dashboard.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end gap-2">
                      <button 
                        className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20"
                        onClick={() => setShowQuestModal(false)}
                      >
                        Close
                      </button>
                      <Link 
                        href="/dashboard"
                        className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
                      >
                        Start Quest
                      </Link>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
