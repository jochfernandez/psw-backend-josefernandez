export class Transaccion{
  monedaOrigen: string;
  cantidadOrigen : number;
  monedaDestino : string;
  cantidadDestino : number;
  emailCliente : string;
  tasaConversion : number;

  constructor() {
    this.monedaOrigen = "Moneda Origen";
    this.cantidadOrigen = 0;
    this.monedaDestino = "Moneda Destino";
    this.cantidadDestino = 0;
    this.emailCliente = "";
    this.tasaConversion = 0;
  }
}
