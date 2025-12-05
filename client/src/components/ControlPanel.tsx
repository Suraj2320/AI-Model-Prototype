import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { ChatParameters } from "@/types";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Info } from "lucide-react";

interface ControlPanelProps {
  parameters: ChatParameters;
  onUpdate: (params: Partial<ChatParameters>) => void;
}

export function ControlPanel({ parameters, onUpdate }: ControlPanelProps) {
  return (
    <div className="grid gap-6 py-4">
      <div className="grid gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Label htmlFor="temperature" className="text-sm font-medium">Temperature</Label>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Info className="h-3.5 w-3.5 text-muted-foreground cursor-help" />
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <p className="text-sm">Controls randomness: Lowering results in less random completions. As the temperature approaches zero, the model will become deterministic and repetitive.</p>
              </HoverCardContent>
            </HoverCard>
          </div>
          <span className="text-sm text-muted-foreground w-12 text-right">{parameters.temperature}</span>
        </div>
        <Slider
          id="temperature"
          max={2}
          min={0}
          step={0.1}
          value={[parameters.temperature]}
          onValueChange={(value) => onUpdate({ temperature: value[0] })}
          className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
        />
      </div>

      <div className="grid gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Label htmlFor="maxTokens" className="text-sm font-medium">Max Tokens</Label>
             <HoverCard>
              <HoverCardTrigger asChild>
                <Info className="h-3.5 w-3.5 text-muted-foreground cursor-help" />
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <p className="text-sm">The maximum number of tokens to generate. Shared between prompt and completion. The exact limit varies by model.</p>
              </HoverCardContent>
            </HoverCard>
          </div>
          <span className="text-sm text-muted-foreground w-12 text-right">{parameters.maxTokens}</span>
        </div>
        <Slider
          id="maxTokens"
          max={32000}
          min={100}
          step={100}
          value={[parameters.maxTokens]}
          onValueChange={(value) => onUpdate({ maxTokens: value[0] })}
          className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
        />
      </div>

      <div className="grid gap-4">
        <div className="flex items-center justify-between">
           <div className="flex items-center gap-2">
            <Label htmlFor="topP" className="text-sm font-medium">Top P</Label>
             <HoverCard>
              <HoverCardTrigger asChild>
                <Info className="h-3.5 w-3.5 text-muted-foreground cursor-help" />
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <p className="text-sm">An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass.</p>
              </HoverCardContent>
            </HoverCard>
          </div>
          <span className="text-sm text-muted-foreground w-12 text-right">{parameters.topP}</span>
        </div>
        <Slider
          id="topP"
          max={1}
          min={0}
          step={0.05}
          value={[parameters.topP]}
          onValueChange={(value) => onUpdate({ topP: value[0] })}
          className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
        />
      </div>
    </div>
  );
}
