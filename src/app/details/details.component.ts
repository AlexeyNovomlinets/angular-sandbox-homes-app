import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
    <article>
      <img class="listing-photo" [ngSrc]="housingLocation?.photo || ''" width="400" height="600" priority/>
      <section class="listing-heading">
        <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
        <p class="listing-location">{{ housingLocation?.city }}, {{ housingLocation?.state }}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <li>Units available: {{ housingLocation?.availableUnits }}</li>
          <li>Does this location have wifi: {{ housingLocation?.wifi }}</li>
          <li>Does this locatuon have laundry: {{ housingLocation?.laundry }}</li>
        </ul>
      </section>
      <section class="listing-apply">
        <h2 class="section-heading">Apply now to live here</h2>
        <button class="primary" type="button">Apply now</button>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  public readonly housingLocation: HousingLocation | undefined;

  constructor(
    private readonly activetedRoute: ActivatedRoute,
    private readonly housingService: HousingService,
  ) {
    const id = Number(this.activetedRoute.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(id);
  }
}
