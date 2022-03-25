import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HomeService {


  constructor() { }

  getDataApi(): Observable<any> {
    //TODO: Aqui podemos hacer http.get('api...')
    const data = [
      {
        nombre: 'Mariano',
        apellido: 'Lo Prete',
        mail: 'MLoPrete@planexware.com'
      },
      {
        nombre: 'Bocha',
        apellido: 'Battista',
        mail: 'BBattista@planexware.com'
      },
      {
        nombre: 'Lucas',
        apellido: 'Beronne',
        mail: 'LBeronne@planexware.com'
      },
    ]

    return of(data).pipe(
      delay(1500)
    )
  }
}
