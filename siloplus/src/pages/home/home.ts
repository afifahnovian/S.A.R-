import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JadwalPage } from '../jadwal/jadwal';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  username : string;
  password : string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  gotojadwal(){
    this.navCtrl.push(JadwalPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
