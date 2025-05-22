'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/section-heading';
import { ContactForm } from '@/components/ui/contact-form';
import { Check } from 'lucide-react';

export default function PilotProgram() {
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
              Join Our Pilot Program
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground"
            >
              Be among the first to experience SmartGrant's AI-powered grant automation platform and get exclusive early adopter benefits.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Pilot Benefits */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <SectionHeading 
                title="Pilot Program Benefits" 
                subtitle="Join our exclusive pilot program and enjoy these special benefits."
                align="left"
                className="mb-8"
              />
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-1 rounded-full bg-primary/10">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">50% Discount on Subscription</h3>
                    <p className="text-muted-foreground">
                      Pilot participants receive a 50% discount on our regular subscription rates for a full year after launch.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-1 rounded-full bg-primary/10">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Priority Access to New Features</h3>
                    <p className="text-muted-foreground">
                      Be the first to try new features and provide feedback that shapes the platform's development.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-1 rounded-full bg-primary/10">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
                    <p className="text-muted-foreground">
                      Receive personalized onboarding and direct access to our team of grant experts.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-1 rounded-full bg-primary/10">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Free Grant Consultation</h3>
                    <p className="text-muted-foreground">
                      Receive a complimentary 30-minute consultation with our grant experts to discuss your specific needs.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-1 rounded-full bg-primary/10">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Lifetime Recognition</h3>
                    <p className="text-muted-foreground">
                      Be recognized as a founding member of the SmartGrant community with special badges and acknowledgments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 bg-card rounded-lg shadow-sm p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Apply for the Pilot Program</h2>
              <ContactForm type="pilot" />
            </div>
          </div>
        </div>
      </section>

      {/* Pilot Timeline */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Pilot Program Timeline" 
            subtitle="Here's what to expect when you join our pilot program."
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:translate-x-0 translate-x-4"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="relative flex flex-col md:flex-row items-center md:items-start">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                    <h3 className="text-xl font-bold mb-2">Application</h3>
                    <p className="text-muted-foreground">Submit your information through our pilot application form.</p>
                  </div>
                  <div className="flex items-center justify-center z-10 h-10 w-10 rounded-full bg-primary text-primary-foreground text-lg font-bold">1</div>
                  <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0">
                    <p className="text-muted-foreground md:pt-10">June 2023</p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="relative flex flex-col md:flex-row items-center md:items-start">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0 md:order-1">
                    <p className="text-muted-foreground md:pt-10">July 2023</p>
                  </div>
                  <div className="flex items-center justify-center z-10 h-10 w-10 rounded-full bg-primary text-primary-foreground text-lg font-bold">2</div>
                  <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0 md:order-3">
                    <h3 className="text-xl font-bold mb-2">Selection & Onboarding</h3>
                    <p className="text-muted-foreground">Selected businesses will be contacted for onboarding and initial setup.</p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="relative flex flex-col md:flex-row items-center md:items-start">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                    <h3 className="text-xl font-bold mb-2">Pilot Launch</h3>
                    <p className="text-muted-foreground">Begin using the SmartGrant platform with direct support from our team.</p>
                  </div>
                  <div className="flex items-center justify-center z-10 h-10 w-10 rounded-full bg-primary text-primary-foreground text-lg font-bold">3</div>
                  <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0">
                    <p className="text-muted-foreground md:pt-10">August 2023</p>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="relative flex flex-col md:flex-row items-center md:items-start">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0 md:order-1">
                    <p className="text-muted-foreground md:pt-10">September - November 2023</p>
                  </div>
                  <div className="flex items-center justify-center z-10 h-10 w-10 rounded-full bg-primary text-primary-foreground text-lg font-bold">4</div>
                  <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0 md:order-3">
                    <h3 className="text-xl font-bold mb-2">Feedback & Iteration</h3>
                    <p className="text-muted-foreground">Provide feedback and suggestions as you use the platform, helping us refine the experience.</p>
                  </div>
                </div>
                
                {/* Step 5 */}
                <div className="relative flex flex-col md:flex-row items-center md:items-start">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                    <h3 className="text-xl font-bold mb-2">Full Launch</h3>
                    <p className="text-muted-foreground">SmartGrant officially launches to the public, with pilot participants receiving their exclusive benefits.</p>
                  </div>
                  <div className="flex items-center justify-center z-10 h-10 w-10 rounded-full bg-primary text-primary-foreground text-lg font-bold">5</div>
                  <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0">
                    <p className="text-muted-foreground md:pt-10">December 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="What Early Users Are Saying" 
            subtitle="Feedback from our initial test users."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center mb-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image 
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="John Lee" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">John Lee</h4>
                  <p className="text-sm text-muted-foreground">TechVision Pte Ltd</p>
                </div>
              </div>
              <p className="italic text-muted-foreground mb-4">
                "SmartGrant helped us secure an EDG grant in half the time it would have taken with a consultant. The AI-generated proposal was spot on and required minimal edits."
              </p>
              <div className="flex items-center">
                <div className="text-primary">★★★★★</div>
                <span className="ml-2 text-sm">5.0</span>
              </div>
            </motion.div>
            
            {/* Testimonial 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center mb-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image 
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Sarah Tan" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Sarah Tan</h4>
                  <p className="text-sm text-muted-foreground">GreenEarth Solutions</p>
                </div>
              </div>
              <p className="italic text-muted-foreground mb-4">
                "We were hesitant about using an AI platform for something as important as grant applications, but SmartGrant exceeded our expectations. The compliance tracking feature is a game-changer."
              </p>
              <div className="flex items-center">
                <div className="text-primary">★★★★★</div>
                <span className="ml-2 text-sm">5.0</span>
              </div>
            </motion.div>
            
            {/* Testimonial 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center mb-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image 
                    src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Raj Mehta" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Raj Mehta</h4>
                  <p className="text-sm text-muted-foreground">Innovate Manufacturing</p>
                </div>
              </div>
              <p className="italic text-muted-foreground mb-4">
                "As a small manufacturing business, we didn't have the resources to hire a consultant. SmartGrant made it possible for us to access government funding we otherwise wouldn't have pursued."
              </p>
              <div className="flex items-center">
                <div className="text-primary">★★★★☆</div>
                <span className="ml-2 text-sm">4.5</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Frequently Asked Questions" 
            subtitle="Common questions about the pilot program."
          />
          
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3">How many businesses will be accepted?</h3>
              <p className="text-muted-foreground">
                We're accepting 50 Singapore SMEs for our pilot program to ensure we can provide personalized support to each participant.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">Is there a cost to join the pilot?</h3>
              <p className="text-muted-foreground">
                No, the pilot program is completely free. You'll only start paying when we officially launch, and you'll receive a 50% discount for a full year.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">How long does the pilot program last?</h3>
              <p className="text-muted-foreground">
                The pilot program runs for approximately 3-4 months, from August to November 2023.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">What's expected of pilot participants?</h3>
              <p className="text-muted-foreground">
                We ask that you actively use the platform, provide feedback through our structured feedback channels, and participate in occasional user interviews to help us improve.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">What types of businesses are eligible?</h3>
              <p className="text-muted-foreground">
                Any Singapore-registered SME interested in applying for government grants is welcome to apply. We're looking for a diverse range of industries and company sizes.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">How will participants be selected?</h3>
              <p className="text-muted-foreground">
                Selection is based on a combination of factors including industry diversity, grant needs, and readiness to provide feedback. We aim to include a representative sample of Singapore's SME landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Limited Spots Available</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Don't miss this opportunity to transform how your business accesses government grants. Apply for our pilot program today.
          </p>
          <div className="inline-block bg-white text-primary hover:bg-white/90 font-medium rounded-md px-6 py-3">
            Scroll up to complete the application form
          </div>
        </div>
      </section>
    </>
  );
}