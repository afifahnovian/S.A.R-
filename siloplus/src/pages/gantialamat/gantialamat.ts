import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingPage } from '../setting/setting';

@IonicPage()
@Component({
  selector: 'page-gantialamat',
  templateUrl: 'gantialamat.html',
})
export class GantialamatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  gotoawal(){
    this.navCtrl.push(SettingPage)
  }

}
