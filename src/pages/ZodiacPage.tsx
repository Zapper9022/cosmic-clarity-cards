import { ZodiacForm } from "@/components/ZodiacForm";
import { MysticalBackground } from "@/components/ui/mystical-background";

const ZodiacPage = () => {
  return (
    <MysticalBackground>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h1 className="text-4xl font-bold font-cinzel text-primary mb-8">
            Select Your Zodiac Sign
          </h1>
          <div className="flex justify-center">
            <ZodiacForm />
          </div>
        </div>
      </div>
    </MysticalBackground>
  );
};

export default ZodiacPage;