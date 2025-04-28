
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, ChevronUp, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface EducationCardProps {
  isMobile: boolean;
  expandedSection: string | null;
  toggleSection: (section: string) => void;
}

export const EducationCard = ({ isMobile, expandedSection, toggleSection }: EducationCardProps) => {
  if (isMobile) {
    return (
      <Collapsible 
        open={expandedSection === "education"} 
        onOpenChange={() => toggleSection("education")}
        className="w-full"
      >
        <Card className="group overflow-hidden border-none shadow-lg bg-gradient-to-br from-blue-50/50 via-background to-purple-50/50 dark:from-blue-950/30 dark:to-purple-950/30 hover:shadow-xl transition-all duration-300">
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
                <h4 className="font-semibold text-primary">B.Tech in Artificial Intelligence</h4>
                <p className="text-muted-foreground text-sm mt-1">G. H. Raisoni Institute of Engineering and Business Management, Jalgaon, 2020-2024</p>
                <p className="text-sm mt-2">Coursework: Python, Machine Learning, Deep Learning, Cloud Computing, NLP, Computer Vision, TensorFlow, PyTorch, Keras, Neural Network</p>
              </div>
            </CollapsibleContent>
          </CardContent>
        </Card>
      </Collapsible>
    );
  }

  return (
    <Card className="group overflow-hidden border-none shadow-lg bg-gradient-to-br from-blue-50/50 via-background to-purple-50/50 dark:from-blue-950/30 dark:to-purple-950/30 hover:shadow-xl transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
            <GraduationCap className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-primary">Education</h3>
        </div>
        
        <div className="space-y-4">
          <div className="bg-white/80 dark:bg-black/20 rounded-lg p-4 backdrop-blur-sm hover:bg-white/90 dark:hover:bg-black/30 transition-colors">
            <h4 className="font-semibold text-primary">B.Tech in Artificial Intelligence</h4>
            <p className="text-muted-foreground text-sm mt-1">G. H. Raisoni Institute of Engineering and Business Management, Jalgaon, 2020-2024</p>
            <p className="text-sm mt-2">Coursework: Python, Machine Learning, Deep Learning, Cloud Computing, NLP, Computer Vision, TensorFlow, PyTorch, Keras, Neural Network</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
