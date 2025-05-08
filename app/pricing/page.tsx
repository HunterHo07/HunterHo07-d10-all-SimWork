'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for individuals and small teams',
    monthlyPrice: 30,
    yearlyPrice: 24,
    billingPeriod: 'per user',
    features: [
      'Access to all role simulations',
      'Basic analytics dashboard',
      'Standard quest library',
      'Email support',
      'Up to 5 users',
    ],
    limitations: [
      'No custom quests',
      'No API access',
      'Limited analytics',
    ],
    cta: 'Start Free Trial',
    popular: false,
    color: 'from-cyan-500 to-blue-500',
  },
  {
    id: 'growth',
    name: 'Growth',
    description: 'Ideal for growing organizations',
    monthlyPrice: 1500,
    yearlyPrice: 1250,
    billingPeriod: 'per month',
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
    limitations: [
      'No custom scenario development',
      'No dedicated success manager',
      'Standard SLA',
    ],
    cta: 'Contact Sales',
    popular: true,
    color: 'from-purple-500 to-indigo-500',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For large organizations with custom needs',
    monthlyPrice: null,
    yearlyPrice: null,
    priceLabel: 'Custom pricing',
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
    limitations: [],
    cta: 'Contact Sales',
    popular: false,
    color: 'from-pink-500 to-rose-500',
  },
];

const faqs = [
  {
    question: 'How does the free trial work?',
    answer: 'Our free trial gives you full access to the Starter plan for 14 days. No credit card is required to sign up, and you can cancel at any time. At the end of the trial, you can choose to upgrade to a paid plan or your account will automatically switch to a limited free version.'
  },
  {
    question: 'Can I change plans later?',
    answer: 'Yes, you can upgrade, downgrade, or cancel your plan at any time. When upgrading, the new features will be available immediately. When downgrading, the changes will take effect at the end of your current billing cycle.'
  },
  {
    question: 'Do you offer educational discounts?',
    answer: 'Yes, we offer special pricing for educational institutions. Please contact our sales team for more information about our educational plans and discounts.'
  },
  {
    question: 'How does user licensing work?',
    answer: 'For the Starter plan, you pay per active user. For Growth and Enterprise plans, we offer tiered pricing based on the total number of users in your organization. An active user is defined as anyone who logs into the platform at least once during the billing period.'
  },
  {
    question: 'Can I customize the simulations for my organization?',
    answer: 'The Growth plan allows you to customize quest templates and parameters. For fully custom simulations tailored to your specific organizational needs, processes, and branding, the Enterprise plan offers custom scenario development with our professional services team.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, including Visa, Mastercard, and American Express. For Growth and Enterprise plans, we also offer invoicing with net-30 payment terms.'
  },
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(true);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

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
            <span className="gradient-text">Flexible</span> Pricing
          </h1>
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
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`relative ${
                plan.popular ? 'md:-mt-4 md:mb-4' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -mt-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-4 py-1.5 rounded-full z-10 shadow-lg">
                  Most Popular
                </div>
              )}

              <div className={`h-full glass-card p-8 flex flex-col ${
                plan.popular ? 'border-2 border-purple-500/50 mt-6 pt-6' : ''
              }`}>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </div>

                <div className="mb-6">
                  {plan.monthlyPrice !== null && plan.yearlyPrice !== null ? (
                    <>
                      <span className="text-4xl font-bold">
                        ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      {plan.billingPeriod && (
                        <span className="text-gray-400 text-sm ml-2">
                          {plan.billingPeriod}{isYearly ? ' / year' : ' / month'}
                        </span>
                      )}
                    </>
                  ) : (
                    <span className="text-4xl font-bold">{plan.priceLabel}</span>
                  )}
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold uppercase text-gray-400 mb-3">Features</h4>
                  <ul className="mb-6 space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-400 mt-0.5">
                          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.limitations.length > 0 && (
                    <>
                      <h4 className="text-sm font-semibold uppercase text-gray-400 mb-3">Limitations</h4>
                      <ul className="space-y-3">
                        {plan.limitations.map((limitation, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-500 mt-0.5">
                              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm text-gray-400">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>

                <div className="mt-auto">
                  <Link
                    href={plan.id === 'starter' ? '/dashboard' : '/contact'}
                    className={`w-full py-3 rounded-lg text-center font-medium transition-colors ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-600 hover:to-indigo-600'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison table */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Plan Comparison</h2>

          <div className="overflow-x-auto">
            <table className="w-full glass-card">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-center">Starter</th>
                  <th className="p-4 text-center">Growth</th>
                  <th className="p-4 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="p-4">Users</td>
                  <td className="p-4 text-center">Up to 5</td>
                  <td className="p-4 text-center">Up to 500</td>
                  <td className="p-4 text-center">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-4">Role Simulations</td>
                  <td className="p-4 text-center">All Roles</td>
                  <td className="p-4 text-center">All Roles</td>
                  <td className="p-4 text-center">All Roles + Custom</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-4">Analytics</td>
                  <td className="p-4 text-center">Basic</td>
                  <td className="p-4 text-center">Advanced</td>
                  <td className="p-4 text-center">Custom</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-4">Support</td>
                  <td className="p-4 text-center">Email</td>
                  <td className="p-4 text-center">Priority</td>
                  <td className="p-4 text-center">Dedicated Manager</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-4">API Access</td>
                  <td className="p-4 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-red-500 mx-auto">
                      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="p-4 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-500 mx-auto">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="p-4 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-500 mx-auto">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                    </svg>
                  </td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-4">Custom Quests</td>
                  <td className="p-4 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-red-500 mx-auto">
                      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="p-4 text-center">Templates Only</td>
                  <td className="p-4 text-center">Fully Custom</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-4">SSO Integration</td>
                  <td className="p-4 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-red-500 mx-auto">
                      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="p-4 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-red-500 mx-auto">
                      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="p-4 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-500 mx-auto">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* FAQs */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-card overflow-hidden">
                <button
                  className="w-full p-4 text-left flex justify-between items-center"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-5 h-5 transition-transform ${
                      expandedFaq === index ? 'transform rotate-180' : ''
                    }`}
                  >
                    <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
                  </svg>
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: expandedFaq === index ? 'auto' : 0, opacity: expandedFaq === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 pt-0 text-gray-400">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA section */}
        <motion.div
          className="glass-card p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Our team is ready to help you find the perfect plan for your organization's needs.
          </p>
          <Link href="/contact" className="btn-future px-8 py-3 text-lg inline-block">
            Contact Sales
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
