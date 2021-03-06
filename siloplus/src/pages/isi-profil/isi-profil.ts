import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { Http } from '@angular/http';
import { Pasien } from '../../providers/pasien';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-isi-profil',
  templateUrl: 'isi-profil.html',
})
export class IsiProfilPage {

  pasien = {} as Pasien;
  member_id: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public data: Data,
    public http:Http,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController
    ) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad IsiProfilPage');
  }

  ionViewWillEnter() {
    this.data.getDataPasien().then((data) => {
      this.pasien.member_id = data.member_id;
      this.pasien.telepon = data.telepon;
    })
  }

  updateData()
  {
      let loading = this.loadCtrl.create({
        content: 'memuat..'
      });

    loading.present();

      let input = JSON.stringify({
        member_id: this.pasien.member_id,
        nama_pasien: this.pasien.nama_pasien,
        tempat_lahir: this.pasien.tempat_lahir,
        tanggal_lahir: this.pasien.tanggal_lahir,
        jenis_kelamin: this.pasien.jenis_kelamin,
        alamat: this.pasien.alamat
      });

      console.log(input);
      this.http.post(this.data.BASE_URL+"/createpasien.php", input).subscribe(data => {
        let response = data.json();
      console.log(response);
	    if(response.status=="200"){
          // this.data.login(response.data);
          loading.dismiss();
          this.data.logout();
          //magical row for soting locall data
          this.data.login(response.data, 'pasien');

          this.navCtrl.setRoot(TabsPage);
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
