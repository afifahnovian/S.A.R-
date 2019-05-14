import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({ 
  selector: 'page-jadwal',
  templateUrl: 'jadwal.html',
})
export class JadwalPage {
  myDate = new Date();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.getFormattedDate()
  }
  // getFormattedDate(){
  //   var dateObj = new Date()
  //   var year = dateObj.getFullYear().toString()
  //   var month = dateObj.getMonth().toString()
  //   var date = dateObj.getDate().toString()
  //   this.formattedDate = year+'/'+ month +'/'+date ;
  // } 
  ionViewDidLoad() {
    console.log('ionViewDidLoad JadwalPage')}}
