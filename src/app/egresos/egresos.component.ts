import { Component, OnInit } from '@angular/core';
import { EgresoService } from '../egreso.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.scss']
})
export class EgresosComponent implements OnInit {
  listaDeEgresos: any[] = [];

  constructor(private egresoService: EgresoService) { }

  ngOnInit() {
    // Obtener la lista de egresos desde el servicio
    this.listaDeEgresos = this.egresoService.getEgresos();
  }
}
