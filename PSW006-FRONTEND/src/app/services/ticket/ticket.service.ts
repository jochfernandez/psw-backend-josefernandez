import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  constructor(private _http: HttpClient) { }
  getTickets() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this._http.get("http://localhost:3000/api/ticket/ticket", httpOptions);
  }
  addTicket(ticket: any) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let body: any = JSON.stringify(ticket);
    return this._http.post("http://localhost:3000/api/ticket/ticket", body, httpOptions);
  }
  deleteTicket(id: any) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this._http.delete("http://localhost:3000/api/ticket/ticket/" + id, httpOptions);
  }
}
