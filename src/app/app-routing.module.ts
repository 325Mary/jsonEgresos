import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformacionComponent } from  './informacion/informacion.component';
import {  TutorialComponent} from "./tutorial/tutorial.component";
import { HomeComponent } from "./home/home.component";
import { EgresosComponent } from "./egresos/egresos.component";
import { CrearegresoComponent } from "./crearegreso/crearegreso.component";
import { EditarEgresoComponent } from "./editar-egreso/editar-egreso.component";
import { VerDetallesComponent } from "./ver-detalles/ver-detalles.component";

const routes: Routes = [
  {path: 'informacion', component: InformacionComponent},
  {path: 'tutorial', component: TutorialComponent},
  {path: '', component: HomeComponent},
  {path: 'egresos', component: EgresosComponent},
  {path:'crearEgreso', component: CrearegresoComponent},
  {path: 'editarEgreso/:id', component: EditarEgresoComponent},
  {path: 'verDetalles/:id', component:VerDetallesComponent},
  {path: 'informacion', component: InformacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
