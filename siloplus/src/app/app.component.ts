import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Tabs } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { TabsPage } from '../pages/tabs/tabs';
import { DaftarPage } from '../pages/daftar/daftar';
import { Data } from '../providers/data';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage : any;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public data: Data
    ) {
      this.pages = [
        { title: 'login', component: DaftarPage },
        { title: 'profil', component: TabsPage }
      ];

      platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        statusBar.styleDefault();
        splashScreen.hide();
      });

      this.data.isLogin().then((value)=>{
        if(value){
          this.rootPage = TabsPage;
        } else {
           this.rootPage = DaftarPage;
        }
      });

  }


}
