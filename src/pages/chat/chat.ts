import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController, MenuController, App } from 'ionic-angular';
import { PopoverPage } from '../../pages/popover/popover';
import { ChatBotServiceProvider } from '../../providers/chat-bot-service/chat-bot-service';
import { DiscoverPage } from '../../pages/discover/discover';
import { MenuPage } from '../../pages/menu/menu';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})

export class ChatPage {
  messages: any[]
  context: any
  sessionId: any
  userMsg: any
  isDisabled: boolean
  suggestions: any

  constructor(public navCtrl: NavController,
    public navParam: NavParams,
    public popoverCtrl: PopoverController,
    public chatBotService: ChatBotServiceProvider,
    public menuCtrl: MenuController,
    public appCtrl: App) {
    this.messages = [{ text: "Hello, I am mimoBot. Do you want to search for jobs or add a work experience?", type: "received" }]
    this.context = {}
    
    this.sessionId = (function () {
      var now = new Date()
      var enterDT = now.getFullYear() + now.getMonth() + now.getDate() + now.getTime()
      return enterDT
    })

    this.isDisabled = false
  }

  openChat(myEvent) { //executes when the fabButton is tapped
    this.navCtrl.setRoot(ChatPage)
  }

  addMessage(text, type) { //adds message to chatInterface
    this.messages.push({
      text: text,
      isUserMsg: type
    })
  }

  sendMessage() {
    let self = this;
    self.isDisabled = true;
    self.addMessage(this.userMsg, true)

    var request = {
      "userMsg": this.userMsg,
      "id": this.sessionId,
      "context": this.context
    }

    this.chatBotService.sendRequest(request)
      .then(function (result) {
        self.addMessage(result.json().botMessage, false);
        self.context = result.json().context;
        console.log("hihue")
        console.log(self.context)

        self.isDisabled = false

        if (self.context.action.hasOwnProperty("data")) {
          self.suggestions = self.context.action.data
          console.log(self.suggestions)

          // this.getData(self.suggestions)
        }

        if (self.context.hasOwnProperty("result")) {
          var list = self.context.result[0].jobList;
          console.log(list)
          self.navCtrl.setRoot(DiscoverPage, list)
        }
      })

    this.userMsg = null; //clear input
  }

  getData(ev: any) {
    let self = this;
    // set val to the value of the searchbar
    let val = ev.target.value;

    console.log(self.suggestions)
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      self.suggestions = self.suggestions.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  openMenu() { //executes when the menu is tapped
    this.menuCtrl.open()
  }
}
