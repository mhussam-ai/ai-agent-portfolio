import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export const ProfileImage = () => <div className="relative mt-4 md:mt-0">
    <div className="absolute -inset-4 rounded-full bg-primary/10 blur-2xl"></div>
    <div className="w-60 h-60 md:w-72 md:h-72 rounded-full border-2 border-primary/30 overflow-hidden relative z-10">
      <Avatar className="w-full h-full">
        <AvatarImage alt="Mohammad Hussam" src="/lovable-uploads/acb02458-6cba-4e1c-acba-23fc692bba4d.jpg" />
        <AvatarFallback>MH</AvatarFallback>
      </Avatar>
    </div>
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-transparent blur-xl -z-10"></div>
  </div>;