import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profildokter',
  templateUrl: 'profildokter.html',
})
export class ProfildokterPage {
  dokter: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dokter = navParams.get('data');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfildokterPage');
  }

}
