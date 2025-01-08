import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CmfApiService } from 'src/app/services/cmf-api.service';

@Component({
  selector: 'app-tmc-mes',
  templateUrl: './tmc-mes.component.html',
  styleUrls: ['./tmc-mes.component.css']
})
export class TmcMesComponent implements OnInit {
  @Input() tituloCard: string = "Tasa de Interés Máxima Convencional (TMC)"
  tncData: any[] = [];  // Array para almacenar todos los datos del euro
  displayedColumns: string[] = ['fecha', 'valor'];   // columnas para la tabla
  sortedData: any[] = [];
  sortAsc: boolean = true;

  constructor (
    private apiService: CmfApiService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.apiService.getTMCMes().subscribe((data: any) => {
        // console.log('Datos del euro:', data );
        this.tncData = data.TMCs;
        this.sortedData = [...this.tncData];
    });
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  sortByValue(): void {
    this.sortAsc = !this.sortAsc;
    this.sortedData.sort((a: any, b: any) => {
      if (this.sortAsc) {
        return a.valor - b.valor;
      } else {
        return b.valor - a.valor;
      }
    });
  }

}
