import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Tema5Page } from '../pages/tema5/tema5';
import { Tema6Page } from '../pages/tema6/tema6';
import { Tema7Page } from '../pages/tema7/tema7';
import { Tema8Page } from '../pages/tema8/tema8';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {PhonePipe} from "../pages/tema8/phoneFormat";

@NgModule({
  declarations: [
    MyApp,
    Tema5Page,
    Tema6Page,
    Tema7Page,
    Tema8Page,
    TabsPage,
    PhonePipe,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Tema5Page,
    Tema6Page,
    Tema7Page,
    Tema8Page,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
