import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
@Component({
  selector: 'page-antrian',
  templateUrl: 'antrian.html',
})
export class AntrianPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }

  gotoHomePage(){
    this.navCtrl.push(HomePage);
  }
  
}
