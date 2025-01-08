
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  @Input() titulo: string = "Indcadores"
  @Input() tituloCardDolar: string = "Dolar"
  @Input() tituloCardEuro: string = "Euro"
  @Input() tituloCardTMC: string = "Tasa de Interés Máxima Convencional (TMC)"
  @Input() tituloCardUTM: string = "Unidad Tributaria Mensual (UTM)"
  @Input() tituloCardUF: string = "Unidad de Fomento (UF)"
  @Input() tituloCardIPC: string = "Indice de Precios al Consumidor (IPC)"

  
  @Input() textoDescripcion: string = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate quas repellendus voluptas accusantium magnam libero neque atque"

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToDolar() {
    this.router.navigate(['/dolar']);
  }
  goToDolarHoy() {
    this.router.navigate(['/dolar-hoy']);
  }
  goToEuro(){
    this.router.navigate(['/euro']);
  }
  goToEuroHoy(){
    this.router.navigate(['/euro-hoy']);
  }
  goToTMC(){
    this.router.navigate(['/tmc']);
  }
  goToTMCHoy(){
    this.router.navigate(['/tmc-hoy']);
  }
  goToUf(){
    this.router.navigate(['/uf']);
  }
  goToIPC(){
    this.router.navigate(['/ipc']);
  }
  goToUTM(){
    this.router.navigate(['/utm']);
  }

}