import { nanoid } from 'nanoid';

export type Lead = {
  id: string;
  businessName: string;
  industry: string;
  eligibility: {
    shareholding30: boolean;
    employees200: boolean;
    operating6mo: boolean;
  };
  expandOverseas: boolean;
  readiness: number;
  topGrant: "PSG" | "EDG" | "MRA";
  email?: string;
  createdAt: Date;
};

class LeadStore {
  private leads: Lead[] = [];

  add(lead: Lead) {
    this.leads.push(lead);
  }

  list() {
    return [...this.leads];
  }

  clear() {
    this.leads = [];
  }

  getById(id: string) {
    return this.leads.find(lead => lead.id === id);
  }
}

export const leadStore = new LeadStore();

// TODO: Replace with Supabase integration
// Example Supabase integration:
// import { createClient } from '@supabase/supabase-js';
// const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
// 
// export const addLead = async (lead: Omit<Lead, 'id' | 'createdAt'>) => {
//   const { data, error } = await supabase
//     .from('leads')
//     .insert([{ ...lead, id: nanoid(), created_at: new Date().toISOString() }]);
//   if (error) throw error;
//   return data;
// }; 