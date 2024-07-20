import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { themeContext } from "../contextProviders/ThemeContextProvider";

const BounceTextAnimation = () => {
  const textRef = useRef(null);

  useEffect(() => {
    anime({
      targets: textRef.current,
      translateY: [
        { value: -20, duration: 500 },
        { value: 0, duration: 800 }
      ],
      easing: 'easeOutElastic(1, .5)',
      loop: true,
    });
  });

  return (
    <div>
      <div className={'animation'} ref={textRef} >
        Welcome to IHOP Restaurant!
      </div>
    </div>
  );
};

export default BounceTextAnimation;
