import { FortuneTeller } from "@/components/FortuneTeller";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MysticalBackground } from "@/components/ui/mystical-background";

const FortunePage = () => {
  const navigate = useNavigate();
  
  return (
    <MysticalBackground>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h1 className="text-4xl font-bold font-cinzel text-white mb-8">
            Consult the Stars
          </h1>
          <div className="flex justify-center">
            <FortuneTeller />
          </div>
          <div>
            <Button 
              onClick={() => navigate(-1)}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              Back
            </Button>
          </div>
        </div>
      </div>
    </MysticalBackground>
  );
};

export default FortunePage;