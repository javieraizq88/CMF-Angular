import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CmfApiService } from 'src/app/services/cmf-api.service';

@Component({
  selector: 'app-utm-anual',
  templateUrl: './utm-anual.component.html',
  styleUrls: ['./utm-anual.component.css']
})
export class UtmAnualComponent implements OnInit {
  @Input() tituloCard: string = "Unidad Tributaria Mensual (UTM)"
  utmData: any[] = [];  // Array para almacenar todos los datos del euro
  displayedColumns: string[] = ['fecha', 'valor'];   // columnas para la tabla
  sortedData: any[] = [];
  sortAsc: boolean = true;

  constructor (
    private apiService: CmfApiService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.apiService.getUtm12Months().subscribe((data: any) => {
        // console.log('Datos del euro:', data );
        this.utmData = data.UTMs;
        this.sortedData = [...this.utmData];
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
