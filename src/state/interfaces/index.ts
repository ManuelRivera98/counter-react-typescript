export interface CounterState {
  counter: number;
  previous: number;
  changes: number;
};

export type Value = 1 | 5 | 10;
export type CounterAction = { type: 'incrementBy', payload: Value } | { type: 'reset' };