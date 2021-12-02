
import {
  useState,
  useEffect,
  useRef
} from 'react'
import { gsap } from 'gsap'


type maxCount = 10;

export const CounterEffect = () => {

  const [counter, setCounter] = useState(0)
  const htmlElement = useRef<HTMLHeadingElement>(null);

  const MAXIMUM_COUNT: maxCount = 10;

  const handleClick = () => {

    setCounter(prev => Math.min(MAXIMUM_COUNT, prev + 1));
  }

  useEffect(() => {
    if (counter < MAXIMUM_COUNT) return;

    const tl = gsap.timeline();

    tl.to(htmlElement.current, { y: -10, duration: 0.2, ease: 'ease.out' })
      .to(htmlElement.current, { y: 0, duration: 1, ease: 'bounce.out' })

  }, [counter])

  return (
    <>
      <h1>CounterEffect</h1>
      <h2 ref={htmlElement} >{counter}</h2>

      <button
        onClick={handleClick}
      >
        +1
      </button>
    </>
  )
}
