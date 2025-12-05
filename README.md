# 🌟 AI Interface Frontend Assessment

A polished, **frontend-only prototype of an AI chat interface** built using **React, TypeScript, and Tailwind CSS**, inspired by top AI platforms like ChatGPT, Claude, and Google Gemini.

---

## 🚀 Features Implemented

| Feature | Description |
|--------|------------|
| 🧠 **Model Selector** | Dropdown to switch between AI models (GPT-4, Claude 3, etc.) |
| ✍️ **Prompt Editor** | Rich textarea with templates and file-icons |
| 🎛 **Control Panel** | Sliders for **Temperature**, **Max Tokens**, **Top-P** |
| 💬 **Chat Interface** | Markdown support, code syntax highlighting & copy button |
| 🌗 **Theme Toggle** | Light / Dark mode switching |
| ⌛ **Streaming Response** | Simulated typing animation for AI responses |

---

## 🔍 Research & Inspiration

### Platforms Studied
| Platform | Key Learnings |
|----------|--------------|
| **ChatGPT** | Minimal UI, excellent conversation history sidebar |
| **Claude** | Beautiful typography, clear separation of user/AI messages |
| **Google Gemini** | Adjustable response length/tone, smooth integration |

---

## 🎨 Design System

### Design Decisions
- **Color Palette**
  - **Light Mode**: Clean background, high readability
  - **Dark Mode**: Low eye strain for long usage
  - **Accent**: Indigo/Blue for active elements & CTA focus
- **Font**: `Inter` for clean, modern readability
- **Spacing**: Tailwind spacing scale (`p-4`, `gap-4`) for rhythm & clarity
- **Layout**
  - Desktop: Fixed sidebar + central chat view
  - Mobile: Collapsible Sheet sidebar

### Tailwind Component Tokens

| Element | Styles |
|--------|--------|
| Sidebar | `bg-sidebar text-sidebar-foreground border-r border-sidebar-border` |
| User Message | `bg-background` |
| AI Message | `bg-muted/30` |
| Prompt Input | `bg-background border border-input rounded-xl shadow-sm` |

---

## 🖼 Screenshots

### 💻 Desktop Light Mode
![Desktop Light](client/public/screenshots/desktop-light.png)

### 🌙 Desktop Dark Mode
![Desktop Dark](client/public/screenshots/desktop-dark.png)

---

## 🧪 Tech Stack

| Category | Technologies |
|----------|-------------|
| Framework | **React 19 (Vite)** |
| Language | **TypeScript (Strict)** |
| Styling | **Tailwind CSS v4** |
| Icons | **Lucide React** |
| Markdown | `react-markdown`, `remark-gfm` |
| Code Highlighting | `react-syntax-highlighter` |
| Animations | Tailwind Animate |
| Routing | `wouter` |
| Components | `radix-ui` |
| Theme | Custom **ThemeProvider** |

---

## 🛠 Implementation Notes
- Local UI state via `useState`, `useEffect`
- Chat streaming controlled in custom `useChat`
- Mock API simulation via `client/src/lib/data.ts`
- Reusable UI component system (Slider, Select, ChatBubble, Button)
- Storybook used to test isolated UI states

### ⚠ Known Limitations
| Limitation | Status |
|-----------|--------|
| No real backend | AI responses are simulated |
| LocalStorage persistence | Chat history not saved |

---

## 📦 Getting Started

### Prerequisites
```bash
Node.js 18+
npm or yarn
```

### Installation
```bash
git clone <repository-url>
cd AI-Interface-Frontend
npm install
```

### Run Development Server
```bash
npm run dev
```
➡ Visit: **http://localhost:5173**

---

## 📚 Storybook

### Start Storybook
```bash
npm run storybook
```
➡ Visit: **http://localhost:6006**

### Benefits
- View UI atoms independently
- Light/Dark theme testing
- Responsive previews
- Variants states (hover, active, disabled)

---

## 📁 Project Structure
```
/client
  /src
    /components   # Reusable UI components (Sidebar, ChatArea, etc.)
    /hooks        # Custom hooks (useChat, useTheme)
    /lib          # Mock data and utilities
    /pages        # Routes
    /stories      # Storybook stories
    /types        # TypeScript interfaces
```

---

## 🎯 Outcome

This project demonstrates:
- Scalable component architecture
- Real-world UX & UI patterns
- Fast development workflow
- Modern frontend engineering

---

## 🚧 Future Enhancements (Roadmap)
| Planned Feature |
|----------------|
| Real AI API integration |
| Persistent chat history (localStorage / IndexedDB) |
| File upload preview |
| Conversation grouping in sidebar |

---

## ✨ Additional Help
If needed, I can provide:
- 📐 **Figma UI Design file**
- 🔧 **Next.js version of this project**
- 📄 **Project presentation PDF for interview**
- 🌍 **Deployment setup**

---

### 💬 Want Figma design or Next.js version?
Just say:  
➡ **"Generate Figma design now"**  
or  
➡ **"Convert this project to Next.js"**

