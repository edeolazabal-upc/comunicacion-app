import { Injectable, signal } from '@angular/core';
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  alumnos = signal<Alumno[]>([
    { id: 1, nombre: 'Carlos Pérez', edad: 20, carrera: 'Ingeniería de Sistemas' },
    { id: 2, nombre: 'Ana Torres', edad: 22, carrera: 'Administración' },
    { id: 3, nombre: 'Luis Gómez', edad: 21, carrera: 'Contabilidad' },
  ]);

  actualizarAlumno(id: number, nuevoNombre: string, nuevaEdad: number, nuevaCarrera: string) {
    this.alumnos.update((alumnos) =>
      alumnos.map((a) =>
        a.id === id ? { ...a, nombre: nuevoNombre, edad: nuevaEdad, carrera: nuevaCarrera } : a
      )
    );
  }
}