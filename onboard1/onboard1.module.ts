import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Onboard1Page } from './onboard1';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePage } from '../home/home';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    Onboard1Page,
    HomePage
  ],
  imports: [
    IonicPageModule.forChild(Onboard1Page),
    BrowserAnimationsModule,
    BrowserModule
  ],
})
export class Onboard1PageModule {}
