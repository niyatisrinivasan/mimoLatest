import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { PopoverPage } from '../../pages/popover/popover';
import { noti } from '../../dataSeeding/notificationData';

@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {
  Title:any;
  Description:any;
  DateSent:any;
  RecordStatus:any;
  LastUpdated:any;

  notificationData: any = {

  } 

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public popoverCtrl: PopoverController) {

      this.notificationData = noti
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Notifications');
    console.log(this.notificationData);
  }

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