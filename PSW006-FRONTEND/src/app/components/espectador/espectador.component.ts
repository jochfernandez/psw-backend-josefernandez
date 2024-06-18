import { Component } from '@angular/core';
import {EspectadorService} from "../../services/espectador/espectador.service";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Espectador} from "../../models/espectador";
import {Router} from "@angular/router";

@Component({
  selector: 'app-espectador',
  standalone: true,
  imports: [
    FormsModule,CommonModule
  ],
  templateUrl: './espectador.component.html',
  styleUrl: './espectador.component.css'
})
export class EspectadorComponent {
  espectadores: Array<any> = [];
  espectador : Espectador = new Espectador();
  espectadorBuscado : Espectador = new Espectador();
  datosEspectador : String = "Datos del Espectador";
  idEspectador : String = "Esperando selección...";
    constructor(private espectadorService : EspectadorService, private router: Router) {
        this.obtenerEspectadores();
    }
    obtenerEspectadores(){
        this.espectadorService.getEspectadores().subscribe(
            (res : any) => {
                this.espectadores = res;
            },
            (err) => {
                console.log(err);
            }
        );
    }
    cargarEspectador(){
        this.espectadorService.addEspectador(this.espectador).subscribe(
            (res : any) => {
                if(res.status == 1){
                  alert("Espectador agregado correctamente");
                }
            },
            (err) => {
                console.log(err);
            }
        );
        this.espectador = new Espectador();
    }

  seleccionarEspectador(nombre: string, apellido: string, dni: string, id: string) {
    this.datosEspectador = nombre+" "+apellido+" - "+dni;
    this.idEspectador = id;
  }

  obtenerEspectadorPorId(){
    // @ts-ignore
    this.espectadorService.getEspectador(this.idEspectador).subscribe(
      (res : any) => {
        this.espectadorBuscado = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  limpiarVariableEpectadorId() {
    this.idEspectador="";
  }
}
