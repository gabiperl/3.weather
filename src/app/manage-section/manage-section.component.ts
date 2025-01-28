import { Component } from '@angular/core';
import { CityCardComponent } from '../city-card/city-card.component';
import { CitiesService } from '../cities.service';
import { AccesoDatosService } from '../acceso-datos.service';

@Component({
  selector: 'app-manage-section',
  imports: [CityCardComponent],
  templateUrl: './manage-section.component.html',
  styles: ``
})
export class ManageSectionComponent {

  constructor(private citiesServices:CitiesService,
              private http:AccesoDatosService) {
    //Actualizar los valores de mi ciudades favoritas
    //Recorrer mis ciudades y por cada una de ellas voy a llamar al servidor para recibir info actual
    this.citiesServices.getCities().forEach(ciudad => {
      this.http.updateById(ciudad.id).subscribe(
        json => {
          console.log("Recibimos una ciudad actualizada")
          //Este nuevo y actualizado response debe sustituir a mi ciudad obsoleta
          this.citiesServices.updateCity(json)
      })
    })
  }
  
  getCities() {
    return this.citiesServices.getCities()
  }

}
