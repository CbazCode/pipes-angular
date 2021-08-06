import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  nombreCompleto:string = "SebAsTIan aSis"
  nombreLower:string ="sebatian"
  fecha: Date = new Date()
  constructor() { }

  ngOnInit(): void {
  }

}
