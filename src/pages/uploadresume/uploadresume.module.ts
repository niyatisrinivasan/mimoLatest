import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UploadResumePage } from './uploadresume';

@NgModule({
  declarations: [
    UploadResumePage,
  ],
  imports: [
    IonicPageModule.forChild(UploadResumePage),
  ],
  exports: [
    UploadResumePage
  ]
})
export class UploadresumeModule {}
