import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      details works! {{ housingLocationId }}
    </p>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  public readonly housingLocationId: number;

  constructor(
    private readonly activetedRoute: ActivatedRoute,
  ) {
    this.housingLocationId = Number(this.activetedRoute.snapshot.params['id']);
  }
}
