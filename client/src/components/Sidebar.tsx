import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu, Plus, MessageSquare, Settings, Github, LayoutGrid, X } from "lucide-react";
import { ControlPanel } from "./ControlPanel";
import { ChatParameters } from "@/types";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";

interface SidebarProps {
  parameters: ChatParameters;
  onUpdateParameters: (params: Partial<ChatParameters>) => void;
  onClearChat: () => void;
  className?: string;
}

export function Sidebar({ parameters, onUpdateParameters, onClearChat, className }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-sidebar text-sidebar-foreground border-r border-sidebar-border">
      {/* Header / New Chat */}
      <div className="p-4 border-b border-sidebar-border/50">
        <Button 
            onClick={() => {
                onClearChat();
                setIsOpen(false);
            }} 
            variant="outline" 
            className="w-full justify-start gap-2 bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90 border-0 shadow-sm"
        >
          <Plus className="h-4 w-4" />
          <span>New chat</span>
        </Button>
      </div>

      {/* History List */}
      <ScrollArea className="flex-1 px-2 py-4">
        <div className="space-y-4">
            <div className="px-2 text-xs font-semibold text-muted-foreground/50 uppercase tracking-wider">
                Today
            </div>
            <div className="space-y-1">
                {['Project Planning', 'React Component Help', 'Debug Log Analysis'].map((item, i) => (
                    <Button 
                        key={i} 
                        variant="ghost" 
                        className="w-full justify-start font-normal h-9 px-2 text-sm text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground truncate"
                    >
                        <MessageSquare className="h-4 w-4 mr-2 opacity-50" />
                        <span className="truncate">{item}</span>
                    </Button>
                ))}
            </div>

            <div className="px-2 mt-6 text-xs font-semibold text-muted-foreground/50 uppercase tracking-wider">
                Yesterday
            </div>
            <div className="space-y-1">
                {['Email Draft', 'Explain Quantum Physics', 'Travel Itinerary'].map((item, i) => (
                    <Button 
                        key={i} 
                        variant="ghost" 
                        className="w-full justify-start font-normal h-9 px-2 text-sm text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground truncate"
                    >
                        <MessageSquare className="h-4 w-4 mr-2 opacity-50" />
                        <span className="truncate">{item}</span>
                    </Button>
                ))}
            </div>
        </div>
      </ScrollArea>

      {/* Controls / Footer */}
      <div className="p-4 border-t border-sidebar-border/50 bg-sidebar/50 backdrop-blur-sm">
        <div className="mb-4">
            <h3 className="text-xs font-semibold text-muted-foreground/70 mb-3 uppercase tracking-wider flex items-center gap-2">
                <Settings className="h-3.5 w-3.5" />
                Parameters
            </h3>
            <ControlPanel parameters={parameters} onUpdate={onUpdateParameters} />
        </div>
        
        <div className="flex items-center justify-between pt-2 mt-2 border-t border-sidebar-border/50">
             <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground px-0" aria-label="User settings">
                <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-[10px] text-white font-bold">
                    JS
                </div>
                <div className="flex flex-col items-start text-xs">
                    <span className="font-medium">User Account</span>
                    <span className="text-[10px] opacity-70">Free Plan</span>
                </div>
             </Button>
             <ThemeToggle />
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Trigger */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden fixed top-3 left-3 z-50 h-10 w-10 bg-background/80 backdrop-blur-md border border-border shadow-sm rounded-lg" aria-label="Open sidebar">
            <LayoutGrid className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-[280px] border-r-0">
            <div className="sr-only">
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>Navigation sidebar</SheetDescription>
            </div>
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div className={cn("hidden md:flex w-[280px] flex-col h-screen fixed left-0 top-0 bottom-0 z-30", className)}>
        <SidebarContent />
      </div>
    </>
  );
}
