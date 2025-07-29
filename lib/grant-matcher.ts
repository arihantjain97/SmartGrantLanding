import type { Lead } from './lead-store';

export function matchGrants(leadData: Partial<Lead>): "PSG" | "EDG" | "MRA" {
  console.log('🎯 [GrantMatcher] Matching grants for lead data:', {
    businessName: leadData.businessName,
    industry: leadData.industry,
    eligibility: leadData.eligibility,
    expandOverseas: leadData.expandOverseas
  });

  // TODO: Replace with OpenAI integration for intelligent grant matching
  // Example OpenAI integration:
  // const response = await openai.chat.completions.create({
  //   model: "gpt-4",
  //   messages: [
  //     {
  //       role: "system",
  //       content: "You are a grant matching expert. Based on the business profile, return only one of: PSG, EDG, or MRA."
  //     },
  //     {
  //       role: "user",
  //       content: `Business: ${leadData.businessName}, Industry: ${leadData.industry}, Eligibility: ${JSON.stringify(leadData.eligibility)}, Overseas: ${leadData.expandOverseas}`
  //     }
  //   ]
  // });
  // return response.choices[0].message.content as "PSG" | "EDG" | "MRA";

  // For now, return PSG as the default match
  const matchedGrant = "PSG";
  console.log('✅ [GrantMatcher] Grant matched:', matchedGrant);
  
  return matchedGrant;
} 