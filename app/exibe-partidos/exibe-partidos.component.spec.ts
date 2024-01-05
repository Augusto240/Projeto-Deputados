import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibePartidosComponent } from './exibe-partidos.component';

describe('ExibePartidosComponent', () => {
  let component: ExibePartidosComponent;
  let fixture: ComponentFixture<ExibePartidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExibePartidosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExibePartidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
