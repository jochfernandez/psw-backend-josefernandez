import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {TransaccionService} from "../../services/transaccion/transaccion.service";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Transaccion} from "../../models/transaccion";

@Component({
  selector: 'app-transaccion',
  standalone: true,
  imports: [
    RouterLink, CommonModule, FormsModule
  ],
  templateUrl: './transaccion.component.html',
  styleUrl: './transaccion.component.css'
})
export class TransaccionComponent {
  simbolos: any = [];
  plataBase : number = 0;
  transaccion : Transaccion = new Transaccion()
  constructor(private transaccionService : TransaccionService) {}
  obtenerSimbolos() {
    this.transaccionService.getSymbols().subscribe(
      (res : any) => {
        this.simbolos = Object.entries(res.symbols).map(([symbol, name]) => ({symbol, name}));
        console.log(this.simbolos);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  obtenerTotal(){
    this.transaccionService.getConversion(this.transaccion.monedaOrigen,this.transaccion.monedaDestino,this.transaccion.cantidadOrigen).subscribe(
      (res : any) => {
        console.log(this.transaccion.monedaOrigen + " " + this.transaccion.monedaDestino + " " + this.transaccion.cantidadOrigen);
        console.log(res);
        this.transaccion.cantidadDestino = res.result + (res.result * (this.transaccion.tasaConversion * 0.1));
        console.log(this.transaccion.cantidadDestino);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  actualizarMonedaOrigen(s: string) {
    this.transaccion.monedaOrigen = s;
  }
  actualizarMonedaDestino(s: string) {
    this.transaccion.monedaDestino = s;
  }
  cargarTransaccion() {
    this.transaccionService.postTransaccion(this.transaccion).subscribe(
      (res : any) => {
        if(res.status == 1){
          alert("Transacción agregada correctamente");
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
