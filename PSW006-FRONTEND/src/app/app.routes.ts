import { Routes } from '@angular/router';
import {InicioComponent} from "./components/inicio/inicio.component";
import {ProductoComponent} from "./components/producto/producto.component";
import {TicketComponent} from "./components/ticket/ticket.component";
import {EspectadorComponent} from "./components/espectador/espectador.component";
import {TransaccionComponent} from "./components/transaccion/transaccion.component";
import {TransaccionListComponent} from "./components/transaccion/transaccion-list/transaccion-list.component";
import {TicketListComponent} from "./components/ticket/ticket-list/ticket-list.component";
import {TicketFormComponent} from "./components/ticket/ticket-form/ticket-form.component";

export const routes: Routes = [
  {
    path: 'inicio', component: InicioComponent
  },
  {
    path: 'producto', component: ProductoComponent
  },
  {
    path: 'ticket', component: TicketComponent
  },
  {
    path: 'espectador', component: EspectadorComponent
  },
  {
    path: 'transaccion', component: TransaccionComponent
  },
  {
    path: 'transacccionList', component: TransaccionListComponent
  },
  {
    path: 'ticket-list', component: TicketListComponent
  },
  {
    path: 'ticket-form', component: TicketFormComponent
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'inicio'
  }
];
