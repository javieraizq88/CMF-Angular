import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DolarMesComponent } from './components/dolar-mes/dolar-mes.component';
import { EuroMesComponent } from './components/euro-mes/euro-mes.component';
import { TmcMesComponent } from './components/tmc-mes/tmc-mes.component';
import { UfMesComponent } from './components/uf-mes/uf-mes.component';
import { IpcComponent } from './components/ipc/ipc.component';
import { UtmComponent } from './components/utm/utm.component';
import { HomeComponent } from './components/home/pages/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dolar', component: DolarMesComponent },
  { path: 'euro', component: EuroMesComponent },
  { path: 'tmc', component: TmcMesComponent },
  { path: 'uf', component: UfMesComponent },
  { path: 'ipc', component: IpcComponent },
  { path: 'utm', component: UtmComponent },
  // TODO cuando no existe la ruta
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }