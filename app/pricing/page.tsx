'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/ui/section-heading';
import { PricingCard } from '@/components/ui/pricing-card';
import { FAQAccordion } from '@/components/ui/faq-accordion';
import { pricingPlans } from '@/lib/constants';

const pricingFaqs = [
  {
    question: 'Is there a free trial available?',
    answer: 'Yes, we offer a 14-day free trial for all pricing plans. You can try out all features before committing to a paid subscription.'
  },
  {
    question: 'Can I switch plans later?',
    answer: 'Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.'
  },
  {
    question: 'Do you offer refunds?',
    answer: 'We offer a 30-day money-back guarantee if you\'re not satisfied with our service for any reason.'
  },
  {
    question: 'Are there any long-term contracts?',
    answer: 'No, all our plans are month-to-month with no long-term commitments. You can cancel anytime.'
  },
  {
    question: 'Is there additional cost based on successful grant awards?',
    answer: 'Our standard plans have no success fees. However, we do offer an optional performance-based model with lower monthly fees plus 1-3% of successfully awarded grants for businesses that prefer this structure.'
  },
  {
    question: 'How many users can I add to my account?',
    answer: 'The Starter plan includes 1 user, Growth includes up to 3 users, and Enterprise includes up to 10 users. Additional user seats can be purchased for any plan.'
  },
  {
    question: 'Do you offer discounts for annual payment?',
    answer: 'Yes, we offer a 20% discount when you choose annual billing on any of our plans.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayNow, and bank transfers for Singapore businesses.'
  },
];

export default function Pricing() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Simple, Transparent Pricing
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground"
            >
              Choose the plan that's right for your business. Save up to 90% compared to traditional grant consultants.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 md:py-24 -mt-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                name={plan.name}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                cta={plan.cta}
                popular={plan.popular}
                index={index}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              All plans include a 14-day free trial. No credit card required.
            </p>
            <p className="font-medium mb-4">
              Need a custom plan for your business? <Link href="/contact" className="text-primary underline">Contact us</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Save Thousands on Grant Applications" 
            subtitle="See how much you can save with SmartGrant compared to traditional grant consultants."
          />
          
          <div className="max-w-3xl mx-auto bg-card p-6 md:p-8 rounded-lg shadow-sm">
            <div className="space-y-6">
              <div className="border-b border-border pb-6">
                <h3 className="text-xl font-bold mb-4">Traditional Grant Consultants</h3>
                <div className="flex justify-between items-center mb-2">
                  <span>Upfront fees</span>
                  <span className="font-semibold">$3,000 - $5,000</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span>Success fees</span>
                  <span className="font-semibold">5% - 15% of grant amount</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span>For a $100,000 grant</span>
                  <span className="font-semibold text-destructive">$8,000 - $20,000 total cost</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">SmartGrant</h3>
                <div className="flex justify-between items-center mb-2">
                  <span>Monthly subscription</span>
                  <span className="font-semibold">$99 - $299 per month</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span>For a 3-month application</span>
                  <span className="font-semibold">$297 - $897 total cost</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span>Optional success fee model</span>
                  <span className="font-semibold">1% - 3% of grant amount</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-bold">Your savings</span>
                  <span className="font-bold text-primary">Up to 96% cost reduction</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-primary/10 rounded-md border border-primary/20">
              <p className="font-medium">
                With SmartGrant, you get the same quality service and success rates as traditional consultants at a fraction of the cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Pricing FAQs" 
            subtitle="Common questions about our pricing and subscription model."
          />
          
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={pricingFaqs} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Saving?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Join our pilot program today and be among the first to experience the future of grant automation.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white text-primary hover:bg-white/90"
            asChild
          >
            <Link href="/pilot-program">Join Our Pilot Program</Link>
          </Button>
        </div>
      </section>
    </>
  );
}