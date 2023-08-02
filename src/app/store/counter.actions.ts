import { createAction, props } from "@ngrx/store";

const COUNTER_PREFIX = '[Counter]';

export const increment = createAction(
    `${COUNTER_PREFIX} Increment value`, 
    // props<{ param: string }>()
);

export const decrement = createAction(`${COUNTER_PREFIX} Decrement value`);
