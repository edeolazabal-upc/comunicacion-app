import { DecimalPipe } from '@angular/common';
import { Component, computed } from '@angular/core';
import { AlumnoService } from '../../services/alumno.service';

@Component({
  selector: 'app-resumen-alumnos',
  standalone: true,
  imports: [
    DecimalPipe
  ],
  templateUrl: './resumen-alumnos.component.html',
  styleUrl: './resumen-alumnos.component.css'
})
export class ResumenAlumnosComponent {
  totalAlumnos = computed(() => this.alumnoService.alumnos().length);

  edadPromedio = computed(() =>
    this.alumnoService.alumnos().reduce((sum, a) => sum + a.edad, 0) / this.totalAlumnos()
  );

  constructor(public alumnoService: AlumnoService) {}
}

