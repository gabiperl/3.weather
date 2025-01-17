import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  private cities:any[] = []
  
  constructor() { }

  getCities() {
    return this.cities
  }

  addCity(newCity:any) {
    if (!this.isAlreadyInMyCities(newCity) ) {
        this.cities.push(newCity);
  }
}

isAlreadyInMyCities(aCity:any) {
    return this.cities.find(c => c.id == aCity.id);
  }

}
