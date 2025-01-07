import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CmfApiService } from 'src/app/services/cmf-api.service';

@Component({
  selector: 'app-tmc-mes',
  templateUrl: './tmc-mes.component.html',
  styleUrls: ['./tmc-mes.component.css']
})
export class TmcMesComponent implements OnInit{
  tmcData: any[] = []; 
  @Input() tituloCardTMC: string = "Tasa de Interés Máxima Convencional"

  constructor(
    private apiService: CmfApiService,
    private router: Router
  ){}
  
  ngOnInit(): void {
    this.apiService.getTMCMes().subscribe({
      next: (data) => {
        // console.log('Datos del TMC:', data);
        this.tmcData = data.TMCs;
      },
      error: (err) => {
        console.error('Error en la solicitud - TMC:', err);
      }
    });
  }

  goToHome() {
    this.router.navigate(['/']);
  }

}
