import React, { useState, useEffect, useRef, ReactNode } from "react";
const ExpandRight = ({ threshold, duration }: ReactNode) => {
  useEffect(() => {
    if (ref.current) {
      const intersectionObserver = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIntersecting(true);
          } else {
            setIntersecting(false);
          }
        },
        {
          threshold: 0.5,
        }
      );

      intersectionObserver.observe(ref.current);

      return () => {
        if (ref.current) {
          intersectionObserver.unobserve(ref.current);
        }
      };
    }
  }, []);
  //   x = x || 0;
  //   y = y || 0;
  const ref = useRef(null);
  const [intersecting, setIntersecting] = useState(false);
};

export default ExpandRight;
