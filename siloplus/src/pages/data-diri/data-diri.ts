import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data';
import { Pasien } from '../../providers/pasien';

@Component({
  selector: 'page-data-diri',
  templateUrl: 'data-diri.html',
})
export class DataDiriPage {

	pasien = {} as Pasien;

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public data:Data
  	) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DataDiriPage');
  }

  ionViewWillEnter(){
  	this.data.getDataPasien().then((data) => {
      this.pasien.nama_pasien = data.nama_pasien;
      this.pasien.member_id = data.member_id;
      this.pasien.tempat_lahir = data.tempat_lahir;
      this.pasien.tanggal_lahir = data.tanggal_lahir;
      this.pasien.telepon = data.telepon;
      this.pasien.jenis_kelamin = data.jenis_kelamin;
      this.pasien.alamat = data.alamat;
    })
    console.log(this.data);
  }

}
