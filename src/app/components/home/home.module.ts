import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DolarMesComponent } from '../dolar-mes/dolar-mes.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DolarMesComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ]
})
export class HomeModule { }
