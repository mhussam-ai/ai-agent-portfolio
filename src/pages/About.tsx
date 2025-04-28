
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { AboutHero } from "@/components/about/AboutHero";
import { BackgroundCard } from "@/components/about/BackgroundCard";
import { ProfessionalHighlights } from "@/components/ProfessionalHighlights";
import { Timeline } from "@/components/Timeline";
import { EducationCard } from "@/components/about/EducationCard";
import { AchievementsCard } from "@/components/about/AchievementsCard";
import { motion } from "framer-motion";

const About = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>("background");
  const isMobile = useIsMobile();
  
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/90">
      <AboutHero />

      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
          <motion.div 
            className="lg:col-span-2 space-y-6 md:space-y-10"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item}>
              <BackgroundCard 
                isMobile={isMobile} 
                expandedSection={expandedSection} 
                toggleSection={toggleSection} 
              />
            </motion.div>
            
            <motion.div variants={item}>
              <ProfessionalHighlights />
            </motion.div>
            
            <motion.div variants={item}>
              <Timeline />
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="space-y-6 md:space-y-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item}>
              <EducationCard 
                isMobile={isMobile} 
                expandedSection={expandedSection} 
                toggleSection={toggleSection} 
              />
            </motion.div>
            
            <motion.div variants={item}>
              <AchievementsCard 
                isMobile={isMobile} 
                expandedSection={expandedSection} 
                toggleSection={toggleSection} 
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
