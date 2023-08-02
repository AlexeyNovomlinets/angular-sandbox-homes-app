import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { AppComponent } from './app/app.component';
import { routes } from './app/routes';
import { counterReducer } from 'src/app/store/counter.reducers';

const REDUCERS_MAP = {
  counter: counterReducer,
};

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideStore(REDUCERS_MAP),
]
})
  .catch(err => console.error(err));
