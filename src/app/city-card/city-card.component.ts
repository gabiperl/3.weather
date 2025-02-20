import { Component, Input } from '@angular/core';
import { CitiesService } from '../cities.service';
import { TempPipe } from '../temp.pipe';
import { CountryCodePipe } from '../country-code.pipe';

@Component({
  selector: 'app-city-card',
  imports: [TempPipe, CountryCodePipe],
  templateUrl: './city-card.component.html',
  styles: ``
})
export class CityCardComponent {
  @Input() city:any

  constructor(private citiesServices:CitiesService ) { }

  removeCity(){
    this.citiesServices.removeCity(this.city)
  }

  setCityAtHome(){
    this.citiesServices.setCityAtHome(this.city)
  }

}
