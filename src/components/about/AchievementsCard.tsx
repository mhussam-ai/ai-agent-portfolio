
import { Card, CardContent } from "@/components/ui/card";
import { Award, ChevronUp, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const achievements = [
  "Class Representative First Year",
  "SIH Finalist",
  "Fast Learner, Always Learning New Skills and Latest Tech",
  "Experienced mentor and hackathon participant"
];

interface AchievementsCardProps {
  isMobile: boolean;
  expandedSection: string | null;
  toggleSection: (section: string) => void;
}

export const AchievementsCard = ({ isMobile, expandedSection, toggleSection }: AchievementsCardProps) => {
  if (isMobile) {
    return (
      <Collapsible 
        open={expandedSection === "achievements"} 
        onOpenChange={() => toggleSection("achievements")}
        className="w-full"
      >
        <Card className="group overflow-hidden border-none shadow-lg bg-gradient-to-br from-pink-50/50 via-background to-orange-50/50 dark:from-pink-950/30 dark:to-orange-950/30 hover:shadow-xl transition-all duration-300">
          <CardContent className="p-4">
            <CollapsibleTrigger asChild>
              <div className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Achievements</h3>
                </div>
                {expandedSection === "achievements" ? 
                  <ChevronUp className="h-5 w-5 text-primary transition-transform" /> : 
                  <ChevronDown className="h-5 w-5 text-primary transition-transform" />
                }
              </div>
            </CollapsibleTrigger>
            
            <CollapsibleContent className="mt-6">
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-center gap-3 bg-white/80 dark:bg-black/20 p-3 rounded-lg backdrop-blur-sm hover:bg-white/90 dark:hover:bg-black/30 transition-colors">
                    <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
                    <span className="text-sm md:text-base">{achievement}</span>
                  </li>
                ))}
              </ul>
            </CollapsibleContent>
          </CardContent>
        </Card>
      </Collapsible>
    );
  }

  return (
    <Card className="group overflow-hidden border-none shadow-lg bg-gradient-to-br from-pink-50/50 via-background to-orange-50/50 dark:from-pink-950/30 dark:to-orange-950/30 hover:shadow-xl transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
            <Award className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-primary">Achievements</h3>
        </div>
        
        <ul className="space-y-4">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex items-center gap-3 bg-white/80 dark:bg-black/20 p-3 rounded-lg backdrop-blur-sm hover:bg-white/90 dark:hover:bg-black/30 transition-colors">
              <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
              <span className="text-sm md:text-base">{achievement}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
