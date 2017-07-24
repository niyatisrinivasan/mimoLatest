import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkExperiencePage } from './workexperience';

@NgModule({
  declarations: [
    WorkExperiencePage,
  ],
  imports: [
    IonicPageModule.forChild(WorkExperiencePage),
  ],
  exports: [
    WorkExperiencePage
  ]
})
export class WorkexperienceModule {}
