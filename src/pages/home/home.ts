import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { ChatPage } from '../chat/chat';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public appCtrl: App) {

  }

  enterChat() {
    this.appCtrl.getRootNav().setRoot(ChatPage);
  }
}
