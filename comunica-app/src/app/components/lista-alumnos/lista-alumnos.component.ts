import { Component } from '@angular/core';
import { AlumnoService } from '../../services/alumno.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-alumnos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-alumnos.component.html',
  styleUrl: './lista-alumnos.component.css'
})
export class ListaAlumnosComponent {
  constructor(public alumnoService: AlumnoService) {}

    editarAlumno(id: number) {
      const nuevoNombre = prompt('Nuevo nombre del alumno:');
      const nuevaEdad = prompt('Nueva edad:');
      const nuevaCarrera = prompt('Nueva carrera:');

      if (nuevoNombre && nuevaEdad && nuevaCarrera) {
        this.alumnoService.actualizarAlumno(id, nuevoNombre, parseInt(nuevaEdad), nuevaCarrera);
    }
  }

}
