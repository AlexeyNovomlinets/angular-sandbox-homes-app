import { Injectable } from "@angular/core";
import { Actions, createEffect } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { tap } from "rxjs";

@Injectable()
export class CounterEffects {
    public readonly logActions$ = createEffect(() => 
        this.actions$.pipe(
            tap((action: Action) => console.info(`ACTION: ${action.type}`)),
        ),
        { dispatch: false },
    );

    constructor(
        private readonly actions$: Actions,
    ) {}
}