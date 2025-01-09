import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CmfApiService } from 'src/app/services/cmf-api.service';

@Component({
  selector: 'app-euro-mes',
  templateUrl: './euro-mes.component.html',
  styleUrls: ['./euro-mes.component.css']
})
export class EuroMesComponent  implements OnInit {
  @Input() tituloCard: string = "Euro"
  euroData: any[] = [];  // Array para almacenar todos los datos del euro
  displayedColumns: string[] = ['fecha', 'valor'];   // columnas para la tabla
  sortedData: any[] = [];
  sortAsc: boolean = true;

  constructor (
    private apiService: CmfApiService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.apiService.getEuro30Days().subscribe((data: any) => {
        // console.log('Datos del euro:', data.Euros );
        this.euroData = data.Euros;
        this.sortedData = [...this.euroData];
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