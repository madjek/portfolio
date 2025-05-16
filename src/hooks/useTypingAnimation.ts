import { useEffect, useState } from 'react';

export const useTypingAnimation = (titles: string[]) => {
  const [displayText, setDisplayText] = useState(titles[0]);
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (charIndex < titles[titleIndex].length) {
          setDisplayText(titles[titleIndex].substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
          setTypingSpeed(60);
        } else {
          // Pause at end of word
          setIsDeleting(true);
          setTypingSpeed(2000);
        }
      } else {
        // Deleting
        if (charIndex > 0) {
          setDisplayText(titles[titleIndex].substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
          setTypingSpeed(40);
        } else {
          setIsDeleting(false);
          setTitleIndex((titleIndex + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, titleIndex, typingSpeed, titles]);

  return displayText;
};
