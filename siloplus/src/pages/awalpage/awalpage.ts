import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Onboard1Page } from '../onboard1/onboard1';
@IonicPage()
@Component({
  selector: 'page-awalpage',
  templateUrl: 'awalpage.html',
})
export class AwalpagePage {
  gotoonboard(){
    this.navCtrl.push(Onboard1Page);
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AwalpagePage');
  }

}
