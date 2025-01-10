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
  ipcData: any[] = [];  // Array para almacenar todos los datos del IPC
  ipcValue: string = 'Cargando...'; // Valor por defecto
  currentDate: string = "";

  constructor (
    private apiService: CmfApiService, 
    private router: Router
  ) {}

  goToHome() {
    this.router.navigate(['/']);
  }
  ngOnInit(): void {
    this.apiService.getIpcActual().subscribe(
      (data: any) => {
       // console.log('Datos del IPC:', data.IPCs );
        this.ipcValue = data['IPCs'][0]['Valor'];
      },
      // En caso de error
      (error) => {
        console.error('Error al obtener el valor del IPC', error);
        this.ipcValue = 'Error al obtener el valor';
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
}
