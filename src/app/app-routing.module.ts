import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UfMesComponent } from './components/uf/uf-mes/uf-mes.component';
import { HomeComponent } from './components/home/pages/home.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { DolarMesComponent } from './components/dolar/dolar-mes/dolar-mes.component';
import { DolarHoyComponent } from './components/dolar/dolar-hoy/dolar-hoy.component';
import { EuroHoyComponent } from './components/euro/euro-hoy/euro-hoy.component';
import { EuroMesComponent } from './components/euro/euro-mes/euro-mes.component';
import { UfHoyComponent } from './components/uf/uf-hoy/uf-hoy.component';
import { IpcAnualComponent } from './components/ipc/ipc-anual/ipc-anual.component';
import { IpcHoyComponent } from './components/ipc/ipc-hoy/ipc-hoy.component';
import { UtmAnualComponent } from './components/utm/utm-anual/utm-anual.component';
import { UtmHoyComponent } from './components/utm/utm-hoy/utm-hoy.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dolar', component: DolarMesComponent },
  { path: 'dolar-hoy', component: DolarHoyComponent },
  { path: 'euro', component: EuroMesComponent },
  { path: 'euro-hoy', component: EuroHoyComponent },
  { path: 'uf', component: UfMesComponent },
  { path: 'uf-hoy', component: UfHoyComponent },
  { path: 'ipc', component: IpcAnualComponent },
  { path: 'ipc-hoy', component: IpcHoyComponent },
  { path: 'utm', component: UtmAnualComponent },
  { path: 'utm-hoy', component: UtmHoyComponent },
  { path: 'tabla', component: TablaComponent },
  // TODO cuando no existe la ruta
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }