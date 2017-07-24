import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, MenuController } from 'ionic-angular';
import { PopoverPage } from '../../pages/popover/popover';
import { ChatPage } from '../../pages/chat/chat';
import { applications } from '../../dataSeeding/applicationListTemp';
import { JobDescriptionPage } from '../../pages/job-description/job-description';

@IonicPage()
@Component({
  selector: 'page-applications',
  templateUrl: 'applications.html',
})
export class ApplicationsPage {
  applications: any

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public popoverCtrl: PopoverController,
    public menuCtrl: MenuController) {
      this.applications = applications
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Applications');
  }

  openChat(myEvent) { //executes when the fabButton is tapped
    this.navCtrl.setRoot(ChatPage)
  }

  openMenu() { //executes when the menu is tapped
    this.menuCtrl.open()
  }

  viewOneJob(selectedJob) {
    console.log(selectedJob)
    this.navCtrl.push(JobDescriptionPage, { job: selectedJob })
  }
}
