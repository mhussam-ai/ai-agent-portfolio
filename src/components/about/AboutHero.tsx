
import { motion } from "framer-motion";

export const AboutHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 opacity-50" />
      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
        <motion.div 
          className="flex flex-col gap-4 md:gap-6 max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-6xl font-bold text-primary"
            variants={itemVariants}
          >
            About Me
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground px-2"
            variants={itemVariants}
          >
            AI specialist passionate about building intelligent systems that solve real-world problems
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};
