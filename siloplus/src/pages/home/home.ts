import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RiwayatBerobatPage } from '../riwayat-berobat/riwayat-berobat';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username : string;
  password : string;
  constructor(public navCtrl: NavController) {

  }

  gotoRiwayatBerobatPage(){
    this.navCtrl.push(RiwayatBerobatPage);
  
  }

}

