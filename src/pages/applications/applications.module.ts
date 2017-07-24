import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApplicationsPage } from './applications';

@NgModule({
  declarations: [
    ApplicationsPage,
  ],
  imports: [
    IonicPageModule.forChild(ApplicationsPage),
  ],
  exports: [
    ApplicationsPage
  ]
})
export class ApplicationsModule {}
