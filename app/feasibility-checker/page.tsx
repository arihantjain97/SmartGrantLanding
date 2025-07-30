'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { ArrowRight, ArrowLeft, Mic, Loader2, CheckCircle, FileText, Building, BarChart2, Globe, HelpCircle, Users, Edit, Download, Lightbulb, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { leadStore, type Lead } from '@/lib/lead-store';
import { matchGrants } from '@/lib/grant-matcher';
import { nanoid } from 'nanoid';

// --- Main Application Component ---
export default function FeasibilityChecker() {
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 5;
    const [formData, setFormData] = useState<Partial<Lead>>({});
    const [isListening, setIsListening] = useState(false);
    const [formState, setFormState] = useState<'filling' | 'generating' | 'report'>('filling');
    const [isClient, setIsClient] = useState(false);
    const { toast } = useToast();

    // Ensure we're on the client side
    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleNext = () => {
        if (!isClient) return;
        console.log('➡️ [FeasibilityChecker] Next button clicked. Current step:', currentStep);
        if (currentStep === totalSteps) {
            console.log('🚀 [FeasibilityChecker] Generating report...');
            setFormState('generating');
            setTimeout(() => {
                console.log('📊 [FeasibilityChecker] Report generated, showing results');
                setFormState('report');
            }, 3000);
        } else {
            setCurrentStep(prev => Math.min(prev + 1, totalSteps));
            console.log('✅ [FeasibilityChecker] Moved to step:', currentStep + 1);
        }
    };

    const handleBack = () => {
        if (!isClient) return;
        console.log('⬅️ [FeasibilityChecker] Back button clicked. Current step:', currentStep);
        setCurrentStep(prev => Math.max(prev - 1, 1));
        console.log('✅ [FeasibilityChecker] Moved to step:', currentStep - 1);
    };

    const updateFormData = (field: string, value: any) => {
        if (!isClient) return;
        console.log('📝 [FeasibilityChecker] Updating form data:', { field, value });
        setFormData(prev => ({ ...prev, [field]: value }));
    };
    
    // Simulate voice input
    const handleVoiceInput = (field: string, mockValue: string) => {
        if (!isClient) return;
        console.log('🎤 [FeasibilityChecker] Voice input triggered:', { field, mockValue });
        setIsListening(true);
        setTimeout(() => {
            updateFormData(field, mockValue);
            setIsListening(false);
            console.log('✅ [FeasibilityChecker] Voice input completed');
        }, 2000);
    };

    const renderStep = () => {
        if (!isClient) return <div>Loading...</div>;
        
        switch (currentStep) {
            case 1: return <Step1 data={formData} update={updateFormData} onVoice={handleVoiceInput} />;
            case 2: return <Step2 data={formData} update={updateFormData} onVoice={handleVoiceInput} />;
            case 3: return <Step3 data={formData} update={updateFormData} onVoice={handleVoiceInput} />;
            case 4: return <Step4 data={formData} update={updateFormData} onVoice={handleVoiceInput} />;
            case 5: return <Step5 data={formData} update={updateFormData} onVoice={handleVoiceInput} />;
            default: return <Step1 data={formData} update={updateFormData} onVoice={handleVoiceInput} />;
        }
    };
    
    const isStepComplete = useMemo(() => {
        if (!isClient) return false;
        
        let isComplete = false;
        
        switch (currentStep) {
            case 1: 
                isComplete = !!(formData.businessArea && formData.projectSummary);
                console.log('🔍 [FeasibilityChecker] Step 1 validation:', { 
                    businessArea: !!formData.businessArea, 
                    projectSummary: !!formData.projectSummary, 
                    isComplete 
                });
                break;
            case 2: 
                isComplete = !!(formData.businessName && formData.industry);
                console.log('🔍 [FeasibilityChecker] Step 2 validation:', { 
                    businessName: !!formData.businessName, 
                    industry: !!formData.industry, 
                    isComplete 
                });
                break;
            case 3: 
                isComplete = !!(formData.eligibility?.shareholding30 && formData.eligibility?.employees200 && formData.eligibility?.operating6mo);
                console.log('🔍 [FeasibilityChecker] Step 3 validation:', { 
                    shareholding30: formData.eligibility?.shareholding30, 
                    employees200: formData.eligibility?.employees200, 
                    operating6mo: formData.eligibility?.operating6mo, 
                    isComplete 
                });
                break;
            case 4: 
                isComplete = formData.expandOverseas !== undefined;
                console.log('🔍 [FeasibilityChecker] Step 4 validation:', { 
                    expandOverseas: formData.expandOverseas, 
                    isComplete 
                });
                break;
            case 5: 
                isComplete = true; // No validation needed for readiness display
                console.log('🔍 [FeasibilityChecker] Step 5 validation: Always complete (readiness display)');
                break;
            default: 
                isComplete = false;
                console.log('❌ [FeasibilityChecker] Unknown step validation:', currentStep);
        }
        
        return isComplete;
    }, [formData, currentStep, isClient]);

    const handleEmailSubmit = (email: string) => {
        if (!isClient) return;
        
        console.log('📧 [FeasibilityChecker] Email submission triggered:', email);
        
        const lead: Lead = {
            id: nanoid(),
            businessName: formData.businessName || '',
            industry: formData.industry || '',
            businessArea: formData.businessArea || '',
            projectSummary: formData.projectSummary || '',
            eligibility: {
                shareholding30: formData.eligibility?.shareholding30 || false,
                employees200: formData.eligibility?.employees200 || false,
                operating6mo: formData.eligibility?.operating6mo || false,
            },
            expandOverseas: formData.expandOverseas || false,
            readiness: 75, // Mock readiness score
            topGrant: matchGrants(formData),
            email,
            createdAt: new Date(),
        };

        console.log('📋 [FeasibilityChecker] Created lead object:', {
            id: lead.id,
            businessName: lead.businessName,
            businessArea: lead.businessArea,
            topGrant: lead.topGrant,
            readiness: lead.readiness
        });

        if (process.env.NODE_ENV !== 'production') {
            console.log('💾 [FeasibilityChecker] Storing lead in development mode');
            leadStore.add(lead);
        } else {
            console.log('🚫 [FeasibilityChecker] Skipping lead storage in production mode');
        }

        toast({
            title: "Email sent!",
            description: "We've sent your feasibility report to your inbox.",
        });
        
        console.log('✅ [FeasibilityChecker] Email submission completed');
    };

    if (!isClient) {
        return (
            <div className="bg-gray-100 min-h-screen font-sans flex flex-col items-center justify-center p-4">
                <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-gray-200">
                    <div className="text-center">
                        <Loader2 className="animate-spin mx-auto mb-4" size={40} />
                        <h1 className="text-2xl font-bold text-gray-800">Loading...</h1>
                    </div>
                </div>
            </div>
        );
    }

    if (formState === 'generating') {
        return <GeneratingReport />;
    }
    
    if (formState === 'report') {
        return <ReportScreen formData={formData} onEmailSubmit={handleEmailSubmit} />;
    }

    return (
        <div className="bg-gray-100 min-h-screen font-sans flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-gray-200">
                <Header currentStep={currentStep} totalSteps={totalSteps} />
                <main className="mt-8 min-h-[300px]">
                    {renderStep()}
                </main>
                <Footer 
                    currentStep={currentStep} 
                    totalSteps={totalSteps} 
                    handleBack={handleBack} 
                    handleNext={handleNext} 
                    isStepComplete={isStepComplete}
                />
            </div>
            {isListening && (
                <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3">
                    <Loader2 className="animate-spin" /> Listening...
                </div>
            )}
        </div>
    );
}

// --- Sub-Components ---

const Header = ({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) => {
    const steps = [
        { name: "Project", icon: FileText },
        { name: "Business", icon: Building },
        { name: "Eligibility", icon: CheckCircle },
        { name: "Expansion", icon: Globe },
        { name: "Readiness", icon: BarChart2 }
    ];
    
    return (
        <div>
            <div className="text-center">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Grant Feasibility Checker</h1>
                <p className="text-gray-500 mt-2">Answer a few questions to get your free grant eligibility report.</p>
            </div>
            <div className="mt-8">
                <div className="flex items-center justify-between max-w-full mx-auto">
                    {steps.map((step, index) => {
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
                                {index < steps.length - 1 && <div className={`flex-1 h-1 rounded-full ${isCompleted ? 'bg-blue-600' : 'bg-gray-200'}`}></div>}
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

const Footer = ({ currentStep, totalSteps, handleBack, handleNext, isStepComplete }: {
    currentStep: number;
    totalSteps: number;
    handleBack: () => void;
    handleNext: () => void;
    isStepComplete: boolean;
}) => (
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
            disabled={!isStepComplete}
            className="flex items-center gap-2"
        >
            {currentStep === totalSteps ? 'Generate Report' : 'Next Step'} <ArrowRight size={18} />
        </Button>
    </footer>
);

const GeneratingReport = () => (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center text-center p-4">
        <Loader2 size={60} className="text-blue-500 animate-spin" />
        <h2 className="text-2xl font-bold text-gray-800 mt-6">Analyzing Your Profile...</h2>
        <p className="text-gray-600 mt-2">Our AI is generating your personalized grant eligibility report.</p>
    </div>
);

const ReportScreen = ({ formData, onEmailSubmit }: { formData: Partial<Lead>; onEmailSubmit: (email: string) => void }) => {
    const [email, setEmail] = useState('');
    const readiness = 75; // Mock readiness score
    const topGrant = "Productivity Solutions Grant (PSG)";

    const handleEmailSubmitClick = () => {
        if (email) {
            onEmailSubmit(email);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200">
                <div className="text-center">
                    <CheckCircle size={60} className="text-green-500 mx-auto" />
                    <h2 className="text-3xl font-bold text-gray-800 mt-6">Your Feasibility Report is Ready!</h2>
                    <p className="text-gray-500 mt-1">Generated by SmartGrant AI Engine</p>
                </div>
                
                <div className="mt-8 text-left bg-blue-50 border border-blue-200 rounded-lg p-6 space-y-4">
                    <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-600">Top Grant Match:</span>
                        <span className="font-bold text-xl text-blue-700">{topGrant}</span>
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
                        <p className="text-sm text-gray-700 mt-1">Based on your answers, {topGrant} is your best starting point.</p>
                    </div>
                </div>

                <div className="mt-8 space-y-4">
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
                            <Button onClick={handleEmailSubmitClick} disabled={!email}>
                                Send Report
                            </Button>
                        </div>
                    </div>
                    
                    <Button 
                        className="w-full flex items-center justify-center gap-3"
                        size="lg"
                        asChild
                    >
                        <a href="/pilot-signup">Continue to Pilot Sign-Up</a>
                    </Button>
                </div>
            </div>
        </div>
    );
};

// --- Step Components ---

const Step1 = ({ data, update, onVoice }: { data: Partial<Lead>; update: (field: string, value: any) => void; onVoice: (field: string, value: string) => void }) => {
    const businessAreas = ["Adopt IT solutions", "Improve financial management", "Improve operational processes", "Hire, train, and upskill employees", "Develop brand & improve awareness", "Bring my business overseas"];
    
    return (
        <div className="space-y-8 animate-fade-in">
            <div>
                <label className="text-lg font-semibold text-gray-700">Which business area do you need grant assistance for?</label>
                <div className="flex flex-wrap gap-3 mt-4">
                    {businessAreas.map(area => (
                        <OptionButton 
                            key={area} 
                            text={area} 
                            selected={data.businessArea === area} 
                            onClick={() => update('businessArea', area)} 
                        />
                    ))}
                </div>
            </div>
            <div>
                <label htmlFor="projectSummary" className="text-lg font-semibold text-gray-700">Please provide a brief summary of your project.</label>
                <div className="relative mt-3">
                    <Textarea 
                        id="projectSummary" 
                        rows={4} 
                        value={data.projectSummary || ''} 
                        onChange={(e) => update('projectSummary', e.target.value)} 
                        placeholder="e.g., We want to implement a new CRM system to manage our customer relationships and improve sales..."
                        className="pr-12"
                    />
                    <button 
                        onClick={() => onVoice('projectSummary', 'We want to implement a new CRM system to manage our customer relationships and improve sales.')} 
                        className="absolute top-3 right-3 text-gray-400 hover:text-blue-600"
                    >
                        <Mic size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

const Step2 = ({ data, update, onVoice }: { data: Partial<Lead>; update: (field: string, value: any) => void; onVoice: (field: string, value: string) => void }) => (
    <div className="space-y-6 animate-fade-in">
        <InputField 
            label="What is your Business Name?" 
            name="businessName" 
            value={data.businessName || ''} 
            onChange={update} 
            onVoice={onVoice} 
            mockVoice="The Gourmet Cafe Pte. Ltd." 
        />
        <InputField 
            label="What is your organization's primary industry?" 
            name="industry" 
            value={data.industry || ''} 
            onChange={update} 
            onVoice={onVoice} 
            mockVoice="Retail / F&B" 
        />
    </div>
);

const Step3 = ({ data, update, onVoice }: { data: Partial<Lead>; update: (field: string, value: any) => void; onVoice: (field: string, value: string) => void }) => {
    const eligibility = data.eligibility || {
        shareholding30: false,
        employees200: false,
        operating6mo: false,
    };
    const hasAnyNo = Object.values(eligibility).some(value => value === false);

    const updateEligibility = (field: string, value: boolean) => {
        update('eligibility', { ...eligibility, [field]: value });
    };

    return (
        <div className="space-y-6 animate-fade-in">
            <div>
                <label className="text-lg font-semibold text-gray-700">Please confirm your eligibility:</label>
                <div className="space-y-4 mt-4">
                    <OptionButton 
                        text="My company has ≥ 30% local shareholding" 
                        selected={eligibility.shareholding30 === true} 
                        onClick={() => updateEligibility('shareholding30', true)} 
                    />
                    <OptionButton 
                        text="Group employment size is < 200" 
                        selected={eligibility.employees200 === true} 
                        onClick={() => updateEligibility('employees200', true)} 
                    />
                    <OptionButton 
                        text="We've been operating ≥ 6 months" 
                        selected={eligibility.operating6mo === true} 
                        onClick={() => updateEligibility('operating6mo', true)} 
                    />
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
};

const Step4 = ({ data, update, onVoice }: { data: Partial<Lead>; update: (field: string, value: any) => void; onVoice: (field: string, value: string) => void }) => (
    <div className="space-y-8 animate-fade-in">
        <div>
            <label className="text-lg font-semibold text-gray-700">Do you want to expand overseas?</label>
            <div className="flex gap-4 mt-3">
                <OptionButton 
                    text="Yes" 
                    selected={data.expandOverseas === true} 
                    onClick={() => update('expandOverseas', true)} 
                />
                <OptionButton 
                    text="No" 
                    selected={data.expandOverseas === false} 
                    onClick={() => update('expandOverseas', false)} 
                />
            </div>
        </div>
    </div>
);

const Step5 = ({ data, update, onVoice }: { data: Partial<Lead>; update: (field: string, value: any) => void; onVoice: (field: string, value: string) => void }) => {
    const readiness = 75; // Mock readiness score
    const topGrant = "Productivity Solutions Grant (PSG)";

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Your Readiness Assessment</h3>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <div className="text-4xl font-bold text-blue-600 mb-2">{readiness}%</div>
                    <div className="text-lg font-medium text-gray-700 mb-4">Readiness Score</div>
                    <Progress value={readiness} className="h-3 mb-4" />
                    <p className="text-sm text-gray-600">
                        Based on your answers, {topGrant} is your best starting point.
                    </p>
                </div>
            </div>
        </div>
    );
};

// --- Helper UI Components ---

const OptionButton = ({ text, selected, onClick }: { text: string; selected: boolean; onClick: () => void }) => (
    <button 
        onClick={onClick} 
        className={`px-4 py-2 text-sm font-medium rounded-full border transition-colors ${selected ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
    >
        {text}
    </button>
);

const InputField = ({ label, name, value, onChange, onVoice, mockVoice, type = "text" }: {
    label: string;
    name: string;
    value: string;
    onChange: (field: string, value: string) => void;
    onVoice: (field: string, value: string) => void;
    mockVoice: string;
    type?: string;
}) => (
    <div>
        <label htmlFor={name} className="text-md font-semibold text-gray-700">{label}</label>
        <div className="relative mt-2">
            <Input 
                id={name} 
                name={name} 
                type={type} 
                value={value} 
                onChange={(e) => onChange(name, e.target.value)} 
            />
            <button 
                onClick={() => onVoice(name, mockVoice)} 
                className="absolute top-1/2 -translate-y-1/2 right-3 text-gray-400 hover:text-blue-600"
            >
                <Mic size={20} />
            </button>
        </div>
    </div>
); 