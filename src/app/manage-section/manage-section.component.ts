import { Component } from '@angular/core';
import { CityCardComponent } from '../city-card/city-card.component';
import { CitiesService } from '../cities.service';

@Component({
  selector: 'app-manage-section',
  imports: [CityCardComponent],
  templateUrl: './manage-section.component.html',
  styles: ``
})
export class ManageSectionComponent {

  constructor(private citiesServices:CitiesService) { }
  
  getCities() {
    return this.citiesServices.getCities()
  }

}
