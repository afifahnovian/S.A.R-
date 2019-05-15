import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data';
import { PoliklinikPage } from '../poliklinik/poliklinik';
import { KamarPage } from '../kamar/kamar';
import { JadwalPage } from '../jadwal/jadwal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	constructor(
		public navCtrl: NavController,
		public data:Data
		) {
	}
	ionViewWillEnter() {

	}

	gotoPoliklinikPage(){
		this.navCtrl.push(PoliklinikPage);
	}

	gotoKamarPage(){
		this.navCtrl.push(KamarPage);
	}

	gotoJadwal(){
		this.navCtrl.push(JadwalPage);
	}
}
