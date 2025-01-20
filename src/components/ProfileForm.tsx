import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

export const ProfileForm = () => {
  const [fullName, setFullName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store in localStorage for now
    localStorage.setItem("currentProfile", JSON.stringify({ fullName, dateOfBirth }));
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
      <Button type="submit" className="w-full text-primary-foreground bg-primary hover:bg-primary/90">
        Continue
      </Button>
    </form>
  );
};