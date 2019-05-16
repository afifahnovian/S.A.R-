import { Component } from '@angular/core';
import {  NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Data } from '../../providers/data';
import { Pasien } from '../../providers/pasien';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-poliklinik',
  templateUrl: 'poliklinik.html'
})
export class PoliklinikPage {

  pasien = {} as Pasien;
  poliklinik:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    public http: Http,
    public data:Data
    ) {

  }

  ionViewWillEnter() {
    this.data.getDataPasien().then((data) => {
      this.pasien.member_id = data.member_id;
    })
  }

  pesanAntrian(){

    let input = JSON.stringify({
      member_id: this.pasien.member_id,
      poliklinik: this.poliklinik
    });

    console.log(input);
    this.http.post(this.data.BASE_URL+"/antrian.php", input).subscribe(data => {
      let response = data.json();
    console.log(response);
    if(response.status=="200"){
      let alert = this.alertCtrl.create({
        title: 'Data Tersimpan!',
        message: 'Berhasil mendaftar',
        buttons: ['OK']
      });
         alert.present();
         this.navCtrl.setRoot(TabsPage);
    }
    else if(response.status == "404"){
      let alert = this.alertCtrl.create({
        title: 'Sudah daftar',
        message: 'Sudah mendaftar',
        buttons: ['OK']
      });
      alert.present();
    }

    });
  }

}