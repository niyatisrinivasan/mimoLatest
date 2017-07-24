import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { DiscoverPage } from '../../pages/discover/discover';
import { ProfilePage} from '../../pages/profile/profile';
import { WorkExperiencePage } from '../../pages/workexperience/workexperience';
import { UploadResumePage } from '../../pages/uploadresume/uploadresume';
import { ChatPage } from '../../pages/chat/chat';
import { LoginPage } from '../../pages/login/login';

@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {
  popoverItemList = [{ name: 'Discover', component: DiscoverPage },
  { name: 'ChatBot', component: ChatPage },
  { name: 'Profile', component: ProfilePage },
  { name: 'Work Experience', component: WorkExperiencePage},
  { name: 'Upload Resume', component: UploadResumePage},
  { name: 'Logout', component: LoginPage}];
  private rootPage;
  selectedItem: string

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    public appCtrl: App) {
    this.selectedItem = " ";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Popover');
  }

  openPage(item) {
    this.selectedItem = item
    console.log(item)
    this.rootPage = item.component
    this.viewCtrl.dismiss(this.selectedItem)
    this.appCtrl.getRootNav().setRoot(this.rootPage)
  }
}
