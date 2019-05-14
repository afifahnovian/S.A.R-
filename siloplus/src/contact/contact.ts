import { Component } from '@angular/core';
import {  NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Data } from '../../providers/data';
import { Pasien } from '../../providers/pasien';
import { AntrianPage } from '../antrian/antrian';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  pasien = {} as Pasien;
  antri : any;
  top : any;
  masuk:boolean;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    public http: Http,
    public data:Data
    ) {
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
          if(response.status == 200){
            this.top = response.top;
            this.antri = response.data;
            this.masuk = false;
          }
          else if(response.status == 400 || response.status == 505){
            this.masuk = true;
          }
          else if(response.status == 403){
            this.navCtrl.push(AntrianPage);
          }
      });

  }
}