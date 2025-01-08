import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CmfApiService } from 'src/app/services/cmf-api.service';

@Component({
  selector: 'app-tmc-hoy',
  templateUrl: './tmc-hoy.component.html',
  styleUrls: ['./tmc-hoy.component.css']
})
export class TmcHoyComponent implements OnInit {
  @Input() tituloCard: string = "Tasa de Interés Máxima Convencional (TMC)"
  tmcData: any[] = [];  // Array para almacenar todos los datos del euro
  displayedColumns: string[] = ['fecha', 'valor'];   // columnas para la tabla
  sortedData: any[] = [];
  sortAsc: boolean = true;

  constructor (
    private apiService: CmfApiService, 
    private router: Router
  ) {}

  ngOnInit(): void {

  }

  goToHome() {
    this.router.navigate(['/']);
  }



}