import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { ProfilPasienPage } from '../profil-pasien/profil-pasien'
import { AntrianPage } from '../antrian/antrian';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AntrianPage;
  tab3Root = ProfilPasienPage;
}
