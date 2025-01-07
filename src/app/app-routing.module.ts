import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DolarMesComponent } from './components/dolar-mes/dolar-mes.component';
import { EuroMesComponent } from './components/euro-mes/euro-mes.component';
import { TmcMesComponent } from './components/tmc-mes/tmc-mes.component';


const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent 
  },  
  { 
    path: 'dolar', 
    component: DolarMesComponent 
  },
  { 
    path: 'euro', 
    component: EuroMesComponent 
  },
  { 
    path: 'tmc', 
    component: TmcMesComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }