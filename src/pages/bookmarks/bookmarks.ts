import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, PopoverController, MenuController, ToastController } from 'ionic-angular';
import { MenuPage } from '../../pages/menu/menu';
import { PopoverPage } from '../../pages/popover/popover';
import { BookmarkServiceProvider } from '../../providers/bookmark-service/bookmark-service';
import { jobs } from '../../dataSeeding/jobListTemp';
import { ChatPage } from '../../pages/chat/chat';

@IonicPage()
@Component({
  selector: 'page-bookmarks',
  templateUrl: 'bookmarks.html',
})
export class BookmarksPage {
  isBookmarked: boolean
  jobList: any[]
  userId: any
  gotJobs: boolean

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public appCtrl: App,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public bookmarkService: BookmarkServiceProvider, public toastCtrl: ToastController) {
    this.isBookmarked = false
    this.gotJobs = false
    this.userId = 'adfd2434jijs'
    this.getBookmarks();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Bookmarks');
  }

  getBookmarks() { //with backend integration
    let self = this
    self.jobList = jobs
    this.bookmarkService.getBookmarks().then(response => {
      var res = response.json()

      if (!res.success) {
        self.jobList = res.result

        if (self.jobList.length > 0) {
          self.gotJobs = true
        } else {
          self.gotJobs = true
        }
      } else {
        self.presentToast(res.message)
      }
    }).catch(err => {
      this.presentToast(err)
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
  
  openChat(myEvent) { //executes when the fabButton is tapped
    this.navCtrl.setRoot(ChatPage)
  }

  openMenu() { //executes when the menu is tapped
    this.menuCtrl.open()
  }
}
