import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Producto} from "../../models/producto";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private _http:HttpClient) { }
  getProductos(){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this._http.get("http://localhost:3000/api/producto/producto",httpOptions);
  }
  addProducto(producto : Producto){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let body : any = JSON.stringify(producto);
    return this._http.post("http://localhost:3000/api/producto/producto",body,httpOptions);
    }
  getProductosDestacados() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this._http.get("http://localhost:3000/api/producto/productoDestacado/",httpOptions);
  }
}
