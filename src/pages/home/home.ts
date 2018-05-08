import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, private inAppBrowser: InAppBrowser) {
    const options:InAppBrowserOptions = {
      zoom : 'no'
    };
    const browser = this.inAppBrowser.create('http://beautycareperfumes.com', '_self', options);
    browser.show();
  }
  
}
