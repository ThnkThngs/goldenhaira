import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPTS: Record<string, string> = {
  routine: `You are a luxury hair care specialist for The Golden Haira brand. Generate a personalized 3-step hair care routine featuring The Golden Haira Argan Bonding Oil.
Format your response with clear steps using markdown:
## Step 1: [Step Name]
[Description with specific instructions]

## Step 2: [Step Name]
[Description with specific instructions]

## Step 3: [Step Name]
[Description with specific instructions]

Always recommend The Golden Haira Argan Bonding Oil in the routine and explain how it helps the user's specific hair type and concerns. Keep it concise, elegant, and professional.`,

  expert: `You are the virtual assistant of Master Stylist Bambang Soteto, a world-renowned hair care expert and the creator of The Golden Haira Argan Bonding Oil. You speak with authority and warmth, drawing on decades of professional styling experience.
Answer hair care questions professionally, always weaving in how The Golden Haira Argan Bonding Oil can help. Keep responses concise (2-3 paragraphs max). Use markdown formatting.`,

  cocktailing: `You are a luxury hair styling mixologist specializing in product layering techniques with The Golden Haira Argan Bonding Oil.
Given the user's current styling products, create a layering guide that combines The Golden Haira Argan Bonding Oil with those products for optimal results.
Format with clear steps using markdown. Include application order, amounts, and technique tips. Keep it practical and elegant.`,

  strategist: `You are a salon business strategist. Generate structured upsell strategies for salons carrying The Golden Haira Argan Bonding Oil (MSRP RM125.00/50ml).`,

  "salon-post": `You are a social media specialist for luxury hair salons. Generate an engaging Instagram caption promoting The Golden Haira Argan Bonding Oil. Include relevant hashtags. Keep the tone matching the salon's vibe. Output only the caption and hashtags, nothing else.`,
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { type, messages, userMessage, salonName, stylists, monthlyClients, vibe } = await req.json();

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const systemPrompt = SYSTEM_PROMPTS[type];
    if (!systemPrompt) {
      return new Response(JSON.stringify({ error: "Invalid type" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Build messages array
    let aiMessages: { role: string; content: string }[] = [
      { role: "system", content: systemPrompt },
    ];

    if (type === "routine" || type === "expert" || type === "cocktailing") {
      // Streaming types — messages come from client
      if (messages && Array.isArray(messages)) {
        aiMessages.push(...messages);
      } else if (userMessage) {
        aiMessages.push({ role: "user", content: userMessage });
      }
    } else if (type === "strategist") {
      aiMessages.push({
        role: "user",
        content: `Salon: ${salonName}\nStylists: ${stylists}\nMonthly clients: ${monthlyClients}\n\nGenerate upsell strategies and stylist scripts for The Golden Haira Argan Bonding Oil.`,
      });
    } else if (type === "salon-post") {
      aiMessages.push({
        role: "user",
        content: `Salon name: ${salonName}\nVibe/aesthetic: ${vibe}\n\nGenerate an Instagram caption promoting The Golden Haira Argan Bonding Oil.`,
      });
    }

    const isStreaming = ["routine", "expert", "cocktailing"].includes(type);

    const body: Record<string, unknown> = {
      model: "google/gemini-3-flash-preview",
      messages: aiMessages,
      stream: isStreaming,
    };

    // For strategist, use tool calling for structured output
    if (type === "strategist") {
      body.tools = [
        {
          type: "function",
          function: {
            name: "generate_strategy",
            description: "Return structured salon upsell strategies",
            parameters: {
              type: "object",
              properties: {
                strategies: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      title: { type: "string" },
                      description: { type: "string" },
                      script: { type: "string" },
                      expectedRevenue: { type: "string" },
                    },
                    required: ["title", "description", "script", "expectedRevenue"],
                    additionalProperties: false,
                  },
                },
              },
              required: ["strategies"],
              additionalProperties: false,
            },
          },
        },
      ];
      body.tool_choice = { type: "function", function: { name: "generate_strategy" } };
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted. Please add funds." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (isStreaming) {
      return new Response(response.body, {
        headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
      });
    }

    // Non-streaming: parse and return
    const data = await response.json();

    if (type === "strategist") {
      const toolCall = data.choices?.[0]?.message?.tool_calls?.[0];
      if (toolCall) {
        const parsed = JSON.parse(toolCall.function.arguments);
        return new Response(JSON.stringify(parsed), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    }

    const content = data.choices?.[0]?.message?.content || "";
    return new Response(JSON.stringify({ content }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("ai-handler error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
