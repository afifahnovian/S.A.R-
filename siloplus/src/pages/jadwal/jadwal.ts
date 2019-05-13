import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { Http } from '@angular/http';

/**
 * Generated class for the JadwalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jadwal',
  templateUrl: 'jadwal.html',
})

export class JadwalPage {


	jadwal: any;
  myDate = new Date();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    public data: Data,
    public http: Http
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JadwalPage');
  }

  ionViewWillEnter(){
  	this.getJadwal();
  }

  getJadwal(){
  	this.http.get(this.data.BASE_URL+"/jadwal.php").subscribe(data => {
      let response = data.json();
      console.log(response);
      if(response.status=="200"){
        this.jadwal = response.data;
      }
    });
  }


}
