import { Component , ViewChild,trigger,transition,style,animate,keyframes,state } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { HomePage } from '../home/home';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MethodCall } from '@angular/compiler';

@Component({
  selector: 'page-onboard1',
  templateUrl: 'onboard1.html',
  animations : [
      trigger('bounce',[
        state('*',style({
            transform :'translateX(0)'
        })),
        transition('* => rightSwipe', animate ('700ms ease-out',keyframes([
          style({transform : 'translateX(0)',offset : 0}),
          style({transform : 'translateX(-65px)',offset : .3}),
          style({transform : 'translateX(0)',offset : 1}), 
        ]))),
        transition('* => leftSwipe', animate ('700ms ease-out',keyframes([
          style({transform : 'translateX(0)',offset : 0}),
          style({transform : 'translateX(65px)',offset : .3}),
          style({transform : 'translateX(0)',offset : 1}), 
        ])))
      ])

  ]
})
export class Onboard1Page {
  @ViewChild(Slides) slides: Slides;
  skipMsg : string = "Skip";
  state : string = 'x';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Onboard1Page');
  }

  skip(){ // jika ditekan tombol skip, direct to home 
    this.navCtrl.push(HomePage);
  }

  slideChanged(){ // pas slide terakhir
    if(this.slides.isEnd())
      this.skipMsg = " Ok, saya mengerti";
  }

  slideMoved(){ // perpindahan slide
    if(this.slides.getActiveIndex() >= this.slides.getPreviousIndex())
      this.state = 'rightSwipe';
    else
      this.state = 'leftSwipe';
  }
 
  animationDone(){
    this.state = 'x';
  }

}
