export class Producto {
  nombre! : String;
  descripcion! : String;
  imagen! : String;
  precio! : Number;
  stock! : Number;
  destacado! : Boolean;

  constructor() {
    this.nombre = "";
    this.descripcion = "";
    this.imagen = "";
    this.precio = 0;
    this.stock = 0;
    this.destacado = false;
  }
}
