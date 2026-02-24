
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";
// Directly using the user-provided n8n webhook URL
const N8N_WEBHOOK_URL = "https://n8n.srv1179774.hstgr.cloud/webhook/8b440c79-57a2-495f-be0b-191d32d84cb4/chat";

/**
 * Sends a message to the AI assistant.
 * Prioritizes the n8n webhook provided by the user.
 * Falls back to direct Gemini API if the webhook is unavailable or fails.
 */
export const sendMessageToAssistant = async (message: string, history: {role: string, parts: {text: string}[]}[]) => {
  // 1. Try n8n integration first
  if (N8N_WEBHOOK_URL) {
    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          history,
          timestamp: new Date().toISOString(),
          source: 'dfootprint-web-chat'
        }),
      });

      if (!response.ok) {
        throw new Error(`n8n responded with status: ${response.status}`);
      }

      const data = await response.json();
      
      /**
       * Support various common n8n response patterns.
       * Your n8n 'Respond to Webhook' node should return an object like:
       * { "text": "Hello from n8n!" }
       */
      const assistantText = data.text || data.output || data.response || data.message;
      
      if (assistantText) {
        return assistantText;
      }
      
      console.warn("n8n responded successfully but no text content was found in the expected fields.");
    } catch (error) {
      console.error("n8n Workflow Error:", error);
      // Fallback to Gemini if n8n is unreachable or errors out
      console.log("Falling back to direct Gemini API.");
    }
  }

  // 2. Fallback to direct Gemini API
  if (!API_KEY) {
    return "I'm sorry, I'm currently unable to chat because the API key is missing and the workflow connection failed.";
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const model = 'gemini-3-flash-preview';

  try {
    const chat = ai.chats.create({
      model,
      config: {
        systemInstruction: "You are the DFootprint AI Assistant. You help small and local businesses understand how AI can solve their problems. You are professional, helpful, and concise. You represent Dominik Wierzchowski's agency. NOTE: You are acting as a fallback because the primary n8n workflow was unreachable.",
      }
    });

    const response = await chat.sendMessage({ message });
    return response.text || "I didn't receive a response from the model. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Something went wrong with the AI connection. Please try again later.";
  }
};
