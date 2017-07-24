import { Component } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { IonicPage, NavController, NavParams, PopoverController, ModalController, AlertController, ToastController } from 'ionic-angular';
import { PopoverPage } from '../../pages/popover/popover';
import { RegisterPage } from '../register/register';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { user } from '../../dataSeeding/userInfo';
import { ExtractCountryNamePipe } from '../../pipes/extract-country-name/extract-country-name';
import { CountryServiceProvider } from '../../providers/country-service/country-service';
import { ChatPage } from '../../pages/chat/chat';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  providers: [NativeStorage, ExtractCountryNamePipe]
})

export class ProfilePage {
  UserName: any
  Email: any
  UserAddress: any
  Gender: any
  CountryName: any
  userData: any = {}
  userId: any
  updateData: any;
  constructor(public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams, public nativeStorage: NativeStorage,
    public modalCtrl: ModalController, public popoverCtrl: PopoverController, public alertCtrl: AlertController,
    public userService: UserServiceProvider, public extractCountryName: ExtractCountryNamePipe, public countryService: CountryServiceProvider) {
    this.getUser()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  getUser() {
    let self = this
    this.userService.getUser().then(response => {
      var res = response.json();

      if (!res.success) {
        self.presentToast(res.message)
      } else {
        this.userData = res.result
      }
    }).catch(err => {
      self.presentToast(err)
    })
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

  openChat() { //executes when the fabButton is tapped
    this.navCtrl.setRoot(ChatPage)
  }

  // showPrompt(userData) {
  //   let self = this

  // self.countryService.getCountries().then(response => {
  //   var res = response.json()

  //   if (!res.success) {
  //     self.presentToast(res.message)
  //   } else {

  //   }
  // })

  //   let countryN = this.extractCountryName.transform(this.countryService.getCountries(), 'pipeFilter')

  //   //console.log(userData)
  //   let prompt = this.alertCtrl.create({
  //     title: 'Update',
  //     message: "Update and save the fields",
  //     inputs: [
  //       {
  //         name: 'Name',
  //         value: userData.UserName
  //       },
  //       {
  //         name: 'Address',
  //         value: userData.UserAddress
  //       },
  //       {
  //         name: 'Gender',
  //         value: userData.Gender
  //       },
  //       {
  //         name: 'Country',
  //         value: this.extractCountryName.transform(userData.Countries, 'pipeFilter')
  //       },

  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         handler: data => {
  //           console.log('Cancel clicked');
  //         }
  //       },
  //       {
  //         text: 'Save',
  //         handler: data => {
  //           {

  //             env.userData = {
  //               UserName: data.Name,
  //               UserAddress: data.Address,
  //               Gender: data.Gender,
  //               Countries: userData.Countries
  //             }
  //             console.log(" hihi")
  //             console.log(env.userData)
  //             console.log("hu3")
  //             console.log(data)
  //           }

  //           console.log('Saved clicked');
  //           console.log(userData)
  //         }
  //       }
  //     ]
  //   });
  //   prompt.present();
  // }

  openPopover(myEvent) { //executes when the fabButton is tapped
    let popover = this.popoverCtrl.create(PopoverPage)

    popover.present({
      ev: myEvent
    });

    popover.onDidDismiss((popoverData) => {
      console.log(popoverData)
    })
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

// getUserInfo() {
  //   let self = this
  //   this.nativeStorage.getItem('localUserData').then(function (localUserData) {
  //     // console.log({
  //     //   n: localUserData.name,
  //     //   g: localUserData.gender,
  //     //   p: localUserData.picture
  //     // })

  //     this.userData = {
  //       "name": localUserData.name,
  //       "gender": localUserData.gender,
  //       "picture": localUserData.picture,
  //       "country": localUserData.country
  //     }

  //     console.log(userData)
  //   })
  // }
