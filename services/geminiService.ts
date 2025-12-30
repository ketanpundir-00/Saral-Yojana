
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

const SYSTEM_INSTRUCTION = `
You are Saral Yojana, an AI-powered assistant that helps Indian citizens understand government schemes in English, Hindi, and Hinglish. 
Automatically detect the user’s language and respond in the same language (English, Hindi, or Hinglish) using simple, non-technical wording.

Key Guidelines:
1. Explain government schemes clearly: Purpose, Eligibility, Benefits, Required Documents, and Application Steps.
2. Use the Google Search tool to find accurate and current information from official sources like myscheme.gov.in, india.gov.in, and state government portals.
3. If users share details (age, occupation, income, state), simulate eligibility guidance based on scheme rules.
4. MANDATORY DISCLAIMER: Always state that this is a "DEMO eligibility check" and not an official verification.
5. Do not claim access to real government databases or collect sensitive data (Aadhaar, Bank AC, etc.).
6. Be polite, supportive, and concise.
7. Always encourage users to verify final eligibility through official government portals or local Common Service Centers (CSC).
`;

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async sendMessage(history: Message[], userInput: string) {
    try {
      // Map history to Gemini format
      const contents = history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }));

      // Add current message
      contents.push({
        role: 'user',
        parts: [{ text: userInput }]
      });

      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: contents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          tools: [{ googleSearch: {} }],
        },
      });

      return {
        text: response.text || "I'm sorry, I couldn't process that. Please try again.",
        groundingMetadata: response.candidates?.[0]?.groundingMetadata
      };
    } catch (error) {
      console.error("Gemini API Error:", error);
      throw error;
    }
  }
}

export const geminiService = new GeminiService();
