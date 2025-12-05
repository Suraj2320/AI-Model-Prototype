import { useState, useCallback, useEffect } from 'react';
import { Message, ChatParameters } from '../types';
import { MODELS, INITIAL_MESSAGE } from '../lib/data';

const MOCK_RESPONSES = [
  "That's an interesting question. Based on my training data, I can tell you that...",
  "Here's a code example that demonstrates this concept:\n\n```typescript\nconst example = () => {\n  console.log('Hello World');\n};\n```",
  "I can certainly help with that. Let me break it down for you step by step.",
  "To achieve this, you'll need to consider several factors, including performance, scalability, and maintainability.",
  "Could you provide more specific details about what you're trying to accomplish?",
];

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init-1',
      role: 'assistant',
      content: INITIAL_MESSAGE,
      timestamp: Date.now(),
      model: 'gpt-4o'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [parameters, setParameters] = useState<ChatParameters>({
    temperature: 0.7,
    maxTokens: 4096,
    topP: 1,
    modelId: 'gpt-4o'
  });

  const generateResponse = useCallback(async (modelId: string) => {
    setIsLoading(true);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
    
    const randomResponse = MOCK_RESPONSES[Math.floor(Math.random() * MOCK_RESPONSES.length)];
    
    const newMessage: Message = {
      id: crypto.randomUUID(),
      role: 'assistant',
      content: randomResponse,
      timestamp: Date.now(),
      model: modelId
    };

    setMessages(prev => [...prev, newMessage]);
    setIsLoading(false);
  }, []);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      content: content,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    await generateResponse(parameters.modelId);
  }, [parameters.modelId, generateResponse]);

  const clearChat = useCallback(() => {
    setMessages([{
      id: crypto.randomUUID(),
      role: 'assistant',
      content: INITIAL_MESSAGE,
      timestamp: Date.now(),
      model: parameters.modelId
    }]);
  }, [parameters.modelId]);

  const updateParameters = useCallback((newParams: Partial<ChatParameters>) => {
    setParameters(prev => ({ ...prev, ...newParams }));
  }, []);

  return {
    messages,
    input,
    setInput,
    isLoading,
    sendMessage,
    clearChat,
    parameters,
    updateParameters
  };
}
