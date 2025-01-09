import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CmfApiService } from 'src/app/services/cmf-api.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-dolar-hoy',
  templateUrl: './dolar-hoy.component.html',
  styleUrls: ['./dolar-hoy.component.css']
})
export class DolarHoyComponent implements OnInit {
  @Input() tituloCard: string = "Dólar"
  dolarData: any[] = [];  // Array para almacenar los datos de la moneda
  value: string = 'Cargando...'; // Valor por defecto
  currentDate: string = "";
  chart: any; // Para almacenar el gráfico

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

    // Obtener el valor actual del dólar
    this.apiService.getDolarActual().subscribe(
      (data: any) => {
       // console.log("dolar actual", data.Dolares)
        this.value = data['Dolares'][0]['Valor'];
      },
      (error) => {
        console.error('Error al obtener el valor del dólar', error);
        this.value = 'Error al obtener el valor';
      }
    );

    // Obtener los datos del dólar para los últimos 10 días
    this.getDolarLast10Days();

    this.currentDate = this.getCurrentDateFormatted();
  }
  
  // Obtener los datos del dólar para los últimos 10 días
  getDolarLast10Days(): void {
    const today = new Date();
    const labels: string[] = [];
    const data: number[] = [];

    console.log("ultimos 10 dias",data)

    // Realizar las consultas para los últimos 10 días
    for (let i = 0; i < 10; i++) {
      const day = new Date(today);
      day.setDate(today.getDate() - i);

      const year = day.getFullYear();
      const month = (day.getMonth() + 1).toString().padStart(2, '0'); // Añadir 1 al mes y asegurarse de que tenga dos dígitos
      const date = day.getDate().toString().padStart(2, '0');
      const dateFormatted = `${year}/${month}/${date}`;

      this.apiService.getDolar30Days().subscribe(
        (response: any) => {
          const dolarValue = response['Dolares'][0]['Valor']; 
          labels.push(dateFormatted);
          data.push(dolarValue);
          
          // Crear el gráfico después de obtener todos los datos
          if (labels.length === 10) {
            this.createChart(labels, data);
          }
        },
        (error) => {
          console.error('Error al obtener el valor del dólar para el día', dateFormatted, error);
        }
      );
    }
  }
  
  // Crear el gráfico utilizando Chart.js
  createChart(labels: string[], data: number[]): void {
    if (this.chart) {
      this.chart.destroy(); // Eliminar el gráfico anterior si existe
    }

    // Crear el gráfico
    this.chart = new Chart('dolarChart', {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Valor Dólar',
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
              text: 'Fecha'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Valor Dólar (CLP)'
            }
          }
        }
      }
    });
  }

  // Función para obtener la fecha en formato YYYY/MM/DD
  getCurrentDateFormatted(): string {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
