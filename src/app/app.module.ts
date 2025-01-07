
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { DolarMesComponent } from './components/dolar-mes/dolar-mes.component';
import { EuroMesComponent } from './components/euro-mes/euro-mes.component';
import { TmcMesComponent } from './components/tmc-mes/tmc-mes.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DolarMesComponent,
    EuroMesComponent,
    TmcMesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
