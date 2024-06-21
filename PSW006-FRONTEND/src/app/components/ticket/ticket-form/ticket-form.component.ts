import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Ticket} from "../../../models/ticket";
import {TicketService} from "../../../services/ticket/ticket.service";
import {EspectadorService} from "../../../services/espectador/espectador.service";
import {Espectador} from "../../../models/espectador";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [
    FormsModule, CommonModule
  ],
  templateUrl: './ticket-form.component.html',
  styleUrl: './ticket-form.component.css'
})
export class TicketFormComponent {
  constructor(private ticketService : TicketService, private espectadorService : EspectadorService) {
    this.cargarEspectadores();
  }
  ticket : Ticket = new Ticket();
  espectadores : Array<Espectador> = [];
  cargarTicker(){
    this.ticketService.addTicket(this.ticket).subscribe(
      (result) => {
        console.log("Este es el id "+this.ticket.espectador);
        console.log(result);
        alert("Ticket guardado con exito");
      },
      (error) => {
        console.log(error);
      }
    );
  }
  cargarEspectadores(){
    this.espectadorService.getEspectadores().subscribe(
      (result) => {
        console.log(result);
        this.espectadores = result as Array<Espectador>;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
