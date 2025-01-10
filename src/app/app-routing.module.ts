import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UfMesComponent } from './home/components/uf/uf-mes/uf-mes.component';
import { HomeComponent } from './home/pages/home.component';
import { DolarMesComponent } from './home/components/dolar/dolar-mes/dolar-mes.component';
import { DolarHoyComponent } from './home/components/dolar/dolar-hoy/dolar-hoy.component';
import { EuroHoyComponent } from './home/components/euro/euro-hoy/euro-hoy.component';
import { EuroMesComponent } from './home/components/euro/euro-mes/euro-mes.component';
import { UfHoyComponent } from './home/components/uf/uf-hoy/uf-hoy.component';
import { IpcAnualComponent } from './home/components/ipc/ipc-anual/ipc-anual.component';
import { IpcHoyComponent } from './home/components/ipc/ipc-hoy/ipc-hoy.component';
import { UtmAnualComponent } from './home/components/utm/utm-anual/utm-anual.component';
import { UtmHoyComponent } from './home/components/utm/utm-hoy/utm-hoy.component';


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
  // TODO cuando no existe la ruta
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }