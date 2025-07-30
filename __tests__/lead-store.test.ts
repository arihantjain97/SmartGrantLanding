import { describe, it, expect, beforeEach } from 'vitest';
import { LeadStore, type Lead } from '@/lib/lead-store';

describe('LeadStore', () => {
  let store: LeadStore;

  beforeEach(() => {
    store = new LeadStore();
  });

  it('should add a lead and return it in list', () => {
    const mockLead: Lead = {
      id: 'test-id',
      businessName: 'Test Company',
      industry: 'Technology',
      businessArea: 'Adopt IT solutions',
      projectSummary: 'Implementing a new CRM system',
      eligibility: {
        shareholding30: true,
        employees200: true,
        operating6mo: true,
      },
      expandOverseas: false,
      readiness: 75,
      topGrant: 'PSG',
      email: 'test@example.com',
      createdAt: new Date(),
    };

    store.add(mockLead);
    const leads = store.list();

    expect(leads).toHaveLength(1);
    expect(leads[0]).toEqual(mockLead);
  });

  it('should add multiple leads and return all in list', () => {
    const mockLead1: Lead = {
      id: 'test-id-1',
      businessName: 'Test Company 1',
      industry: 'Technology',
      businessArea: 'Adopt IT solutions',
      projectSummary: 'Implementing a new CRM system',
      eligibility: {
        shareholding30: true,
        employees200: true,
        operating6mo: true,
      },
      expandOverseas: false,
      readiness: 75,
      topGrant: 'PSG',
      createdAt: new Date(),
    };

    const mockLead2: Lead = {
      id: 'test-id-2',
      businessName: 'Test Company 2',
      industry: 'Retail',
      businessArea: 'Improve operational processes',
      projectSummary: 'Streamlining inventory management',
      eligibility: {
        shareholding30: true,
        employees200: true,
        operating6mo: true,
      },
      expandOverseas: true,
      readiness: 80,
      topGrant: 'EDG',
      createdAt: new Date(),
    };

    store.add(mockLead1);
    store.add(mockLead2);
    const leads = store.list();

    expect(leads).toHaveLength(2);
    expect(leads).toContainEqual(mockLead1);
    expect(leads).toContainEqual(mockLead2);
  });

  it('should return empty array when no leads added', () => {
    const leads = store.list();
    expect(leads).toHaveLength(0);
  });

  it('should get lead by id', () => {
    const mockLead: Lead = {
      id: 'test-id',
      businessName: 'Test Company',
      industry: 'Technology',
      businessArea: 'Adopt IT solutions',
      projectSummary: 'Implementing a new CRM system',
      eligibility: {
        shareholding30: true,
        employees200: true,
        operating6mo: true,
      },
      expandOverseas: false,
      readiness: 75,
      topGrant: 'PSG',
      createdAt: new Date(),
    };

    store.add(mockLead);
    const foundLead = store.getById('test-id');

    expect(foundLead).toEqual(mockLead);
  });

  it('should return undefined for non-existent id', () => {
    const foundLead = store.getById('non-existent');
    expect(foundLead).toBeUndefined();
  });

  it('should clear all leads', () => {
    const mockLead: Lead = {
      id: 'test-id',
      businessName: 'Test Company',
      industry: 'Technology',
      businessArea: 'Adopt IT solutions',
      projectSummary: 'Implementing a new CRM system',
      eligibility: {
        shareholding30: true,
        employees200: true,
        operating6mo: true,
      },
      expandOverseas: false,
      readiness: 75,
      topGrant: 'PSG',
      createdAt: new Date(),
    };

    store.add(mockLead);
    expect(store.list()).toHaveLength(1);

    store.clear();
    expect(store.list()).toHaveLength(0);
  });
}); 