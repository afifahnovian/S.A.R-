import { Component } from '@angular/core';
import {  NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Data } from '../../providers/data';
import { Pasien } from '../../providers/pasien';

/**
 * Generated class for the AntrianPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-antrian',
  templateUrl: 'antrian.html',
})
export class AntrianPage {

	pasien = {} as Pasien;
	top: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    public http: Http,
    public data:Data
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AntrianPage');
  }

  ionViewWillEnter(){
    this.data.getDataPasien().then((data) => {
      this.pasien.member_id = data.member_id;

      console.log(data);
      this.getAntri();
    }) 
  }

  getAntri(){
  	let input = JSON.stringify({
      member_id: this.pasien.member_id
    });

    console.log(input);
      this.http.post(this.data.BASE_URL + "/read_antrian.php", input).subscribe(data => {
          let response = data.json();
          console.log(response);
          if(response.status==403){
            this.top = response.top;
          }
      });

  }

  gotoHomePage(){
  	let input = JSON.stringify({
      member_id: this.pasien.member_id
    });

    console.log(input);
      this.http.post(this.data.BASE_URL + "/riwayat.php", input).subscribe(data => {
          let response = data.json();
          console.log(response);
      });
      this.navCtrl.popToRoot();
  }



}