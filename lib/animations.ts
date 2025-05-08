import { gsap } from 'gsap';
import { Variants } from 'framer-motion';

/**
 * GSAP Animations
 */

// Hero section animation timeline
export const createHeroAnimation = (elements: {
  title: HTMLElement | null;
  subtitle: HTMLElement | null;
  cta: HTMLElement | null;
  image: HTMLElement | null;
  background: HTMLElement | null;
}) => {
  const { title, subtitle, cta, image, background } = elements;
  
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  
  if (background) {
    tl.fromTo(
      background,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
      0
    );
  }
  
  if (title) {
    tl.fromTo(
      title,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      0.5
    );
  }
  
  if (subtitle) {
    tl.fromTo(
      subtitle,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      0.8
    );
  }
  
  if (image) {
    tl.fromTo(
      image,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2 },
      0.3
    );
  }
  
  if (cta) {
    tl.fromTo(
      cta,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      1.1
    );
  }
  
  return tl;
};

// Floating animation for 3D objects
export const createFloatingAnimation = (element: HTMLElement | null, options = {
  duration: 2,
  y: 15,
  rotation: 5,
}) => {
  if (!element) return;
  
  const tl = gsap.timeline({ repeat: -1, yoyo: true });
  
  tl.to(element, {
    y: options.y,
    rotation: options.rotation,
    duration: options.duration,
    ease: 'sine.inOut',
  });
  
  return tl;
};

// Staggered cards animation
export const animateCards = (cards: HTMLElement[] | NodeListOf<Element>) => {
  gsap.fromTo(
    cards,
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: cards[0],
        start: 'top bottom-=100',
      },
    }
  );
};

// Page transition animation
export const pageTransition = {
  in: (container: HTMLElement) => {
    const tl = gsap.timeline();
    
    tl.fromTo(
      container,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
    );
    
    return tl;
  },
  out: (container: HTMLElement) => {
    const tl = gsap.timeline();
    
    tl.to(
      container,
      { opacity: 0, y: -20, duration: 0.4, ease: 'power2.in' }
    );
    
    return tl;
  },
};

// Button hover animation
export const buttonHoverAnimation = (button: HTMLElement) => {
  const originalScale = 1;
  
  button.addEventListener('mouseenter', () => {
    gsap.to(button, {
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out',
    });
  });
  
  button.addEventListener('mouseleave', () => {
    gsap.to(button, {
      scale: originalScale,
      duration: 0.3,
      ease: 'power2.out',
    });
  });
};

/**
 * Framer Motion Variants
 */

// Fade in animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.4, ease: 'easeIn' }
  },
};

// Slide up animation
export const slideUp: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  exit: { 
    y: -20, 
    opacity: 0,
    transition: { duration: 0.4, ease: 'easeIn' }
  },
};

// Slide in from left
export const slideInLeft: Variants = {
  hidden: { x: -100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  exit: { 
    x: -50, 
    opacity: 0,
    transition: { duration: 0.4, ease: 'easeIn' }
  },
};

// Slide in from right
export const slideInRight: Variants = {
  hidden: { x: 100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  exit: { 
    x: 50, 
    opacity: 0,
    transition: { duration: 0.4, ease: 'easeIn' }
  },
};

// Scale animation
export const scale: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  exit: { 
    scale: 0.9, 
    opacity: 0,
    transition: { duration: 0.4, ease: 'easeIn' }
  },
};

// Staggered children animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Child item for staggered animations
export const staggerItem: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

// Hover animation for cards
export const cardHover: Variants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.03,
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    transition: { duration: 0.3, ease: 'easeOut' }
  },
};

// Pulse animation
export const pulse: Variants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'easeInOut',
    },
  },
};

// Rotate animation
export const rotate: Variants = {
  initial: { rotate: 0 },
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'linear',
    },
  },
};

// Wave animation for text
export const wave: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

// Character animation for wave effect
export const character: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200,
    },
  },
};
