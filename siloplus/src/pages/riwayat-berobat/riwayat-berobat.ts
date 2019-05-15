import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-riwayat-berobat',
  templateUrl: 'riwayat-berobat.html',
})
export class RiwayatBerobatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RiwayatBerobatPage');
  }

}
