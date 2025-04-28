
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

interface Word {
  text: string;
  className?: string;
}

interface TypewriterEffectProps {
  words: Word[];
  className?: string;
  cursorClassName?: string;
}

export const TypewriterEffect = ({
  words,
  className = "",
  cursorClassName = "bg-primary",
}: TypewriterEffectProps) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    let delay = 0;
    const animationSequence = [];
    
    // Create show and hide animations for each word
    words.forEach((word, i) => {
      // Show the word
      animationSequence.push([
        scope.current.querySelector(`.word-${i}`),
        { opacity: 1 },
        { duration: 0.25, delay }
      ]);
      
      // Hide the word
      animationSequence.push([
        scope.current.querySelector(`.word-${i}`),
        { opacity: 0 },
        { duration: 0.25, delay: 0.75 + delay }
      ]);
      
      delay += 1;
    });

    // Add cursor animation at the end
    animationSequence.push([
      scope.current.querySelector(".cursor"),
      { opacity: 0 },
      { duration: 0.25, delay }
    ]);

    animate(animationSequence);
  }, [animate, scope, words]);

  return (
    <div ref={scope} className={`flex items-center text-base md:text-xl ${className}`}>
      {words.map((word, i) => (
        <span
          key={i}
          className={`word-${i} opacity-0 absolute ${word.className}`}
        >
          {word.text}
        </span>
      ))}
      <motion.span
        className={`cursor w-[4px] h-10 md:h-12 block bg-primary ${cursorClassName}`}
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
