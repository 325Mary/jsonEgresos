import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EgresoService {
  egresos: any[] = [];

  constructor() {
    // Inicializa la lista de egresos vacía
    this.egresos = [];
  }

  // Método para obtener todos los egresos
  getEgresos() {
    return this.egresos;
  }

  // Método para crear un nuevo egreso
  crearEgreso(egreso: any) {
    this.egresos.push(egreso);
  }
}
