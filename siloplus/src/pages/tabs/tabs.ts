import { Component } from '@angular/core';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ProfilPasienPage } from '../profil-pasien/profil-pasien';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab3Root = ContactPage;
  tab4Root = ProfilPasienPage;

}
