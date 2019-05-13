import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PoliklinikPage } from './poliklinik';

@NgModule({
  declarations: [
    PoliklinikPage,
  ],
  imports: [
    IonicPageModule.forChild(PoliklinikPage),
  ],
})
export class PoliklinikPageModule {}
