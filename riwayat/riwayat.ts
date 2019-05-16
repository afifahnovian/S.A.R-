  import { Component } from '@angular/core';
  import { NavController, NavParams } from 'ionic-angular';
  import { Data } from '../../providers/data';
  import { Pasien } from '../../providers/pasien';
  import { Http } from '@angular/http';
import { RiwayatobatkosongPage } from '../riwayatobatkosong/riwayatobatkosong';
  
  @Component({
    selector: 'page-riwayat',
    templateUrl: 'riwayat.html',
  })
  export class RiwayatPage {
  
    pasien = {} as Pasien;
    riwayat: any;
    kosong: boolean;
    constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      public data: Data,
      public http: Http
      ) {
    }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad RiwayatPage');
    }
    
    ionViewWillEnter(){
      this.data.getDataPasien().then((data) => {
        this.pasien.member_id = data.member_id;
        console.log(data);
        this.getRiwayat();
      })
    }
  
    getRiwayat(){
    let input = {
        member_id :this.pasien.member_id
      };
      console.log(input);
      this.http.post(this.data.BASE_URL+"/read_riwayat.php", input).subscribe(data => {
        let response = data.json();
        console.log(response);
        if(response.data){
          this.riwayat = response.data;
        }
        else{
          this.navCtrl.push(RiwayatobatkosongPage);
        }
      });
    }
  }