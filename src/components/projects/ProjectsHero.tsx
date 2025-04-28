import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { StarIcon } from "lucide-react";
interface ProjectsHeroProps {
  scrollProgress: MotionValue<number>;
}
export const ProjectsHero = ({
  scrollProgress
}: ProjectsHeroProps) => {
  const scale = useTransform(scrollProgress, [0, 0.3], [1, 0.98]);
  const y = useTransform(scrollProgress, [0, 0.3], [0, 30]);
  return <motion.div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/5 to-background" style={{
    scale,
    y
  }}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10 py-[48px]">
          {Array.from({
          length: 20
        }).map((_, i) => <motion.div key={i} className="absolute" initial={{
          x: Math.random() * 100 + "%",
          y: Math.random() * 100 + "%",
          scale: Math.random() * 0.5 + 0.5
        }} animate={{
          x: Math.random() * 100 + "%",
          y: Math.random() * 100 + "%",
          scale: Math.random() * 0.5 + 0.5
        }} transition={{
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          repeatType: "mirror"
        }}>
              <StarIcon className="text-primary/30" size={Math.random() * 20 + 10} />
            </motion.div>)}
        </div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div initial={{
        y: 30,
        opacity: 0
      }} animate={{
        y: 0,
        opacity: 1
      }} transition={{
        duration: 0.6,
        delay: 0.1
      }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-hover">
              Featured Projects
            </span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-muted-foreground">
            Explore my work in AI, automation, and blockchain technology. Each project represents an innovative solution to real-world challenges.
          </p>
        </motion.div>
      </div>
    </motion.div>;
};