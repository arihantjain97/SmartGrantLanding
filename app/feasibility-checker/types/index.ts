export type WizardStep = 1 | 2 | 3 | 4 | 5;

export interface WizardAnswers {
  businessName: string;
  industry: string;
  challenge: string;
  headcount: string;
  email?: string;
}

export type ChatMessage = {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  step: WizardStep;
  timestamp: number;
};

export type Lead = {
  id: string; // nanoid
  businessName: string;
  industry: string;
  challenge: string;
  headcount: string;
  email?: string;
  createdAt: Date;
}; 