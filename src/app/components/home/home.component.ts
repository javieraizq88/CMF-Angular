
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CmfApiService } from 'src/app/services/cmf-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  @Input() titulo: string = "Indcadores"
  
  ipcData: any[] = []; 
  tmcData: any[] = []; 
  ufData: any[] = []; 
  utmData: any[] = []; 

  constructor(
    private apiService: CmfApiService,
    private router: Router

  ) { }
  ngOnInit(): void {

    this.apiService.getIPCMes().subscribe({
      next: (data) => {
        // console.log('Datos del IPC:', data);
        this.ipcData = data.IPCs;
      },
      error: (err) => {
        console.error('Error en la solicitud - IPC:', err);
      }
    });

    this.apiService.getUFMes().subscribe({
      next: (data) => {
        // console.log('Datos del UF:', data);
        this.ufData = data.UFs
      },
      error: (err) => {
        console.error('Error en la solicitud:', err);
      }
    });
    this.apiService.getUTMMes().subscribe({
      next: (data) => {
        // console.log('Datos del UTM:', data);
        this.utmData = data.UTMs
      },
      error: (err) => {
        console.error('Error en la solicitud:', err);
      }
    });
  }


  goToDolar() {
    this.router.navigate(['/dolar']);
  }

  goToEuro(){
    this.router.navigate(['/euro']);
  }

  goToTMC(){
    this.router.navigate(['/tmc']);
  }

}
