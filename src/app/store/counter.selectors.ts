import { createSelector } from "@ngrx/store";
import { Counter, CounterState } from "src/app/store/counter.reducers";

export const counterValue = createSelector(
    (state: CounterState) => state.counter,
    (counterState: Counter) => counterState.value,
);