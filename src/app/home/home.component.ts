import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HousingLocation } from '../housing-location';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingService } from '../housing.service';

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
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location 
        *ngFor="let housingLocation of housingLocationList"
        [location]="housingLocation"/>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public readonly housingLocationList: HousingLocation[];

  constructor(
    private readonly housingService: HousingService,
  ) {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
