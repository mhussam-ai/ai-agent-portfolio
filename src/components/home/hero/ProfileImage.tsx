
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const ProfileImage = () => (
  <div className="relative mt-4 md:mt-0">
    <div className="absolute -inset-4 rounded-full bg-primary/10 blur-2xl"></div>
    <div className="w-60 h-60 md:w-72 md:h-72 rounded-full border-2 border-primary/30 overflow-hidden relative z-10">
      <Avatar className="w-full h-full">
        <AvatarImage src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1740&auto=format&fit=crop" alt="Mohammad Hussam" />
        <AvatarFallback>MH</AvatarFallback>
      </Avatar>
    </div>
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-transparent blur-xl -z-10"></div>
  </div>
);
