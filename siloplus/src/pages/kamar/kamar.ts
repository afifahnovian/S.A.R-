import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data';
import { Http } from '@angular/http';
/**
 * Generated class for the KamarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kamar',
  templateUrl: 'kamar.html',
})
export class KamarPage {

  kamar : any;
  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public data: Data,
  	public http: Http
  	) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KamarPage');
  }

  ionViewWillEnter() {
  	this.getDataKamar();
  }

  getDataKamar(){
  	this.http.get(this.data.BASE_URL+"/read_kamar.php").subscribe(data => {
      let response = data.json();
      console.log(response);
      if(response.status=="200"){
        this.kamar = response.data;
      }
    });
  }

}
