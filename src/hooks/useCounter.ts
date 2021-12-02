import {
  useState,
  useEffect,
  useRef,
} from 'react'
import { gsap } from 'gsap'


interface MaxCount {
  maxCount?: number;
};


export const useCounter = ({ maxCount = 10 }: MaxCount) => {

  const [counter, setCounter] = useState(0)
  const htmlElement = useRef<any>(null);
  const tl = useRef(gsap.timeline());


  const handleClick = () => {

    setCounter(prev => Math.min(maxCount, prev + 1));
  }

  // Create instance and animation
  useEffect(() => {
    if (!htmlElement.current) return;

    tl.current.to(htmlElement.current, { y: -10, duration: 0.2, ease: 'ease.out' })
      .to(htmlElement.current, { y: 0, duration: 1, ease: 'bounce.out' })
      .pause()

  }, [])

  // Listen counter
  useEffect(() => {
    tl.current.play(0)
  }, [counter])

  return {
    counter,
    htmlElement,
    handleClick,
  }
}