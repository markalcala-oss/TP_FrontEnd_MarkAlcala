import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ReactiveFormsModule } from '@angular/forms';

interface Empleado {
  id: number;
  nombre: string;
  cargo: string;
  salario: number;
  fechaIngreso: string;
}

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './empleados.html',
  styleUrls: ['./empleados.css']
})
export class EmpleadosComponent implements OnInit {
  empleadoForm: FormGroup;
  empleados: Empleado[] = [];
  empleadoEditando: Empleado | null = null;
  siguienteId = 1;

  constructor(private fb: FormBuilder) {
    this.empleadoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      cargo: ['', Validators.required],
      salario: ['', [Validators.required, this.salarioMayorCeroValidator]],
      fechaIngreso: ['', [Validators.required, this.fechaPasadaValidator]]
    });
  }

  ngOnInit(): void {}

  salarioMayorCeroValidator(control: AbstractControl): ValidationErrors | null {
    if (control.value !== null && control.value <= 0) return { salarioInvalido: true };
    return null; 
  }

  fechaPasadaValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return null;
    
    // Forzamos la zona horaria local para comparar correctamente
    const fechaSeleccionada = new Date(control.value + 'T00:00:00');
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0); 
    
    // AQUÍ ESTÁ LA MAGIA: Usamos "<" para bloquear fechas anteriores a hoy
    if (fechaSeleccionada < hoy) return { fechaAnterior: true };
    
    return null;
  }
  guardar() {
    if (this.empleadoForm.invalid) {
      this.empleadoForm.markAllAsTouched();
      return;
    }
    if (this.empleadoEditando) {
      const index = this.empleados.findIndex(e => e.id === this.empleadoEditando!.id);
      this.empleados[index] = { ...this.empleadoForm.value, id: this.empleadoEditando.id };
      this.empleadoEditando = null;
    } else {
      this.empleados.push({ ...this.empleadoForm.value, id: this.siguienteId++ });
    }
    this.empleadoForm.reset();
  }

  editar(empleado: Empleado) {
    this.empleadoEditando = empleado;
    this.empleadoForm.patchValue(empleado);
  }

  eliminar(id: number) {
    this.empleados = this.empleados.filter(e => e.id !== id);
  }
}