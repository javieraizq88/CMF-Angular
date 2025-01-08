import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CmfApiService } from 'src/app/services/cmf-api.service';

@Component({
  selector: 'app-dolar-hoy',
  templateUrl: './dolar-hoy.component.html',
  styleUrls: ['./dolar-hoy.component.css']
})
export class DolarHoyComponent implements OnInit {
  @Input() tituloCard: string = "Dolar"
  dolarData: any[] = [];  // Array para almacenar todos los datos del euro
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
