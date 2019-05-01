import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingPage } from '../setting/setting';

@IonicPage()
@Component({
  selector: 'page-gantitelpon',
  templateUrl: 'gantitelpon.html',
})
export class GantitelponPage {
  public inputVal : string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  gotoawal(){
    this.navCtrl.push(SettingPage)
  }
}