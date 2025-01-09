import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CmfApiService } from 'src/app/services/cmf-api.service';

@Component({
  selector: 'app-utm-hoy',
  templateUrl: './utm-hoy.component.html',
  styleUrls: ['./utm-hoy.component.css']
})
export class UtmHoyComponent {
  @Input() tituloCard: string = "Unidad Tributaria Mensual (UTM)"

  constructor (
    private apiService: CmfApiService, 
    private router: Router
  ) {}


  goToHome() {
    this.router.navigate(['/']);
  }

}

