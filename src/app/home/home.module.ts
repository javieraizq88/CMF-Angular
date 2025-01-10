import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DolarMesComponent } from './components/dolar/dolar-mes/dolar-mes.component';
import { DolarHoyComponent } from './components/dolar/dolar-hoy/dolar-hoy.component';
import { IpcHoyComponent } from './components/ipc/ipc-hoy/ipc-hoy.component';
import { IpcAnualComponent } from './components/ipc/ipc-anual/ipc-anual.component';
import { EuroMesComponent } from './components/euro/euro-mes/euro-mes.component';
import { EuroHoyComponent } from './components/euro/euro-hoy/euro-hoy.component';
import { UfHoyComponent } from './components/uf/uf-hoy/uf-hoy.component';
import { UfMesComponent } from './components/uf/uf-mes/uf-mes.component';
import { UtmAnualComponent } from './components/utm/utm-anual/utm-anual.component';
import { UtmHoyComponent } from './components/utm/utm-hoy/utm-hoy.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  exports: [
    DolarMesComponent,
    DolarHoyComponent,
    IpcAnualComponent,
    IpcHoyComponent,
    EuroHoyComponent,
    EuroMesComponent,
    UfMesComponent,
    UfHoyComponent,
    UtmHoyComponent,
    UtmAnualComponent
  ]
})
export class HomeModule { }
