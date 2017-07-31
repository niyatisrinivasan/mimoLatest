import { Component } from '@angular/core';
import { Facebook } from '@ionic-native/facebook';
import { NativeStorage } from '@ionic-native/native-storage';
import { IonicPage, AlertController, LoadingController, Loading, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { UserServiceProvider } from '../../providers/user-service/user-service'
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { RegisterPage } from '../register/register';
import { AppGlobals } from '../../global';
import { MenuPage } from '../../pages/menu/menu';
import { Push, PushToken } from '@ionic/cloud-angular';
import { Storage } from '@ionic/storage';
import {VerificationPage} from '../../pages/verification/verification';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [Facebook, NativeStorage]
})

export class LoginPage {
  FB_APP_ID: number = 112493112702999;
  userData: any;
  loading: Loading;
  credentials = { email: '', password: '' };
  userProfile: any = null;
  public showPass = false;

  constructor(private push: Push, private toastCtrl: ToastController, private auth: AuthServiceProvider, private userService: UserServiceProvider, public storage: Storage, private navParams: NavParams, private nav: NavController, private navCtrl: NavController, private alertCtrl: AlertController, private loadingCtrl: LoadingController, public fb: Facebook, public nativeStorage: NativeStorage, public _appGlobals: AppGlobals, public viewCtrl: ViewController) {
    this.fb.browserInit(this.FB_APP_ID, "v2.8");
    // console.log(this._appGlobals.setDeviceToken)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  public login() {
    let self = this
    this.showLoading()
    
    self.auth.login(self.credentials).then(response => { //retrieves the response of authentication after sending a request
      var res = response.json();
      // console.log(res)
      if (!res.success) { //not authenticated == accessToken is not generated
        self.presentToast(res.message) //response.message == "Sorry, got error message"
      } else {
        //insert pushToken register--------------------------------
        self._appGlobals.setIdToken(res.result.accessToken) //to set token so that it can be attached to the header for each request made
        self._appGlobals.setUserId(res.result.UserID)
        // console.log(self._appGlobals.userId);
        self._appGlobals.setUserEmail(res.result.Email)
        self._appGlobals.setIsSubsequent(false)
        // self.getDeviceToken()

        //otherwise
        this.nav.setRoot(MenuPage)
      }
    }).catch(err => self.presentToast(err))
  }

  
  // FB Login methods
  doFbLogin() {
    let permissions = new Array<string>();
    let self = this;
    //the permissions your facebook app needs from the user
    permissions = ["public_profile, email, user_birthday"];

    this.fb.login(permissions)
      .then(function (response) {
        let userId = response.authResponse.userID;
        let accessToken = response.authResponse.accessToken
        let params = new Array<string>();

        //Getting name and gender properties
        self.fb.api("/me?fields=id,name,email,birthday,gender", params)
          .then(function (userData) {
            self._appGlobals.setIdToken(accessToken)
            self._appGlobals.setUserId(userId)
            self._appGlobals.setUserEmail(userData.email)
            self._appGlobals.setIsSubsequent(false)
            // self.getDeviceToken()

            // console.log(userData)
            // console.log(self.fb.getAccessToken())
            // console.log(self.fb.getLoginStatus())

            userData.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";

            var user = {
              name: userData.name,
              gender: userData.gender,
              picture: userData.picture,
              birthday: userData.birthday,
              email: userData.email
            }

            //now we have the users info, let's save it in the NativeStorage
            self.nativeStorage.setItem('localUserData', user)
              .then(function () {
                // console.log("in .setItem")
                // console.log(self.isSubsequent)
                self.nav.setRoot(MenuPage)
                // self.nav.setRoot(MenuPage)
              }, function (error) {
                console.log(error)
                // self.presentToast(error.message)
              })
          }, function (error) {
            console.log(error)
            // self.presentToast(error.message)
          })
      }, function (error) {
        console.log(error)
        // self.presentToast(error.message)
      });
  }

  presentToast(responseMsg) {
    let toast = this.toastCtrl.create({
      message: responseMsg,
      duration: 3000,
      position: 'top'
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }

  // getDeviceToken() {
  //   // Get device token for push notifications
  //   this.push.register().then((t: PushToken) => {
  //     return this.push.saveToken(t);
  //   }).then((t: PushToken) => {
  //     console.log('Token saved:', t.token);
  //     this._appGlobals.setDeviceToken(t.token);
  //   });
  // }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });

    this.loading.present();
  }

  createAccount() {
    this.navCtrl.push(RegisterPage);
  }

  forgotPassword(text) {
    this.alertCtrl.create({
      title: 'Email',
      subTitle: text,
      buttons: ['Submit']
    })
  }

  verifyEmail(){
    this.navCtrl.push(VerificationPage);
  }

//Show and Hide Password Feature// 
  showPassword(input: any): any {
   input.type = input.type === 'password' ?  'text' : 'password';
  }
}

/////////////////////////////////////////////////////////
//toDelete()
////////////////////////////////////////////////////////

// showError(text) {
  //   this.loading.dismiss();

  //   let alert = this.alertCtrl.create({
  //     title: 'Fail',
  //     subTitle: text,
  //     buttons: ['OK']
  //   });
  //   alert.present(prompt);
  // }