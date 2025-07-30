import { nanoid } from 'nanoid';

export type Lead = {
  id: string;
  businessName: string;
  industry: string;
  businessArea?: string;
  projectSummary?: string;
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
    console.log('🔵 [LeadStore] Adding new lead:', {
      id: lead.id,
      businessName: lead.businessName,
      industry: lead.industry,
      businessArea: lead.businessArea,
      projectSummary: lead.projectSummary,
      topGrant: lead.topGrant,
      readiness: lead.readiness,
      email: lead.email,
      createdAt: lead.createdAt.toISOString()
    });
    
    this.leads.push(lead);
    console.log('✅ [LeadStore] Lead added successfully. Total leads:', this.leads.length);
  }

  list() {
    console.log('📋 [LeadStore] Listing all leads. Count:', this.leads.length);
    return [...this.leads];
  }

  clear() {
    console.log('🗑️ [LeadStore] Clearing all leads. Previous count:', this.leads.length);
    this.leads = [];
    console.log('✅ [LeadStore] All leads cleared');
  }

  getById(id: string) {
    console.log('🔍 [LeadStore] Looking for lead with ID:', id);
    const lead = this.leads.find(lead => lead.id === id);
    if (lead) {
      console.log('✅ [LeadStore] Lead found:', lead.businessName);
    } else {
      console.log('❌ [LeadStore] Lead not found with ID:', id);
    }
    return lead;
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