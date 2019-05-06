import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SettingPage } from '../setting/setting';
import { DataDiriPage } from '../data-diri/data-diri';



@Component({
  selector: 'page-profil-pasien',
  templateUrl: 'profil-pasien.html',
})
export class ProfilPasienPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  gotoDataDiriPage(){
    this.navCtrl.push(DataDiriPage);
  }

  gotoSettingPage(){
    this.navCtrl.push(SettingPage);
  }
  
}

