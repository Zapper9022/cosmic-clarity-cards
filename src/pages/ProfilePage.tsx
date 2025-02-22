import { ProfileForm } from "@/components/ProfileForm";
import { MysticalBackground } from "@/components/ui/mystical-background";

const ProfilePage = () => {
  return (
    <MysticalBackground>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h1 className="text-4xl font-bold font-cinzel text-white mb-8">
            Create Your Profile
          </h1>
          <div className="flex justify-center">
            <ProfileForm />
          </div>
        </div>
      </div>
    </MysticalBackground>
  );
};

export default ProfilePage;