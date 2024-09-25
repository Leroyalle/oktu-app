import React from 'react';

export const useTest = () => {
  const ref = React.useRef();

  React.useEffect(() => {
    const ele = ref.current;
    if (!ele) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      console.log('123');
    });

    observer.observe(ele);

    return () => {
      observer.unobserve(ele);
    };
  }, []);
  return { ref };
};
