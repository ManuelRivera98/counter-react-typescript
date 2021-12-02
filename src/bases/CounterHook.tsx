import { useCounter } from "../hooks/useCounter"

export const CounterHook = () => {

  const { counter, htmlElement, handleClick } = useCounter({ maxCount: 20 });

  return (
    <>
      <h1>CounterHook</h1>
      <h2 ref={htmlElement} >{counter}</h2>

      <button
        onClick={handleClick}
      >
        +1
      </button>
    </>
  )
}
