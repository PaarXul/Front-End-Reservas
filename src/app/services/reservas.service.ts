import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  constructor(private http: HttpClient) {
  }

  public getReservas(): Observable<any> {
    const href = 'http://localhost:8090/api/reserva/';

    return this.http.get(`${href}`);
  }



}
