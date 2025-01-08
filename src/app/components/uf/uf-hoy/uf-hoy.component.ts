import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CmfApiService } from 'src/app/services/cmf-api.service';

@Component({
  selector: 'app-uf-hoy',
  templateUrl: './uf-hoy.component.html',
  styleUrls: ['./uf-hoy.component.css']
})
export class UfHoyComponent  implements OnInit {
  @Input() tituloCard: string = "Unidad de Fomento (UF)"
  ufData: any[] = [];  // Array para almacenar todos los datos del euro
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
