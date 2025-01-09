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
  // fecha menos 30 dias
  private yearMonthMinus30Days = this.getDateMinus30DaysFormatted(); // YYYY/MM
  private dayMnus30Days = this.getDayMinus30Days();
  // fecha menos 10 dias
  private yearMonthMinus10Days = this.getDateMinus10DaysFormatted(); // YYYY/MM
  private dayMnus10Days = this.getDayMinus10Days();
  // fecha menos 12 meses
  private yearMonthMinus12Month = this.getDateMinus12MonthsFormatted();

  constructor(private http: HttpClient) { }
  
  // Función para obtener el año actual
  getCurrentYear(): number {
    const currentDate = new Date();
    return currentDate.getFullYear();
  }

  // Función para obtener el mes actual (en formato numérico)
  getCurrentMonth(): number {
    const currentDate = new Date();
    return currentDate.getMonth() + 1; // getMonth() devuelve 0 para enero, 1 para febrero, etc.
  }

  // Función para obtener el día actual
  getCurrentDay(): number {
    const currentDate = new Date();
    return currentDate.getDate();
  }

  // Función para obtener la fecha actual menos 30 días y formateada como YYYY/MM
  getDateMinus30DaysFormatted(): string {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 30); // Resta 30 días
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Los meses en JavaScript son 0 Enero, 1 Febrero, etc
    return `${year}/${month < 10 ? '0' + month : month}`; // Formato YYYY/MM con mes de 2 dígitos
  }
  getDayMinus30Days(): number {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 30); // Resta 30 días
    return currentDate.getDate(); // Retorna el día del mes
  }

// Función para obtener la fecha actual menos 10 días y formateada como YYYY/MM
getDateMinus10DaysFormatted(): string {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - 10); // Resta 10 días
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Los meses en JavaScript son 0 Enero, 1 Febrero, etc
  return `${year}/${month < 10 ? '0' + month : month}`; // Formato YYYY/MM con mes de 2 dígitos
}
// Función para obtener el día actual menos 10 días
getDayMinus10Days(): number {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - 10); // Resta 10 días
  return currentDate.getDate(); // Retorna el día del mes
}

  // Función para obtener la fecha actual menos 12 meses y formateada como YYYY/MM
  getDateMinus12MonthsFormatted(): string {
    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() - 12); // Resta 12 meses
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Los meses en JavaScript son 0 Enero, 1 Febrero, etc
    return `${year}/${month < 10 ? '0' + month : month}`; // Formato YYYY/MM con mes de 2 dígitos
  }

  // *** 
  // *** ultimos 30 dias
  getDolar30Days(): Observable<any> {
    const url = `${this.apiUrl}/dolar/posteriores/${this.yearMonthMinus30Days}/dias/${this.dayMnus30Days}?apikey=${this.APIKey}&formato=json`;
    return this.http.get<any>(url);  
  }  
  getEuro30Days(): Observable<any> {
    const url = `${this.apiUrl}/euro/posteriores/${this.yearMonthMinus30Days}/dias/${this.dayMnus30Days}?apikey=${this.APIKey}&formato=json`;
    return this.http.get<any>(url);  
  }
  getUf30Days(): Observable<any> {
    const url = `${this.apiUrl}/uf/posteriores/${this.yearMonthMinus30Days}/dias/${this.dayMnus30Days}?apikey=${this.APIKey}&formato=json`;
    return this.http.get<any>(url);  
  }
  // *** 
  // *** ultimos 12 meses
  getIPC12Months(): Observable<any> {
    const url = `${this.apiUrl}/ipc/posteriores/${this.yearMonthMinus12Month}?apikey=${this.APIKey}&formato=json`;
    return this.http.get<any>(url);  
  }
  getUtm12Months(): Observable<any> {
    const url = `${this.apiUrl}/utm/posteriores/${this.yearMonthMinus12Month}?apikey=${this.APIKey}&formato=json`;
    return this.http.get<any>(url);  
  }
  // *** 
  // *** ultimos 10 dias
  getDolar10Days(): Observable<any> {
    const url = `${this.apiUrl}/dolar/posteriores/${this.yearMonthMinus10Days}/dias/${this.dayMnus10Days}?apikey=${this.APIKey}&formato=json`;
    return this.http.get<any>(url);  
  }
  getEuro10Days(): Observable<any> {
    const url = `${this.apiUrl}/euro/posteriores/${this.yearMonthMinus10Days}/dias/${this.dayMnus10Days}?apikey=${this.APIKey}&formato=json`;
    return this.http.get<any>(url);  
  }
  getUf10Days(): Observable<any> {
    const url = `${this.apiUrl}/uf/posteriores/${this.yearMonthMinus10Days}/dias/${this.dayMnus10Days}?apikey=${this.APIKey}&formato=json`;
    return this.http.get<any>(url);  
  }
  // *** 
  // *** Valores actuales
  getDolarActual(): Observable<any> {
    const url = `${this.apiUrl}/dolar?apikey=${this.APIKey}&formato=json`;
    return this.http.get<any>(url);  
  }
  getEuroActual(): Observable<any> {
    const url = `${this.apiUrl}/euro?apikey=${this.APIKey}&formato=json`;
    return this.http.get<any>(url);  
  }
  getUfActual(): Observable<any> {
    const url = `${this.apiUrl}/uf?apikey=${this.APIKey}&formato=json`;
    return this.http.get<any>(url);  
  }
  getIpcActual(): Observable<any> {
    const url = `${this.apiUrl}/ipc?apikey=${this.APIKey}&formato=json`;
    return this.http.get<any>(url);  
  }
  getUtmActual(): Observable<any> {
    const url = `${this.apiUrl}/utm?apikey=${this.APIKey}&formato=json`;
    return this.http.get<any>(url);  
  }
}
