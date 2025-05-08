'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for individuals and small teams',
    price: 30,
    billingPeriod: 'per user / month',
    features: [
      'Access to all role simulations',
      'Basic analytics dashboard',
      'Standard quest library',
      'Email support',
      'Up to 5 users',
    ],
    cta: 'Start Free Trial',
    popular: false,
    color: 'from-cyan-500 to-blue-500',
  },
  {
    id: 'growth',
    name: 'Growth',
    description: 'Ideal for growing organizations',
    price: 1250,
    billingPeriod: 'per month / year',
    features: [
      'Everything in Starter',
      'Up to 500 users',
      'Advanced analytics',
      'Custom quest templates',
      'Priority support',
      'API access',
      'LMS integration',
      'Team management',
    ],
    cta: 'Contact Sales',
    popular: true,
    color: 'from-purple-500 to-indigo-500',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For large organizations with custom needs',
    price: 'Custom pricing',
    billingPeriod: '',
    features: [
      'Everything in Growth',
      'Unlimited users',
      'Custom scenario development',
      'Dedicated success manager',
      'SSO integration',
      'Custom reporting',
      'On-premise deployment option',
      'SLA guarantees',
      'White-labeling options',
      'Priority feature requests',
    ],
    cta: 'Contact Sales',
    popular: false,
    color: 'from-pink-500 to-rose-500',
  },
];

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current || !cardsRef.current) return;

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

    const cards = cardsRef.current.querySelectorAll('.pricing-card');

    gsap.fromTo(
      cards,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 px-4 overflow-hidden bg-gradient-to-b from-background to-cyan-900/10"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Flexible</span> Pricing
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Choose the plan that fits your organization's needs and scale as you grow.
          </p>

          {/* Billing toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm ${!isYearly ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-7 rounded-full bg-gray-700 flex items-center p-1"
              aria-label={isYearly ? 'Switch to monthly billing' : 'Switch to yearly billing'}
            >
              <motion.div
                className="w-5 h-5 rounded-full bg-purple-500"
                animate={{ x: isYearly ? 28 : 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`text-sm ${isYearly ? 'text-white' : 'text-gray-400'}`}>
              Yearly <span className="text-green-400 text-xs">(Save 20%)</span>
            </span>
          </div>
        </div>

        {/* Pricing cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`pricing-card relative flex ${
                plan.popular ? 'md:-mt-4 md:mb-4' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-4 py-1 rounded-full z-10">
                  Most Popular
                </div>
              )}

              <div className={`w-full glass-card p-6 md:p-8 flex flex-col ${
                plan.popular ? 'border-2 border-purple-500/50' : ''
              }`}>
                <div className="mb-4">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </div>

                <div className="mb-4">
                  {typeof plan.price === 'number' ? (
                    <div className="flex items-baseline flex-wrap">
                      <span className="text-3xl md:text-4xl font-bold">
                        ${isYearly && plan.id === 'starter' ? (plan.price * 0.8).toFixed(0) : plan.price.toLocaleString()}
                      </span>
                      {plan.billingPeriod && (
                        <span className="text-gray-400 text-sm ml-2">{plan.billingPeriod}</span>
                      )}
                    </div>
                  ) : (
                    <span className="text-3xl md:text-4xl font-bold">{plan.price}</span>
                  )}
                </div>

                <ul className="mb-6 flex-grow">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Link
                    href={plan.id === 'starter' ? '/dashboard' : '/contact'}
                    className={`block w-full py-3 px-4 rounded-lg text-center font-medium text-sm md:text-base whitespace-nowrap transition-colors ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-600 hover:to-indigo-600'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-4">
            Need a custom solution for your specific requirements?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            Contact our sales team
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
