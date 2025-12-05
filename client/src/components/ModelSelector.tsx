import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MODELS } from "@/lib/data";
import { ChatParameters } from "@/types";
import { Sparkles, Zap, Brain } from "lucide-react";

interface ModelSelectorProps {
  parameters: ChatParameters;
  onUpdate: (params: Partial<ChatParameters>) => void;
}

export function ModelSelector({ parameters, onUpdate }: ModelSelectorProps) {
  const selectedModel = MODELS.find(m => m.id === parameters.modelId);

  const getIcon = (provider: string) => {
    switch (provider) {
      case 'openai': return <Sparkles className="h-4 w-4 mr-2 text-green-500" />;
      case 'anthropic': return <Brain className="h-4 w-4 mr-2 text-orange-500" />;
      case 'google': return <Zap className="h-4 w-4 mr-2 text-blue-500" />;
      default: return <Sparkles className="h-4 w-4 mr-2" />;
    }
  };

  return (
    <div className="w-full max-w-[240px]">
      <Select
        value={parameters.modelId}
        onValueChange={(value) => onUpdate({ modelId: value })}
      >
        <SelectTrigger className="w-full h-10 bg-background border-input focus:ring-1 focus:ring-ring">
          <div className="flex items-center text-sm font-medium">
             {selectedModel && getIcon(selectedModel.provider)}
             <SelectValue placeholder="Select a model" />
          </div>
        </SelectTrigger>
        <SelectContent>
          {MODELS.map((model) => (
            <SelectItem key={model.id} value={model.id}>
              <div className="flex flex-col items-start py-1">
                <div className="flex items-center font-medium">
                  {getIcon(model.provider)}
                  {model.name}
                </div>
                <span className="text-xs text-muted-foreground ml-6 mt-0.5">
                  {model.description}
                </span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
