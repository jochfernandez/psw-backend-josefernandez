import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";
import {TicketService} from "../../services/ticket/ticket.service";

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  idEliminar: any;
  constructor(private ticketService : TicketService) {}
  eliminar(idEliminar: any) {
    this.ticketService.deleteTicket(idEliminar).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      })
  }
}
