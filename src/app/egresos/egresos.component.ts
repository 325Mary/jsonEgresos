import { Component, OnInit } from '@angular/core';
import { EgresoService } from '../egreso.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

   
@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.scss']
})
export class EgresosComponent implements OnInit {
  
  
  listaDeEgresos: any[] = [];

  constructor(private router: Router, private egresoService: EgresoService, private route: ActivatedRoute) {}  

  ngOnInit() {
    
    
    // Obtener la lista de egresos desde el servicio
    this.listaDeEgresos = this.egresoService.getEgresos();
    
  }
  eliminarEgreso(egreso: { id: number }) {
  // Puedes mostrar un cuadro de diálogo de confirmación si lo deseas
  const confirmar = window.confirm('¿Seguro que quieres eliminar este egreso?');
  if (confirmar) {
    // Remove the item from the frontend list
    this.egresoService.eliminarEgreso(egreso.id);
  }
}
verDetalles(egreso: any) {
  this.router.navigate(['/verDetalles', egreso.id]);
}

editarEgreso(egreso: any) {
  this.router.navigate(['/editarEgreso', egreso.id]);
}

}
