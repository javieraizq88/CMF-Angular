import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CmfApiService {

  private apiUrl = environment.api; 
  private APIKey = environment.APIKey; 
  private periodo = "2024/01"
  private year = "2024"

  constructor(private http: HttpClient) { }
  
// ul de ejemplo
// https://api.cmfchile.cl/api-sbifv3/recursos_api/dolar2010/01?apikey=SBIF9990SBIF44b7SBIF7f4c5a537d02358e1099&formato=json

  getDolarMes(): Observable<any> {
    const url = `${this.apiUrl}/dolar/${this.periodo}/?apikey=${this.APIKey}&formato=json`;
    return this.http.get<any>(url);  
  }
  getEuroMes(): Observable<any> {
    const url = `${this.apiUrl}/euro/${this.periodo}?apikey=${this.APIKey}&formato=json`;
    return this.http.get<any>(url);  
  }
  getIPC(): Observable<any> {
    const url = `${this.apiUrl}/ipc/${this.year}?apikey=${this.APIKey}&formato=json`;
    return this.http.get<any>(url);  
  }
  // Tasa de Interés Máxima Convencional
  getTMCMes(): Observable<any> {
    const url = `${this.apiUrl}/tmc/${this.periodo}?apikey=${this.APIKey}&formato=json`;
    return this.http.get<any>(url);  
  }
  getUFMes(): Observable<any> {
    const url = `${this.apiUrl}/uf/${this.year}?apikey=${this.APIKey}&formato=json`;
    return this.http.get<any>(url);  
  }
  getUTM(): Observable<any> {
    const url = `${this.apiUrl}/utm/${this.year}?apikey=${this.APIKey}&formato=json`;
    return this.http.get<any>(url);  
  }
  getTIP(): Observable<any> {
    const url = `${this.apiUrl}/tip/${this.periodo}?apikey=${this.APIKey}&formato=json`;
    return this.http.get<any>(url);  
  }

  // Tasa TAB UF 360 días
  // La información de este índice ha sido suspendida y debe ser solicitada a Chilean Benchmark Facility SpA, administrador de las tasas de referencia TAB Nominal, TAB UF, TADO, e índices ICP e ICP Real, por encargo de la Asociación de Bancos (ABIF).




}

