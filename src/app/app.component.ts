import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  listAlumnos: any[] = [
    { Nombre: 'Vince', Estado: 'Inactivo' },
    { Nombre: 'Erick', Estado: 'Stanby' },
    { Nombre: 'Triana', Estado: 'Retirado' },
    { Nombre: 'Wanther', Estado: 'Activo' },
  ];
  mostrar = true;
  Ocultar(): void {
    this.mostrar = !this.mostrar;
    console.log(this.mostrar);
  }
}
