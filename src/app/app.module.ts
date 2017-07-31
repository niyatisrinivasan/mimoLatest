import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PopoverPage } from '../pages/popover/popover';
import { DiscoverPage } from '../pages/discover/discover';
import { ProfilePage } from '../pages/profile/profile';
import { WorkExperiencePage } from '../pages/workexperience/workexperience';
import { UploadResumePage } from '../pages/uploadresume/uploadresume';
import { BookmarksPage } from '../pages/bookmarks/bookmarks';
import { ApplicationsPage } from '../pages/applications/applications';
import { NotificationsPage } from '../pages/notifications/notifications';
import { ChatPage } from '../pages/chat/chat';
import { MenuPage } from '../pages/menu/menu';
import { JobDescriptionPage } from '../pages/job-description/job-description';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { Facebook } from '@ionic-native/facebook';
import { NativeStorage } from '@ionic-native/native-storage';
import { AppGlobals } from '../global';
import { ChatBotServiceProvider } from '../providers/chat-bot-service/chat-bot-service';
import { JobServiceProvider } from '../providers/job-service/job-service';
import { ExtractSalaryInfoPipe } from '../pipes/extract-salary-info/extract-salary-info';
import { LimitCharactersPipe } from '../pipes/limit-characters/limit-characters';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { AutoCompleteModule } from 'ionic2-auto-complete';
import { BookmarkServiceProvider } from '../providers/bookmark-service/bookmark-service';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { NotificationServiceProvider } from '../providers/notification-service/notification-service';
import { ResumeServiceProvider } from '../providers/resume-service/resume-service';
import { ApplicationServiceProvider } from '../providers/application-service/application-service';
import { FormatDisplayDatePipe } from '../pipes/format-display-date/format-display-date';
import { ExtractCountryNamePipe } from '../pipes/extract-country-name/extract-country-name';
import { CountryServiceProvider } from '../providers/country-service/country-service';
import { WorkExpServiceProvider } from '../providers/workexp-service/workexp-service';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { FormatDatePipe } from '../pipes/format-date/format-date';
import {Keyboard} from '@ionic-native/keyboard';
import { IntroPage } from '../pages/intro/intro';
import {VerificationPage} from '../pages/verification/verification';
const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '2ea62370',
  },
  'push': {
    'sender_id': '988473903942',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'iconColor': '#343434'
      }
    }
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage,
    PopoverPage,
    DiscoverPage,
    ProfilePage,
    WorkExperiencePage,
    UploadResumePage,
    BookmarksPage,
    NotificationsPage,
    ApplicationsPage,
    MenuPage,
    JobDescriptionPage,
    ExtractSalaryInfoPipe,
    LimitCharactersPipe,
    LoginPage,
    RegisterPage,
    FormatDisplayDatePipe,
    ExtractCountryNamePipe,
    FormatDatePipe,
    IntroPage, 
    VerificationPage
    
  ],
  imports: [
    BrowserModule,
    AutoCompleteModule,
    // IonicModule.forRoot(MyApp),
    HttpModule,
    CloudModule.forRoot(cloudSettings),
    IonicStorageModule.forRoot(),
      IonicModule.forRoot(MyApp
        , {
        platforms : {
          android : {
            // These options are available in ionic-angular@2.0.0-beta.2 and up.
            scrollAssist: false,    // Valid options appear to be [true, false]
            autoFocusAssist: false  // Valid options appear to be ['instant', 'delay', false]
          }
          // http://ionicframework.com/docs/v2/api/config/Config/)
        }
      })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage,
    PopoverPage,
    DiscoverPage,
    ProfilePage,
    WorkExperiencePage,
    UploadResumePage,
    BookmarksPage,
    NotificationsPage,
    ApplicationsPage,
    MenuPage,
    JobDescriptionPage,
    LoginPage,
    RegisterPage,
    IntroPage,
    VerificationPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppGlobals,
    ChatBotServiceProvider,
    JobServiceProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthServiceProvider,
    BookmarkServiceProvider,
    UserServiceProvider,
    NotificationServiceProvider,
    ResumeServiceProvider,
    ApplicationServiceProvider,
    Facebook,
    NativeStorage,
    CountryServiceProvider,
    WorkExpServiceProvider,
    Keyboard,
    Storage, 
  ]
})
export class AppModule { }
