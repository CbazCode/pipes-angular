import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Cambiar el locale de la application
import localeEs from '@angular/common/locales/es-PE'
import localeFR from '@angular/common/locales/fr'
import { registerLocaleData } from '@angular/common'
registerLocaleData( localeEs )
registerLocaleData( localeFR )
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRouterModule,
    VentasModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: LOCALE_ID, useValue:'es-PE'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
