import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { PopoverPage } from '../../pages/popover/popover';
import { ChatPage } from '../../pages/chat/chat';
import { BookmarkServiceProvider } from '../../providers/bookmark-service/bookmark-service';
import { ApplicationServiceProvider } from '../../providers/application-service/application-service';

@IonicPage()
@Component({
  selector: 'page-job-description',
  templateUrl: 'job-description.html',
})

export class JobDescriptionPage {
  job: any
  jobQualification: any

  constructor(public bookmarkService:BookmarkServiceProvider, public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
    this.job = navParams.get("job")
    this.jobQualification = this.job.JobQualification
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobDescriptionPage');
  }

  openChat() { //executes when the fabButton is tapped
    this.navCtrl.setRoot(ChatPage)
  }

  addToBookmarks(jobId) {
    this.bookmarkService.addBookmark(jobId)
  }
}
