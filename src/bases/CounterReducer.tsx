
import { useReducer } from 'react'
import * as counterActions from '../state/actions/counter';

// interfaces
import { Value } from '../state/interfaces';
import { counterReducerFn, INITIAL_STATE } from '../state/reducers/counter';


export const CounterReducer = () => {

  const [state, dispatch] = useReducer(counterReducerFn, INITIAL_STATE);

  const resetFn = () => {
    dispatch(counterActions.doReset());
  };

  const incrementByFn = (value: Value) => {
    dispatch(counterActions.doIncreaseBy(value));
  };

  return (
    <>
      <h1>CounterReducer</h1>

      <pre>
        {JSON.stringify(state, null, 2)}
      </pre>

      <button
        onClick={() => incrementByFn(1)}
      >
        +1
      </button>

      <button
        onClick={() => incrementByFn(5)}
      >
        +5
      </button>

      <button
        onClick={() => incrementByFn(10)}
      >
        +10
      </button>

      <button
        onClick={resetFn}
      >
        reset
      </button>
    </>
  )
}
