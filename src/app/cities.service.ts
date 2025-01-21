import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  private cities:any[] = []
  private cityAtHome:any[] = []
  
  constructor() { }

  getCities() {
    return this.cities
  }

  getCityAtHome() {
  return this.cityAtHome
  }

  setCityAtHome(aCity:any) {
  this.cityAtHome = aCity
  }

  addCity(newCity:any) {
    if (!this.isAlreadyInMyCities(newCity) ) {
        this.cities.push(newCity);
  }
}

isAlreadyInMyCities(aCity:any) {
    return this.cities.find(c => c.id == aCity.id);
  }

removeCity(aCity:any) {
    this.cities = this.cities.filter(c => c.id !== aCity.id);
  }

  isAlreadyInCities(aCity:any) {
    return this.cities.find(c => c.id == aCity.id);
  }
}
