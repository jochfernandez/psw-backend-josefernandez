import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Transaccion} from "../models/transaccion";
import {Categoria} from "../models/categoria";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private _http :  HttpClient) { }
  postCategoria(categoria: Categoria) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let body: any = JSON.stringify(categoria);
    return this._http.post("http://localhost:3000/api/categoria/categoria", body, httpOptions);
  }
  getCategorias(){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this._http.get("http://localhost:3000/api/categoria/categoria",httpOptions);
  }

}
