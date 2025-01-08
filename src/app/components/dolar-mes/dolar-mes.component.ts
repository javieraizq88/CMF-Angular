import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CmfApiService } from 'src/app/services/cmf-api.service';

@Component({
  selector: 'app-dolar-mes',
  templateUrl: './dolar-mes.component.html',
  styleUrls: ['./dolar-mes.component.css']
})
export class DolarMesComponent implements OnInit {
  @Input() tituloCardDolar: string = "Dolar"
  dolarData: any[] = [];  // Array para almacenar todos los datos del dolar
  sortedData: any[] = [];
  sortAsc: boolean = true;
    // Definir las columnas para la tabla
    displayedColumns: string[] = ['fecha', 'valor', 'detalle'];
    
  constructor(private apiService: CmfApiService, private router: Router) {}
  ngOnInit(): void {
    this.apiService.getDolarMes().subscribe((data: any) => {
      console.log(data.Dolares)
      this.dolarData = data.Dolares;
      this.sortedData = [...this.dolarData];
    });
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

  goToHome() {
    this.router.navigate(['/']);
  }
}
