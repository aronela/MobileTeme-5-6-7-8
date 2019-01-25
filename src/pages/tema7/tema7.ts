import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'tema7.html'
})
export class Tema7Page {
  public elements: { denumire: String, icons: String, checked: boolean } [] = [
    {
      denumire: "Cash",
      icons: "cash",
      checked: false,
    },
    {
      denumire: "Credit Card",
      icons: "card",
      checked: false,
    },
    {
      denumire: "Check",
      icons: "paper",
      checked: false,
    },
    {
      denumire: "Write-Off",
      icons: "trash",
      checked: false,
    },

  ];


  constructor(public navCtrl: NavController, private toastController: ToastController) {

  }

  toggleChange() {
    let message = 'No option selected.';
    const selectedOptions = this.elements.filter(e => e.checked);

    if (selectedOptions.length) {
      message = 'Your selection is: ' + selectedOptions.map(e => e.denumire).join(', ');
    }

    let displayToast = this.toastController.create({
      message: message,
      duration: 2000
    });
    displayToast.present();
  }

}
