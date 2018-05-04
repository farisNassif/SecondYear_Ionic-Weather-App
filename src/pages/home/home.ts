import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
//Used for different county pages. My intent was to have the one page and have the user select the county and have that page change
//but since in the brief multiple pages were to be incorperated I thought I would have different county pages.
import { CorkPage } from '../cork/cork';
import { DublinPage } from '../dublin/dublin';
import { DonegalPage } from '../donegal/donegal';
//Imported for Data Persistance Use
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  weather : any;
  forecast : any;
  myStatus : string;
  value : string;
  constructor(public navCtrl: NavController,public weatherProv: WeatherProvider, private storage: Storage, public navParams: NavParams) {
  }

  //Used for Page Navigation
  openCork() {
    this.navCtrl.push(CorkPage);
    }
  openDublin() {
    this.navCtrl.push(DublinPage);
    }
  openDonegal() {
    this.navCtrl.push(DonegalPage);
    }
  //Called to Navigate through County
  change(value){
     if (value ==='1') {
       this.openCork()
     };
     if (value ==='2') {
       this.openDublin()
     };
     if (value ==='3') {
      this.openDonegal()
     };
    }

  ionViewDidLoad(){
    //Used for importing weather data (Statistics)
    this.weatherProv.getWeather().subscribe(weather => {
      this.weather = weather.current_observation;
    });
    //Used to display the three day forecast part of the app
    this.weatherProv.getForecast().subscribe(forecast => {
      this.forecast = forecast.forecast.txt_forecast.forecastday;
    });  
  }
    //Used for storage 
    updateStatus(){
      this.navCtrl.push("StatusPage");
     }
    ionViewWillEnter(){
      this.storage.get("myStatus")
    .then((data) =>
    {
      this.myStatus = data;
    })
    .catch((err) => {
      alert("Error accessing Storage")
    })
   }  
 }

