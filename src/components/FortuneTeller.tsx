import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  type: 'user' | 'fortune';
  content: string;
}

export const FortuneTeller = () => {
  const [selectedProfile, setSelectedProfile] = useState("");
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [profiles, setProfiles] = useState<any[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const savedProfiles = JSON.parse(localStorage.getItem("profiles") || "[]");
    setProfiles(savedProfiles);
  }, []);

  const generateFortune = () => {
    const responses = [
      "The stars align in your favor. Yes, proceed with confidence!",
      "The cosmic energies suggest patience. Wait for a better time.",
      "Your destiny is clear. The answer is within you already.",
      "The mystic forces are uncertain. Consider your options carefully.",
      "A powerful yes emanates from the celestial realm!",
      "The spiritual guides advise caution. Perhaps not now.",
    ];
    
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    setMessages(prev => [...prev, 
      { type: 'user', content: question },
      { type: 'fortune', content: randomResponse }
    ]);
    setQuestion("");
    
    toast({
      title: "The spirits have spoken!",
      description: "Your fortune has been revealed.",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProfile) {
      toast({
        title: "Please select a profile",
        description: "A profile must be selected to receive your fortune.",
        variant: "destructive"
      });
      return;
    }
    generateFortune();
  };

  return (
    <div className="space-y-8 w-full max-w-md">
      <div className="space-y-2">
        <Label htmlFor="profile" className="text-lg text-white">Select Your Profile</Label>
        <Select required onValueChange={setSelectedProfile}>
          <SelectTrigger className="bg-black/10 border-white/20 text-white">
            <SelectValue placeholder="Choose your profile" />
          </SelectTrigger>
          <SelectContent className="bg-black border-white/20">
            {profiles.map((profile, index) => (
              <SelectItem 
                key={index} 
                value={index.toString()}
                className="text-white hover:bg-white/10"
              >
                {profile.fullName}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <ScrollArea className="h-[400px] rounded-md border border-white/20 p-4">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.type === 'user'
                    ? 'bg-white text-black'
                    : 'bg-black/10 text-white'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-2">
          <Input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="bg-black/10 border-white/20 text-white placeholder:text-white/50 flex-1"
            placeholder="Ask your question..."
          />
          <Button type="submit" className="bg-white text-black hover:bg-white/90">
            Ask
          </Button>
        </div>
      </form>
    </div>
  );
};