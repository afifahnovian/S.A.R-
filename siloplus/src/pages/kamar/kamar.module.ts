import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KamarPage } from './kamar';

@NgModule({
  declarations: [
    KamarPage,
  ],
  imports: [
    IonicPageModule.forChild(KamarPage),
  ],
})
export class KamarPageModule {}
