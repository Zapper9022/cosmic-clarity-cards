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

const horoscopeSigns = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

const chineseZodiacSigns = [
  "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake",
  "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"
];

export const ZodiacForm = () => {
  const [horoscopeSign, setHoroscopeSign] = useState("");
  const [chineseZodiac, setChineseZodiac] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const currentProfile = JSON.parse(localStorage.getItem("currentProfile") || "{}");
    const updatedProfile = { ...currentProfile, horoscopeSign, chineseZodiac };
    localStorage.setItem("currentProfile", JSON.stringify(updatedProfile));
    
    const profiles = JSON.parse(localStorage.getItem("profiles") || "[]");
    profiles.push(updatedProfile);
    localStorage.setItem("profiles", JSON.stringify(profiles));
    
    navigate("/fortune");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
      <div className="space-y-2">
        <Label htmlFor="horoscopeSign" className="text-lg text-white">Select Your Horoscope Sign</Label>
        <Select required onValueChange={setHoroscopeSign}>
          <SelectTrigger className="bg-white/10 border-white/20 text-white">
            <SelectValue placeholder="Choose your horoscope sign" />
          </SelectTrigger>
          <SelectContent>
            {horoscopeSigns.map((sign) => (
              <SelectItem key={sign} value={sign.toLowerCase()}>
                {sign}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="chineseZodiac" className="text-lg text-white">Select Your Chinese Zodiac Sign</Label>
        <Select required onValueChange={setChineseZodiac}>
          <SelectTrigger className="bg-white/10 border-white/20 text-white">
            <SelectValue placeholder="Choose your Chinese zodiac sign" />
          </SelectTrigger>
          <SelectContent>
            {chineseZodiacSigns.map((sign) => (
              <SelectItem key={sign} value={sign.toLowerCase()}>
                {sign}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex justify-between">
        <Button 
          type="button" 
          onClick={() => navigate(-1)}
          variant="link"
          className="text-white"
        >
          <ChevronLeft className="me-1 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
          Back
        </Button>
        <Button type="submit" className="text-primary-foreground bg-primary hover:bg-primary/90">
          Save Profile
        </Button>
      </div>
    </form>
  );
};