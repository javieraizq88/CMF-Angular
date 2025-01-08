import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CmfApiService } from 'src/app/services/cmf-api.service';

@Component({
  selector: 'app-euro-hoy',
  templateUrl: './euro-hoy.component.html',
  styleUrls: ['./euro-hoy.component.css']
})
export class EuroHoyComponent implements OnInit {
  @Input() tituloCard: string = "Euro"
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