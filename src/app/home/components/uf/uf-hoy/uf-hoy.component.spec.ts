import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UfHoyComponent } from './uf-hoy.component';

describe('UfHoyComponent', () => {
  let component: UfHoyComponent;
  let fixture: ComponentFixture<UfHoyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UfHoyComponent]
    });
    fixture = TestBed.createComponent(UfHoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
