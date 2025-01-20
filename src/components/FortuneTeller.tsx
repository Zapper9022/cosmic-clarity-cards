import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export const FortuneTeller = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const { toast } = useToast();

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
    setAnswer(randomResponse);
    toast({
      title: "The spirits have spoken!",
      description: "Your fortune has been revealed.",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    generateFortune();
  };

  return (
    <div className="space-y-8 w-full max-w-md">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="question" className="text-lg">Ask Your Question</Label>
          <Input
            id="question"
            required
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="bg-white/10 border-white/20 text-white"
            placeholder="What would you like to know?"
          />
        </div>
        <Button type="submit" className="w-full text-primary-foreground bg-primary hover:bg-primary/90">
          Reveal My Fortune
        </Button>
      </form>
      
      {answer && (
        <div className="p-6 rounded-lg bg-white/5 border border-white/10">
          <h3 className="text-xl font-cinzel mb-4">The Spirits Say:</h3>
          <p className="text-lg italic">{answer}</p>
        </div>
      )}
    </div>
  );
};