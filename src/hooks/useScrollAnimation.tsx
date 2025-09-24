import { useEffect, useRef } from 'react';

export const useScrollAnimation = <T extends HTMLElement = HTMLElement>(threshold = 0.1) => {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.classList.add('animate-fade-in');
            target.style.opacity = '1';
            target.style.transform = 'translateY(0)';
          }
        });
      },
      {
        threshold,
        rootMargin: '50px 0px -50px 0px',
      }
    );

    // Initial state
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold]);

  return elementRef;
};

export const useStaggeredScrollAnimation = <T extends HTMLElement = HTMLElement>(delay = 100) => {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const children = Array.from(container.children) as HTMLElement[];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('animate-fade-in');
                child.style.opacity = '1';
                child.style.transform = 'translateY(0)';
              }, index * delay);
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px -50px 0px',
      }
    );

    // Initial state for children
    children.forEach((child) => {
      child.style.opacity = '0';
      child.style.transform = 'translateY(30px)';
      child.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    });

    observer.observe(container);

    return () => {
      observer.unobserve(container);
    };
  }, [delay]);

  return containerRef;
};