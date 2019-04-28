import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

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
    this.navCtrl.pop();
  }

}
