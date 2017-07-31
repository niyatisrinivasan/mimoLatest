import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, ViewController, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuPage } from '../pages/menu/menu';
import { DiscoverPage } from '../pages/discover/discover';
import { HomePage } from '../pages/home/home';
import { UploadResumePage } from '../pages/uploadresume/uploadresume';
import { LoginPage } from '../pages/login/login';
import { BookmarksPage } from '../pages/bookmarks/bookmarks';
import { AppGlobals } from 'globals';
import { WorkExperiencePage } from '../pages/workexperience/workexperience';
import { NotificationsPage } from '../pages/notifications/notifications';
import { NativeStorage } from '@ionic-native/native-storage';
import { ProfilePage } from '../pages/profile/profile';
import { Push, PushToken } from '@ionic/cloud-angular';
import { ChatPage } from '../pages/chat/chat';
import {Keyboard} from '@ionic-native/keyboard';

@Component({
  templateUrl: 'app.html',
  providers: [NativeStorage],   
})

export class MyApp {
  rootPage: any;
  isSubsequent: any;

  constructor(public push: Push, public platform: Platform, public nativeStorage: NativeStorage, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp()
    this.receiveNotification()
    this.rootPage = LoginPage
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      if (this.platform.is('android')) {
                
            }
    });
  }

  // initializeApp() {
  //   this.platform.ready().then(() => {
  //     let env = this;

  //     env.nativeStorage.getItem('localUserData') //check if userData exists
  //       .then(function (data) {
  //         env.rootPage = MenuPage
  //         env.splashScreen.hide();
  //       }, function (error) { //if userData does not exists
  //         env.rootPage = LoginPage
  //         env.splashScreen.hide();
  //       });

  //     env.statusBar.styleDefault();
  //   });
  // }

  receiveNotification() {
    let self = this
    self.push.rx.notification()
      .subscribe((msg) => {
        alert(msg.title + ': ' + msg.text);
      });
  }
}

