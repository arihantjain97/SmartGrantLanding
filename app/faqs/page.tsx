'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/ui/section-heading';
import { FAQAccordion } from '@/components/ui/faq-accordion';
import { faqs } from '@/lib/constants';

// Additional category-specific FAQs
const grantFaqs = [
  {
    question: 'What types of grants are available for Singapore SMEs?',
    answer: 'Singapore offers numerous grants for SMEs including the Productivity Solutions Grant (PSG), Enterprise Development Grant (EDG), Market Readiness Assistance (MRA), and many more. These grants support various business needs from technology adoption to overseas expansion.'
  },
  {
    question: 'How do I know which grant is right for my business?',
    answer: 'Determining the right grant depends on your specific business needs, growth stage, and objectives. SmartGrant\'s AI matching algorithm analyzes your business profile against all available grants to recommend the ones most suitable for you.'
  },
  {
    question: 'What are the typical approval rates for Singapore SME grants?',
    answer: 'Approval rates vary by grant program, but generally range from 30% to 70%. Factors affecting approval include how well your project aligns with grant objectives, the quality of your application, and available funding. SmartGrant users experience an average approval rate of 78%, significantly higher than the industry average.'
  },
  {
    question: 'How long does the grant application process usually take?',
    answer: 'The timeline varies by grant, but typically takes 2-3 months from submission to approval. After approval, fund disbursement generally follows a reimbursement model based on project milestones. SmartGrant helps you plan for these timelines and track all important dates.'
  },
];

const platformFaqs = [
  {
    question: 'Can SmartGrant integrate with my existing business software?',
    answer: 'Yes, SmartGrant offers API integrations with common business software including accounting packages, CRM systems, and document management platforms. This allows for seamless data flow and reduces duplicate data entry.'
  },
  {
    question: 'Is SmartGrant suitable for all industries?',
    answer: 'SmartGrant works for businesses across all industries. Our AI engine has been trained on successful applications from various sectors and can adapt recommendations to your specific industry context and requirements.'
  },
  {
    question: 'What if I need help beyond what the platform provides?',
    answer: 'While SmartGrant automates most of the grant process, we understand some situations require human expertise. All paid plans include access to our support team, and higher-tier plans include regular consulting sessions with grant experts.'
  },
  {
    question: 'Can I use SmartGrant for multiple grant applications simultaneously?',
    answer: 'Absolutely! One of the advantages of SmartGrant is the ability to manage multiple grant applications from a single dashboard. Our platform keeps track of all requirements, deadlines, and compliance needs across all your active applications.'
  },
];

const securityFaqs = [
  {
    question: 'How does SmartGrant ensure the security of my business data?',
    answer: 'SmartGrant employs enterprise-grade security measures including end-to-end encryption, secure cloud infrastructure (Microsoft Azure), regular security audits, and strict access controls. We comply with all Singapore data protection regulations including PDPA.'
  },
  {
    question: 'Where is my data stored?',
    answer: 'All data is stored in secure data centers in Singapore, ensuring compliance with local data residency requirements and minimizing latency for our users.'
  },
  {
    question: 'Does SmartGrant share my business information with third parties?',
    answer: 'We never share your business information with third parties without your explicit consent. The only exception is when you choose to submit grant applications, in which case the necessary information is shared with the relevant government agencies.'
  },
  {
    question: 'What happens to my data if I cancel my subscription?',
    answer: 'You can export all your data at any time. After account closure, we retain your data for a limited period as required by regulations, after which it is securely deleted from our systems.'
  },
];

export default function FAQs() {
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
              Frequently Asked Questions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground"
            >
              Find answers to common questions about SmartGrant and our services.
            </motion.p>
          </div>
        </div>
      </section>

      {/* General FAQs */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="General Questions" 
            subtitle="Common questions about SmartGrant and our services."
          />
          
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Grant-Specific FAQs */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Grant-Specific Questions" 
            subtitle="Learn more about Singapore SME grants and the application process."
          />
          
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={grantFaqs} />
          </div>
        </div>
      </section>

      {/* Platform FAQs */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Platform Questions" 
            subtitle="Technical questions about using SmartGrant."
          />
          
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={platformFaqs} />
          </div>
        </div>
      </section>

      {/* Security & Privacy FAQs */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Security & Privacy" 
            subtitle="Questions about how we protect your data."
          />
          
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={securityFaqs} />
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading 
            title="Still Have Questions?" 
            subtitle="Our team is here to help you with any additional questions you may have."
          />
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <Button size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/pilot-program">Join Pilot Program</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Grant Resources" 
            subtitle="Helpful resources to learn more about Singapore SME grants."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-bold mb-4">Grant Eligibility Guide</h3>
              <p className="text-muted-foreground mb-4">
                A comprehensive guide to understanding eligibility criteria for major Singapore SME grants.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/resources/eligibility-guide">Download Guide</Link>
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-bold mb-4">Grant Application Checklist</h3>
              <p className="text-muted-foreground mb-4">
                A detailed checklist of documents and information needed for successful grant applications.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/resources/application-checklist">Download Checklist</Link>
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-bold mb-4">Grant Success Stories</h3>
              <p className="text-muted-foreground mb-4">
                Case studies of businesses that successfully secured grants with SmartGrant.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/resources/success-stories">Read Stories</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}