import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DadoComponent } from './components//dado/dado.component';
import { CronometroComponent } from './components/cronometro/cronometro.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { GestionPerrosService } from './services/gestion-perros.service';
import { PerrosComponent } from './pages/perros/perros.component';


@Component({
  selector: 'app-root', 
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, DadoComponent, CronometroComponent, FormularioComponent, RouterModule, PerrosComponent],  
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = 'First Angular';
  vari = 'Andres Morocho'; // Variable que almacena un nombre
  mensaje: string = ''; // Mensaje de resultado del juego de dados

  // Definición de variables relacionadas con un ejemplo de cálculo de edad
  edad = 10; 
  salario = 100;
  sueldos = [1700, 500, 950, 450];

  






}

// Interfaz que define la estructura de un artículo
interface Articulo {
  codigo: number;
  descripcion: string;
  precio: number;
}