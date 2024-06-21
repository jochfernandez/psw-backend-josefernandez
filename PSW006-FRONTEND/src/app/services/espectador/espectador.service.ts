import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Espectador} from "../../models/espectador";

@Injectable({
  providedIn: 'root'
})
export class EspectadorService {
  constructor(private _http : HttpClient) { }
  getEspectadores(){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this._http.get("http://localhost:3000/api/espectador/espectador",httpOptions);
  }
  addEspectador(espectador : Espectador){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let body : any = JSON.stringify(espectador);
    return this._http.post("http://localhost:3000/api/espectador/espectador",body,httpOptions);
  }
  getEspectador(id : string){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this._http.get("http://localhost:3000/api/espectador/espectador/"+id,httpOptions);
  }

}
