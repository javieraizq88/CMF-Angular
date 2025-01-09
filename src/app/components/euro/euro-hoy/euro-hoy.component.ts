import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CmfApiService } from 'src/app/services/cmf-api.service';

@Component({
  selector: 'app-euro-hoy',
  templateUrl: './euro-hoy.component.html',
  styleUrls: ['./euro-hoy.component.css']
})
export class EuroHoyComponent implements OnInit {
  @Input() tituloCard: string = "Euro"
  euroData: any[] = [];  // Array para almacenar todos los datos del euro
  displayedColumns: string[] = ['fecha', 'valor'];   // columnas para la tabla
  euroValue: string = 'Cargando...'; // Valor por defecto
  currentDate: string = "";

  constructor (
    private apiService: CmfApiService, 
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.apiService.getEuroActual().subscribe(
      (data: any) => {
       // console.log('Datos del Euro:', data );
        this.euroValue = data['Euros'][0]['Valor'];
      },
      // En caso de error
      (error) => {
        console.error('Error al obtener el valor del euro', error);
        this.euroValue = 'Error al obtener el valor';
      }
    );

    this.currentDate = this.getCurrentDateFormatted();
  }

  // Función para obtener la fecha en formato YYYY/MM/DD
  getCurrentDateFormatted(): string {
    const currentDate = new Date();        
    const year = currentDate.getFullYear(); // Obtener el año
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Obtener el mes (añadir 1 porque getMonth() empieza desde 0) y añadir un 0 si es necesario
    const day = currentDate.getDate().toString().padStart(2, '0'); // Obtener el día y añadir un 0 si es necesario
        
    return `${year}-${month}-${day}`; // Formatear la fecha
  }

  goToHome() {
    this.router.navigate(['/']);
  }

}