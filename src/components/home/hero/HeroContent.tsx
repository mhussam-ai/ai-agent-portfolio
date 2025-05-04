
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Trophy } from "lucide-react";
import { TypewriterEffect } from "../TypewriterEffect";
import { SocialLinks } from "./SocialLinks";

interface HeroContentProps {
  typewriterWords: { text: string }[];
}

export const HeroContent = ({ typewriterWords }: HeroContentProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div 
      className="flex flex-col justify-center"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item} className="flex mb-2">
        <div className="relative inline-block">
          <span className="text-primary font-medium">Hello, I'm</span>
        </div>
      </motion.div>
      
      <motion.h1 
        variants={item} 
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
      >
        Mohammad Hussam
      </motion.h1>

      <motion.div variants={item} className="flex items-center gap-2 mb-3">
        <Badge className="bg-gradient-to-r from-yellow-400 to-amber-600 hover:from-yellow-500 hover:to-amber-700 py-1 px-3 text-white flex items-center gap-1.5 shadow-lg">
          <Trophy className="h-3.5 w-3.5" />
          <span className="font-medium">The Better Hack Winner</span>
        </Badge>
      </motion.div>
      
      <motion.div variants={item} className="h-10 md:h-12 mb-6">
        <TypewriterEffect words={typewriterWords} className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground" />
      </motion.div>

      <motion.p 
        variants={item} 
        className="text-base md:text-lg text-muted-foreground mb-8 max-w-lg"
      >
        AI Specialist with expertise in agentic systems, voice interfaces, and machine learning, utilizing tools like LangChain, Crew AI, Agno, and PydanticAI.
      </motion.p>
      
      <motion.div 
        variants={item}
        className="flex flex-wrap gap-4"
      >
        <Button asChild size="lg" className="gap-2 group">
          <Link to="/projects">
            Explore Projects
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
        
        <Button asChild variant="outline" size="lg" className="gap-2">
          <Link to="/contact">
            Contact Me
            <Mail className="h-4 w-4" />
          </Link>
        </Button>
      </motion.div>

      {/* Mobile Social Links */}
      <motion.div 
        variants={item}
        className="flex lg:hidden justify-center gap-4 mt-8"
      >
        <SocialLinks />
      </motion.div>
    </motion.div>
  );
};

// Missing import for Badge component
import { Badge } from "@/components/ui/badge";
