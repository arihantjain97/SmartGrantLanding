import { nanoid } from 'nanoid';

export type Lead = {
  id: string;
  businessName: string;
  industry: string;
  challenge: string;
  headcount: string;
  email?: string;
  createdAt: Date;
};

class LeadStore {
  private leads: Lead[] = [];
  add(lead: Omit<Lead, 'id' | 'createdAt'>) {
    this.leads.push({ ...lead, id: nanoid(), createdAt: new Date() });
  }
  list() {
    return [...this.leads];
  }
}

export const leadStore = process.env.NODE_ENV !== 'production' ? new LeadStore() : undefined; 