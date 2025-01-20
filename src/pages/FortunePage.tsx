import { FortuneTeller } from "@/components/FortuneTeller";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FortunePage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen mystical-bg relative overflow-hidden">
      <div className="stars" />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h1 className="text-4xl font-bold font-cinzel text-primary mb-8">
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
    </div>
  );
};

export default FortunePage;