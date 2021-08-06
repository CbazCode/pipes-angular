import { Component,OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pipes';
  nombre:string = 'sEbastIaN AsiS';
  numero:number=1000;
  mostrarValores(){
    console.log(this.nombre)
    console.log(this.numero)
  }

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
