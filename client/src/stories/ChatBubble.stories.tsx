import type { Meta, StoryObj } from '@storybook/react';
import { ChatMessage } from '../components/ChatMessage';
import { Message } from '../types';

const meta = {
  title: 'UI/ChatBubble',
  component: ChatMessage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-full max-w-3xl mx-auto py-10 border p-4 rounded-lg bg-background">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ChatMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockUserMessage: Message = {
  id: '1',
  role: 'user',
  content: 'Can you help me write a React component?',
  timestamp: Date.now(),
};

const mockAssistantMessage: Message = {
  id: '2',
  role: 'assistant',
  content: 'Certainly! I can help you with that. Here is a simple functional component example:\n\n```tsx\nexport function MyComponent() {\n  return <div>Hello World</div>;\n}\n```\n\nLet me know if you need anything more complex!',
  timestamp: Date.now(),
  model: 'gpt-4'
};

export const UserMessage: Story = {
  args: {
    message: mockUserMessage,
  },
};

export const AssistantMessage: Story = {
  args: {
    message: mockAssistantMessage,
  },
};

export const LongAssistantMessage: Story = {
  args: {
    message: {
        ...mockAssistantMessage,
        content: "Here is a much longer response to demonstrate how the chat bubble handles larger amounts of text.\n\n1. **First Point**: This is the first point.\n2. **Second Point**: This is the second point.\n\n> This is a blockquote to show styling.\n\nAnd here is some more text to fill up the space."
    }
  }
}
