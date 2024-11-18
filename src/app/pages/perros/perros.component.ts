import { Component, OnInit } from '@angular/core';
import { Perro } from '../../model/perros';
import { PerroService } from '../../services/perro.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perros',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './perros.component.html',
  styleUrl: './perros.component.scss'
})
export class PerrosComponent implements OnInit{
  nuevoPerro: Perro = new Perro();
  listaPerros: any[] = []; // Almacena la lista de perros

  constructor(private perroService: PerroService) {}

  ngOnInit() {
    this.obtenerPerros();
  }

  guardarPerro() {
    this.perroService.agregarPerro(this.nuevoPerro)
      .then(() => {
        alert('Perro guardado con éxito');
        this.nuevoPerro = new Perro(); // Resetea el formulario
      })
      .catch((error) => {
        console.error('Error al guardar el perro:', error);
      });
  }

  obtenerPerros() {
    this.perroService.listarPerros().subscribe((perros) => {
      this.listaPerros = perros;
    });
  }

  eliminarPerro(id: string) {
    if (confirm('¿Estás seguro de eliminar este perro?')) {
      this.perroService.eliminarPerro(id)
        .then(() => {
          alert('Perro eliminado con éxito');
          this.obtenerPerros(); // Refresca la lista
        })
        .catch((error) => {
          console.error('Error al eliminar el perro:', error);
        });
    }
  }
}
