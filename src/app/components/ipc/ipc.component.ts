import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CmfApiService } from 'src/app/services/cmf-api.service';

@Component({
  selector: 'app-ipc',
  templateUrl: './ipc.component.html',
  styleUrls: ['./ipc.component.css']
})
export class IpcComponent implements OnInit{

  @Input() tituloCardIPC: string = "Indice de Precios al Consumidor (IPC)"
  ipcData: any[] = [];  
  displayedColumns: string[] = ['fecha', 'valor', 'detalle'];   // columnas para la tabla
  sortedData: any[] = [];
  sortAsc: boolean = true;

  constructor(private apiService: CmfApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiService.getIPC().subscribe((data: any) => {
        // console.log('Datos del IPC:', data );
        this.ipcData = data.IPCs;
        this.sortedData = [...this.ipcData];
    });
  }
  
  sortByValue(): void {
    this.sortAsc = !this.sortAsc;
    this.sortedData.sort((a: any, b: any) => {
      if (this.sortAsc) {
        return a.valor - b.valor;
      } else {
        return b.valor - a.valor;
      }
    });
  }

  goToHome() {
    this.router.navigate(['/']);
  }

}
