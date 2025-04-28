
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
      {/* Hero Section - Made responsive */}
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

      {/* Main Content - Adapted for mobile */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
          {/* Left Column - Main Content */}
          <motion.div 
            className="lg:col-span-2 space-y-6 md:space-y-10"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Professional Background */}
            <motion.div variants={item}>
              {isMobile ? (
                <Collapsible 
                  open={expandedSection === "background"} 
                  onOpenChange={() => toggleSection("background")}
                  className="w-full"
                >
                  <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="border-l-4 border-primary p-4 md:p-6">
                      <CollapsibleTrigger asChild>
                        <div className="flex items-start gap-3 justify-between cursor-pointer">
                          <div className="flex items-start gap-3">
                            <div className="bg-primary/10 p-2 rounded-full">
                              <Briefcase className="h-5 w-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">Professional Background</h2>
                          </div>
                          {expandedSection === "background" ? 
                            <ChevronUp className="h-5 w-5" /> : 
                            <ChevronDown className="h-5 w-5" />
                          }
                        </div>
                      </CollapsibleTrigger>
                      
                      <CollapsibleContent className="mt-4">
                        <div className="space-y-4 text-base md:text-lg">
                          <p>
                            I'm an AI Specialist with expertise in developing agentic systems and voice interfaces. 
                            My work with LangChain, Crew AI, and Pydantic has achieved significant results, including 
                            91% accuracy in satellite imagery analysis.
                          </p>
                          <p>
                            As a Data Science Trainee at Bompix Mori IT Solutions, I implemented TensorFlow forecasting 
                            pipelines that reduced forecasting errors by 15%. Previously, at Spartificial Innovations, 
                            I led a team developing ML models for satellite imagery analysis.
                          </p>
                          <p>
                            I'm passionate about creating AI systems that solve real-world problems and am continuously 
                            learning cutting-edge technologies like RAG and LLM deployment. My approach focuses on 
                            building practical, efficient solutions that deliver measurable results.
                          </p>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mt-6">
                          {skills.slice(0, expanded ? skills.length : 4).map((skill) => (
                            <Badge key={skill} variant="outline" className="bg-primary/5 hover:bg-primary/20 py-1 px-2 text-xs md:text-sm">
                              {skill}
                            </Badge>
                          ))}
                          
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="flex items-center gap-1 mt-1"
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
                <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="border-l-4 border-primary p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="text-3xl font-bold">Professional Background</h2>
                    </div>
                    
                    <div className="space-y-6 text-lg">
                      <p>
                        I'm an AI Specialist with expertise in developing agentic systems and voice interfaces. 
                        My work with LangChain, Crew AI, and Pydantic has achieved significant results, including 
                        91% accuracy in satellite imagery analysis.
                      </p>
                      <p>
                        As a Data Science Trainee at Bompix Mori IT Solutions, I implemented TensorFlow forecasting 
                        pipelines that reduced forecasting errors by 15%. Previously, at Spartificial Innovations, 
                        I led a team developing ML models for satellite imagery analysis.
                      </p>
                      <p>
                        I'm passionate about creating AI systems that solve real-world problems and am continuously 
                        learning cutting-edge technologies like RAG and LLM deployment. My approach focuses on 
                        building practical, efficient solutions that deliver measurable results.
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-8">
                      {skills.slice(0, expanded ? skills.length : 4).map((skill) => (
                        <Badge key={skill} variant="outline" className="bg-primary/5 hover:bg-primary/20 py-1 px-3 text-sm">
                          {skill}
                        </Badge>
                      ))}
                      
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="flex items-center gap-1"
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
            
            {/* Professional Highlights */}
            <motion.div variants={item}>
              {isMobile ? (
                <Collapsible 
                  open={expandedSection === "highlights"} 
                  onOpenChange={() => toggleSection("highlights")}
                  className="w-full"
                >
                  <Card className="overflow-hidden border-none shadow-lg p-4">
                    <CollapsibleTrigger asChild>
                      <div className="flex items-center justify-between cursor-pointer">
                        <div className="flex items-center gap-2">
                          <Briefcase className="h-5 w-5 text-primary" />
                          <h2 className="text-2xl font-semibold">Professional Highlights</h2>
                        </div>
                        {expandedSection === "highlights" ? 
                          <ChevronUp className="h-5 w-5" /> : 
                          <ChevronDown className="h-5 w-5" />
                        }
                      </div>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent className="mt-4">
                      <ProfessionalHighlights />
                    </CollapsibleContent>
                  </Card>
                </Collapsible>
              ) : (
                <ProfessionalHighlights />
              )}
            </motion.div>
            
            {/* Timeline */}
            <motion.div variants={item}>
              {isMobile ? (
                <Collapsible 
                  open={expandedSection === "timeline"} 
                  onOpenChange={() => toggleSection("timeline")}
                  className="w-full"
                >
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-0">
                      <div className="bg-gradient-to-br from-primary/5 to-primary/20 p-4">
                        <CollapsibleTrigger asChild>
                          <div className="flex items-center justify-between cursor-pointer">
                            <div className="flex items-center gap-2">
                              <Star className="h-5 w-5 text-primary" />
                              <h3 className="text-xl font-bold">Career Timeline</h3>
                            </div>
                            {expandedSection === "timeline" ? 
                              <ChevronUp className="h-5 w-5" /> : 
                              <ChevronDown className="h-5 w-5" />
                            }
                          </div>
                        </CollapsibleTrigger>
                        
                        <CollapsibleContent className="mt-4">
                          <Timeline />
                        </CollapsibleContent>
                      </div>
                    </CardContent>
                  </Card>
                </Collapsible>
              ) : (
                <Card className="border-none shadow-lg">
                  <CardContent className="p-0">
                    <AspectRatio ratio={16/7} className="bg-gradient-to-br from-primary/5 to-primary/20">
                      <div className="p-6 md:p-8">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                          <Star className="h-5 w-5 text-primary" />
                          Career Timeline
                        </h3>
                        <Timeline />
                      </div>
                    </AspectRatio>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          </motion.div>
          
          {/* Right Column - Sidebar */}
          <motion.div 
            className="space-y-6 md:space-y-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Education Card */}
            <motion.div variants={item}>
              {isMobile ? (
                <Collapsible 
                  open={expandedSection === "education"} 
                  onOpenChange={() => toggleSection("education")}
                  className="w-full"
                >
                  <Card className="overflow-hidden border-none shadow-lg">
                    <CardContent className="p-0">
                      <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 p-4">
                        <CollapsibleTrigger asChild>
                          <div className="flex items-center justify-between cursor-pointer">
                            <div className="flex items-center gap-2">
                              <GraduationCap className="h-5 w-5 text-primary" />
                              <h3 className="text-xl font-bold">Education</h3>
                            </div>
                            {expandedSection === "education" ? 
                              <ChevronUp className="h-5 w-5" /> : 
                              <ChevronDown className="h-5 w-5" />
                            }
                          </div>
                        </CollapsibleTrigger>
                        
                        <CollapsibleContent className="mt-4 space-y-3">
                          <div className="bg-white/80 dark:bg-black/20 rounded-lg p-4 backdrop-blur-sm">
                            <h4 className="font-semibold">Bachelor of Technology in Computer Science</h4>
                            <p className="text-muted-foreground text-sm mt-1">Lovely Professional University, 2020-2024</p>
                          </div>
                          
                          <div className="bg-white/80 dark:bg-black/20 rounded-lg p-4 backdrop-blur-sm">
                            <h4 className="font-semibold">AI & Machine Learning Certification</h4>
                            <p className="text-muted-foreground text-sm mt-1">DeepLearning.AI, 2023</p>
                          </div>
                        </CollapsibleContent>
                      </div>
                    </CardContent>
                  </Card>
                </Collapsible>
              ) : (
                <Card className="overflow-hidden border-none shadow-lg">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 p-6">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <GraduationCap className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">Education</h3>
                      </div>
                      
                      <div className="space-y-5">
                        <div className="bg-white/80 dark:bg-black/20 rounded-lg p-4 backdrop-blur-sm">
                          <h4 className="font-semibold">Bachelor of Technology in Computer Science</h4>
                          <p className="text-muted-foreground text-sm mt-1">Lovely Professional University, 2020-2024</p>
                        </div>
                        
                        <div className="bg-white/80 dark:bg-black/20 rounded-lg p-4 backdrop-blur-sm">
                          <h4 className="font-semibold">AI & Machine Learning Certification</h4>
                          <p className="text-muted-foreground text-sm mt-1">DeepLearning.AI, 2023</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </motion.div>
            
            {/* Achievements Card */}
            <motion.div variants={item}>
              {isMobile ? (
                <Collapsible 
                  open={expandedSection === "achievements"} 
                  onOpenChange={() => toggleSection("achievements")}
                  className="w-full"
                >
                  <Card className="overflow-hidden border-none shadow-lg">
                    <CardContent className="p-0">
                      <div className="bg-gradient-to-br from-pink-50 to-orange-50 dark:from-pink-950/30 dark:to-orange-950/30 p-4">
                        <CollapsibleTrigger asChild>
                          <div className="flex items-center justify-between cursor-pointer">
                            <div className="flex items-center gap-2">
                              <Award className="h-5 w-5 text-primary" />
                              <h3 className="text-xl font-bold">Achievements</h3>
                            </div>
                            {expandedSection === "achievements" ? 
                              <ChevronUp className="h-5 w-5" /> : 
                              <ChevronDown className="h-5 w-5" />
                            }
                          </div>
                        </CollapsibleTrigger>
                        
                        <CollapsibleContent className="mt-4">
                          <ul className="space-y-3">
                            {[
                              "Hackathon Winner - AI Innovation Challenge 2023",
                              "Published research on ML for environmental monitoring",
                              "Top 5% contributor on AI research platforms",
                              "Open source contributor to LangChain framework"
                            ].map((achievement, index) => (
                              <li key={index} className="flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-primary" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </CollapsibleContent>
                      </div>
                    </CardContent>
                  </Card>
                </Collapsible>
              ) : (
                <Card className="overflow-hidden border-none shadow-lg">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-pink-50 to-orange-50 dark:from-pink-950/30 dark:to-orange-950/30 p-6">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Award className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">Achievements</h3>
                      </div>
                      
                      <ul className="space-y-3">
                        {[
                          "Hackathon Winner - AI Innovation Challenge 2023",
                          "Published research on ML for environmental monitoring",
                          "Top 5% contributor on AI research platforms",
                          "Open source contributor to LangChain framework"
                        ].map((achievement, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <div className="h-2 w-2 rounded-full bg-primary" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
