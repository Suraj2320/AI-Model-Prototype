// TypeScript Interfaces

export interface Model {
  id: string;
  name: string;
  description: string;
  maxTokens: number;
  provider: 'openai' | 'anthropic' | 'google' | 'meta';
}

export interface Template {
  id: string;
  name: string;
  description: string;
  prompt: string;
  icon?: string;
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  model?: string;
}

export interface ChatSession {
  id: string;
  title: string;
  messages: Message[];
  createdAt: number;
  updatedAt: number;
}

export interface ChatParameters {
  temperature: number;
  maxTokens: number;
  topP: number;
  modelId: string;
}
