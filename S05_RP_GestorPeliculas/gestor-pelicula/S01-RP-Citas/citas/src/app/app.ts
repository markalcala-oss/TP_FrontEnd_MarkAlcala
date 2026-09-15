import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Datos principales
  estudiante = 'Mark Anderson Alcalá Peralta';
  nombreSistema = 'MediCare - Gestión de Citas';
  proposito = 'Plataforma para la programación, control y seguimiento de atención médica y citas de pacientes en tiempo real.';

  // Métricas y Contadores (Requisito 5)
  totalCitas = 12;
  citasConfirmadas = 8;
  citasPendientes = 4;

  // Lista de Citas (Sección 1)
  citas = [
    { id: 1, paciente: 'Carlos Mendoza', doctor: 'Dr. Roberto Silva', especialidad: 'Cardiología', fecha: '28/08/2026', hora: '09:00 AM', estado: 'Confirmada' },
    { id: 2, paciente: 'Ana Torres', doctor: 'Dra. Elena Gómez', especialidad: 'Pediatría', fecha: '28/08/2026', hora: '10:30 AM', estado: 'Pendiente' },
    { id: 3, paciente: 'Luis Paredes', doctor: 'Dr. Marco Ríos', especialidad: 'Dermatología', fecha: '29/08/2026', hora: '03:00 PM', estado: 'Confirmada' }
  ];

  // Botones Interactivos (Requisito 4)
  agendarNuevaCita(): void {
    alert('Formulario de nueva cita aperturado.');
  }

  filtrarPendientes(): void {
    alert('Filtrando lista de citas pendientes...');
  }
}