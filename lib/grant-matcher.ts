import type { Lead } from './lead-store';

export function matchGrants(business: Partial<Lead>): 'PSG' | 'EDG' | 'MRA' {
  // TODO: Replace with OpenAI logic
  return 'PSG';
} 