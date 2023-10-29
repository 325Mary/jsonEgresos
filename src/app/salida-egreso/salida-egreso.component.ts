import { Component } from '@angular/core';
import { EgresoService } from "../egreso.service";

@Component({
  selector: 'app-salida-egreso',
  templateUrl: './salida-egreso.component.html',
  styleUrls: ['./salida-egreso.component.scss']
})
export class SalidaEgresoComponent {
  // En el componente de lista de egresos
listaDeEgresos: any[] = []; // Inicializa con los egresos existentes
  egresoService: any;

// Método para obtener los egresos (puedes llamarlo al iniciar el componente)
obtenerEgresos() {
  this.listaDeEgresos = this.egresoService.getEgresos(); // Utiliza tu servicio para obtener los egresos
}

}
