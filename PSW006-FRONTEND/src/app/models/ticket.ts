import {Espectador} from "./espectador";
export class Ticket{
  precioTicket : number;
  categoriaEspectador : string;
  fechaCompra : string;
  espectador : Espectador;
  constructor() {
    this.precioTicket = 0;
    this.categoriaEspectador = '';
    this.fechaCompra = '';
    this.espectador = new Espectador();
  }
}
