import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CmfApiService } from 'src/app/services/cmf-api.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-utm-hoy',
  templateUrl: './utm-hoy.component.html',
  styleUrls: ['./utm-hoy.component.css']
})
export class UtmHoyComponent {
  @Input() tituloCard: string = "UTM"
  utmData: any[] = [];  // Array para almacenar todos los datos de la UTM
  value: string = 'Cargando...'; // Valor por defecto
  currentDate: string = "";
  chart: any; // para almacenar el gráfico

  constructor (
    private apiService: CmfApiService, 
    private router: Router
  ) {}

  goToHome() {
    this.router.navigate(['/']);
  }
  
  ngOnInit(): void {
    // Registrar los elementos necesarios para Chart.js
    Chart.register(...registerables);

    // Obtener el valor actual 
    this.apiService.getUtmActual().subscribe(
      (data: any) => {
       // console.log('Datos de UTM:', data.UTMs );
        this.value = data['UTMs'][0]['Valor'];
      },
      // En caso de error
      (error) => {
        console.error('Error al obtener el valor de UTM', error);
        this.value = 'Error al obtener el valor';
      }
    );

    // Obtener los datos de la UTM de los últimos 12 meses
    this.apiService.getUtm12Months().subscribe(
      (data: any) => {
        const utmData = data['UTMs'];  
      
        const labels = utmData.map((item: any) => item.Fecha); // fecha en formato "YYYY/MM"
        const values = utmData.map((item: any) => item.Valor); // 
      
        // Crear el gráfico
        this.createChart(labels, values);
      },
      (error) => {
        console.error('Error al obtener los datos de la UTM de los últimos 12 meses', error);
      }
    );

    this.currentDate = this.getCurrentDateFormatted();
  }
  
  // Crear el gráfico utilizando Chart.js
  createChart(labels: string[], data: number[]): void {
    if (this.chart) {
      this.chart.destroy(); // Eliminar el gráfico anterior si existe
    }
  
    // Crear el gráfico
    this.chart = new Chart('utmChart', {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Valor UTM',
          data: data,
          borderColor: '#42A5F5',
          fill: false
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Meses'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Valor UTM'
            }
          }
        }
      }
    });
  }
  
  // Función para obtener la fecha en formato YYYY/MM/DD
  getCurrentDateFormatted(): string {
    const currentDate = new Date();
    const year = currentDate.getFullYear(); // Obtener el año
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Obtener el mes
    const day = currentDate.getDate().toString().padStart(2, '0'); // Obtener el día
    return `${year}-${month}-${day}`; // Formatear la fecha
  }
}