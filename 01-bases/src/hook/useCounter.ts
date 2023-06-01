import { useRef, useState, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";

export const useCounter = ({ maxCount = 1 }) => {
  
  const [counter, setCounter] = useState(5);
  const elementToAnimate = useRef<any>(null);
  const timeLine = useRef( gsap.timeline() );

  const handleClick = () => {

    // if (counter === MAXIMUN_COUNT) return;

    setCounter( prev => Math.min( prev! + 1, maxCount ) );
  }

  useLayoutEffect(() => {

    if( !elementToAnimate.current ) return;

    timeLine.current.to( elementToAnimate.current, { y: -10, duration: 0.2, ease: "ease.out" } )
                    .to( elementToAnimate.current, { y: 0, duration: 1, ease: "bounce.out" } )
                    .pause()
  
  }, [])

  useEffect(() => {
    // console.log("%cSe llegó al valor máximo", "color: red; background-color: black")
    // if( counter < maxCount ) return;
    timeLine.current.play(0)
  }, [counter])

  return {
    counter,
    elementToAnimate,
    handleClick
  }

}