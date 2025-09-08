import { useEffect, useState } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({ 
  target, 
  duration = 2000, 
  suffix = '', 
  className = '' 
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.5 });

  useEffect(() => {
    if (!isVisible) return;

    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const updateCounter = () => {
      if (current < target) {
        current += increment;
        setCount(Math.floor(current));
        requestAnimationFrame(updateCounter);
      } else {
        setCount(target);
      }
    };

    updateCounter();
  }, [isVisible, target, duration]);

  return (
    <div ref={ref} className={`counter ${className}`}>
      {count}{suffix}
    </div>
  );
}
