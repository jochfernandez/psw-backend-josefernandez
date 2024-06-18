import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {Producto} from "../../models/producto";
import {ProductoService} from "../../services/producto/producto.service";

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  producto : Producto = new Producto();
  productos : Array<Producto> = [];
  destacadoLista : Boolean = false;
  constructor(private productoService : ProductoService) {
    this.obtenerProductos();
  }
  destacar() {
    this.producto.destacado = !this.producto.destacado;
  }
  obtenerProductos() {
    this.productoService.getProductos().subscribe(
      (res : any) => {
        this.productos = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  cargarProducto() {
  if (this.validarProducto(this.producto)) {
    this.productoService.addProducto(this.producto).subscribe(
      (res : any) => {
        if(res.status == 1){
          alert("Producto agregado correctamente");
        }
      },
      (err) => {
        console.log(err);
      }
    );
    this.producto = new Producto();
  } else {
    alert("Por favor, complete todos los campos correctamente.");
  }
}
  validarProducto(producto: Producto) {
  if (!producto.nombre || producto.nombre === '') {
    return false;
  }
  if (!producto.descripcion || producto.descripcion === '') {
    return false;
  }
  if (!producto.imagen || producto.imagen === '') {
    return false;
  }
  if (!producto.precio || typeof producto.precio !== 'number' || producto.precio <= 0) {
    return false;
  }
  if (!producto.stock || typeof producto.stock !== 'number' || producto.stock < 0) {
    return false;
  }
  return typeof producto.destacado === 'boolean';
}
  obtenerProductosDestacados() {
    this.productoService.getProductosDestacados().subscribe(
      (res : any) => {
        this.productos = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  cambiarDestacado() {
    this.destacadoLista = !this.destacadoLista;
    if (this.destacadoLista) {
      this.obtenerProductosDestacados();
    } else {
      this.obtenerProductos();
    }
  }
}
