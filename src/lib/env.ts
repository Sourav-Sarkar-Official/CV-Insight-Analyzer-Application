
/**
 * Environment variable management
 * IMPORTANT: This is for client-side usage only. Do not store sensitive secrets here.
 */

// Gemini API key - Loaded securely from environment variables
export const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";

// API models
export const GEMINI_MODEL = "gemini-3-flash-preview";

// API settings
export const API_SETTINGS = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};
