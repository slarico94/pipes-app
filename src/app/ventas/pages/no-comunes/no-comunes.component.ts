import { Component, OnInit } from '@angular/core';
import {interval} from "rxjs";

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent{

  nombre: string = 'Karen';
  genero: string = 'femenino';
  clientes: string[] = ['Maria', 'Samuel', 'Karen', 'Arleth'];

  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla'
  }

  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }


  cambiarPersona() {
    this.nombre = 'Samuel';
    this.genero = 'masculino';
  }

  borrarCliente() {
    this.clientes.shift()
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Samuel',
    edad: 28,
    direccion: 'Arequipa, Perú'
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ];

  //Async pipe
  miObservable = interval(1000); //0, 1, 2, 3, 4, 5, 6....

  valuePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500)
  })
}
