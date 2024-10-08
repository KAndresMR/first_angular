import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';//
import { DadoComponent } from './components/dado.component';
import { CronometroComponent } from './components/cronometro/cronometro.component';
import { FormularioComponent } from './components/formulario/formulario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, DadoComponent, CronometroComponent, FormularioComponent],//Agregamos el CommonModule para que nos sirva el ngIf y el ngFor
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'First Angular';
  vari = 'Andres Morocho'
  mensaje: string = ''
  //Definir variables
  edad = 10;
  salario = 100;
  sueldos = [1700, 500, 950, 450]


  


  esMayorDeEdad() {
    if (this.edad >= 18) {
      return 'Es mayor de edad'
    }
    else {
      return 'Es menor de edad'
    }
  }

  //CAPTURA DE EVENTOS CREAR METODO INCREMENTAR
  //{{}} para recuperar los valores

  contador = 0
  incrementar() {
    this.contador = this.contador + 1
  }

  //NgModel para interactuar entre la vista y el controlador
  //Si tengo el formulario guarda los valores en el controlador 
  //{} corchetes con el ngModel hace un get, muestra las variables 
  //() parentesis hacen SET


  //CALCULADORA
  a = 0
  b = 0
  c = 0

  //ARTICULOS arreglo


  

  articulos: Articulo[] = []; // Arreglo de artículos
  codigo: number | null = null;
  descripcion: string = '';
  precio: number | null = null;



  cargarArticulo(codigo: number) {
    const articulo = this.articulos.find(a => a.codigo === codigo);
    if (articulo) {
      this.codigo = articulo.codigo;
      this.descripcion = articulo.descripcion;
      this.precio = articulo.precio;
    }
  }

  actualizarGuardarArticulo(articulo: { codigo: number; descripcion: string; precio: number }) {
    const index = this.articulos.findIndex(a => a.codigo === articulo.codigo);
    if (index > -1) {
      this.articulos[index] = articulo; // Actualiza el artículo
    } else {
      this.articulos.push(articulo); // Agrega un nuevo artículo
    }
    this.limpiarFormulario();
  }


  borrarArticulo(codigo: number) {
    this.articulos = this.articulos.filter(a => a.codigo !== codigo);
    this.limpiarFormulario();
  }



  limpiarFormulario() {
    this.codigo = null;
    this.descripcion = '';
    this.precio = null;
  }


  sumar(){
    this.c= this.a + this.b
  
  }

  arti = [
    { codigo: 1, descripcion: 'TV', precio: 540 },
    { codigo: 2, descripcion: 'Mircoondas', precio: 140 },
    { codigo: 3, descripcion: 'Licuadora', precio: 40 },
  ]

  
  @ViewChild('dado1') dado1!:DadoComponent
  @ViewChild('dado2') dado2!:DadoComponent
  @ViewChild('dado3') dado3!:DadoComponent

  lanzar(){
      this.dado1.lanzar()
      this.dado2.lanzar()
      this.dado3.lanzar()

      // Verificamos si dos o más dados tienen el mismo valor
    if (this.dado1.valor === this.dado2.valor || this.dado1.valor === this.dado3.valor || this.dado2.valor === this.dado3.valor) {
      this.mensaje = '¡Ganaste! Dos o más dados tienen el mismo valor.';
    } else {
      this.mensaje = '';
    }
  }

  minuto = 0


  actualizar(estado: boolean){
    if (estado) {
      this.minuto++
    }
  }

  
}

interface Articulo {
  codigo: number;
  descripcion: string;
  precio: number;
}