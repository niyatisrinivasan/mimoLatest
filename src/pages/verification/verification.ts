import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
/**
 * Generated class for the VerificationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-verification',
  templateUrl: 'verification.html',
})
export class VerificationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private auth: AuthServiceProvider,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerificationPage');
  }
  resendEmail(){
    this.auth.resendEmail() //method in authentication service
      .then(response => {
        "Your email account is already verified"
        }
      )
      .catch(error => { //invalid token or user email and user id
        "Sorry, you don't seem to have an account registered under that email"
      })


}
}
