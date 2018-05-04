import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DublinPage } from './dublin';

@NgModule({
  declarations: [
    DublinPage,
  ],
  imports: [
    IonicPageModule.forChild(DublinPage),
  ],
})
export class DublinPageModule {}
