'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CtaSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;

    // Create particles
    if (particlesRef.current) {
      const particlesContainer = particlesRef.current;
      const numParticles = 50;
      
      for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute rounded-full';
        
        // Randomize particle properties
        const size = Math.random() * 3 + 1;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const opacity = Math.random() * 0.5 + 0.1;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 10;
        
        // Set particle styles
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.opacity = opacity.toString();
        
        // Assign color based on position
        if (posX < 33) {
          particle.style.backgroundColor = '#8b5cf6'; // Purple
        } else if (posX < 66) {
          particle.style.backgroundColor = '#06b6d4'; // Cyan
        } else {
          particle.style.backgroundColor = '#ec4899'; // Pink
        }
        
        particlesContainer.appendChild(particle);
        
        // Animate particle
        gsap.to(particle, {
          y: -100 - Math.random() * 100,
          x: (Math.random() - 0.5) * 50,
          opacity: 0,
          duration: duration,
          delay: delay,
          ease: 'power1.out',
          repeat: -1,
          repeatDelay: 0,
          onRepeat: () => {
            gsap.set(particle, {
              y: 100,
              x: 0,
              opacity: opacity,
            });
          },
        });
      }
    }

    gsap.fromTo(
      contentRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full py-24 px-4 overflow-hidden"
    >
      {/* Animated background particles */}
      <div ref={particlesRef} className="absolute inset-0 z-0 overflow-hidden"></div>
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 to-background"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div 
          ref={contentRef}
          className="glass-card p-8 md:p-12 rounded-xl overflow-hidden text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="gradient-text">Transform</span> Your Workforce?
            </h2>
            
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Join the future of work simulation today and revolutionize how you train, assess, and hire talent.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard" className="btn-future px-8 py-4 text-lg">
                Start Free Trial
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-4 text-lg border border-purple-500 rounded-lg hover:bg-purple-500/10 transition-colors"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-4xl font-bold gradient-text mb-2">72%</div>
            <p className="text-gray-400">Reduction in mis-hires</p>
          </motion.div>
          
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="text-4xl font-bold gradient-text-2 mb-2">3.5x</div>
            <p className="text-gray-400">Faster onboarding time</p>
          </motion.div>
          
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="text-4xl font-bold gradient-text-3 mb-2">89%</div>
            <p className="text-gray-400">Training completion rate</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
