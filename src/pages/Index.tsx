import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen mystical-bg relative overflow-hidden">
      <div className="stars" />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold font-cinzel text-primary">
            Expert Fortune Teller
          </h1>
          <p className="text-xl text-white/90">
            Discover your destiny through the ancient wisdom of the stars
          </p>
          <div className="space-y-4">
            <Button
              onClick={() => navigate("/profile")}
              className="w-full md:w-auto text-primary-foreground bg-primary hover:bg-primary/90"
            >
              Create New Profile
            </Button>
            <Button
              onClick={() => navigate("/profiles")}
              variant="outline"
              className="w-full md:w-auto border-white/20 text-white hover:bg-white/10"
            >
              View Saved Profiles
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;