import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingService } from '../services/housing.service';

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

  constructor(
    private readonly housingService: HousingService,
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
}
