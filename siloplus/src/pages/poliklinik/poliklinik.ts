import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data';
import { Http } from '@angular/http';
/**
 * Generated class for the PoliklinikPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-poliklinik',
  templateUrl: 'poliklinik.html',
})
export class PoliklinikPage {

  poliklinik : any;
  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public data: Data,
  	public http: Http
  	) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PoliklinikPage');
  }

  ionViewWillEnter() {
  	this.getDataPoli();
  }

  getDataPoli(){
  	this.http.get(this.data.BASE_URL+"/read_poliklinik.php").subscribe(data => {
      let response = data.json();
      console.log(response);
      if(response.status=="200"){
        this.poliklinik = response.data;
      }
    });
  }


}
