import { useChat } from "@/hooks/useChat";
import { Sidebar } from "@/components/Sidebar";
import { ChatArea } from "@/components/ChatArea";
import { PromptEditor } from "@/components/PromptEditor";
import { ModelSelector } from "@/components/ModelSelector";
import { Button } from "@/components/ui/button";
import { Share } from "lucide-react";

export default function Home() {
  const {
    messages,
    input,
    setInput,
    isLoading,
    sendMessage,
    clearChat,
    parameters,
    updateParameters
  } = useChat();

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      {/* Sidebar - handles its own responsive visibility */}
      <Sidebar 
        parameters={parameters}
        onUpdateParameters={updateParameters}
        onClearChat={clearChat}
      />

      {/* Main Content */}
      <main className="flex-1 flex flex-col md:pl-[280px] h-full w-full relative transition-all duration-300 ease-in-out">
        
        {/* Header */}
        <header className="h-14 border-b border-border/40 flex items-center justify-between px-4 bg-background/80 backdrop-blur-sm z-20 sticky top-0">
            <div className="flex items-center gap-2 md:gap-4 pl-10 md:pl-0">
                <ModelSelector parameters={parameters} onUpdate={updateParameters} />
            </div>
            <div className="flex items-center gap-2">
                 <Button variant="ghost" size="sm" className="gap-2 hidden sm:flex text-muted-foreground hover:text-foreground">
                    <Share className="h-4 w-4" />
                    Share
                 </Button>
            </div>
        </header>

        {/* Chat Area - Scrollable */}
        <ChatArea messages={messages} isLoading={isLoading} />

        {/* Input Area - Fixed at bottom of main content */}
        <div className="p-4 pb-6 bg-gradient-to-t from-background via-background to-transparent z-20">
             <PromptEditor 
                input={input}
                setInput={setInput}
                onSend={() => sendMessage(input)}
                isLoading={isLoading}
             />
        </div>
      </main>
    </div>
  );
}
