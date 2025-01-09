import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CmfApiService } from 'src/app/services/cmf-api.service';

@Component({
  selector: 'app-dolar-mes',
  templateUrl: './dolar-mes.component.html',
  styleUrls: ['./dolar-mes.component.css']
})
export class DolarMesComponent implements OnInit {
  @Input() tituloCard: string = "Dolar";
  dolarData: any[] = [];  // Array para almacenar todos los datos del dólar
  displayedColumns: string[] = ['fecha', 'valor'];  // Columnas para la tabla
  sortedData: any[] = [];
  sortAsc: boolean = true;

  constructor (
    private apiService: CmfApiService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.apiService.getDolar30Days().subscribe((data: any) => {
       // console.log('Datos del dolar:', data );
        this.dolarData = data.Dolares;
        this.sortedData = [...this.dolarData];
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
