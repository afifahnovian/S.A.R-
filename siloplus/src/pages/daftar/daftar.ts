import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Login1Page } from '../login1/login1';
// import { HomePage } from '../home/home';
import { Http } from '@angular/http';
import { Data } from '../../providers/data';
// import { TabsPage } from '../tabs/tabs';
import { Pasien } from '../../providers/pasien';
import { IsiProfilPage } from '../isi-profil/isi-profil';

@IonicPage()
@Component({
  selector: 'page-daftar',
  templateUrl: 'daftar.html',
})

export class DaftarPage {

   pasien = {} as Pasien;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    public data: Data,
    public http: Http
    ) {
      this.testapi();
  }

  testapi(){
    this.http.get("http://siloplus.atspace.cc/dbconnect.php").subscribe(data => {
      console.log(data);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DaftarPage');
  }

  register(){
    if(this.pasien.password == this.pasien.confirm) {

      let loading = this.loadCtrl.create({
        content: 'memuat..'
      });

      loading.present();

      //apiPost
      let input = {
        member_id :this.pasien.member_id,
        telepon: this.pasien.telepon,
        password: this.pasien.password
      };

      console.log(input);
      this.http.post(this.data.BASE_URL + "/register.php", input).subscribe(data => {
          let response = data.json();
          console.log(response);
          if(response.status==200){
            this.data.logout();
            this.data.login(this.pasien, 'pasien');

            this.navCtrl.push(IsiProfilPage);
            loading.dismiss();
          }
          else if(response.status==409) {
            loading.dismiss();
              let alert = this.alertCtrl.create({
                title: 'Id Already Taken',
                message: 'Id sudah diambil',
                buttons: ['OK']
              });
              alert.present();
              loading.dismiss();
          }
          else {
            loading.dismiss();
              let alert = this.alertCtrl.create({
                title: 'Failed Creating New Account',
                message: 'Gagal',
                buttons: ['OK']
              });
              alert.present();
              loading.dismiss();
          }
        });
    }
    else{
      let alert = this.alertCtrl.create({
        title: 'Failed',
        message: 'Password tidak sama',
        buttons: ['OK']
      });
      alert.present();
    }
  }

  OpenLogin(){
    this.navCtrl.push(Login1Page);
  }

}
