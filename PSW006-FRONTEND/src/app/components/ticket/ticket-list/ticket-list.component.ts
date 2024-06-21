import { Component } from '@angular/core';
import {TicketService} from "../../../services/ticket/ticket.service";
import {Ticket} from "../../../models/ticket";
import {CommonModule, NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {EspectadorService} from "../../../services/espectador/espectador.service";
import {CategoriaService} from "../../../services/categoria.service";

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [
    FormsModule,CommonModule
  ],
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css'
})
export class TicketListComponent {
  constructor(private ticketService : TicketService, private espectadorService:EspectadorService, private categoriaService : CategoriaService) {
    this.obtenerTodosLosTickets();
  }
  todosLosTickets : Array<Ticket> = [];
  obtenerTodosLosTickets(){
    this.ticketService.getTickets().subscribe(
      (res : any) => {
        this.todosLosTickets = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
