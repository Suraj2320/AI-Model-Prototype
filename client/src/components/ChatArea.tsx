import { Message } from "@/types";
import { ChatMessage } from "./ChatMessage";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

interface ChatAreaProps {
  messages: Message[];
  isLoading: boolean;
}

export function ChatArea({ messages, isLoading }: ChatAreaProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bottomRef.current) {
        bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  if (messages.length === 0) {
      return null;
  }

  return (
    <div className="flex-1 overflow-y-auto w-full">
      <div className="flex flex-col pb-32">
        {messages.map((message, index) => (
          <ChatMessage
            key={message.id}
            message={message}
            isLast={index === messages.length - 1}
          />
        ))}
        {isLoading && (
           <div className="w-full text-foreground border-b border-black/5 dark:border-white/5 bg-muted/30">
                <div className="text-base gap-4 md:gap-6 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] p-4 md:py-6 flex lg:px-0 m-auto">
                     <div className="flex-shrink-0 flex flex-col relative items-end">
                        <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                            <span className="w-2 h-2 bg-primary-foreground rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                            <span className="w-2 h-2 bg-primary-foreground rounded-full animate-bounce [animation-delay:-0.15s] mx-0.5"></span>
                            <span className="w-2 h-2 bg-primary-foreground rounded-full animate-bounce"></span>
                        </div>
                    </div>
                </div>
           </div>
        )}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
