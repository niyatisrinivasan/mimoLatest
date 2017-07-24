import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, MenuController, ToastController } from 'ionic-angular';
import { JobDescriptionPage } from '../../pages/job-description/job-description';
import { PopoverPage } from '../../pages/popover/popover';
import { JobServiceProvider } from '../../providers/job-service/job-service';
import { jobs } from '../../dataSeeding/jobListTemp';
import { ChatPage } from '../../pages/chat/chat';
import { BookmarkServiceProvider } from '../../providers/bookmark-service/bookmark-service';
import { ApplicationServiceProvider } from '../../providers/application-service/application-service';

@IonicPage()
@Component({
  selector: 'page-discover',
  templateUrl: 'discover.html',
})
export class DiscoverPage {
  jobList: any[]
  userId: any

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public popoverCtrl: PopoverController,
    public jobService: JobServiceProvider,
    public menuCtrl: MenuController,
    public bookmarkService: BookmarkServiceProvider,
    public applicationService: ApplicationServiceProvider,
    public toastCtrl: ToastController) {

    this.userId = 'adfd2434jijs'
    // this.jobList = navParams.get('list')
    this.getAllJobs();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Discover');
  }

  gotJobs: boolean = false

  getAllJobs() { //with backend integration
    let self = this

    self.jobService.getJobs().then(response => {
      var res = response.json()

      console.log(res)
      
      if (!res.success) {
        self.presentToast(res.message)
      } else {
        self.jobList = res.result

        console.log(self.jobList)

        if (self.jobList.length > 0) {
          self.gotJobs = true
        } else {
          self.gotJobs = true
        }
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

  viewOneJob(selectedJob) {
    this.navCtrl.push(JobDescriptionPage, { job: selectedJob })
  }

  addBookmark(job) {
    var self = this
    self.bookmarkService.addBookmark(job.JobID).then(response => {
      var res = response.json()

      if (!res.success) {
        self.presentToast(res.message)
      } else {
        self.presentToast(res.message)
      }
    }).catch(err => {
      self.presentToast(err)
    })
  }

  removeBookmark(job) {
    var self = this
    self.bookmarkService.removeBookmark(job.JobID).then(response => {
      var res = response.json()

      if (!res.success) {
        self.presentToast(res.message)
      } else {
        self.presentToast(res.message)
      }
    }).catch(err => {
      self.presentToast(err)
    })
  }

  // applyForJob(job) {
  // this.applicationService.addApplication(job, userId, resumeId).then(function (result) {
  //   console.log("Successfully applied for " + job.JobTitle)
  // })
  // }
}
