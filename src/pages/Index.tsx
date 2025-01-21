import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MysticalBackground } from "@/components/ui/mystical-background";

const Index = () => {
  const navigate = useNavigate();

  return (
    <MysticalBackground>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold font-cinzel text-white">
            Expert Fortune Teller
          </h1>
          <p className="text-xl text-white/90">
            Discover your destiny through the ancient wisdom of the stars
          </p>
          <div>
            <Button
              onClick={() => navigate("/profile")}
              className="w-full md:w-auto text-primary-foreground bg-primary hover:bg-primary/90"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </MysticalBackground>
  );
};

export default Index;