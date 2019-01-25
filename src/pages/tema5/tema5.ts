import {Component} from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'tema5.html'
})
export class Tema5Page {
  public countLike: number = 7;
  public comments: { name: string, comment: string }[] = [{
    name: 'Favorina',
    comment: 'Wooow :)'
  }];

  constructor(public navCtrl: NavController, private alertController: AlertController) {

  }

  clickLike() {
    this.countLike++;
  }

  clickComment() {
    let addReminderAlert = this.alertController.create({
      title: "Add a comment",
      inputs: [
        {
          placeholder: "Your name",
          name: "nameInput",
        },
        {
          placeholder: "Your comment",
          name: "commentInput",
        },
      ],
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Post",
          handler: (inputData) => {
            if (inputData.nameInput && inputData.commentInput) {
              this.comments.unshift({
                name: inputData.nameInput,
                comment: inputData.commentInput,
              });
            }
          }
        }]
    });
    addReminderAlert.present();
  }
}
