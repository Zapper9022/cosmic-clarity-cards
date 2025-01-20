import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface Profile {
  fullName: string;
  dateOfBirth: string;
  zodiacSign: string;
}

const ProfilesPage = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedProfiles = JSON.parse(localStorage.getItem("profiles") || "[]");
    setProfiles(savedProfiles);
  }, []);

  const selectProfile = (profile: Profile) => {
    localStorage.setItem("currentProfile", JSON.stringify(profile));
    navigate("/fortune");
  };

  const deleteProfile = (index: number) => {
    const updatedProfiles = profiles.filter((_, i) => i !== index);
    localStorage.setItem("profiles", JSON.stringify(updatedProfiles));
    setProfiles(updatedProfiles);
  };

  return (
    <div className="min-h-screen mystical-bg relative overflow-hidden">
      <div className="stars" />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h1 className="text-4xl font-bold font-cinzel text-primary mb-8">
            Saved Profiles
          </h1>
          
          {profiles.length === 0 ? (
            <div className="text-center space-y-4">
              <p className="text-white/90">No profiles found</p>
              <Button
                onClick={() => navigate("/profile")}
                className="text-primary-foreground bg-primary hover:bg-primary/90"
              >
                Create New Profile
              </Button>
            </div>
          ) : (
            <div className="grid gap-4">
              {profiles.map((profile, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-white/5 border border-white/10 space-y-4"
                >
                  <h3 className="text-xl font-cinzel text-primary">{profile.fullName}</h3>
                  <p className="text-white/90">Born: {new Date(profile.dateOfBirth).toLocaleDateString()}</p>
                  <p className="text-white/90">Zodiac: {profile.zodiacSign}</p>
                  <div className="space-x-4">
                    <Button
                      onClick={() => selectProfile(profile)}
                      className="text-primary-foreground bg-primary hover:bg-primary/90"
                    >
                      Select Profile
                    </Button>
                    <Button
                      onClick={() => deleteProfile(index)}
                      variant="destructive"
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilesPage;