import { Component, Input, OnInit } from '@angular/core';
import { CmfApiService } from 'src/app/services/cmf-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
  @Input() titulo: string = "Indcadores"
  dolarData: any[] = [];  // Array para almacenar todos los datos del dolar
  euroData: any[] = []; 
  ipcData: any[] = []; 
  tmcData: any[] = []; 
  ufData: any[] = []; 
  utmData: any[] = []; 

  constructor(private apiService: CmfApiService) { }
  ngOnInit(): void {

    this.apiService.getDolarMes().subscribe({
      next: (data) => {
        // console.log('Datos del Dólar:', data );
        this.dolarData = data.Dolares;
      },
      error: (err) => {
        console.error('Error en la solicitud - Dolar:', err);
      }
    });

    this.apiService.getEuroMes().subscribe({
      next: (data) => {
        // console.log('Datos del Euro:', data);
        this.euroData = data.Euros;
      },
      error: (err) => {
        console.error('Error en la solicitud - Euro:', err);
      }
    });

    this.apiService.getIPCMes().subscribe({
      next: (data) => {
        // console.log('Datos del IPC:', data);
        this.ipcData = data.IPCs;
      },
      error: (err) => {
        console.error('Error en la solicitud - IPC:', err);
      }
    });

    this.apiService.getTMCMes().subscribe({
      next: (data) => {
        // console.log('Datos del TMC:', data);
        this.tmcData = data.TMCs;
      },
      error: (err) => {
        console.error('Error en la solicitud - TMC:', err);
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
}
