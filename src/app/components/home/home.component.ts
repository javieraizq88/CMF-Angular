
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CmfApiService } from 'src/app/services/cmf-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  @Input() titulo: string = "Indcadores"
  
  utmData: any[] = []; 

  constructor(
    private apiService: CmfApiService,
    private router: Router

  ) { }
  ngOnInit(): void {


    this.apiService.getUTMMes().subscribe({
      next: (data) => {
        // console.log('Datos del UTM:', data);
        this.utmData = data.UTMs
      },
      error: (err) => {
        console.error('Error en la solicitud:', err);
      }
    });
  }


  goToDolar() {
    this.router.navigate(['/dolar']);
  }

  goToEuro(){
    this.router.navigate(['/euro']);
  }

  goToTMC(){
    this.router.navigate(['/tmc']);
  }
  goToUf(){
    this.router.navigate(['/uf']);
  }

  goToIPC(){
    this.router.navigate(['/ipc']);
  }
}
