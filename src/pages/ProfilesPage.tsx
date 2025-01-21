import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MysticalBackground } from "@/components/ui/mystical-background";
import { useToast } from "@/hooks/use-toast";
import { ChevronLeft } from "lucide-react";

interface Profile {
  fullName: string;
  dateOfBirth: string;
  birthLocation: string;
  horoscopeSign?: string;
  chineseZodiac?: string;
}

const ProfilesPage = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const savedProfiles = JSON.parse(localStorage.getItem("profiles") || "[]");
    setProfiles(savedProfiles);
  }, []);

  const deleteProfile = (index: number) => {
    const updatedProfiles = profiles.filter((_, i) => i !== index);
    localStorage.setItem("profiles", JSON.stringify(updatedProfiles));
    setProfiles(updatedProfiles);
    toast({
      title: "Profile deleted",
      description: "The profile has been successfully removed.",
    });
  };

  return (
    <MysticalBackground>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h1 className="text-4xl font-bold font-cinzel text-white mb-8">
            Saved Profiles
          </h1>
          
          {profiles.length === 0 ? (
            <div className="text-center space-y-4">
              <p className="text-white/90">No profiles found.</p>
              <Button
                onClick={() => navigate("/profile")}
                className="text-primary-foreground bg-primary hover:bg-primary/90"
              >
                Create New Profile
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {profiles.map((profile, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-white/5 border border-white/20 space-y-4"
                >
                  <h3 className="text-xl font-cinzel text-white">{profile.fullName}</h3>
                  <p className="text-white/90">Born: {new Date(profile.dateOfBirth).toLocaleDateString()}</p>
                  <p className="text-white/90">Location: {profile.birthLocation}</p>
                  {profile.horoscopeSign && (
                    <p className="text-white/90">Horoscope: {profile.horoscopeSign}</p>
                  )}
                  {profile.chineseZodiac && (
                    <p className="text-white/90">Chinese Zodiac: {profile.chineseZodiac}</p>
                  )}
                  <div className="space-x-4">
                    <Button
                      onClick={() => navigate("/fortune")}
                      className="text-primary-foreground bg-primary hover:bg-primary/90"
                    >
                      Get Fortune
                    </Button>
                    <Button
                      onClick={() => deleteProfile(index)}
                      variant="destructive"
                      className="text-white"
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="mt-8">
            <Button
              onClick={() => navigate(-1)}
              variant="link"
              className="text-white"
            >
              <ChevronLeft className="me-1 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
              Back
            </Button>
          </div>
        </div>
      </div>
    </MysticalBackground>
  );
};

export default ProfilesPage;