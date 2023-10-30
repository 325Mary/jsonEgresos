import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EgresoService } from '../egreso.service';

@Component({
  selector: 'app-crearegreso',
  templateUrl: './crearegreso.component.html',
  styleUrls: ['./crearegreso.component.scss']
})
export class CrearegresoComponent {
  nuevoEgreso: any = {
    id: 0, 
    nombre: '',
    monto: 0,
    categoria: '',
    fecha: ''
  };

  constructor(private egresoService: EgresoService, private router: Router) { }

  agregarEgreso() {
    // Guardar el egreso utilizando el servicio EgresoService
    this.egresoService.crearEgreso(this.nuevoEgreso);

    
  
    // Redirigir al usuario a la lista de egresos
    this.router.navigate(['/egresos']);
    
  }
  
  
  
  }
