import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent{
  @Input() codigo: number | null = null; 
  @Input() descripcion: string = ''; 
  @Input() precio: number | null = null; 
  @Output() guardarArticulo = new EventEmitter<{ codigo: number; descripcion: string; precio: number }>();// Emite evento al guardar
  @Output() borrarArticulo = new EventEmitter<number>(); // Emite evento al borrar 

  guardar() {
    const articulo = {
      codigo: this.codigo!,
      descripcion: this.descripcion,
      precio: this.precio!
    };
    this.guardarArticulo.emit(articulo); // Emitimos el artículo al padre     
    this.limpiarFormulario(); // Limpiamos los inputs después de guardar 
  }

  limpiarFormulario() {
    this.codigo = null;
    this.descripcion = '';
    this.precio = null;
  }






}
