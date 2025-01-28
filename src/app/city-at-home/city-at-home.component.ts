import { Component } from '@angular/core';
import { CitiesService } from '../cities.service';
import { TempPipe } from '../temp.pipe';
import { CountryCodePipe } from '../country-code.pipe';
import { AccesoDatosService } from '../acceso-datos.service';

@Component({
  selector: 'app-city-at-home',
  imports: [TempPipe, CountryCodePipe],
  templateUrl: './city-at-home.component.html',
  styles: ``
})
export class CityAtHomeComponent {

  constructor(private citiesServices:CitiesService,
              private http:AccesoDatosService) {
    this.http.updateById(this.citiesServices.getCityAtHome().id).subscribe(
    json => {
      this.citiesServices.updateCity(json)
    })

}

getCityAtHome(){
  return this.citiesServices.getCityAtHome()
}
}
