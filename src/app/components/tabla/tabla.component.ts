import { Component, OnInit } from '@angular/core';
import { CmfApiService } from 'src/app/services/cmf-api.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  dolarData: any[] = [];
  sortedData: any[] = [];
  sortAsc: boolean = true;
  // Definir las columnas para la tabla
  displayedColumns: string[] = ['fecha', 'valor', 'detalle'];

  constructor(private service: CmfApiService) {}

  ngOnInit(): void {
    this.service.getDolar30Days().subscribe((data: any) => {
      console.log(data.Dolares)
      this.dolarData = data.Dolares;
      this.sortedData = [...this.dolarData];
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
}

