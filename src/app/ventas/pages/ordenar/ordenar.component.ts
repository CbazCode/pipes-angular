import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  enMayuscula: boolean = true;
  currentForm:string = 'minuscula'
  ordenarPor: string = '';
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.enMayuscula = !this.enMayuscula
    if(this.enMayuscula){
      this.currentForm = 'minuscula'
    }else{
      this.currentForm = 'mayuscula'
    }
  }
  cambiarOrden( valor: string ) {
    this.ordenarPor = valor;
  }
}
