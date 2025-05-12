
import { motion } from "framer-motion";
import { Trophy, Star, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const AchievementBanner = () => {
  return (
    <motion.div 
      className="relative overflow-hidden rounded-xl my-12 bg-gradient-to-r from-primary/10 to-purple-300/20 dark:from-primary/20 dark:to-purple-800/30 border border-primary/10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute -right-12 -top-12 w-48 h-48 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-purple-400/20 rounded-full blur-3xl opacity-50"></div>
      
      <div className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-8">
        <div className="flex-shrink-0 bg-primary/10 rounded-full p-4 md:p-5">
          <Trophy className="h-8 w-8 md:h-10 md:w-10 text-primary" />
        </div>
        
        <div className="flex-grow text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start flex-wrap gap-2 mb-2">
            <h3 className="text-xl md:text-2xl font-bold">Hackathon Winner</h3>
            <span className="bg-primary/20 text-primary px-2 py-0.5 text-xs rounded-full font-medium">
              The Better Hack
            </span>
          </div>
          
          <p className="text-muted-foreground mb-4">
            Recognized for creating an innovative AI-powered solution that impressed the judges and stood out among competitors.
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <Button asChild size="sm" variant="default" className="gap-2">
              <Link to="/projects/better-hack">
                View Project
                <Star className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="sm" variant="outline" className="gap-2">
              <Link to="/blog/better-hack-experience">
                Read My Experience
              </Link>
            </Button>
            <Button asChild size="sm" variant="outline" className="gap-2">
              <a href="https://m.youtube.com/watch?v=Jk8AbWd5IuM" target="_blank" rel="noopener noreferrer">
                Watch Demo
                <PlayCircle className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
