import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data';
import { Http } from '@angular/http';
/**
 * Generated class for the ProfildokterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profildokter',
  templateUrl: 'profildokter.html',
})
export class ProfildokterPage {


	dokter: any;


  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public data: Data,
  	public http: Http) {
  	this.dokter = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfildokterPage');
  }

  ionViewWillEnter(){
  	console.log(this.dokter.nama_dokter);
  	this.getdokter();
  }

  getdokter(){
  	let input = JSON.stringify({
        nama_dokter: this.dokter.nama_dokter
    });
  	console.log(input);

  	this.http.post(this.data.BASE_URL+"/read_dokter.php", input).subscribe(data => {
      let response = data.json();
      console.log(response);
      if(response.status=="200"){
        this.dokter = response.data;
      }
    });
  }



}
