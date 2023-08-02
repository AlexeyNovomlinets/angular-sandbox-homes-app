import { CommonModule } from '@angular/common';
import { Component, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { HousingLocation } from '../housing-location/housing-location';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingService } from '../services/housing.service';
import { decrement, increment } from '../store/counter.actions';
import { CounterState } from '../store/counter.reducers';
import { counterValue } from 'src/app/store/counter.selectors';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    HousingLocationComponent,
  ],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter/>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
        <button type="button" (click)="onIncremented()">Increment</button>
        <button type="button" (click)="onDecremented()">Decrement</button>
        <span>{{ counter$$() }}</span>
      </form>
    </section>
    <section class="results">
      <app-housing-location 
        *ngFor="let housingLocation of filteredLocationList"
        [location]="housingLocation"/>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public housingLocationList: HousingLocation[] = [];
  public filteredLocationList: HousingLocation[] = [];

  public counter$$: Signal<number> = this.store.selectSignal(counterValue);

  constructor(
    private readonly housingService: HousingService,
    private readonly store: Store<CounterState>,
  ) {
    this.housingService.getAllHousingLocations().then(housingLocationList => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }

  public filterResults(text: string): void {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter(housingLocation => 
      housingLocation?.city.toLocaleLowerCase().includes(text.toLowerCase()),
    );
  }

  public onIncremented(): void {
    this.store.dispatch(increment());
  }

  public onDecremented(): void {
    this.store.dispatch(decrement())
  }
}
