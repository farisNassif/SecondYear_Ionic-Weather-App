import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//App imported to attempt to fix 'Error: Uncaught (in promise): navigation stack needs at least one root page'
import { App } from 'ionic-angular/components/app/app';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(public platform: Platform, app: App, statusBar: StatusBar, splashScreen: SplashScreen) {
      //I attempted to fix 'Error: Uncaught (in promise): navigation stack needs at least one root page' with this code but was unable to
      this.platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      this.platform.registerBackButtonAction(() => {
        app.navPop();
      })
    });
  }
}

