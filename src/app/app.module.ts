import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDZ90Hlfr0a-rST9GUjbT3UVC2Sw0uQCtw",
      authDomain: "patthai-7c322.firebaseapp.com",
      projectId: "patthai-7c322",
      storageBucket: "patthai-7c322.appspot.com",
      messagingSenderId: "329703723376",
      appId: "1:329703723376:web:af32cf2cb6fa1ed2d7bfb5"
    }),
    AngularFirestoreModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
