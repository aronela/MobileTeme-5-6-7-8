import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'tema6.html'
})
export class Tema6Page {

  public cars: { denumire: string, selected: boolean } [] = [{
    denumire: "Audi",
    selected: false,
  },
    {
      denumire: "Dacia",
      selected: false,
    },
    {
      denumire: "BMW",
      selected: false,
    },
    {
      denumire: "VW",
      selected: false,
    },
    {
      denumire: "Land Rover",
      selected: false,
    },
    {
      denumire: "Tesla",
      selected: false,
    },
  ];

  constructor(public navCtrl: NavController) {

  }

  selectedCarsNumber() {
    return (this.cars.filter(c => c.selected)).length;
  }
}
