import { Component, OnInit } from '@angular/core';
import { EgresoService } from '../egreso.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-detalles',
  templateUrl: './ver-detalles.component.html',
  styleUrls: ['./ver-detalles.component.scss']
})
export class VerDetallesComponent implements OnInit {
  egreso: any;

  constructor(
    private route: ActivatedRoute,
    private egresoService: EgresoService
  ) {}

  ngOnInit() {
    const egresoIdParam = this.route.snapshot.paramMap.get('id');
  
    if (egresoIdParam !== null) {
      const egresoId = +egresoIdParam;
  
      if (!isNaN(egresoId)) {
        this.egreso = this.egresoService.getEgresoById(egresoId);
      } else {
        console.error('El ID del egreso no es un número válido.');
      }
    } else {
      console.error('El ID del egreso es nulo.');
    }
  }
  
}
