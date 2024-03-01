import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  // private apiUrl = '/api/search/?apikey=fdef2b07-9075-4180-9db3-9c8428256a31';
  private apiUrl = '/api/search/?apikey=fdef2b07-9075-4180-9db3-9c8428256a31';

  constructor(private http: HttpClient) { }

  getSchedule(transportType: string, origin: string, destination: string, date: string): Observable<any> {
    const url = `${this.apiUrl}&format=json&from=c146&to=c213&lang=ru_RU&page=1&date=2024-03-02`;

    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    });

    return this.http.get(url, { headers });
  }
}
