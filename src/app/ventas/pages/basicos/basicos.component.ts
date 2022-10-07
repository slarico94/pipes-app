import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombreLower: string = 'samuel';
  nombreUpper: string = 'SAMUEL';
  nombreCompleto: string = 'Samuel Larico';

  fecha: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }



}
