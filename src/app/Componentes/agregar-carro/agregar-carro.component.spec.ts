import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCarroComponent } from './agregar-carro.component';

describe('AgregarCarroComponent', () => {
  let component: AgregarCarroComponent;
  let fixture: ComponentFixture<AgregarCarroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarCarroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarCarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
