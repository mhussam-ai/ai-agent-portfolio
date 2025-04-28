
import { motion, useAnimate } from "framer-motion";
import { useEffect, useState, useRef } from "react";

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
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  // Clear any existing timer when component unmounts
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (!words.length) return;
    
    const currentWord = words[currentWordIndex].text;
    
    // Handle typing
    if (isTyping && !isPaused) {
      if (currentText.length < currentWord.length) {
        // Still typing the current word
        timerRef.current = setTimeout(() => {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        // Finished typing the current word, pause before backspacing
        setIsPaused(true);
        timerRef.current = setTimeout(() => {
          setIsPaused(false);
          setIsTyping(false);
        }, pauseDuration);
      }
    }
    // Handle backspacing
    else if (!isTyping && !isPaused) {
      if (currentText.length > 0) {
        // Still backspacing
        timerRef.current = setTimeout(() => {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        }, backspaceSpeed);
      } else {
        // Finished backspacing, move to next word
        setIsTyping(true);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }
  }, [currentText, currentWordIndex, isTyping, isPaused, words, typingSpeed, backspaceSpeed, pauseDuration]);

  return (
    <div className={`flex items-center text-base md:text-xl ${className}`}>
      <span className={words[currentWordIndex]?.className || ""}>
        {currentText}
      </span>
      <motion.span
        className={`cursor w-[4px] h-10 md:h-12 inline-block bg-primary ml-1 ${cursorClassName}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  );
};
