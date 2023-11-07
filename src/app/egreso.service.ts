import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EgresoService {
  private apiURL = 'http://localhost:3000'; // La URL de tu servidor
  egresos: any[] = [];

  constructor(private http: HttpClient) {    // Inicializa la lista de egresos vacía
    this.egresos = [];
  }

  // Método para obtener todos los egresos
  getEgresos() {
    return this.egresos;
  }

  crearEgreso(egreso: any) {
    // Asigna un identificador único al nuevo egreso
    egreso.id = this.generateUniqueId(); // Implementa la lógica para generar identificadores únicos
  
    this.egresos.push(egreso);
  }
  
  private generateUniqueId(): number {
    // Implementa la lógica para generar identificadores únicos, por ejemplo, basados en la longitud actual de la lista
    
   
  return this.egresos.length + 1;
  }
  
  getEgresoById(id: number): any {
    return this.egresos.find(egreso => egreso.id === id);
  }
  

  eliminarEgreso(id: number): void {
    // Find the index of the egreso with the given ID
    const index = this.egresos.findIndex(egreso => egreso.id === id);
  
    if (index !== -1) {
      // Remove the egreso from the list
      this.egresos.splice(index, 1);
    }

    
  }
  actualizarEgreso(egreso: any) {
    // Encuentra el índice del egreso en la lista de egresos
    const index = this.egresos.findIndex(e => e.id === egreso.id);

    if (index !== -1) {
      // Reemplaza el egreso existente con el nuevo egreso
      this.egresos[index] = egreso;
    }
  }
  
}
