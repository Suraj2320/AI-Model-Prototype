import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SendHorizontal, Paperclip, Mic, Globe } from "lucide-react";
import { useEffect, useRef } from "react";
import { TEMPLATES } from "@/lib/data";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"

interface PromptEditorProps {
  input: string;
  setInput: (value: string) => void;
  onSend: () => void;
  isLoading: boolean;
}

export function PromptEditor({ input, setInput, onSend, isLoading }: PromptEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }
  }, [input]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] mx-auto w-full px-4 md:px-0">
      
      {/* Templates Quick Access - Only show if input is empty */}
      {input.trim() === '' && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
              {TEMPLATES.slice(0, 4).map(template => (
                  <button
                    key={template.id}
                    onClick={() => setInput(template.prompt)}
                    className="text-left p-3 rounded-lg border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-colors text-xs flex flex-col gap-1 h-full"
                  >
                      <span className="font-medium truncate w-full">{template.name}</span>
                      <span className="text-muted-foreground truncate w-full">{template.description}</span>
                  </button>
              ))}
          </div>
      )}

      <div className="relative flex items-end w-full p-3 bg-background border border-input rounded-xl shadow-sm focus-within:ring-1 focus-within:ring-ring transition-all">
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground h-9 w-9 mb-0.5 rounded-full mr-1">
                        <Paperclip className="h-5 w-5" />
                        <span className="sr-only">Attach file</span>
                    </Button>
                </TooltipTrigger>
                <TooltipContent>Attach file</TooltipContent>
            </Tooltip>
        </TooltipProvider>

        <Textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Message AI..."
          className="min-h-[20px] max-h-[200px] w-full resize-none bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 p-2 py-2.5 text-base md:text-sm overflow-y-auto scrollbar-hide"
          rows={1}
        />

        <div className="flex items-center gap-1 mb-0.5 ml-1">
             <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground h-9 w-9 rounded-full hidden md:flex">
                            <Mic className="h-5 w-5" />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>Voice input</TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <Button 
                onClick={onSend}
                disabled={!input.trim() || isLoading}
                size="icon"
                className="h-9 w-9 rounded-full shrink-0 transition-all"
            >
                <SendHorizontal className="h-5 w-5" />
                <span className="sr-only">Send message</span>
            </Button>
        </div>
      </div>
      <div className="text-center mt-2">
         <p className="text-xs text-muted-foreground">AI can make mistakes. Consider checking important information.</p>
      </div>
    </div>
  );
}
