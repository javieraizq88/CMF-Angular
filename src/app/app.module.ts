
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { DolarMesComponent } from './components/dolar-mes/dolar-mes.component';
import { EuroMesComponent } from './components/euro-mes/euro-mes.component';
import { TmcMesComponent } from './components/tmc-mes/tmc-mes.component';
import { UfMesComponent } from './components/uf-mes/uf-mes.component';
import { IpcComponent } from './components/ipc/ipc.component';
import { UtmComponent } from './components/utm/utm.component'; 
import { HomeComponent } from './components/home/pages/home.component';
import { OrderPipe } from './pipes/order.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { TablaComponent } from './components/tabla/tabla.component';
import { CmfApiService } from './services/cmf-api.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DolarMesComponent,
    EuroMesComponent,
    TmcMesComponent,
    UfMesComponent,
    IpcComponent,
    UtmComponent,
    TablaComponent,
    
    OrderPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    
  ],
  providers: [CmfApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
