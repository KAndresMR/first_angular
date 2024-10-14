import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DadoComponent } from '../../components/dado/dado.component';
import { CronometroComponent } from '../../components/cronometro/cronometro.component';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { GestionPerrosService } from '../../services/gestion-perros.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, DadoComponent, CronometroComponent, FormularioComponent, RouterModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {


  title = 'First Angular';
  vari = 'Andres Morocho'; // Variable que almacena un nombre
  mensaje: string = ''; // Mensaje de resultado del juego de dados

  // Definición de variables relacionadas con un ejemplo de cálculo de edad
  edad = 10; 
  salario = 100;
  sueldos = [1700, 500, 950, 450];

  // Método para verificar si la persona es mayor o menor de edad
  esMayorDeEdad() {
    if (this.edad >= 18) {
      return 'Es mayor de edad';
    } else {
      return 'Es menor de edad';
    }
  }

  // Definición de un contador e incremento de su valor
  contador = 0;
  incrementar() {
    this.contador = this.contador + 1;
  }

  // Variables para una pequeña calculadora
  a = 0;
  b = 0;
  c = 0;

  // Método que realiza la suma de dos números
  sumar() {
    this.c = this.a + this.b;
  }

  // Definición de un arreglo de artículos con su tipo
  articulos: Articulo[] = [];
  codigo: number | null = null;
  descripcion: string = '';
  precio: number | null = null;

  // Método para cargar los detalles de un artículo seleccionado, según su código
  cargarArticulo(codigo: number) {
    const articulo = this.articulos.find(a => a.codigo === codigo);
    if (articulo) {
      this.codigo = articulo.codigo;
      this.descripcion = articulo.descripcion;
      this.precio = articulo.precio;
    }
  }

  // Método para actualizar o guardar un artículo en el arreglo de artículos
  actualizarGuardarArticulo(articulo: { codigo: number; descripcion: string; precio: number }) {
    const index = this.articulos.findIndex(a => a.codigo === articulo.codigo);
    if (index > -1) {
      this.articulos[index] = articulo;
    } else {
      this.articulos.push(articulo);
    }    
  }

  // Método para eliminar un artículo del arreglo según su código
  borrarArticulo(codigo: number) {
    this.articulos = this.articulos.filter(a => a.codigo !== codigo);
    this.limpiarFormulario();
  }

  // Método para limpiar el formulario (resetear los valores)
  limpiarFormulario() {
    this.codigo = null;
    this.descripcion = '';
    this.precio = null;
  }
/*
  // Arreglo de ejemplo con artículos predefinidos
  arti = [
    { codigo: 1, descripcion: 'TV', precio: 540 },
    { codigo: 2, descripcion: 'Microondas', precio: 140 },
    { codigo: 3, descripcion: 'Licuadora', precio: 40 },
  ];
*/

  // Variables de referencia a componentes hijo (DadoComponent)
  @ViewChild('dado1') dado1!: DadoComponent; 
  @ViewChild('dado2') dado2!: DadoComponent; 
  @ViewChild('dado3') dado3!: DadoComponent; 

  // Método para lanzar los tres dados y verificar si se gana
  lanzar() {
    this.dado1.lanzar();
    this.dado2.lanzar();
    this.dado3.lanzar();

    // Verifica si hay dos valores iguales entre los dados
    if (this.dado1.valor === this.dado2.valor || this.dado1.valor === this.dado3.valor || this.dado2.valor === this.dado3.valor) {
      this.mensaje = '¡Ganaste!.';
    } else {
      this.mensaje = 'Perdiste!';
    }
  }

  // Variable para manejar el tiempo (cronómetro)
  minuto = 0;

  // Método que se ejecuta cada vez que se actualiza el cronómetro
  actualizar(estado: boolean) {
    if (estado) {
      this.minuto++;
    }
  }

  perros: any

  constructor(private perrosService: GestionPerrosService) {

  }

  ngOnInit(): void {
    this.perrosService.addPerros('Renzo','Beagle')
    this.perrosService.addPerros('Rambo','koker')
    this.perros = this.perrosService.getPerros()
  }
  



}

interface Articulo {
  codigo: number;
  descripcion: string;
  precio: number;
}
