import { Component } from '@angular/core';
import { AccesoDatosService } from '../acceso-datos.service';
import { CitiesService } from '../cities.service';

@Component({
  selector: 'app-search-section',
  imports: [],
  templateUrl: './search-section.component.html',
  styles: `
  `
})
export class SearchSectionComponent {

  private results:any 

  constructor(private apiService:AccesoDatosService, 
              private citiesService:CitiesService) { }



  addCity(newCity:any) {
    this.citiesService.addCity(newCity)
  }
  searchByName(pattern:string) {
    //Se piden los datos al servicio.
    this.apiService.searchByName(pattern).subscribe(
      json => {
        let response:any = json
        this.results = response.list
      }
    )
  }

  getResults() {
    return this.results
  }
}