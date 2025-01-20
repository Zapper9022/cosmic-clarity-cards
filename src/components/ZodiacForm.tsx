import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";

const zodiacSigns = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

export const ZodiacForm = () => {
  const [zodiacSign, setZodiacSign] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const currentProfile = JSON.parse(localStorage.getItem("currentProfile") || "{}");
    const updatedProfile = { ...currentProfile, zodiacSign };
    localStorage.setItem("currentProfile", JSON.stringify(updatedProfile));
    
    // Save to profiles list
    const profiles = JSON.parse(localStorage.getItem("profiles") || "[]");
    profiles.push(updatedProfile);
    localStorage.setItem("profiles", JSON.stringify(profiles));
    
    navigate("/fortune");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
      <div className="space-y-2">
        <Label htmlFor="zodiacSign" className="text-lg">Select Your Zodiac Sign</Label>
        <Select required onValueChange={setZodiacSign}>
          <SelectTrigger className="bg-white/10 border-white/20 text-white">
            <SelectValue placeholder="Choose your zodiac sign" />
          </SelectTrigger>
          <SelectContent>
            {zodiacSigns.map((sign) => (
              <SelectItem key={sign} value={sign.toLowerCase()}>
                {sign}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button type="submit" className="w-full text-primary-foreground bg-primary hover:bg-primary/90">
        Complete Profile
      </Button>
    </form>
  );
};