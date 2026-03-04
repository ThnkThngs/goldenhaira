import { supabase } from "@/integrations/supabase/client";

interface StrategistInput {
  type: "strategist";
  salonName: string;
  stylists: number;
  monthlyClients: number;
}

interface SalonPostInput {
  type: "salon-post";
  salonName: string;
  vibe: string;
}

export async function invokeAI(input: StrategistInput | SalonPostInput) {
  const { data, error } = await supabase.functions.invoke("ai-handler", {
    body: input,
  });

  if (error) {
    throw new Error(error.message || "AI request failed");
  }

  return data;
}
