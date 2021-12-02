import { CounterAction, CounterState } from "../interfaces";
import { reset } from "../types/counter";

export const INITIAL_STATE: CounterState = {
  changes: 0,
  counter: 0,
  previous: 0,
};

export const counterReducerFn = (state: CounterState = INITIAL_STATE, action: CounterAction): CounterState => {
  switch (action.type) {
    case reset:
      return {
        changes: 0,
        counter: 0,
        previous: 0
      };
    case 'incrementBy':
      return {
        changes: state.changes + 1,
        counter: state.counter + action.payload,
        previous: state.counter,
      }
    default:
      return state;
  }
}
