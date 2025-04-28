import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Timeline } from "@/components/Timeline";
import { ProfessionalHighlights } from "@/components/ProfessionalHighlights";
import { Briefcase, GraduationCap, Award, ChevronDown, ChevronUp, Star } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useIsMobile } from "@/hooks/use-mobile";

const About = () => {
  const [expanded, setExpanded] = useState(false);
  const isMobile = useIsMobile();
  const [expandedSection, setExpandedSection] = useState<string | null>("background");
  
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { ease: "easeOut" } }
  };

  const skills = [
    "LLM Engineering", "Voice AI", "Machine Learning", "Agent Development",
    "TensorFlow", "PyTorch", "LangChain", "RAG", "NLP", "Computer Vision"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/90">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 opacity-50" />
        <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
          <motion.div 
            className="flex flex-col gap-4 md:gap-6 max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              About Me
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground px-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              AI specialist passionate about building intelligent systems that solve real-world problems
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
          <motion.div 
            className="lg:col-span-2 space-y-6 md:space-y-10"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item}>
              {isMobile ? (
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
                            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
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
              ) : (
                <Card className="group overflow-hidden border-none shadow-lg bg-gradient-to-br from-primary/5 via-background to-background hover:shadow-xl transition-all duration-300">
                  <div className="border-l-4 border-primary p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
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
              )}
            </motion.div>
            
            <motion.div variants={item}>
              {isMobile ? (
                <Collapsible 
                  open={expandedSection === "highlights"} 
                  onOpenChange={() => toggleSection("highlights")}
                  className="w-full"
                >
                  <Card className="group overflow-hidden border-none shadow-lg bg-gradient-to-br from-primary/5 via-background to-background hover:shadow-xl transition-all duration-300 p-4">
                    <CollapsibleTrigger asChild>
                      <div className="flex items-center justify-between cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                            <Briefcase className="h-5 w-5 text-primary" />
                          </div>
                          <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
                            Professional Highlights
                          </h2>
                        </div>
                        {expandedSection === "highlights" ? 
                          <ChevronUp className="h-5 w-5 text-primary transition-transform" /> : 
                          <ChevronDown className="h-5 w-5 text-primary transition-transform" />
                        }
                      </div>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent className="mt-6">
                      <ProfessionalHighlights />
                    </CollapsibleContent>
                  </Card>
                </Collapsible>
              ) : (
                <Card className="group overflow-hidden border-none shadow-lg bg-gradient-to-br from-primary/5 via-background to-background hover:shadow-xl transition-all duration-300 p-6">
                  <ProfessionalHighlights />
                </Card>
              )}
            </motion.div>
            
            <motion.div variants={item}>
              {isMobile ? (
                <Collapsible 
                  open={expandedSection === "timeline"} 
                  onOpenChange={() => toggleSection("timeline")}
                  className="w-full"
                >
                  <Card className="group overflow-hidden border-none shadow-lg bg-gradient-to-br from-primary/5 via-background to-background hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="p-4">
                        <CollapsibleTrigger asChild>
                          <div className="flex items-center justify-between cursor-pointer">
                            <div className="flex items-center gap-3">
                              <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                                <Star className="h-5 w-5 text-primary" />
                              </div>
                              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
                                Career Timeline
                              </h3>
                            </div>
                            {expandedSection === "timeline" ? 
                              <ChevronUp className="h-5 w-5 text-primary transition-transform" /> : 
                              <ChevronDown className="h-5 w-5 text-primary transition-transform" />
                            }
                          </div>
                        </CollapsibleTrigger>
                        
                        <CollapsibleContent className="mt-6">
                          <Timeline />
                        </CollapsibleContent>
                      </div>
                    </CardContent>
                  </Card>
                </Collapsible>
              ) : (
                <Card className="group overflow-hidden border-none shadow-lg bg-gradient-to-br from-primary/5 via-background to-background hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <AspectRatio ratio={16/7}>
                      <div className="p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                            <Star className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
                            Career Timeline
                          </h3>
                        </div>
                        <Timeline />
                      </div>
                    </AspectRatio>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="space-y-6 md:space-y-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item}>
              {isMobile ? (
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
                            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
                              Education
                            </h3>
                          </div>
                          {expandedSection === "education" ? 
                            <ChevronUp className="h-5 w-5 text-primary transition-transform" /> : 
                            <ChevronDown className="h-5 w-5 text-primary transition-transform" />
                          }
                        </div>
                      </CollapsibleTrigger>
                      
                      <CollapsibleContent className="mt-6 space-y-4">
                        <div className="bg-white/80 dark:bg-black/20 rounded-lg p-4 backdrop-blur-sm hover:bg-white/90 dark:hover:bg-black/30 transition-colors">
                          <h4 className="font-semibold text-primary">Bachelor of Technology in Computer Science</h4>
                          <p className="text-muted-foreground text-sm mt-1">Lovely Professional University, 2020-2024</p>
                        </div>
                        
                        <div className="bg-white/80 dark:bg-black/20 rounded-lg p-4 backdrop-blur-sm hover:bg-white/90 dark:hover:bg-black/30 transition-colors">
                          <h4 className="font-semibold text-primary">AI & Machine Learning Certification</h4>
                          <p className="text-muted-foreground text-sm mt-1">DeepLearning.AI, 2023</p>
                        </div>
                      </CollapsibleContent>
                    </CardContent>
                  </Card>
                </Collapsible>
              ) : (
                <Card className="group overflow-hidden border-none shadow-lg bg-gradient-to-br from-blue-50/50 via-background to-purple-50/50 dark:from-blue-950/30 dark:to-purple-950/30 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                        <GraduationCap className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
                        Education
                      </h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-white/80 dark:bg-black/20 rounded-lg p-4 backdrop-blur-sm hover:bg-white/90 dark:hover:bg-black/30 transition-colors">
                        <h4 className="font-semibold text-primary">Bachelor of Technology in Computer Science</h4>
                        <p className="text-muted-foreground text-sm mt-1">Lovely Professional University, 2020-2024</p>
                      </div>
                      
                      <div className="bg-white/80 dark:bg-black/20 rounded-lg p-4 backdrop-blur-sm hover:bg-white/90 dark:hover:bg-black/30 transition-colors">
                        <h4 className="font-semibold text-primary">AI & Machine Learning Certification</h4>
                        <p className="text-muted-foreground text-sm mt-1">DeepLearning.AI, 2023</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </motion.div>
            
            <motion.div variants={item}>
              {isMobile ? (
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
                            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
                              Achievements
                            </h3>
                          </div>
                          {expandedSection === "achievements" ? 
                            <ChevronUp className="h-5 w-5 text-primary transition-transform" /> : 
                            <ChevronDown className="h-5 w-5 text-primary transition-transform" />
                          }
                        </div>
                      </CollapsibleTrigger>
                      
                      <CollapsibleContent className="mt-6">
                        <ul className="space-y-4">
                          {[
                            "Hackathon Winner - AI Innovation Challenge 2023",
                            "Published research on ML for environmental monitoring",
                            "Top 5% contributor on AI research platforms",
                            "Open source contributor to LangChain framework"
                          ].map((achievement, index) => (
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
              ) : (
                <Card className="group overflow-hidden border-none shadow-lg bg-gradient-to-br from-pink-50/50 via-background to-orange-50/50 dark:from-pink-950/30 dark:to-orange-950/30 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                        <Award className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
                        Achievements
                      </h3>
                    </div>
                    
                    <ul className="space-y-4">
                      {[
                        "Hackathon Winner - AI Innovation Challenge 2023",
                        "Published research on ML for environmental monitoring",
                        "Top 5% contributor on AI research platforms",
                        "Open source contributor to LangChain framework"
                      ].map((achievement, index) => (
                        <li key={index} className="flex items-center gap-3 bg-white/80 dark:bg-black/20 p-3 rounded-lg backdrop-blur-sm hover:bg-white/90 dark:hover:bg-black/30 transition-colors">
                          <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
                          <span className="text-sm md:text-base">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
