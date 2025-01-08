import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CmfApiService } from 'src/app/services/cmf-api.service';

@Component({
  selector: 'app-uf-mes',
  templateUrl: './uf-mes.component.html',
  styleUrls: ['./uf-mes.component.css']
})
export class UfMesComponent implements OnInit {
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
    this.apiService.getUFMes().subscribe((data: any) => {
        // console.log('Datos del euro:', data );
        this.ufData = data.UFs;
        this.sortedData = [...this.ufData];
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