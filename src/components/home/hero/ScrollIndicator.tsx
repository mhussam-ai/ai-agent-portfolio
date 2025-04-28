
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

interface ScrollIndicatorProps {
  onClick: () => void;
}

export const ScrollIndicator = ({ onClick }: ScrollIndicatorProps) => (
  <motion.div 
    className="relative flex flex-col items-center cursor-pointer"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8, duration: 0.6 }}
    onClick={onClick}
  >
    <span className="text-sm text-muted-foreground mb-1">Scroll Down</span>
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
    >
      <ArrowDown className="h-4 w-4 text-primary" />
    </motion.div>
  </motion.div>
);
