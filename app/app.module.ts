import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import {MatCardModule} from '@angular/material/card';

const config = {
    apiKey: "AIzaSyDBlf0aEKeVJRGv8Qio6rlI7la6eq7LZHY",
    authDomain: "just-for-you-zesix.firebaseapp.com",
    databaseURL: "https://just-for-you-zesix.firebaseio.com",
    projectId: "just-for-you-zesix",
    storageBucket: "just-for-you-zesix.appspot.com",
    messagingSenderId: "800152061436"
};

@NgModule({
  imports:      [ 
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AppRoutingModule,
    MatCardModule 
    
   
  ],
  declarations: [ AppComponent,HeaderComponent,MenuComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
