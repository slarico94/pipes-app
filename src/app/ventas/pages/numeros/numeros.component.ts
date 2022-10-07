import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [
  ]
})
export class NumerosComponent {

  ventasNetas: number = 2567789.56547;
  porcentaje: number = 0.4814;

  constructor() {
    
  }

  procesaMensaje(): void {
    if (true) {
      console.log('You are very very fat')
    } else {

    }
  }

}
