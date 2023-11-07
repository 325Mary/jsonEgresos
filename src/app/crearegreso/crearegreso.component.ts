import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EgresoService } from '../egreso.service';
import { JsonDatosService } from "../json-datos.service";
import { Observable } from 'rxjs';
import { JsonService } from '../json.service';


@Component({
  selector: 'app-crearegreso',
  templateUrl: './crearegreso.component.html',
  styleUrls: ['./crearegreso.component.scss']
})
export class CrearegresoComponent implements OnInit {
  jsonDatos: any;
  nuevoEgreso: any;

  constructor(private jsonService: JsonService, private egresoService: EgresoService, private router: Router) {
        this.nuevoEgreso = {};
  }


  ngOnInit() {
    this.jsonService.getJsonData().subscribe((data: any) => {
      this.jsonDatos = data; 

      this.nuevoEgreso.nombre = this.jsonDatos.nombre;
      this.nuevoEgreso.monto = this.jsonDatos.monto;
      this.nuevoEgreso.categoria = this.jsonDatos.categoria;
      this.nuevoEgreso.fecha = this.jsonDatos.fecha

    });
  }
  agregarEgreso() {
    // Guardar el egreso utilizando el servicio EgresoService
    this.egresoService.crearEgreso(this.nuevoEgreso);

    
  
    // Redirigir al usuario a la lista de egresos
    this.router.navigate(['/egresos']);
    
  }
}
