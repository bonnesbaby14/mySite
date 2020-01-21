import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from './components/home/home.component';
import { WhoiamComponent } from './components/whoiam/whoiam.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';




@NgModule({

  declarations: [
    //se declaran los componentes creados por el desarrollador
    AppComponent,

    NavbarComponent,
    HomeComponent,
    WhoiamComponent,
    TechnologiesComponent,

  ],
  imports: [
    //se  cargan los modulos de la aplicacion
    BrowserModule
  ],
  providers: [
    //aqui se cargan los servicios 
  ],

  //es el primer componente el cual se abrira el modulo
  bootstrap: [AppComponent]
})
export class AppModule { }
