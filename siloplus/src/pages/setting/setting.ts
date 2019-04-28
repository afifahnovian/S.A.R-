import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { GantisandiPage } from '../gantisandi/gantisandi';
import { GantialamatPage } from '../gantialamat/gantialamat';
import { GantitelponPage } from '../gantitelpon/gantitelpon';

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})

export class SettingPage {
  settinglists:any;
  constructor(public navCtrl: NavController) {
  }
  gotogantisandi(){
    this.navCtrl.push(GantisandiPage)
  }
  gotogantinotelp(){
    this.navCtrl.push(GantitelponPage)
  }
  gotogantialamat(){
    this.navCtrl.push(GantialamatPage)
  }
  }
 

