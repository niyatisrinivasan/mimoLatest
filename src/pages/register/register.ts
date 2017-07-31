import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { IonicPage, NavController, NavParams, AlertController, Loading, LoadingController, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';
import { MenuPage } from '../menu/menu';
import { AppGlobals } from '../../global';
import { Push, PushToken } from '@ionic/cloud-angular';
import {CountryServiceProvider} from '../../providers/country-service/country-service';
import {Keyboard} from '@ionic-native/keyboard';
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})

export class RegisterPage {
  @ViewChild('signupSlider') signupSlider: any;
  slideOneForm: FormGroup;
  slideTwoForm: FormGroup;
  createSuccess = false;
  credentials = { email: '', UserName: '', Address: '', Gender: '', CountryID: '', PostalCode: '', password: '', DateOfBirth: '', DeviceToken: '' };
  loading: Loading;
  countryList: any[]
  constructor(private toastCtrl: ToastController,public formBuilder: FormBuilder, public CountryServiceProvider: CountryServiceProvider, private push: Push, private auth: AuthServiceProvider, private _appGlobals: AppGlobals, private nav: NavController, private alertCtrl: AlertController, private loadingCtrl: LoadingController,private keyboard: Keyboard) 
  { 
  this.getAllCountries();

  this.slideOneForm = formBuilder.group({
        firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],   
        email:['', Validators.compose([Validators.required,Validators.email, Validators.required])],
        password:['', Validators.compose([Validators.minLength(8), Validators.required ])],
        confirmpassword:['', Validators.required],
    }, {validator: this.matchingPasswords('password', 'confirmpassword')}
    );
  

    this.slideTwoForm = formBuilder.group({
      Address: ['', Validators.compose([Validators.pattern('[a-zA-z 0-9]*'),Validators.required])],
    })
  }
matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup): {[key: string]: any} => {
      let password = group.controls[passwordKey];
      let confirmpassword = group.controls[confirmPasswordKey];

      if (password.value != confirmpassword.value) {
        return {
          mismatchedPasswords: true
        };
      }
    }
}
  public register() {
    let self = this
    self.showLoading()

    console.log(self.credentials)
    self.auth.register(self.credentials).then(response => { //retrieves the response of authentication after sending a request
      var res = response.json();
      console.log(res)
      if (!res.success) { //not authenticated == accessToken is not generated
        self.presentToast(res.message) //response.message == "Sorry, got error message"
      } else {
        self._appGlobals.setIdToken(res.result.accessToken) //to set token so that it can be attached to the header for each request made
        self._appGlobals.setUserId(res.result.UserID)
        self._appGlobals.setUserEmail(res.result.Email)
        self._appGlobals.setIsSubsequent(false)
        // self.getDeviceToken()

        //otherwise
        self.nav.setRoot(MenuPage)
      }
    })
  }

  presentToast(responseMsg) {
    let toast = this.toastCtrl.create({
      message: responseMsg,
      duration: 2000,
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
  getAllCountries(){
    let self = this;
    self.CountryServiceProvider.getCountries().then(response =>{
      var res = response.json()
      if (!res.success) {
        self.presentToast(res.message)
      } 
      else {
        self.countryList = res.result
        }
    }).catch(err => {
      self.presentToast(err)
    })
  }
  
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  //Show and Hide Password Feature// 
  showPassword(input: any): any {
   input.type = input.type === 'password' ?  'text' : 'password';
  }

    showPasswordd(input1: any): any {
   input1.type = input1.type === 'password' ?  'text' : 'password';
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