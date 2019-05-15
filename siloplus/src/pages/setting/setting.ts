import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, App } from 'ionic-angular';
// import { DataProvider } from '../../providers/data/data';
import { GantisandiPage } from '../gantisandi/gantisandi';
import { GantialamatPage } from '../gantialamat/gantialamat';
import { GantitelponPage } from '../gantitelpon/gantitelpon';
import { DaftarPage } from '../daftar/daftar';
import { Data } from '../../providers/data';
import { Onboard1Page } from '../onboard1/onboard1';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})

export class SettingPage {
  settinglists:any;
  constructor(
    public navCtrl: NavController,
    public data: Data,
    public alertCtrl: AlertController,
    public app:App
    ) {
  }
  gotogantisandi(){
    this.navCtrl.push(GantisandiPage)
  }
  gotogantinotelp(){
    this.navCtrl.push(GantitelponPage)
  }
  gotogantialamat(){
    this.navCtrl.push(GantialamatPage)
  }

  logout(){
      let confirm = this.alertCtrl.create({
        title: 'Keluar',
        message: 'Mau keluar?',
        buttons: [
          {
            text: 'Cancel',
            handler: () => {
              console.log('Disagree clicked');
            }
          },
          {
            text: 'Sign Out',
            handler: () => {
              console.log('Agree clicked');
              this.data.logout();  //hapus storage cache local
              this.app.getRootNav().setRoot(DaftarPage);
            }
          }
        ]
      });
      confirm.present();
  }


}
