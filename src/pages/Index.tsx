
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground py-24 px-4">
      <motion.div 
        className="text-center space-y-6 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Hi, I'm{" "}
          <span className="text-primary">
            Mohammad Hussam
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          AI Specialist focused on developing intelligent agentic systems and voice interfaces. 
          Skilled in LangChain, Crew AI, and cutting-edge AI technologies.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <Button asChild size="lg" className="gap-2">
            <Link to="/projects">
              View Projects 
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>

        <div className="flex justify-center gap-4 mt-8 pt-4">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/mhussam-ai" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com/in/mhussam-ai" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:mohammadhussam.ai@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://huggingface.co/mhussam-ai" target="_blank" rel="noopener noreferrer" aria-label="Hugging Face Profile">
              <ExternalLink className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
