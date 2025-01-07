import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CmfApiService } from 'src/app/services/cmf-api.service';

@Component({
  selector: 'app-utm',
  templateUrl: './utm.component.html',
  styleUrls: ['./utm.component.css']
})
export class UtmComponent implements OnInit {
  utmData: any[] = [];

  constructor(
    private apiService: CmfApiService, 
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.apiService.getUTM().subscribe({
      next: (data) => {
         console.log('Datos del UTM:', data.UTMs );
        this.utmData = data.UTMs;
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
