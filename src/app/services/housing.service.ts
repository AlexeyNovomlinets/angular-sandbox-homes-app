import { Injectable } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  private readonly url = 'http://localhost:3000/locations';

  constructor() { }

  public async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  public async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  public submitApplication(firstName: string, lastName: string, email: string): void {
    console.log(firstName, lastName, email);
  }
}
