
import { motion } from "framer-motion";

export const AboutHero = () => {
  return (
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
            className="text-3xl md:text-4xl lg:text-6xl font-bold text-primary"
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
  );
};
