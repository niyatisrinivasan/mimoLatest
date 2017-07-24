import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobDescriptionPage } from './job-description';

@NgModule({
  declarations: [
    JobDescriptionPage,
  ],
  imports: [
    IonicPageModule.forChild(JobDescriptionPage),
  ],
  exports: [
    JobDescriptionPage
  ]
})
export class JobDescriptionPageModule {}
