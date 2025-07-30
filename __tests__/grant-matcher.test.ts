import { describe, it, expect } from 'vitest';
import { matchGrants } from '@/lib/grant-matcher';
import type { Lead } from '@/lib/lead-store';

describe('matchGrants', () => {
  it('should return PSG for any input data', () => {
    const mockLeadData: Partial<Lead> = {
      businessName: 'Test Company',
      industry: 'Technology',
      eligibility: {
        shareholding30: true,
        employees200: true,
        operating6mo: true,
      },
      expandOverseas: false,
    };

    const result = matchGrants(mockLeadData);
    expect(result).toBe('PSG');
  });

  it('should return PSG for empty data', () => {
    const result = matchGrants({});
    expect(result).toBe('PSG');
  });

  it('should return PSG for partial data', () => {
    const partialData = {
      businessName: 'Another Company',
    };
    
    const result = matchGrants(partialData);
    expect(result).toBe('PSG');
  });
}); 