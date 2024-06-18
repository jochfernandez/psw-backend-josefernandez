import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Transaccion} from "../../models/transaccion";

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {
  constructor(private _http: HttpClient) {
  }
  getSymbols() {
    let httpOptions = new HttpHeaders({
      'x-rapidapi-key': '19f387743dmshaea5dbab8882625p122650jsn1d067f5ac8c3',
      'x-rapidapi-host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
    });
    return this._http.get("https://currency-conversion-and-exchange-rates.p.rapidapi.com/symbols", {headers: httpOptions});
  }
  getConversion(from: string, to: string, amount : number) {
    let httpOptions = new HttpHeaders({
      'x-rapidapi-key': '19f387743dmshaea5dbab8882625p122650jsn1d067f5ac8c3',
      'x-rapidapi-host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
    });
    return this._http.get("https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from=" + from + "&to=" + to + "&amount="+amount.toString(), {headers: httpOptions});
  }

  postTransaccion(transaccion: Transaccion) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let body: any = JSON.stringify(transaccion);
    return this._http.post("http://localhost:3000/api/transaccion/transaccion", body, httpOptions);
  }

  getTodasLasTransacciones() {
    let  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this._http.get("http://localhost:3000/api/transaccion/transaccion", httpOptions);
  }

  getTransaccionesByMail(emailBuscar: string) {
    let  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this._http.get("http://localhost:3000/api/transaccion/transaccion/"+emailBuscar, httpOptions);
  }

  getTransaccionesByMonedaOrigenDestino(monedaOrigen: any ,monedaDestino: any) {
    let  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this._http.get("http://localhost:3000/api/transaccion/transaccionPorMonedas/"+monedaOrigen+","+monedaDestino, httpOptions);
  }
}
