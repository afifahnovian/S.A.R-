import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DaftarPage } from '../pages/daftar/daftar';
import { ProfilPasienPage } from '../pages/profil-pasien/profil-pasien';
import { SettingPage } from '../pages/setting/setting';
import { Login1Page } from '../pages/login1/login1';
import { DataDiriPage } from '../pages/data-diri/data-diri';
import { PoliklinikPage } from '../pages/poliklinik/poliklinik';
import { KamarPage } from '../pages/kamar/kamar';
import { GantialamatPage } from '../pages/gantialamat/gantialamat';
import { GantitelponPage } from '../pages/gantitelpon/gantitelpon';
import { JadwalPage } from '../pages/jadwal/jadwal';
import { AntrianPage } from '../pages/antrian/antrian';
import { RiwayatPage } from '../pages/riwayat/riwayat';


import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { Data } from '../providers/data';
import { IsiProfilPage } from '../pages/isi-profil/isi-profil';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    RiwayatPage,
    DaftarPage,
    ProfilPasienPage,
    SettingPage,
    IsiProfilPage,
    Login1Page,
    DataDiriPage,
    PoliklinikPage,
    KamarPage,
    GantialamatPage,
    JadwalPage,
    GantitelponPage,
    AntrianPage
    // Onboard1Page
  ],
  imports: [
    BrowserModule,
    HttpModule,
    // BrowserAnimationsModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    RiwayatPage,
    TabsPage,
    DaftarPage,
    ProfilPasienPage,
    SettingPage,
    IsiProfilPage,
    Login1Page,
    DataDiriPage,
    PoliklinikPage,
    KamarPage,
    GantialamatPage,
    JadwalPage,
    GantitelponPage,
    AntrianPage
    // Onboard1Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Data
  ]
})
export class AppModule {}
