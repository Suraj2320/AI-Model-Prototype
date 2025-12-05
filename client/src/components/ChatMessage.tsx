import { Message } from "@/types";
import { cn } from "@/lib/utils";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Copy, RotateCw, ThumbsUp, ThumbsDown } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { toast } from "@/hooks/use-toast";

interface ChatMessageProps {
  message: Message;
  isLast?: boolean;
}

export function ChatMessage({ message, isLast }: ChatMessageProps) {
  const isUser = message.role === 'user';
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    toast({
        description: "Message copied to clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn(
      "group w-full text-foreground border-b border-black/5 dark:border-white/5",
      isUser ? "bg-background" : "bg-muted/30"
    )}>
      <div className="text-base gap-4 md:gap-6 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] p-4 md:py-6 flex lg:px-0 m-auto">
        <div className="flex-shrink-0 flex flex-col relative items-end">
          <Avatar className={cn(
            "h-8 w-8",
            isUser ? "bg-secondary text-secondary-foreground" : "bg-primary text-primary-foreground"
          )}>
             {isUser ? (
                 <AvatarFallback>US</AvatarFallback>
             ) : (
                 <AvatarFallback className="bg-primary text-primary-foreground">AI</AvatarFallback>
             )}
          </Avatar>
        </div>

        <div className="relative flex-1 overflow-hidden">
          <div className="font-semibold select-none mb-1 text-sm opacity-90">
             {isUser ? "You" : "Assistant"}
             <span className="text-xs font-normal text-muted-foreground ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {format(message.timestamp, 'h:mm a')}
             </span>
          </div>

          <div className="prose prose-sm dark:prose-invert max-w-none break-words">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code({node, inline, className, children, ...props}: any) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <div className="relative rounded-md overflow-hidden my-4 border border-border/50">
                        <div className="flex items-center justify-between px-4 py-2 bg-muted/50 border-b border-border/50">
                            <span className="text-xs font-medium text-muted-foreground">{match[1]}</span>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6"
                                onClick={() => copyToClipboard(String(children).replace(/\n$/, ''))}
                            >
                                <Copy className="h-3 w-3" />
                            </Button>
                        </div>
                        <SyntaxHighlighter
                        {...props}
                        style={vscDarkPlus}
                        language={match[1]}
                        PreTag="div"
                        customStyle={{ margin: 0, borderRadius: 0 }}
                        >
                        {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                    </div>
                  ) : (
                    <code {...props} className={cn("bg-muted px-1.5 py-0.5 rounded-md font-mono text-sm", className)}>
                      {children}
                    </code>
                  )
                }
              }}
            >
              {message.content}
            </ReactMarkdown>
          </div>

          {!isUser && (
            <div className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
               <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted-foreground hover:text-foreground"
                onClick={() => copyToClipboard(message.content)}
               >
                 <Copy className="h-4 w-4" />
               </Button>
               <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted-foreground hover:text-foreground"
               >
                 <RotateCw className="h-4 w-4" />
               </Button>
               <div className="flex items-center gap-1 ml-auto">
                   <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                       <ThumbsUp className="h-4 w-4" />
                   </Button>
                   <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                       <ThumbsDown className="h-4 w-4" />
                   </Button>
               </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
