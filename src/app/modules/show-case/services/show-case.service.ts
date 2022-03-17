import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ShowCaseService {


  constructor() { }

  getDataApi(): Observable<any> {
    //TODO: Aqui podemos hacer http.get('api...')
    const data = [
      {
        name: "Pudgy Penguin #1",
        price: 0.2,
        image: "https://i.pinimg.com/236x/c3/24/b0/c324b0fe5a24dececea229d6f8cc1e6a.jpg"
      },
      {
        name: "Pudgy Penguin #2",
        price: 0.1,
        image: "https://i.pinimg.com/474x/36/c0/73/36c073cf14182d15e84e28f61f5eea67--penguins-purple.jpg"
      },
      {
        name: "Pudgy Penguin #3",
        price: 0.3,
        image: "https://www.clipartkey.com/mpngs/m/308-3083708_club-penguin-wiki-club-penguin-penguin-sprite.png"
      },
      {
        name: "Pudgy Penguin #4",
        price: 0.4,
        image: "https://www.nicepng.com/png/detail/69-691144_tuba-ingame-png-club-penguin-sprite-jpg.png"
      },
      {
        name: "Pudgy Penguin #5",
        price: 0.5,
        image: "https://www.kindpng.com/picc/m/32-320041_transparent-winter-penguin-clipart-club-penguin-penguin-png.png"
      },
      {
        name: "Pudgy Penguin #6",
        price: 0.6,
        image: "https://64.media.tumblr.com/fadeb8527df9d07761dc0a8c49c5fd7d/85d31cf2ed59b345-13/s540x810/0afb54d4ca50bbb1cb809536671cbd564c105aa3.jpg"
      },
      {
        name: "Pudgy Penguin #7",
        price: 0.7,
        image: "https://static.wikia.nocookie.net/clubpenguin/images/f/f4/Cinco_de_Mayo_Penguin.png/revision/latest?cb=20140421195157"
      },
      {
        name: "Pudgy Penguin #8",
        price: 0.8,
        image: "https://img.buzzfeed.com/store-an-image-prod-us-east-1/5hi8Bztxf.png?output-format=jpg&output-quality=auto"
      },
      {
        name: "Pudgy Penguin #9",
        price: 0.9,
        image: "https://static.wikia.nocookie.net/clubpenguin/images/d/d1/Rockhopper_with_a_light_blue_penguin.jpg/revision/latest/scale-to-width-down/453?cb=20090424234634"
      },
      {
        name: "Pudgy Penguin #10",
        price: 0.9,
        image: "https://api.pudgypenguins.io/penguin/image/10"
      },
      {
        name: "Pudgy Penguin #11",
        price: 0.9,
        image: "https://api.pudgypenguins.io/penguin/image/11"
      },
      {
        name: "Pudgy Penguin #12",
        price: 0.9,
        image: "https://api.pudgypenguins.io/penguin/image/12"
      }
    ]

    return of(data).pipe(
      delay(1500)
    )
  }



}
