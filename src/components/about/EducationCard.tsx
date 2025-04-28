
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { GraduationCap, ChevronUp, ChevronDown, Book, Calendar } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface EducationCardProps {
  isMobile: boolean;
  expandedSection: string | null;
  toggleSection: (section: string) => void;
}

const courses = [
  "Python", "Machine Learning", "Deep Learning", "Cloud Computing", 
  "NLP", "Computer Vision", "TensorFlow", "PyTorch", "Keras", "Neural Networks"
];

export const EducationCard = ({ isMobile, expandedSection, toggleSection }: EducationCardProps) => {
  if (isMobile) {
    return (
      <Collapsible 
        open={expandedSection === "education"} 
        onOpenChange={() => toggleSection("education")}
        className="w-full"
      >
        <Card className="group overflow-hidden border-none shadow-lg bg-gradient-to-br from-blue-50/50 via-background to-primary-50/50 dark:from-blue-950/30 dark:to-primary-900/30 hover:shadow-xl transition-all duration-300">
          <CardContent className="p-4">
            <CollapsibleTrigger asChild>
              <div className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Education</h3>
                </div>
                {expandedSection === "education" ? 
                  <ChevronUp className="h-5 w-5 text-primary transition-transform" /> : 
                  <ChevronDown className="h-5 w-5 text-primary transition-transform" />
                }
              </div>
            </CollapsibleTrigger>
            
            <CollapsibleContent className="mt-6 space-y-4">
              <div className="bg-white/80 dark:bg-black/20 rounded-lg p-4 backdrop-blur-sm hover:bg-white/90 dark:hover:bg-black/30 transition-colors">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-primary text-lg">B.Tech in Artificial Intelligence</h4>
                    <p className="text-foreground text-sm mt-1">G. H. Raisoni Institute of Engineering and Business Management, Jalgaon</p>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>2020-2024</span>
                  </div>
                </div>
                
                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-1.5">
                    <Book className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Key Coursework</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {courses.map((course, index) => (
                      <Badge 
                        key={index}
                        variant="outline" 
                        className="bg-primary/5 text-xs"
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
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
      <Card className="group overflow-hidden border-none shadow-lg bg-gradient-to-br from-blue-50/50 via-background to-primary-50/50 dark:from-blue-950/30 dark:to-primary-900/30 hover:shadow-xl transition-all duration-300">
        <CardHeader className="pb-0">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
              <GraduationCap className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary">Education</h3>
          </div>
        </CardHeader>
        
        <CardContent>
          <div className="space-y-4">
            <div className="bg-white/80 dark:bg-black/20 rounded-lg p-4 backdrop-blur-sm hover:bg-white/90 dark:hover:bg-black/30 transition-colors">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-primary text-lg">B.Tech in Artificial Intelligence</h4>
                  <p className="text-foreground text-sm mt-1">G. H. Raisoni Institute of Engineering and Business Management, Jalgaon</p>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>2020-2024</span>
                </div>
              </div>
              
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-1.5">
                  <Book className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Key Coursework</span>
                </div>
                
                <div className="flex flex-wrap gap-1.5">
                  {courses.map((course, index) => (
                    <Badge 
                      key={index}
                      variant="outline" 
                      className="bg-primary/5 text-xs"
                    >
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
