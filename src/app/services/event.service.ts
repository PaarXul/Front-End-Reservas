import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppEvent } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private baseUrl = 'http://localhost:8080/api/events'; // URL del backend

  constructor(private http: HttpClient) { }

  getEvents(): Observable<AppEvent[]> {
    return this.http.get<AppEvent[]>(`${this.baseUrl}`);
  }

  createEvent(event: AppEvent): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, event);
  }

  deleteEvent(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  updateEvent(event: AppEvent): Observable<Object> {
    return this.http.put(`${this.baseUrl}`, event);
  }
}
