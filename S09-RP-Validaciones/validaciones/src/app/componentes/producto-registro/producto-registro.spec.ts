import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductoRegistro } from './producto-registro';

describe('ProductoRegistro', () => {
  let component: ProductoRegistro;
  let fixture: ComponentFixture<ProductoRegistro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoRegistro],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductoRegistro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
