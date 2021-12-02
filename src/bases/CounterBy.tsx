
import { useState } from 'react'

interface CounterProps {
  initialValue?: number;
}

interface CounterState {
  counter: number;
  clicks: number;
}

export const CounterBy = ({
  initialValue = 0
}: CounterProps) => {

  const [data, setData] = useState<CounterState>({
    counter: initialValue,
    clicks: 0,
  })

  const handleClick = (value: number) => {
    setData(({ counter, clicks }) => ({ counter: counter + value, clicks: clicks + 1 }));
  };

  return (
    <>
      <h1>CounterBy {data.counter}</h1>
      <h1>Clicks {data.clicks}</h1>

      <button
        onClick={() => handleClick(1)}
      >
        +1
      </button>

      <button
        onClick={() => handleClick(5)}
      >
        +5
      </button>
    </>
  )
}
