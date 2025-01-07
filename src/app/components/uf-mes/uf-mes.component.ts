import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CmfApiService } from 'src/app/services/cmf-api.service';

@Component({
  selector: 'app-uf-mes',
  templateUrl: './uf-mes.component.html',
  styleUrls: ['./uf-mes.component.css']
})
export class UfMesComponent implements OnInit {
  ufData: any[] = [];  
  @Input() tituloCardUF: string = "Unidad de Fomento (UF)"
  
  constructor(private apiService: CmfApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiService.getUFMes().subscribe({
      next: (data) => {
        // console.log('Datos del UF:', data);
        this.ufData = data.UFs
      },
      error: (err) => {
        console.error('Error en la solicitud:', err);
      }
    });
  }

  goToHome() {
    this.router.navigate(['/']);
  }
}
