import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';//

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent{


  @Input() codigo: number | null = null; // Código recibido desde el padre
  @Input() descripcion: string = ''; // Descripción recibida desde el padre
  @Input() precio: number | null = null; // Precio recibido desde el padre

  @Output() guardarArticulo = new EventEmitter<{ codigo: number; descripcion: string; precio: number }>();
  @Output() borrarArticulo = new EventEmitter<number>(); // Para eliminar un artículo


  actualizarGuardarArticulo() {
    const articulo = {
      codigo: this.codigo!,
      descripcion: this.descripcion,
      precio: this.precio!
    };
    this.guardarArticulo.emit(articulo); // Emitimos el artículo al padre
  }

  eliminarArticulo() {
    if (this.codigo !== null) {
      this.borrarArticulo.emit(this.codigo); // Emitimos el código del artículo al padre
    }
  
  }



}
