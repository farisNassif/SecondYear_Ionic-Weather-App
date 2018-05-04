import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
//Used for different county pages. My intent was to have the one page and have the user select the county and have that page change
//but since in the brief multiple pages were to be incorperated I thought I would have different county pages.
import { HomePage } from '../home/home';
import { DublinPage } from '../dublin/dublin';
import { CorkPage } from '../cork/cork';

@Component({
  selector: 'page-donegal',
  templateUrl: 'donegal.html',
})
export class DonegalPage {
  weather : any;
  forecast : any;
  myStatus : string;
  constructor(public navCtrl: NavController,public weatherProv: WeatherProvider, public navParams: NavParams) {
  }
    //Used for Page Navigation
    openHome() {
      this.navCtrl.push(HomePage);
      }
    openDublin() {
      this.navCtrl.push(DublinPage);
      }
    openCork() {
      this.navCtrl.push(CorkPage);
      }

    change(value){
      if (value ==='1') {
        this.openDublin()
      };
      if (value ==='2') {
         this.openHome()
      };
      if (value ==='3') {
       this.openCork()
      };
     }
  ionViewDidLoad() {
   //Used for importing weather data (Statistics)
   this.weatherProv.getWeatherDonegal().subscribe(weather => {
     this.weather = weather.current_observation;
   });
   //Used to display the three day forecast part of the app
    this.weatherProv.getForecastDonegal().subscribe(forecast => {
     this.forecast = forecast.forecast.txt_forecast.forecastday;
   });  
  }

}
