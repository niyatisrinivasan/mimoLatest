import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, AlertController, MenuController, ToastController } from 'ionic-angular';
import { PopoverPage } from '../../pages/popover/popover';
import { workExp } from '../../dataSeeding/workExpListTemp';
import { ChatPage } from '../../pages/chat/chat';
import { WorkExpServiceProvider } from '../../providers/workexp-service/workexp-service';
import { FormatDatePipe } from '../../pipes/format-date/format-date';

@IonicPage()
@Component({
  selector: 'page-workexperience',
  templateUrl: 'workexperience.html',
  providers: [FormatDatePipe]
})

export class WorkExperiencePage {
  public today = new Date();
  current_iso: string;
  workExpList: any[]
  company: any
  date: string = new Date().toISOString();

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public menuCtrl: MenuController,
    public workExpService: WorkExpServiceProvider, public formatDate: FormatDatePipe) {

    this.current_iso = this.today.toISOString();
    this.getAllWorkExp();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Workexperience');
  }

  gotWorkExp: boolean = false;

  getAllWorkExp() {
    let self = this;
    self.workExpService.getWorkExperience().then(response => {
      var res = response.json()

      if (!res.success) {
        self.presentToast(res.message)
      } else {
        self.workExpList = res.result

        if (self.workExpList.length > 0) {
          self.gotWorkExp = true
        } else {
          self.gotWorkExp = true
        }
      }
    }).catch(err => {
      self.presentToast(err)
    })
  }

  addWorkExp(workExpItem) {
    let self = this
    console.log(workExpItem)
    self.workExpService.addWorkExperience(workExpItem).then(response => {
      var res = response.json()

      if (!res.success) {
        self.presentToast(res.message)
      } else {
        console.log(res)
      }
    }).catch(err => {
      self.presentToast(err)
    })
  }

  updateWorkExp(workExpId, workExpItem) {
    let self = this
    console.log(workExpItem)
    self.workExpService.updateWorkExperience(workExpId, workExpItem).then(response => {
      var res = response.json()

      if (!res.success) {
        self.presentToast(res.message)
      } else {
        console.log(res)
      }
    }).catch(err => {
      self.presentToast(err)
    })
  }

  removeWorkExp(workExpId) {
    let self = this
    self.workExpService.removeWorkExperience(workExpId).then(response => {
      var res = response.json()

      if (!res.success) {
        self.presentToast(res.message)
      } else {
        console.log(res)
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

  addWorkExperience() {
    let self = this

    let prompt = self.alertCtrl.create({
      title: 'Work Experiences',
      inputs: [
        {
          name: 'CompanyName',
          placeholder: 'Name of Company',
        },
        {
          name: 'Role',
          placeholder: 'Role',
        },
        {
          name: 'Description',
          placeholder: 'Description of company'
        },
        {
          name: 'StartDate',
          placeholder: 'Employment start date',
          type: 'date'
        },
        {
          name: 'EndDate',
          placeholder: 'Employment end date',
          type: 'date'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            let startDate = self.formatDate.transform(data.StartDate, 'pipeFilter')
            let endDate = self.formatDate.transform(data.StartDate, 'pipeFilter')

            let workExpItem = {
              'CompanyName': data.CompanyName,
              'Role': data.Role,
              'Description': data.Description,
              'StartDate': startDate,
              'EndDate': endDate
            }
          }
        }
      ]
    });

    prompt.present();
  }

  updateWorkExperience(workExpId, workExp) {
     let self = this

    let prompt = self.alertCtrl.create({
      title: 'Work Experiences',
      inputs: [
        {
          name: 'CompanyName',
          placeholder: 'Name of Company',
        },
        {
          name: 'Role',
          placeholder: 'Role',
        },
        {
          name: 'Description',
          placeholder: 'Description of company'
        },
        {
          name: 'StartDate',
          placeholder: 'Employment start date',
          type: 'date'
        },
        {
          name: 'EndDate',
          placeholder: 'Employment end date',
          type: 'date'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            let startDate = self.formatDate.transform(data.StartDate, 'pipeFilter')
            let endDate = self.formatDate.transform(data.StartDate, 'pipeFilter')

            let workExpItem = {
              'CompanyName': data.CompanyName,
              'Role': data.Role,
              'Description': data.Description,
              'StartDate': startDate,
              'EndDate': endDate
            }

            self.updateWorkExp(workExpId, workExpItem)
          }
        }
      ]
    });

    prompt.present();
  }

  openChat() { //executes when the fabButton is tapped
    this.navCtrl.setRoot(ChatPage)
  }

  openMenu() { //executes when the menu is tapped
    this.menuCtrl.open()
  }
}
