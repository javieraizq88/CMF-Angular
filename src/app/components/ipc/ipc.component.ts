import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CmfApiService } from 'src/app/services/cmf-api.service';


@Component({
  selector: 'app-ipc',
  templateUrl: './ipc.component.html',
  styleUrls: ['./ipc.component.css']
})
export class IpcComponent implements OnInit{

  ipcData: any[] = [];  

  constructor(private apiService: CmfApiService, private router: Router) {}
  ngOnInit(): void {
    this.apiService.getIPC().subscribe({
      next: (data) => {
         console.log('Datos del IPC:', data );
        this.ipcData = data.IPCs;
      },
      error: (err) => {
        console.error('Error en la solicitud - IPC:', err);
      }
    });
  }

  goToHome() {
    this.router.navigate(['/']);
  }

}
