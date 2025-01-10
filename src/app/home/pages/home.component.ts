
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  @Input() titulo: string = "Indicadores"
  @Input() tituloCardDolar: string = "Dolar (USD o $)" 
  @Input() tituloCardEuro: string = "Euro (EUR o €)"

  @Input() tituloCardUTM: string = "Unidad Tributaria Mensual (UTM)"
  @Input() tituloCardUF: string = "Unidad de Fomento (UF)"
  @Input() tituloCardIPC: string = "Indice de Precios al Consumidor (IPC)"
  @Input() textoBotonMes: string = "últimos 30 días"
  @Input() textoBotonYear: string = "últimos 12 meses"
  
  @Input() textoDescripcion: string = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate quas repellendus voluptas"

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToDolar() {this.router.navigate(['/dolar'])}
  goToDolarHoy() {this.router.navigate(['/dolar-hoy'])}
  goToEuro() {this.router.navigate(['/euro'])}
  goToEuroHoy() {this.router.navigate(['/euro-hoy'])}
  goToUf() {this.router.navigate(['/uf'])}
  goToUfHoy() {this.router.navigate(['/uf-hoy'])}
  goToIPC(){this.router.navigate(['/ipc']);}
  goToIPCHoy(){this.router.navigate(['/ipc-hoy']);}
  goToUTM(){this.router.navigate(['/utm']);}
  goToUTMHoy(){this.router.navigate(['/utm-hoy']);}

}