import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { SettingPage } from '../setting/setting';
import { Http } from '@angular/http';
import { Pasien } from '../../providers/pasien';
import { Data } from '../../providers/data';

@IonicPage()
@Component({
  selector: 'page-gantisandi',
  templateUrl: 'gantisandi.html',
})
export class GantisandiPage {

  pasien = {} as Pasien;
  sandibaru: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public data: Data,
    public http:Http,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController
    ) {
  }

  ionViewWillEnter() {
    this.data.getDataPasien().then((data) => {
      this.pasien.member_id = data.member_id;
      this.pasien.password = data.password;
    })
  }

  gotoawal(){
    let loading = this.loadCtrl.create({
        content: 'memuat..'
      });

    loading.present();

      let input = JSON.stringify({
        member_id: this.pasien.member_id,
        password: this.pasien.password
      });

      console.log(input);
      this.http.post(this.data.BASE_URL+"/ganti.php", input).subscribe(data => {
        let response = data.json();
        console.log(response);

	  if(response.status=="200")
	    {
          // this.data.login(response.data);
          loading.dismiss();
          this.data.logout();
          //magical row for soting locall data
          this.data.login(response.data, 'pasien');

          this.navCtrl.pop();
          let alert = this.alertCtrl.create({
            title: 'Data Tersimpan!',
            buttons: ['OK']
          });
          alert.present();
      }
      else
           {
             loading.dismiss();
             let alert = this.alertCtrl.create({
                title: 'Gagal Mengubah Profil',
                subTitle: '',
                buttons: ['OK']
              });
              alert.present();
           }
      });

  }
}