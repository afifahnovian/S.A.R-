import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SettingPage } from '../setting/setting';
import { DataDiriPage } from '../data-diri/data-diri';
import { RiwayatBerobatPage } from '../riwayat-berobat/riwayat-berobat';
import { Data } from '../../providers/data';
import { Http } from '@angular/http';
import { Pasien } from '../../providers/pasien';


@Component({
  selector: 'page-profil-pasien',
  templateUrl: 'profil-pasien.html',
})
export class ProfilPasienPage {
  now = new Date();

  pasien = {} as Pasien;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public data:Data,
    public http:Http
    ) {
  }

  ionViewWillEnter() {
    this.data.getDataPasien().then((data) => {
      this.pasien.nama_pasien = data.nama_pasien;
      this.pasien.member_id = data.member_id;
    })
  }

  gotoRiwayatBerobatPage(){
    this.navCtrl.push(RiwayatBerobatPage);
  }

  gotoDataDiriPage(){
    this.navCtrl.push(DataDiriPage);
  }

  gotoSettingPage(){
    this.navCtrl.push(SettingPage);
  }


}

