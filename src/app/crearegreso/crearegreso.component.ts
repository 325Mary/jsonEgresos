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
    categoria: '',
    fecha: ''
  };

  constructor(private egresoService: EgresoService, private router: Router) { }

  agregarEgreso() {
    // No sobrescribas el objeto nuevoEgreso, simplemente asigna los valores
    this.nuevoEgreso.nombre = this.nuevoEgreso.nombre;
    this.nuevoEgreso.categoria = this.nuevoEgreso.categoria;
    this.nuevoEgreso.fecha = this.nuevoEgreso.fecha;
  
    // Guardar el egreso utilizando el servicio EgresoService
    this.egresoService.crearEgreso(this.nuevoEgreso);
  
    // Redirigir al usuario a la lista de egresos
    this.router.navigate(['/egresos']);
  }
  
  
  }
