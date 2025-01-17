import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccesoDatosService {

// Buscar por patróN: https://api.openweathermap.org/data/2.5/
// Consultar el tiempo de un ID concreto: https://api.openweathermap.org/data/2.5/weather?
// id=6355234
// &
// appid=d657bd8acf08269b0e7beb0c1f6cf5f3
// &
// units=metric

private urlBase= 'https://api.openweathermap.org/data/2.5/'
private urlSufix = '&appid=d657bd8acf08269b0e7beb0c1f6cf5f3&units=metric'


  constructor(private htttp:HttpClient) { }


  searchByName(pattern:string) {
    //http.get genera un observable (un locker de Eimason)
    return this.htttp.get(this.urlBase + "find?q=" + pattern + this.urlSufix)

}

}
