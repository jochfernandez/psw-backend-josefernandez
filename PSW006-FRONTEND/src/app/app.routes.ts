import { Routes } from '@angular/router';
import {InicioComponent} from "./components/inicio/inicio.component";
import {ProductoComponent} from "./components/producto/producto.component";
import {TicketComponent} from "./components/ticket/ticket.component";
import {EspectadorComponent} from "./components/espectador/espectador.component";
import {TransaccionComponent} from "./components/transaccion/transaccion.component";

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
    path: '**', pathMatch: 'full', redirectTo: 'inicio'
  }
];
