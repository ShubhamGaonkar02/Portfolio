import { useState, useEffect, useCallback } from 'react';

export default function useTypewriter(phrases, typingSpeed = 80, deletingSpeed = 40, pauseTime = 2000) {
  const [text, setText] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const current = phrases[phraseIdx];

    if (isDeleting) {
      setText((prev) => current.substring(0, prev.length - 1));
    } else {
      setText((prev) => current.substring(0, prev.length + 1));
    }
  }, [phrases, phraseIdx, isDeleting]);

  useEffect(() => {
    const current = phrases[phraseIdx];
    let timeout;

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setPhraseIdx((prev) => (prev + 1) % phrases.length);
      timeout = setTimeout(tick, 400);
      return () => clearTimeout(timeout);
    } else {
      timeout = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIdx, phrases, tick, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}
