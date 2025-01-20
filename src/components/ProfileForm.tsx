import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

export const ProfileForm = () => {
  const [fullName, setFullName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [birthLocation, setBirthLocation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("currentProfile", JSON.stringify({ fullName, dateOfBirth, birthLocation }));
    navigate("/zodiac");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
      <div className="space-y-2">
        <Label htmlFor="fullName" className="text-lg">Full Name</Label>
        <Input
          id="fullName"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="bg-white/10 border-white/20 text-white"
          placeholder="Enter your full name"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="dateOfBirth" className="text-lg">Date of Birth</Label>
        <Input
          id="dateOfBirth"
          type="date"
          required
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          className="bg-white/10 border-white/20 text-white"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="birthLocation" className="text-lg">Birth Location</Label>
        <Input
          id="birthLocation"
          required
          value={birthLocation}
          onChange={(e) => setBirthLocation(e.target.value)}
          className="bg-white/10 border-white/20 text-white"
          placeholder="Enter your birth location"
        />
      </div>
      <div className="flex justify-between">
        <Button 
          type="button" 
          onClick={() => navigate(-1)}
          variant="outline"
          className="border-white/20 text-white hover:bg-white/10"
        >
          Back
        </Button>
        <Button type="submit" className="text-primary-foreground bg-primary hover:bg-primary/90">
          Continue
        </Button>
      </div>
    </form>
  );
};