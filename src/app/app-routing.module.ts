import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DolarMesComponent } from './components/dolar-mes/dolar-mes.component';


const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent 
  },  
  { 
    path: 'dolar', 
    component: DolarMesComponent 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }