'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/ui/section-heading';
import { StepCard } from '@/components/ui/step-card';
import { howItWorks } from '@/lib/constants';

export default function HowItWorks() {
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
              How SmartGrant Works
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground"
            >
              Our AI-powered platform simplifies the grant application process from end to end, helping Singapore SMEs access funding faster and with less effort.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Four-Step Process" 
            subtitle="SmartGrant makes grant applications simple with our streamlined process."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {howItWorks.map((step, index) => (
              <StepCard
                key={index}
                title={step.title}
                description={step.description}
                icon={step.icon}
                step={index + 1}
              />
            ))}
          </div>
          
          <div className="bg-muted rounded-lg p-6 md:p-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">Our Technology Platform</h3>
                <p className="mb-4 text-muted-foreground">
                  SmartGrant uses advanced AI and natural language processing to analyze your business profile and match it with available grant opportunities. Our platform then generates customized proposals that meet all government requirements.
                </p>
                <p className="mb-4 text-muted-foreground">
                  The entire process is automated, ensuring accuracy and consistency while dramatically reducing the time and effort needed to apply for grants.
                </p>
                <p className="font-semibold">Powered by Azure OpenAI Service and Microsoft's secure cloud infrastructure.</p>
              </div>
              <div className="md:w-1/2 relative rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="SmartGrant Technology" 
                  width={600} 
                  height={400}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="A Closer Look at Each Step" 
            subtitle="Here's a more detailed breakdown of how SmartGrant helps you through each phase of the grant application process."
          />
          
          {/* Step 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center gap-12 mb-20"
          >
            <div className="md:w-1/2">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
              <h3 className="text-2xl font-bold mb-4">Onboard</h3>
              <p className="mb-4 text-muted-foreground">
                Getting started with SmartGrant is simple. Complete our 5-minute business profile questionnaire, providing details about your company, industry, size, and specific needs.
              </p>
              <p className="mb-4 text-muted-foreground">
                Our smart form adapts to your responses, asking only relevant questions to build a comprehensive understanding of your business. You'll only need to complete this profile once, and it can be updated anytime as your business evolves.
              </p>
              <div className="bg-muted p-4 rounded-md">
                <p className="font-medium mb-2">What we collect:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Basic company information</li>
                  <li>Industry and business activities</li>
                  <li>Financial overview</li>
                  <li>Growth plans and objectives</li>
                  <li>Previous grant experience (if any)</li>
                </ul>
              </div>
            </div>
            <div className="md:w-1/2 relative rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Onboarding Process" 
                width={600} 
                height={400}
                className="w-full"
              />
            </div>
          </motion.div>
          
          {/* Step 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20"
          >
            <div className="md:w-1/2">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
              <h3 className="text-2xl font-bold mb-4">Match</h3>
              <p className="mb-4 text-muted-foreground">
                Our proprietary AI algorithm analyzes your business profile against all available government grants in Singapore, considering over 100 eligibility criteria and business factors.
              </p>
              <p className="mb-4 text-muted-foreground">
                Within minutes, you'll receive a personalized list of grants you're eligible for, ranked by match percentage and potential funding amount. Each match includes a detailed explanation of why it's suitable for your business.
              </p>
              <div className="bg-muted p-4 rounded-md">
                <p className="font-medium mb-2">Key features:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>95% accuracy in grant matching</li>
                  <li>Real-time updates as new grants become available</li>
                  <li>Detailed eligibility explanations</li>
                  <li>Funding amount estimates</li>
                </ul>
              </div>
            </div>
            <div className="md:w-1/2 relative rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Grant Matching" 
                width={600} 
                height={400}
                className="w-full"
              />
            </div>
          </motion.div>
          
          {/* Step 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center gap-12 mb-20"
          >
            <div className="md:w-1/2">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
              <h3 className="text-2xl font-bold mb-4">Generate</h3>
              <p className="mb-4 text-muted-foreground">
                Select the grants you want to pursue, and SmartGrant will automatically generate customized proposal drafts tailored to your business and the specific requirements of each grant.
              </p>
              <p className="mb-4 text-muted-foreground">
                Our AI analyzes successful applications and government guidelines to create compelling proposals. You'll have the opportunity to review and refine the generated content before submission.
              </p>
              <div className="bg-muted p-4 rounded-md">
                <p className="font-medium mb-2">What you get:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Complete proposal drafts</li>
                  <li>Required supporting documentation list</li>
                  <li>Budget templates</li>
                  <li>Implementation timelines</li>
                  <li>Editable content with AI suggestions</li>
                </ul>
              </div>
            </div>
            <div className="md:w-1/2 relative rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Proposal Generation" 
                width={600} 
                height={400}
                className="w-full"
              />
            </div>
          </motion.div>
          
          {/* Step 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row-reverse items-center gap-12"
          >
            <div className="md:w-1/2">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">4</div>
              <h3 className="text-2xl font-bold mb-4">Track</h3>
              <p className="mb-4 text-muted-foreground">
                After submission, SmartGrant continues to work for you by tracking your application status and ensuring you stay compliant with all post-approval requirements.
              </p>
              <p className="mb-4 text-muted-foreground">
                Our compliance tracking system monitors deadlines, documentation requirements, and reporting obligations, sending you timely reminders and guiding you through each step of the post-approval process.
              </p>
              <div className="bg-muted p-4 rounded-md">
                <p className="font-medium mb-2">Tracking features:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Real-time application status updates</li>
                  <li>Automated compliance calendar</li>
                  <li>Document management system</li>
                  <li>Milestone tracking</li>
                  <li>Funding disbursement monitoring</li>
                </ul>
              </div>
            </div>
            <div className="md:w-1/2 relative rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Application Tracking" 
                width={600} 
                height={400}
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Simplify Your Grant Applications?</h2>
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