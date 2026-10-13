import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

type Especialidad = 'Desarrollo' | 'Redes' | 'Inteligencia Artificial';
type Turno = 'Mañana' | 'Noche';
type Modalidad = 'Presencial' | 'Virtual';
type Nivel = 'Principiante' | 'Intermedio' | 'Avanzado';

interface DatosParticipante {
  nombre: string;
  correo: string;
  especialidad: Especialidad | '';
  turno: Turno | '';
  modalidad: Modalidad | '';
  nivel: Nivel | '';
}

interface Inscripcion extends DatosParticipante {
  numero: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  inscripciones: Inscripcion[] = [];
  siguienteNumero = 1;
  participante: DatosParticipante = this.nuevoParticipante();

  get totalInscritos(): number {
    return this.inscripciones.length;
  }

  get inscritosManana(): number {
    return this.inscripciones.filter((inscripcion) => inscripcion.turno === 'Mañana').length;
  }

  get inscritosNoche(): number {
    return this.inscripciones.filter((inscripcion) => inscripcion.turno === 'Noche').length;
  }

  registrar(formulario: NgForm): void {
    if (formulario.invalid) {
      formulario.control.markAllAsTouched();
      return;
    }

    const nombre = this.participante.nombre.trim();
    if (nombre.length < 3) {
      formulario.controls['nombre']?.setErrors({ minlength: true });
      return;
    }

    this.inscripciones = [
      ...this.inscripciones,
      { ...this.participante, nombre, numero: this.siguienteNumero }
    ];
    this.siguienteNumero += 1;
    this.participante = this.nuevoParticipante();
    formulario.resetForm(this.participante);
  }

  eliminar(numero: number): void {
    this.inscripciones = this.inscripciones.filter(
      (inscripcion) => inscripcion.numero !== numero
    );
  }

  private nuevoParticipante(): DatosParticipante {
    return {
      nombre: '',
      correo: '',
      especialidad: '',
      turno: '',
      modalidad: '',
      nivel: ''
    };
  }
}
