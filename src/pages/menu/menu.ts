import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, App } from 'ionic-angular';

import { Facebook } from '@ionic-native/facebook';
import { NativeStorage } from '@ionic-native/native-storage';
import { BookmarksPage } from '../../pages/bookmarks/bookmarks';
import { ApplicationsPage } from '../../pages/applications/applications';
import { NotificationsPage } from '../../pages/notifications/notifications';
import { DiscoverPage } from '../../pages/discover/discover';
import { ProfilePage } from '../../pages/profile/profile';
import { WorkExperiencePage } from '../../pages/workexperience/workexperience';
import { UploadResumePage } from '../../pages/uploadresume/uploadresume';
import { ChatPage } from '../../pages/chat/chat';
import { LoginPage } from '../../pages/login/login';
import { AppGlobals } from '../../global';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})

export class MenuPage {
  pages = []

  private rootPage;
  private bookmarkPage;
  private applicationPage;
  private notificationPage;
  private chatPage;
  private discoverPage;
  private profilePage;
  private workExperiencePage;
  private resumePage;
  private loginPage;
  // private isSubsequent;
  // selectedItem: string

  constructor(public _appGlobals: AppGlobals, public navCtrl: NavController, public nativeStorage: NativeStorage, public navParams: NavParams, public fb: Facebook, public viewCtrl: ViewController, public appCtrl: App) {
    this.discoverPage = DiscoverPage
    this.profilePage = ProfilePage
    this.workExperiencePage = WorkExperiencePage
    this.resumePage = UploadResumePage
    this.bookmarkPage = BookmarksPage
    this.applicationPage = ApplicationsPage
    this.notificationPage = NotificationsPage
    this.loginPage = LoginPage

    // this.isSubsequent = this.navParams.data

    // console.log("ahaha")
    // console.log(this.navParams)
    // this.rootPage = ChatPage
    this.checkRoot(this._appGlobals.isSubsequent)

    this.pages = [
      { name: 'Discover', component: this.discoverPage },
      { name: 'Profile', component: this.profilePage },
      { name: 'Resume', component: this.resumePage },
      { name: 'Work Experience', component: this.workExperiencePage },
      { name: 'View Bookmarks', component: this.bookmarkPage },
      { name: 'Application History', component: this.applicationPage },
      { name: 'Notifications', component: this.notificationPage }]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Menu');
  }

  openPage(p) {
    this.rootPage = p
  }

  logout() {
    var env = this;

    env.fb.logout()
      .then(function (response) {
        console.log(response)
      }, function (error) {
        console.log(error);
      });

    env.clearCredentials() //remove user from the NativeStorage
  }


  clearCredentials() {
    let env = this
    this.nativeStorage.remove('localUserData').then(response => {
      console.log(response)

      // env.fb.logout().then(fbResponse => {
      //   console.log(fbResponse)
      // })

      this.navCtrl.setRoot(LoginPage);
    })
  }

  checkRoot(root) {
    console.log(root)
    if (!root) {
      this.rootPage = ProfilePage
    } else {
      this.rootPage = ChatPage
    }
  }
}
