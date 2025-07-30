'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { CheckCircle, FileText, Building, BarChart2, Globe, ArrowRight, ArrowLeft, Mic, Loader2, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';

export default function FeasibilityChecker() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    businessArea: '',
    projectSummary: '',
    businessName: '',
    industry: '',
    eligibility: {
      shareholding30: null,
      employees200: null,
      operating6mo: null
    },
    expandOverseas: null
  });
  const [email, setEmail] = useState('');

  // Reset the page when component mounts (refresh or navigation)
  useEffect(() => {
    // Scroll to top to ensure the form is visible
    window.scrollTo(0, 0);
    
    // Reset all state to initial values
    setCurrentStep(1);
    setFormData({
      businessArea: '',
      projectSummary: '',
      businessName: '',
      industry: '',
      eligibility: {
        shareholding30: null,
        employees200: null,
        operating6mo: null
      },
      expandOverseas: null
    });
    setEmail('');
  }, []);

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (field: string, value: any) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof typeof prev],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
  };

  const isStepComplete = () => {
    switch (currentStep) {
      case 1:
        return formData.businessArea && formData.projectSummary;
      case 2:
        return formData.businessName && formData.industry;
      case 3:
        return formData.eligibility.shareholding30 !== null && 
               formData.eligibility.employees200 !== null && 
               formData.eligibility.operating6mo !== null;
      case 4:
        return formData.expandOverseas !== null;
      case 5:
        return true;
      default:
        return false;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="text-lg font-semibold text-gray-700">Which business area do you need grant assistance for?</label>
              <div className="flex flex-wrap gap-3 mt-4">
                {["Adopt IT solutions", "Improve financial management", "Improve operational processes", "Hire, train, and upskill employees", "Develop brand & improve awareness", "Bring my business overseas"].map(area => (
                  <button 
                    key={area}
                    onClick={() => updateFormData('businessArea', area)}
                    className={`px-4 py-2 text-sm font-medium rounded-full border transition-colors ${
                      formData.businessArea === area 
                        ? 'bg-blue-600 text-white border-blue-600' 
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                    }`}
                  >
                    {area}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-lg font-semibold text-gray-700">Please provide a brief summary of your project.</label>
              <Textarea 
                value={formData.projectSummary}
                onChange={(e) => updateFormData('projectSummary', e.target.value)}
                placeholder="e.g., We want to implement a new CRM system to manage our customer relationships and improve sales..."
                rows={4}
                className="mt-3"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="text-lg font-semibold text-gray-700">What is your Business Name?</label>
              <Input 
                value={formData.businessName}
                onChange={(e) => updateFormData('businessName', e.target.value)}
                placeholder="Enter your business name"
                className="mt-3"
              />
            </div>
            <div>
              <label className="text-lg font-semibold text-gray-700">What is your organization's primary industry?</label>
              <Input 
                value={formData.industry}
                onChange={(e) => updateFormData('industry', e.target.value)}
                placeholder="e.g., Retail / F&B"
                className="mt-3"
              />
            </div>
          </div>
        );

      case 3:
        const hasAnyNo = Object.values(formData.eligibility).some(value => value === false);
        return (
          <div className="space-y-6">
            <div>
              <label className="text-lg font-semibold text-gray-700">Please confirm your eligibility:</label>
              <div className="space-y-4 mt-4">
                {[
                  { key: 'shareholding30', text: 'My company has ≥ 30% local shareholding' },
                  { key: 'employees200', text: 'Group employment size is < 200' },
                  { key: 'operating6mo', text: 'We\'ve been operating ≥ 6 months' }
                ].map(item => (
                  <div key={item.key} className="flex gap-4">
                    <button 
                      onClick={() => updateFormData(`eligibility.${item.key}`, true)}
                      className={`px-4 py-2 text-sm font-medium rounded-full border transition-colors ${
                        formData.eligibility[item.key as keyof typeof formData.eligibility] === true 
                          ? 'bg-blue-600 text-white border-blue-600' 
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                      }`}
                    >
                      Yes
                    </button>
                    <button 
                      onClick={() => updateFormData(`eligibility.${item.key}`, false)}
                      className={`px-4 py-2 text-sm font-medium rounded-full border transition-colors ${
                        formData.eligibility[item.key as keyof typeof formData.eligibility] === false 
                          ? 'bg-red-600 text-white border-red-600' 
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                      }`}
                    >
                      No
                    </button>
                    <span className="flex items-center text-sm text-gray-600">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            {hasAnyNo && (
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  Currently ineligible for PSG/EDG/MRA. Please review your eligibility criteria.
                </AlertDescription>
              </Alert>
            )}
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <label className="text-lg font-semibold text-gray-700">Do you want to expand overseas?</label>
              <div className="flex gap-4 mt-4">
                <button 
                  onClick={() => updateFormData('expandOverseas', true)}
                  className={`px-6 py-3 text-sm font-medium rounded-full border transition-colors ${
                    formData.expandOverseas === true 
                      ? 'bg-blue-600 text-white border-blue-600' 
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  Yes
                </button>
                <button 
                  onClick={() => updateFormData('expandOverseas', false)}
                  className={`px-6 py-3 text-sm font-medium rounded-full border transition-colors ${
                    formData.expandOverseas === false 
                      ? 'bg-blue-600 text-white border-blue-600' 
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        );

      case 5:
        // Calculate readiness based on answers
        let readiness = 0;
        if (formData.businessArea) readiness += 20;
        if (formData.projectSummary) readiness += 20;
        if (formData.businessName) readiness += 15;
        if (formData.industry) readiness += 15;
        if (formData.eligibility.shareholding30 === true) readiness += 10;
        if (formData.eligibility.employees200 === true) readiness += 10;
        if (formData.eligibility.operating6mo === true) readiness += 10;

        return (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Your Readiness Assessment</h3>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">{readiness}%</div>
                <div className="text-lg font-medium text-gray-700 mb-4">Readiness Score</div>
                <Progress value={readiness} className="h-3 mb-4" />
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
                <span className="font-bold text-xl text-blue-700">{readiness}%</span>
              </div>
              <div className="mt-4">
                <Progress value={readiness} className="h-3" />
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
        );

      default:
        return <div>Loading...</div>;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans flex flex-col items-center justify-center p-4 pt-32">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-gray-200">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Grant Feasibility Checker</h1>
          <p className="text-gray-500 mt-2">Answer a few questions to get your free grant eligibility report.</p>
        </div>
        
        {/* Progress Steps */}
        <div className="mt-8">
          <div className="flex items-center justify-between max-w-full mx-auto">
            {[
              { name: "Project", icon: FileText },
              { name: "Business", icon: Building },
              { name: "Eligibility", icon: CheckCircle },
              { name: "Expansion", icon: Globe },
              { name: "Readiness", icon: BarChart2 }
            ].map((step, index) => {
              const stepNumber = index + 1;
              const isCompleted = currentStep > stepNumber;
              const isActive = currentStep === stepNumber;
              const Icon = step.icon;
              return (
                <React.Fragment key={step.name}>
                  <div className="flex flex-col items-center text-center w-24">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isCompleted ? 'bg-blue-600 text-white' : isActive ? 'bg-blue-200 border-2 border-blue-600 text-blue-700' : 'bg-gray-200 text-gray-500'}`}>
                      {isCompleted ? <CheckCircle size={20} /> : <Icon size={20} />}
                    </div>
                    <p className={`mt-2 text-xs md:text-sm ${isActive || isCompleted ? 'font-semibold text-blue-700' : 'text-gray-500'}`}>{step.name}</p>
                  </div>
                  {index < 4 && <div className={`flex-1 h-1 rounded-full ${isCompleted ? 'bg-blue-600' : 'bg-gray-200'}`}></div>}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Main Content */}
        <main className="mt-8 min-h-[300px]">
          {renderStep()}
        </main>

        {/* Footer Navigation - Only show if not on final step */}
        {currentStep < 5 && (
          <footer className="mt-10 pt-6 border-t border-gray-200 flex items-center justify-between">
            <Button 
              onClick={handleBack} 
              disabled={currentStep === 1} 
              variant="outline"
              className="flex items-center gap-2"
            >
              <ArrowLeft size={16} /> Back
            </Button>
            <Button 
              onClick={handleNext} 
              disabled={!isStepComplete()}
              className="flex items-center gap-2"
            >
              Next Step <ArrowRight size={18} />
            </Button>
          </footer>
        )}

        {/* Footer - Only show on final step */}
        {currentStep === 5 && (
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
        )}
      </div>
    </div>
  );
} 