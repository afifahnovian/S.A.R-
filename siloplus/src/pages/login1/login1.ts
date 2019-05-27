import { Component } from '@angular/core';
import {  NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Data } from '../../providers/data';
import { NgForm } from '@angular/forms';
import { Pasien } from '../../providers/pasien';
import { TabsPage } from '../../pages/tabs/tabs';
import { DaftarPage } from '../daftar/daftar';

@Component({
  selector: 'page-login1',
  templateUrl: 'login1.html',
})
export class Login1Page {

  pasien = {} as Pasien;

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
    console.log('ionViewDidLoad Login1Page');
  }

  opendaftar(){
    this.navCtrl.push(DaftarPage);
  }

  login(form: NgForm){

    let loading = this.loadCtrl.create({
        content: 'memuat..'
    });
  
      if(form.valid){
        loading.present();
        let input = JSON.stringify({
          member_id: this.pasien.member_id,
          password: this.pasien.password
        });
        console.log(input);
      this.http.post(this.data.BASE_URL+"/login.php",input).subscribe(data => {
      let response = data.json();
          
        if(response.status=="200"){
          console.log(response);
          this.data.login(response.data, 'pasien');//input data ke local storage
          this.navCtrl.setRoot(TabsPage);
          loading.dismiss();
        }
        else
             {
               loading.dismiss();
               let alert = this.alertCtrl.create({
                  title: 'Gagal Masuk',
                  subTitle: 'Username atau Password salah',      
                  buttons: ['OK']
                });
                alert.present();
             }
        });
      }
    }



}
