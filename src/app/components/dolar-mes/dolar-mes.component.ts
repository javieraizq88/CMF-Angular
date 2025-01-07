import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CmfApiService } from 'src/app/services/cmf-api.service';

@Component({
  selector: 'app-dolar-mes',
  templateUrl: './dolar-mes.component.html',
  styleUrls: ['./dolar-mes.component.css']
})
export class DolarMesComponent implements OnInit {
  dolarData: any[] = [];  // Array para almacenar todos los datos del dolar

  constructor(private apiService: CmfApiService, private router: Router) {}
  
  ngOnInit(): void {
    this.apiService.getDolarMes().subscribe({
      next: (data) => {
        // console.log('Datos del Dólar:', data );
        this.dolarData = data.Dolares;
      },
      error: (err) => {
        console.error('Error en la solicitud - Dolar:', err);
      }
    });
  }

  goToHome() {
    this.router.navigate(['/']);
  }
}
