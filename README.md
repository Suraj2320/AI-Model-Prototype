# AI Chat Interface Prototype

## Research

### Platforms Reviewed
1.  **ChatGPT**: Clean interface with conversation history sidebar. Standout feature: regenerate response button.
2.  **Claude**: Minimalist design with focus on the conversation. Standout: artifact system for code.
3.  **Hugging Face**: Model playground with extensive parameter controls. Standout: temperature slider visualization.

### Features Chosen for Implementation
1.  Model selector dropdown
2.  Temperature and max tokens sliders
3.  Dark/light theme toggle
4.  Copy response button
5.  Conversation history
6.  Template system for common prompts

---

## Design

### Design Decisions
-   **Color Palette**: Used soft grays (`zinc` scale) for light mode and deep blues/slate (`slate` scale) for dark mode to reduce eye strain.
-   **Typography**: `Inter` font family for modern, clean look. `JetBrains Mono` for code blocks.
-   **Layout**: Sidebar + main area for desktop, collapsible for mobile. Fixed input area at the bottom.

### Tailwind Token Mapping
-   Header: `bg-background/80 backdrop-blur-sm sticky top-0`
-   Sidebar: `w-[280px] bg-sidebar border-r border-sidebar-border`
-   Chat messages: `group w-full text-foreground border-b border-black/5 dark:border-white/5`

---

## Development

### Tech Stack
-   React + Vite
-   TypeScript (strict mode)
-   Tailwind CSS v4
-   Shadcn/UI (Radix Primitives)
-   React Markdown + Remark GFM
-   React Syntax Highlighter

### Implementation Notes
-   Used `useChat` hook for centralized state management.
-   Implemented a mock API simulation with delays.
-   Used `react-markdown` for safe rendering of AI responses.
-   Fully responsive design with mobile drawer.

### Known Limitations
-   No actual AI integration (mock responses only).
-   Data is not persisted (resets on reload).
