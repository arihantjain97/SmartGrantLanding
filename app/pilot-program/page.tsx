'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/ui/section-heading';
import { FAQAccordion } from '@/components/ui/faq-accordion';
import { CheckCircle, Users, Zap, Shield } from 'lucide-react';

const benefits = [
  {
    icon: CheckCircle,
    title: "Early Access",
    description: "Be among the first to experience SmartGrant's AI-powered grant automation"
  },
  {
    icon: Users,
    title: "Direct Feedback",
    description: "Shape the product with your input and help us build the perfect solution"
  },
  {
    icon: Zap,
    title: "Free Trial Period",
    description: "Test all features at no cost during the pilot program"
  },
  {
    icon: Shield,
    title: "Priority Support",
    description: "Get dedicated support from our team throughout the pilot"
  }
];

const faqs = [
  {
    question: "What is included in the pilot trial?",
    answer: "The pilot trial includes full access to our grant matching AI, proposal drafting tools, and compliance tracking features. You'll also get priority support and the ability to influence product development."
  },
  {
    question: "How long does the pilot trial last?",
    answer: "The pilot trial runs for 3 months, giving you ample time to test all features and see real results with your grant applications."
  },
  {
    question: "Is there any cost for the pilot trial?",
    answer: "No, the pilot trial is completely free. We're looking for feedback to improve our platform before the official launch."
  },
  {
    question: "What happens after the pilot trial ends?",
    answer: "Pilot participants will receive exclusive early-bird pricing and priority access to the full platform when it launches."
  }
];

export default function PilotProgram() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10" />
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Start Your SmartGrant Journey
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Join our exclusive pilot program and be among the first to experience the future of grant automation. Get early access, provide feedback, and help shape the platform.
              </p>
              
              {/* Hero Statement */}
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary text-primary-foreground rounded-full px-3 py-1 text-sm font-medium">
                    Beta Access
                  </div>
                  <span className="text-sm text-muted-foreground">Early Users Program</span>
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  Exclusive Access for SMEs, Vendors & Consultants
                </h2>
                <p className="text-muted-foreground">
                  Be among the first to experience AI-powered grant automation. Shape the future of funding access in Singapore.
                </p>
              </div>
              
              <Button size="lg" variant="outline" asChild>
                <Link href="/how-it-works">Learn More</Link>
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:w-1/2 relative"
            >
              <div className="flex w-full max-w-md flex-col items-center mx-auto">
                <div className="w-full bg-white rounded-xl shadow-lg p-8 border">
                  <h3 className="text-xl font-semibold text-center mb-6">
                    Ready to Get Started?
                  </h3>
                  <Button size="lg" className="w-full mb-4" asChild>
                    <Link href="/pilot-trial-signup">
                      Join the Pilot Trial →
                    </Link>
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Early access • Social login coming soon
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Why Join the Pilot Trial?" 
            subtitle="Get exclusive early access and help shape the future of grant automation"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Grant Process?</h2>
            <p className="text-lg opacity-90 mb-8">
              Join hundreds of SMEs, consultants, and vendors who are already signed up for early access to SmartGrant.
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-primary hover:bg-white/90"
              asChild
            >
              <Link href="/pilot-trial-signup">Join the Pilot Trial</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Pilot Trial FAQ" 
            subtitle="Everything you need to know about joining our pilot program"
          />
          
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Ready to get started?
            </p>
            <Button asChild>
              <Link href="/pilot-trial-signup">Join the Pilot Trial</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}