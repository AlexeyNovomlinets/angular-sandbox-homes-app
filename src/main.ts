import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { AppComponent } from './app/app.component';
import { routes } from './app/routes';
import { CounterEffects } from './app/store/counter.effects';
import { counterReducer } from './app/store/counter.reducers';

const REDUCERS_MAP = {
  counter: counterReducer,
};

const EFFECTS = [CounterEffects];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideStore(REDUCERS_MAP),
    provideEffects(EFFECTS),
  ],
}).catch(err => console.error(err));
