import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import {FieldsetModule} from 'primeng/fieldset';



@NgModule({
  imports: [
    CommonModule,
  ],
  exports:[
    ButtonModule,
    RippleModule,
    CardModule,
    MenubarModule,
    FieldsetModule
  ]
})
export class PrimeNgModule { }
