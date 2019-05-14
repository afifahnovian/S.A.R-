import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DaftarPage } from '../daftar/daftar';

@IonicPage()
@Component({
  selector: 'page-login1',
  templateUrl: 'login1.html',
})
export class Login1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login1Page');
  }

  opendaftar(){
    this.navCtrl.push(DaftarPage);
  }
}
