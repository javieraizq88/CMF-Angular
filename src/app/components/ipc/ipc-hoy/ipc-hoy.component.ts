import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CmfApiService } from 'src/app/services/cmf-api.service';

@Component({
  selector: 'app-ipc-hoy',
  templateUrl: './ipc-hoy.component.html',
  styleUrls: ['./ipc-hoy.component.css']
})
export class IpcHoyComponent {
  @Input() tituloCard: string = "Indice de Precios al Consumidor (IPC)"

  constructor (
    private apiService: CmfApiService, 
    private router: Router
  ) {}


  goToHome() {
    this.router.navigate(['/']);
  }

}
