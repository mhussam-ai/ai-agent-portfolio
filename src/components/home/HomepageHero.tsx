
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, Github, Linkedin, Mail, Smile } from "lucide-react";
import { motion } from "framer-motion";
import { TypewriterEffect } from "./TypewriterEffect";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const HomepageHero = () => {
  const words = [
    { text: "AI" },
    { text: "Specialist" },
    { text: "&" },
    { text: "Agent" },
    { text: "Developer" },
  ];

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
    <section className="relative min-h-screen flex flex-col justify-center py-20 md:py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Social Media Links - Left Side */}
          <motion.div 
            className="hidden lg:flex lg:col-span-1 flex-col items-center justify-center gap-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <a 
              href="https://github.com/mhussam-ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/mhussam-ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:mohammadhussam.ai@gmail.com"
              className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="https://huggingface.co/mhussam-ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
              aria-label="Hugging Face"
            >
              <Smile className="h-5 w-5" />
            </a>
          </motion.div>

          {/* Main Content - Middle */}
          <motion.div 
            className="lg:col-span-7 flex flex-col justify-center"
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
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              Mohammad Hussam
            </motion.h1>
            
            <motion.div variants={item} className="h-12 mb-6">
              <TypewriterEffect words={words} className="md:text-2xl lg:text-3xl font-medium text-muted-foreground" />
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
              className="flex lg:hidden justify-start gap-4 mt-8"
            >
              <a 
                href="https://github.com/mhussam-ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/mhussam-ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:mohammadhussam.ai@gmail.com"
                className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="https://huggingface.co/mhussam-ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
                aria-label="Hugging Face"
              >
                <Smile className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>
          
          {/* Profile Image - Right Side */}
          <motion.div 
            className="lg:col-span-4 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-primary/10 blur-2xl"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-primary/30 overflow-hidden relative z-10">
                <Avatar className="w-full h-full">
                  <AvatarImage src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1740&auto=format&fit=crop" alt="Mohammad Hussam" />
                  <AvatarFallback>MH</AvatarFallback>
                </Avatar>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-transparent blur-xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};
