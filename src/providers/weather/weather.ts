import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {
  token : string;
  url : string;
  url2 : string;
  corkUrl1 : string;
  corkUrl2 : string;
  dublinUrl1 : string;
  dublinUrl2 : string;
  donegalUrl1 : string;
  donegalUrl2 : string;
  donegal1 : string;
  donegal2 : string;

  constructor(public http: Http) {
    //this.token = '263cabd8eb3091a9';
    //Used for Galway
    this.url = 'http://api.wunderground.com/api/263cabd8eb3091a9/conditions/q/ireland/galway.json';
    this.url2 = 'http://api.wunderground.com/api/263cabd8eb3091a9/forecast/q/ireland/galway.json';
    //Used for Cork
    this.corkUrl1 = 'http://api.wunderground.com/api/263cabd8eb3091a9/conditions/q/ireland/cork.json';
    this.corkUrl2 = 'http://api.wunderground.com/api/263cabd8eb3091a9/forecast/q/ireland/cork.json';
    //Used for Dublin
    this.dublinUrl1 = 'http://api.wunderground.com/api/263cabd8eb3091a9/conditions/q/ireland/dublin.json';
    this.dublinUrl2 = 'http://api.wunderground.com/api/263cabd8eb3091a9/forecast/q/ireland/dublin.json';
    //Used for Donegal
    this.donegal1 = 'http://api.wunderground.com/api/263cabd8eb3091a9/conditions/q/ireland/donegal.json';
    this.donegal2 = 'http://api.wunderground.com/api/263cabd8eb3091a9/forecast/q/ireland/donegal.json';


  }
  //Used for Galway
  getWeather(){ 
    return this.http.get(this.url).map( res => res.json());
  }
  getForecast(){
    return this.http.get(this.url2).map( res => res.json());
  }
  //Used for Cork
  getWeatherCork(){ 
    return this.http.get(this.corkUrl1).map( res => res.json());
  }
  getForecastCork(){
    return this.http.get(this.corkUrl2).map( res => res.json());
  }
  //Used for Dublin
  getWeatherDublin(){ 
    return this.http.get(this.dublinUrl1).map( res => res.json());
  }
  getForecastDublin(){
    return this.http.get(this.dublinUrl2).map( res => res.json());
  }
  //Used for Donegal
  getWeatherDonegal(){ 
    return this.http.get(this.donegal1).map( res => res.json());
  }
  getForecastDonegal(){
    return this.http.get(this.donegal2).map( res => res.json());
  }  

}
