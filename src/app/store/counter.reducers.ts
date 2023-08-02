import { createReducer, on } from "@ngrx/store";
import { decrement, increment } from "./counter.actions";

export interface CounterState {
    counter: Counter;
}

export interface Counter {
    value: number;
}

const initialState: Counter = {
    value: 0,
};

export const counterReducer = createReducer(
    initialState,
    on(increment, (state: Counter) => ({ value: state.value + 1 })),
    on(decrement, ({ value }: Counter) => ({ value: value - 1 })),
);
