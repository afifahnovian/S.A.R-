import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfildokterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
