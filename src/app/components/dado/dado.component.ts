import { Component, Input, OnInit, output } from '@angular/core';

@Component({
  selector: 'app-dado',
  standalone: true,
  imports: [],
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.scss'
})

export class DadoComponent implements OnInit{
  valor = 1;
  @Input() color:string = ''
  
  ngOnInit(): void {
    this.lanzar// Inicializa el valor del dado
  }

  lanzar(){
    this.valor=Math.trunc(Math.random() * 6) + 1// Genera un valor aleatorio entre 1 y 6
  }
}
