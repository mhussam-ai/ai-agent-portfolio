
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Word {
  text: string;
  className?: string;
}

interface TypewriterEffectProps {
  words: Word[];
  className?: string;
  cursorClassName?: string;
  typingSpeed?: number;
  backspaceSpeed?: number;
  pauseDuration?: number;
}

export const TypewriterEffect = ({
  words,
  className = "",
  cursorClassName = "bg-primary",
  typingSpeed = 80,
  backspaceSpeed = 40, 
  pauseDuration = 1000,
}: TypewriterEffectProps) => {
  const [currentText, setCurrentText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");
  
  // Improved animation logic with clear phase management
  useEffect(() => {
    if (!words.length) return;
    
    const currentWord = words[currentWordIndex].text;
    let timerId: ReturnType<typeof setTimeout>;
    
    switch (phase) {
      case "typing":
        if (currentText.length < currentWord.length) {
          timerId = setTimeout(() => {
            setCurrentText(currentWord.substring(0, currentText.length + 1));
          }, typingSpeed);
        } else {
          setPhase("pausing");
        }
        break;
        
      case "pausing":
        timerId = setTimeout(() => {
          setPhase("deleting");
        }, pauseDuration);
        break;
        
      case "deleting":
        if (currentText.length > 0) {
          timerId = setTimeout(() => {
            setCurrentText(currentText.substring(0, currentText.length - 1));
          }, backspaceSpeed);
        } else {
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          setPhase("typing");
        }
        break;
    }
    
    return () => clearTimeout(timerId);
  }, [currentText, currentWordIndex, phase, words, typingSpeed, backspaceSpeed, pauseDuration]);

  // Separate cursor component with improved animation
  const Cursor = () => (
    <motion.span
      className={`ml-1 inline-block w-[4px] h-6 md:h-8 ${cursorClassName}`}
      animate={{ opacity: [1, 0, 1] }}
      transition={{
        duration: 0.8,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
      aria-hidden="true"
    />
  );

  return (
    <div className={`flex items-center text-base md:text-xl ${className}`}>
      <span className={words[currentWordIndex]?.className || ""}>
        {currentText}
      </span>
      <Cursor />
    </div>
  );
};
