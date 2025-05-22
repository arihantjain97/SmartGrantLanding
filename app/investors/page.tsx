'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/ui/section-heading';
import { StatCard } from '@/components/ui/stat-card';
import { TeamCard } from '@/components/ui/team-card';
import { ContactForm } from '@/components/ui/contact-form';
import { investorMetrics, teamMembers } from '@/lib/constants';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Sample revenue projection data
const revenueData = [
  { month: 'Jan', revenue: 150 },
  { month: 'Feb', revenue: 220 },
  { month: 'Mar', revenue: 310 },
  { month: 'Apr', revenue: 380 },
  { month: 'May', revenue: 480 },
  { month: 'Jun', revenue: 580 },
  { month: 'Jul', revenue: 670 },
  { month: 'Aug', revenue: 790 },
  { month: 'Sep', revenue: 890 },
  { month: 'Oct', revenue: 1020 },
  { month: 'Nov', revenue: 1150 },
  { month: 'Dec', revenue: 1300 },
];

export default function Investors() {
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
              Investor Information
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground"
            >
              SmartGrant is revolutionizing the SGD 250M grant consulting market in Singapore with AI-powered automation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Investment Opportunity */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Investment Opportunity" 
            subtitle="SmartGrant is seeking SGD 500K in seed funding to accelerate product development and market penetration."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <StatCard label="Market Size" value={investorMetrics.marketSize} index={0} />
            <StatCard label="Year 1 Revenue" value={investorMetrics.year1Revenue} index={1} />
            <StatCard label="Growth Rate" value={investorMetrics.cagr} index={2} />
            <StatCard label="Investment Ask" value={investorMetrics.investmentAsk} index={3} />
            <StatCard label="Current Traction" value={investorMetrics.traction} index={4} />
            <StatCard label="Projected Breakeven" value={investorMetrics.breakeven} index={5} />
          </div>
          
          <div className="bg-card rounded-lg shadow-sm p-6 md:p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6">Revenue Projections (Year 1)</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={revenueData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="hsl(var(--primary))" 
                    fill="hsl(var(--primary) / 0.2)" 
                    name="Monthly Revenue (SGD '000)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Market Opportunity" 
            subtitle="SmartGrant addresses a significant market need with a proven business model."
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Market Size & Growth</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <p>Singapore SME grant market: SGD 1B+ annually</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <p>30,000+ SMEs apply for grants each year</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <p>Grant consulting market: SGD 250M annually</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <p>7% YoY growth in government funding allocation</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <p>Expanding to regional markets in Year 3</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Business Model</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <p>SaaS subscription: SGD 99-299/month</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <p>Alternative: Low monthly fee + 1-3% success fee</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <p>Vendor commissions: 5-10% from referred services</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <p>Enterprise partnerships with accounting firms</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <p>90%+ gross margins at scale</p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Competitive Advantage</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <p>AI-powered matching algorithm (95% accuracy)</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <p>90% cost reduction vs. traditional consultants</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <p>End-to-end automation of grant process</p>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <p>Proprietary grant success database</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <p>First-mover advantage in Singapore</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <p>Strong partner network with government agencies</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use of Funds */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Use of Funds" 
            subtitle="The SGD 500K investment will be allocated across these key areas."
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-card p-6 rounded-lg shadow-sm mb-12">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <h4 className="font-bold text-primary text-2xl mb-1">40%</h4>
                  <p className="text-sm">Product Development</p>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <h4 className="font-bold text-primary text-2xl mb-1">30%</h4>
                  <p className="text-sm">Marketing & Sales</p>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <h4 className="font-bold text-primary text-2xl mb-1">30%</h4>
                  <p className="text-sm">Operations & Team</p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4">Key Milestones</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">1.</span>
                  <p><span className="font-medium">MVP Launch (Q3 2023):</span> Complete platform development and onboard first 50 pilot customers</p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">2.</span>
                  <p><span className="font-medium">Market Validation (Q4 2023):</span> Achieve 90%+ customer satisfaction and 80%+ retention rate</p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">3.</span>
                  <p><span className="font-medium">Revenue Traction (Q1-Q2 2024):</span> Reach 500 paying customers and SGD 75K MRR</p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">4.</span>
                  <p><span className="font-medium">Series A Readiness (Q3 2024):</span> Achieve positive unit economics and prepare for expansion</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Meet Our Team" 
            subtitle="Founded by experienced grant consultants and AI technologists."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard
                key={index}
                name={member.name}
                title={member.title}
                bio={member.bio}
                image={member.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <SectionHeading 
                title="Interested in Investing?" 
                subtitle="Fill out the form to request our investor deck and schedule a meeting with our founders."
                align="left"
                className="mb-8"
              />
              
              <div className="bg-muted p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4">Investment Highlights</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <p>SGD 2.7M projected Year 1 revenue with 30% CAGR</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <p>90%+ gross margins at scale</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <p>250+ early access signups pre-launch</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <p>Experienced founding team with industry expertise</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <p>Clear path to profitability within 18 months</p>
                  </li>
                </ul>
              </div>
              
              <div>
                <p className="text-muted-foreground mb-4">
                  For more detailed information or to discuss potential partnership opportunities, please contact our CEO directly at <a href="mailto:jane@smartgrant.sg" className="text-primary underline">jane@smartgrant.sg</a>
                </p>
              </div>
            </div>
            
            <div className="lg:w-1/2 bg-card rounded-lg shadow-sm p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Request Investor Information</h2>
              <ContactForm type="investor" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}