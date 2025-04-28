
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Award, ChevronUp, ChevronDown, Star } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { motion } from "framer-motion";

const achievements = [
  {
    title: "Class Representative First Year",
    description: "Elected by peers to represent class interests and coordinate with faculty"
  },
  {
    title: "SIH Finalist",
    description: "Reached finals of Smart India Hackathon with an innovative AI solution"
  },
  {
    title: "Fast Learner",
    description: "Consistently mastering new technologies and frameworks"
  },
  {
    title: "Experienced Mentor",
    description: "Guided junior team members and participated in multiple hackathons"
  }
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
        <Card className="group overflow-hidden border-none shadow-lg bg-gradient-to-br from-primary-50/50 via-background to-pink-50/50 dark:from-primary-900/30 dark:to-pink-950/30 hover:shadow-xl transition-all duration-300">
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
                  <li 
                    key={index} 
                    className="bg-white/80 dark:bg-black/20 p-4 rounded-lg backdrop-blur-sm hover:bg-white/90 dark:hover:bg-black/30 transition-colors"
                  >
                    <div className="flex items-start gap-2">
                      <div className="p-1 bg-primary/10 rounded-full mt-0.5">
                        <Star className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{achievement.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{achievement.description}</p>
                      </div>
                    </div>
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
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Card className="group overflow-hidden border-none shadow-lg bg-gradient-to-br from-primary-50/50 via-background to-pink-50/50 dark:from-primary-900/30 dark:to-pink-950/30 hover:shadow-xl transition-all duration-300">
        <CardHeader className="pb-0">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
              <Award className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary">Achievements</h3>
          </div>
        </CardHeader>
        
        <CardContent>
          <ul className="space-y-4">
            {achievements.map((achievement, index) => (
              <motion.li 
                key={index} 
                className="bg-white/80 dark:bg-black/20 p-4 rounded-lg backdrop-blur-sm hover:bg-white/90 dark:hover:bg-black/30 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start gap-2">
                  <div className="p-1 bg-primary/10 rounded-full mt-0.5">
                    <Star className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{achievement.description}</p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
};
