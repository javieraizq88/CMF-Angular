import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CmfApiService } from 'src/app/services/cmf-api.service';

@Component({
  selector: 'app-ipc-anual',
  templateUrl: './ipc-anual.component.html',
  styleUrls: ['./ipc-anual.component.css']
})
export class IpcAnualComponent implements OnInit {
  @Input() tituloCard: string = "IPC"
  ipcData: any[] = [];  // Array para almacenar todos los datos del euro
  displayedColumns: string[] = ['fecha', 'valor'];   // columnas para la tabla
  sortedData: any[] = [];
  sortAsc: boolean = true;

  constructor (
    private apiService: CmfApiService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.apiService.getIPC().subscribe((data: any) => {
        // console.log('Datos del euro:', data );
        this.ipcData = data.IPCs;
        this.sortedData = [...this.ipcData];
    });
  }

  goToHome() {
    this.router.navigate(['/']);
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

}