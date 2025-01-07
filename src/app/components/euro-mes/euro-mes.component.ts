import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CmfApiService } from 'src/app/services/cmf-api.service';

@Component({
  selector: 'app-euro-mes',
  templateUrl: './euro-mes.component.html',
  styleUrls: ['./euro-mes.component.css']
})
export class EuroMesComponent implements OnInit {
  euroData: any[] = [];  // Array para almacenar todos los datos del euro
  @Input() tituloCardEuro: string = "Euro"

  constructor(private apiService: CmfApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiService.getEuroMes().subscribe({
      next: (data) => {
        // console.log('Datos del euro:', data );
        this.euroData = data.Euros;
      },
      error: (err) => {
        console.error('Error en la solicitud - DolEuroar:', err);
      }
    });
  }

  goToHome() {
    this.router.navigate(['/']);
  }
}
