import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, MenuController } from 'ionic-angular';
import { PopoverPage } from '../../pages/popover/popover';
import { ChatPage } from '../../pages/chat/chat';

@IonicPage()
@Component({
  selector: 'page-uploadresume',
  templateUrl: 'uploadresume.html',
})

export class UploadResumePage {
  resumes = []

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public popoverCtrl: PopoverController, public menuCtrl: MenuController) {
    this.resumes = [
      {
        "name": "abc",
      },
      {
        "name": "def",
      },
      {
        "name": "ghi",
      }]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Uploadresume');
  }

  openChat() { //executes when the fabButton is tapped
    this.navCtrl.setRoot(ChatPage)
  }

  openMenu() { //executes when the menu is tapped
    this.menuCtrl.open()
  }

}
