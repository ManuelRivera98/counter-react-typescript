import { CounterAction, Value } from "../interfaces";
import { reset, incrementBy } from "../types/counter";

export const doReset = (): CounterAction => ({ type: reset });
export const doIncreaseBy = (value: Value): CounterAction => ({ type: incrementBy, payload: value });