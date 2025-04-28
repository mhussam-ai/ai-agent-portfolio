import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, ChevronDown, ChevronUp } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const skills = [
  "LLM Engineering", "Voice AI", "Machine Learning", "Agent Development",
  "TensorFlow", "PyTorch", "LangChain", "RAG", "NLP", "Computer Vision"
];

interface BackgroundCardProps {
  isMobile: boolean;
  expandedSection: string | null;
  toggleSection: (section: string) => void;
}

export const BackgroundCard = ({ isMobile, expandedSection, toggleSection }: BackgroundCardProps) => {
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const cardVariants = {
    hover: {
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  if (isMobile) {
    return (
      <Collapsible 
        open={expandedSection === "background"} 
        onOpenChange={() => toggleSection("background")}
        className="w-full"
      >
        <Card className="group overflow-hidden border-none shadow-lg bg-gradient-to-br from-primary/5 via-background to-background hover:shadow-xl transition-all duration-300">
          <div className="border-l-4 border-primary p-4 md:p-6">
            <CollapsibleTrigger asChild>
              <div className="flex items-start gap-3 justify-between cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary">
                    Professional Background
                  </h2>
                </div>
                {expandedSection === "background" ? 
                  <ChevronUp className="h-5 w-5 text-primary transition-transform" /> : 
                  <ChevronDown className="h-5 w-5 text-primary transition-transform" />
                }
              </div>
            </CollapsibleTrigger>
            
            <CollapsibleContent className="mt-6 space-y-4">
              <div className="space-y-4 text-base md:text-lg prose dark:prose-invert max-w-none">
                <p className="leading-relaxed">
                  I'm an AI Specialist with expertise in developing agentic systems and voice interfaces. 
                  My work with LangChain, Crew AI, and Pydantic has achieved significant results, including 
                  91% accuracy in satellite imagery analysis.
                </p>
                <p className="leading-relaxed">
                  As a Data Science Trainee at Bompix Mori IT Solutions, I implemented TensorFlow forecasting 
                  pipelines that reduced forecasting errors by 15%. Previously, at Spartificial Innovations, 
                  I led a team developing ML models for satellite imagery analysis.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-6">
                {skills.slice(0, expanded ? skills.length : 4).map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="outline" 
                    className="bg-primary/5 hover:bg-primary/20 py-1.5 px-3 text-sm transition-colors duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="flex items-center gap-1 hover:bg-primary/10"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleExpanded();
                  }}
                >
                  {expanded ? (
                    <>
                      <ChevronUp className="h-4 w-4" />
                      <span>Show Less</span>
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-4 w-4" />
                      <span>Show More</span>
                    </>
                  )}
                </Button>
              </div>
            </CollapsibleContent>
          </div>
        </Card>
      </Collapsible>
    );
  }

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
    >
      <Card className="group overflow-hidden border-none shadow-lg bg-gradient-to-br from-primary/5 via-background to-background transition-all duration-300">
        <div className="border-l-4 border-primary p-6 md:p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
              <Briefcase className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-primary">
              Professional Background
            </h2>
          </div>
          
          <div className="space-y-6 text-lg prose dark:prose-invert max-w-none">
            <p className="leading-relaxed">
              I'm an AI Specialist with expertise in developing agentic systems and voice interfaces. 
              My work with LangChain, Crew AI, and Pydantic has achieved significant results, including 
              91% accuracy in satellite imagery analysis.
            </p>
            <p className="leading-relaxed">
              As a Data Science Trainee at Bompix Mori IT Solutions, I implemented TensorFlow forecasting 
              pipelines that reduced forecasting errors by 15%. Previously, at Spartificial Innovations, 
              I led a team developing ML models for satellite imagery analysis.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-8">
            {skills.slice(0, expanded ? skills.length : 4).map((skill) => (
              <Badge 
                key={skill} 
                variant="outline" 
                className="bg-primary/5 hover:bg-primary/20 py-1.5 px-3 text-sm transition-colors duration-200"
              >
                {skill}
              </Badge>
            ))}
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="flex items-center gap-1 hover:bg-primary/10"
              onClick={toggleExpanded}
            >
              {expanded ? (
                <>
                  <ChevronUp className="h-4 w-4" />
                  <span>Show Less</span>
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4" />
                  <span>Show More</span>
                </>
              )}
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
