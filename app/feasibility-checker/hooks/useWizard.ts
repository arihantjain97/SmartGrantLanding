import { useState } from 'react';
import { nanoid } from 'nanoid';
import type { WizardStep, WizardAnswers, ChatMessage } from '../types';

const initialAnswers: WizardAnswers = {
  businessName: '',
  industry: '',
  challenge: '',
  headcount: '',
  email: '',
};

export function useWizard() {
  const [step, setStep] = useState<WizardStep>(1);
  const [answers, setAnswers] = useState<WizardAnswers>(initialAnswers);
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const updateAnswer = (field: keyof WizardAnswers, value: string) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep((s) => (s < 5 ? ((s + 1) as WizardStep) : s));
  const prevStep = () => setStep((s) => (s > 1 ? ((s - 1) as WizardStep) : s));

  const addMessage = (msg: Omit<ChatMessage, 'id' | 'timestamp'>) => {
    setMessages((prev) => [
      ...prev,
      { ...msg, id: nanoid(), timestamp: Date.now() },
    ]);
  };

  return {
    step,
    answers,
    messages,
    updateAnswer,
    nextStep,
    prevStep,
    addMessage,
    setStep,
    setAnswers,
    setMessages,
  };
} 