
import { motion } from "framer-motion";

export function NoResults() {
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }} 
      className="text-center py-16"
    >
      <p className="text-xl text-muted-foreground">No articles found matching your search.</p>
    </motion.div>
  );
}
