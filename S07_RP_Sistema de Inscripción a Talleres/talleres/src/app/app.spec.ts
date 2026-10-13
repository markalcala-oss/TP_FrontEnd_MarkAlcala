import { TestBed } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App]
    }).compileComponents();
  });

  it('should create the app and show the empty registrations state', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
    expect(fixture.nativeElement.textContent).toContain('Aún no hay participantes');
  });

  it('should update the shift totals and remove a participant', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    app.inscripciones = [
      {
        numero: 1,
        nombre: 'Ana Torres',
        correo: 'ana@instituto.edu',
        especialidad: 'Desarrollo',
        turno: 'Mañana',
        modalidad: 'Presencial',
        nivel: 'Principiante'
      },
      {
        numero: 2,
        nombre: 'Luis Pérez',
        correo: 'luis@instituto.edu',
        especialidad: 'Redes',
        turno: 'Noche',
        modalidad: 'Virtual',
        nivel: 'Intermedio'
      }
    ];

    expect(app.totalInscritos).toBe(2);
    expect(app.inscritosManana).toBe(1);
    expect(app.inscritosNoche).toBe(1);

    app.eliminar(1);

    expect(app.totalInscritos).toBe(1);
    expect(app.inscritosManana).toBe(0);
    expect(app.inscritosNoche).toBe(1);
  });

  it('should register a valid participant and clear the form', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();
    const app = fixture.componentInstance;
    const formulario = fixture.debugElement.query(By.directive(NgForm)).injector.get(NgForm);
    const datos = {
      nombre: 'Camila Torres',
      correo: 'camila@instituto.edu',
      especialidad: 'Desarrollo' as const,
      turno: 'Mañana' as const,
      modalidad: 'Presencial' as const,
      nivel: 'Principiante' as const
    };
    app.participante = { ...datos };
    formulario.form.setValue(datos);

    app.registrar(formulario);
    fixture.detectChanges();

    expect(app.inscripciones).toEqual([
      {
        numero: 1,
        nombre: 'Camila Torres',
        correo: 'camila@instituto.edu',
        especialidad: 'Desarrollo',
        turno: 'Mañana',
        modalidad: 'Presencial',
        nivel: 'Principiante'
      }
    ]);
    expect(app.participante.nombre).toBe('');
    expect(app.participante.correo).toBe('');
  });
});
