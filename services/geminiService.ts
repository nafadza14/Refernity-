
import { GoogleGenAI, Type } from "@google/genai";
import { User, AIPrediction } from "../types";

// Always use process.env.API_KEY directly and only when initializing GoogleGenAI.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIPrediction = async (user: User, productType: string = "SaaS Product"): Promise<AIPrediction> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analyze this customer behavior and predict referral likelihood for our Refernity v1.0 engine:
      Name: ${user.name}
      Engagement Score: ${user.engagement_score}/100
      NPS: ${user.nps_score}/10
      Tenure: ${user.tenure_months} months
      Product Industry: ${productType}
      
      REFERNITY ANALYSIS RULES:
      1. High engagement (>80) + NPS 9-10 => High likelihood (>85%).
      2. Medium engagement (50-80) + NPS 7-8 => Medium likelihood (50-70%).
      3. Low engagement (<50) or NPS <7 => Low likelihood (<30%).
      
      Suggest an optimal reward amount (industry benchmarks: SaaS $25-50, eCommerce 10-20%) and generate a personalized, creative referral message.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            likelihood: { type: Type.NUMBER, description: "Referral likelihood percentage 0-100" },
            suggested_reward: { type: Type.NUMBER, description: "Suggested cash reward amount in USD" },
            reasoning: { type: Type.STRING, description: "Concise reasoning for the score based on behavioral data" },
            suggested_message: { type: Type.STRING, description: "Personalized referral message template for the user to share" }
          },
          required: ["likelihood", "suggested_reward", "reasoning", "suggested_message"]
        }
      }
    });

    // Access the text property directly from the response object
    const result = JSON.parse(response.text.trim());
    return result;
  } catch (error) {
    console.error("AI Prediction failed:", error);
    // Fallback rule-based prediction as per PRD
    const isHigh = user.engagement_score > 80 && user.nps_score >= 9;
    const isMed = user.engagement_score > 50 && user.nps_score >= 7;

    return {
      likelihood: isHigh ? 90 : (isMed ? 60 : 20),
      suggested_reward: isHigh ? 50 : (isMed ? 25 : 10),
      reasoning: "Rule-based analysis (Refernity v1.0 Fallback). High engagement and satisfaction detected.",
      suggested_message: `Hey! I've been using Refernity for ${user.tenure_months} months to automate our growth. It's saved us hours of work. Want to try it? Get 20% off with my link: refernity.io/r/${user.id}`
    };
  }
};
