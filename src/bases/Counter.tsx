
import { useState } from 'react'

interface counterProps {
  initialValue?: number;
}

export const Counter = ({
  initialValue = 0
}: counterProps) => {

  const [counter, setCounter] = useState(initialValue)

  const handleClick = () => {
    setCounter(prev => prev + 1);
  }

  return (
    <>
      <h1>Counter {counter}</h1>

      <button
        onClick={handleClick}
      >
        +1
      </button>
    </>
  )
}
