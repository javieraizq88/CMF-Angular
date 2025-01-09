
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UfMesComponent } from './components/uf/uf-mes/uf-mes.component';
import { HomeComponent } from './components/home/pages/home.component';
import { OrderPipe } from './pipes/order.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { TablaComponent } from './components/tabla/tabla.component';
import { CmfApiService } from './services/cmf-api.service';
import { DolarMesComponent } from './components/dolar/dolar-mes/dolar-mes.component';
import { DolarHoyComponent } from './components/dolar/dolar-hoy/dolar-hoy.component';
import { EuroMesComponent } from './components/euro/euro-mes/euro-mes.component';
import { EuroHoyComponent } from './components/euro/euro-hoy/euro-hoy.component';
import { IpcAnualComponent } from './components/ipc/ipc-anual/ipc-anual.component';
import { IpcHoyComponent } from './components/ipc/ipc-hoy/ipc-hoy.component';
import { UfHoyComponent } from './components/uf/uf-hoy/uf-hoy.component';
import { UtmHoyComponent } from './components/utm/utm-hoy/utm-hoy.component';
import { UtmAnualComponent } from './components/utm/utm-anual/utm-anual.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TablaComponent,
    OrderPipe,
    DolarMesComponent,
    DolarHoyComponent,
    EuroHoyComponent,
    EuroMesComponent,
    IpcAnualComponent,
    IpcHoyComponent,
    UfMesComponent,
    UfHoyComponent,
    UtmHoyComponent,
    UtmAnualComponent

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
