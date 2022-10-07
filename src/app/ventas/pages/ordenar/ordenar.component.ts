import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  enMayusculas: boolean = true;
  ordenarPor: string = '';
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.AZUL
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.NEGRO
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.VERDE
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.ROJO
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.VERDE
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  cambiarCase() {
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden(valor: string) {
    this.ordenarPor = valor;
  }

}
