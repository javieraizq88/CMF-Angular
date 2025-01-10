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
  sortAsc: boolean = true;

  constructor (
    private apiService: CmfApiService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.apiService.getDolar30Days().subscribe((data: any) => {
       // console.log('Datos del dolar:', data );
        this.dolarData = data.Dolares;
    });
  }

  goToHome() {
    this.router.navigate(['/']);
  }



}
