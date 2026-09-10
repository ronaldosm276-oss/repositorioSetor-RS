import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetorListaComponent } from './setor-lista-component';

describe('SetorListaComponent', () => {
  let component: SetorListaComponent;
  let fixture: ComponentFixture<SetorListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetorListaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SetorListaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
