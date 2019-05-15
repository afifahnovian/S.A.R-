import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { SettingPage } from '../setting/setting';
@IonicPage()
@Component({
  selector: 'page-settingawal',
  templateUrl: 'settingawal.html',
})

export class SettingawalPage {


constructor(public navCtrl: NavController) {}

gotosettingPage(){
this.navCtrl.push(SettingPage);
}
  }

