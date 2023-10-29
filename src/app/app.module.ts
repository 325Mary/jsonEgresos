import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { InformacionComponent } from './informacion/informacion.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { EgresosComponent } from './egresos/egresos.component';
import { HomeComponent } from './home/home.component';
import { CrearegresoComponent } from './crearegreso/crearegreso.component';
import { SalidaEgresoComponent } from './salida-egreso/salida-egreso.component';
import { EditarEgresoComponent } from './editar-egreso/editar-egreso.component';
import { VerDetallesComponent } from './ver-detalles/ver-detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    InformacionComponent,
    TutorialComponent,
    EgresosComponent,
    HomeComponent,
    CrearegresoComponent,
    SalidaEgresoComponent,
    EditarEgresoComponent,
    VerDetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
