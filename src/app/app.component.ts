import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  nombre: string = 'Samuel';
  valor: number = 1000;
  obj = {
    nombre: 'Fernando'
  }

  constructor(private primeNgConfig: PrimeNGConfig) {

  }


  mostrarNombre() {
    console.log(this.nombre, this.valor)
  }

  ngOnInit(): void {
    this.primeNgConfig.ripple = true
  }
}
