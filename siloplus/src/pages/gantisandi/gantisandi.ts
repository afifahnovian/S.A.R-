import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingPage } from '../setting/setting';

@IonicPage()
@Component({
  selector: 'page-gantisandi',
  templateUrl: 'gantisandi.html',
})
export class GantisandiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  gotoawal(){
    this.navCtrl.push(SettingPage)
  }

}
