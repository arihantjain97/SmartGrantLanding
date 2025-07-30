import React from 'react';
import Link from 'next/link';
import { CheckCircle, FileText, Building, BarChart2, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';

export default function FeasibilityChecker() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans flex flex-col items-center justify-center p-4 pt-32">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-gray-200">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Grant Feasibility Checker</h1>
          <p className="text-gray-500 mt-2">Answer a few questions to get your free grant eligibility report.</p>
        </div>
        
        {/* Progress Steps - All Completed */}
        <div className="mt-8">
          <div className="flex items-center justify-between max-w-full mx-auto">
            {[
              { name: "Project", icon: FileText },
              { name: "Business", icon: Building },
              { name: "Eligibility", icon: CheckCircle },
              { name: "Expansion", icon: Globe },
              { name: "Readiness", icon: BarChart2 }
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <React.Fragment key={step.name}>
                  <div className="flex flex-col items-center text-center w-24">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-blue-600 text-white">
                      <CheckCircle size={20} />
                    </div>
                    <p className="mt-2 text-xs md:text-sm font-semibold text-blue-700">{step.name}</p>
                  </div>
                  {index < 4 && <div className="flex-1 h-1 rounded-full bg-blue-600"></div>}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Main Content - Static Results */}
        <main className="mt-8 min-h-[300px]">
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Your Readiness Assessment</h3>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">75%</div>
                <div className="text-lg font-medium text-gray-700 mb-4">Readiness Score</div>
                <Progress value={75} className="h-3 mb-4" />
                <p className="text-sm text-gray-600">
                  Based on your answers, Productivity Solutions Grant (PSG) is your best starting point.
                </p>
              </div>
            </div>

            <div className="text-left bg-blue-50 border border-blue-200 rounded-lg p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-600">Top Grant Match:</span>
                <span className="font-bold text-xl text-blue-700">Productivity Solutions Grant (PSG)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-600">Readiness Score:</span>
                <span className="font-bold text-xl text-blue-700">75%</span>
              </div>
              <div className="mt-4">
                <Progress value={75} className="h-3" />
              </div>
              <div>
                <span className="font-medium text-gray-600">Rationale:</span>
                <p className="text-sm text-gray-700 mt-1">Based on your business profile, PSG is your best starting point for digital transformation and productivity improvements.</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Get your full report in your inbox:
                </label>
                <div className="flex gap-2">
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1"
                  />
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Send Report
                  </Button>
                </div>
              </div>
              
              <Button 
                className="w-full flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700"
                size="lg"
                asChild
              >
                <Link href="/pilot-signup">Continue to Pilot Sign-Up</Link>
              </Button>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-10 pt-6 border-t border-gray-200 flex items-center justify-between">
          <Button 
            variant="outline"
            className="flex items-center gap-2"
            asChild
          >
            <Link href="/">Back to Home</Link>
          </Button>
          <div className="text-sm text-gray-500">
            Powered by SmartGrant AI
          </div>
        </footer>
      </div>
    </div>
  );
} 