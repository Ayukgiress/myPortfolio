"use client";

import { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
}

export default function Typewriter({ text, speed = 100, delay = 2000 }: TypewriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < text.length) {
          setDisplayText(text.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, text, speed, delay]);

  return (
    <span>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
