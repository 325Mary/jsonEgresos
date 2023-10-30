import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EgresoService } from '../egreso.service';

@Component({
  selector: 'app-editar-egreso',
  templateUrl: './editar-egreso.component.html',
  styleUrls: ['./editar-egreso.component.scss']
})
export class EditarEgresoComponent implements OnInit {
  egreso: any;
  editMode = false;

  constructor(private route: ActivatedRoute, private router: Router, private egresoService: EgresoService) {}

  ngOnInit() {
    const egresoIdParam = this.route.snapshot.paramMap.get('id');

    if (egresoIdParam !== null) {
      const egresoId = +egresoIdParam;
      this.egreso = this.egresoService.getEgresoById(egresoId);
    } else {
      console.error('El ID del egreso es nulo.');
    }
  }
  guardarCambios() {
    // Lógica para guardar los cambios en el egreso
    // Esto es solo un ejemplo, debes implementar tu propia lógica aquí

    // Actualizar los datos del egreso con los cambios
    this.egresoService.actualizarEgreso(this.egreso);

    // Redirigir a la lista de egresos u otra ubicación después de guardar los cambios
    this.router.navigate(['/egresos']);
  }

  

  
  
}
