import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-pipe',
  templateUrl: 'tema8.html',
})

export class Tema8Page {
  public phoneNumber: number;
  public formattedNumber: number;

  constructor(public navCtrl: NavController) {

  }

  formatNumber() {
    this.formattedNumber = this.phoneNumber;
  }
}



