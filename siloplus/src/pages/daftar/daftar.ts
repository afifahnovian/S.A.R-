import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Login1Page } from '../login1/login1';
import { HomePage } from '../home/home';
@IonicPage()
@Component({
  selector: 'page-daftar',
  templateUrl: 'daftar.html',
})
export class DaftarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DaftarPage');
  }
  OpenLogin(){
    this.navCtrl.push(Login1Page);
  }
  gotohome(){
    this.navCtrl.push(HomePage)
  }

}
