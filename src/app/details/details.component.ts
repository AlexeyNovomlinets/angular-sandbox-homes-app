import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HousingLocation } from '../housing-location/housing-location';
import { HousingService } from '../services/housing.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, ReactiveFormsModule],
  template: `
    <article>
      <img class="listing-photo" [src]="housingLocation?.photo"/>
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
        <form 
          [formGroup]="applyForm"
          (submit)="submitApplication()">
          <label for="first-name">First Name</label>
          <input id="first-name" type="text" formControlName="firstName"/>
          <label for="last-name">Last Name</label>
          <input id="last-name" type="text" formControlName="lastName"/>
          <label for="email">Email</label>
          <input id="email" type="email" formControlName="email"/>
          <button class="primary" type="submit">Apply now</button>
        </form>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  public housingLocation: HousingLocation | undefined;
  public readonly applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(
    private readonly activetedRoute: ActivatedRoute,
    private readonly housingService: HousingService,
  ) {
    const id = Number(this.activetedRoute.snapshot.params['id']);
    this.housingService.getHousingLocationById(id).then(housingLocation => {
      this.housingLocation = housingLocation;
    });
  }

  public submitApplication(): void {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
  }
}
