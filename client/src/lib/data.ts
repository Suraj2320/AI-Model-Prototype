import { Model, Template } from "../types";

export const MODELS: Model[] = [
  {
    id: "gpt-4o",
    name: "GPT-4o",
    description: "Most capable model for complex tasks",
    maxTokens: 128000,
    provider: "openai",
  },
  {
    id: "gpt-3.5-turbo",
    name: "GPT-3.5 Turbo",
    description: "Fast and cost-effective for simple tasks",
    maxTokens: 16385,
    provider: "openai",
  },
  {
    id: "claude-3-opus",
    name: "Claude 3 Opus",
    description: "Powerful model with high reasoning capability",
    maxTokens: 200000,
    provider: "anthropic",
  },
  {
    id: "claude-3-sonnet",
    name: "Claude 3 Sonnet",
    description: "Balanced performance and speed",
    maxTokens: 200000,
    provider: "anthropic",
  },
  {
    id: "gemini-pro",
    name: "Gemini Pro",
    description: "Google's best performing model",
    maxTokens: 32768,
    provider: "google",
  },
];

export const TEMPLATES: Template[] = [
  {
    id: "code-review",
    name: "Code Review",
    description: "Analyze code for bugs and improvements",
    prompt: "Please review the following code for potential bugs, security vulnerabilities, and style improvements:\n\n```typescript\n// Paste your code here\n```",
    icon: "Code"
  },
  {
    id: "explain-concept",
    name: "Explain Concept",
    description: "Explain complex topics simply",
    prompt: "Explain the concept of [CONCEPT] to me like I'm 5 years old. Use analogies where possible.",
    icon: "BookOpen"
  },
  {
    id: "write-email",
    name: "Draft Email",
    description: "Professional email writing assistant",
    prompt: "Draft a professional email to [RECIPIENT] regarding [SUBJECT]. The tone should be [TONE].\n\nKey points to include:\n- ",
    icon: "Mail"
  },
  {
    id: "debug-helper",
    name: "Debug Helper",
    description: "Help identify and fix errors",
    prompt: "I'm encountering the following error:\n\n[ERROR MESSAGE]\n\nHere is the relevant code snippet:\n\n```\n// Code\n```\n\nWhat might be causing this and how can I fix it?",
    icon: "Bug"
  }
];

export const INITIAL_MESSAGE: string = "Hello! I'm your AI assistant. How can I help you today?";
