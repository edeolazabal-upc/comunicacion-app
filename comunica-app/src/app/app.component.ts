import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { ResumenAlumnosComponent } from './components/resumen-alumnos/resumen-alumnos.component';

@Component({
  selector: 'app-root',
  imports: [
    ListaAlumnosComponent,
    ResumenAlumnosComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'comunica-app';
}
