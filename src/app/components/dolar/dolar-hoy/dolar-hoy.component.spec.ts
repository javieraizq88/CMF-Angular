import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DolarHoyComponent } from './dolar-hoy.component';

describe('DolarHoyComponent', () => {
  let component: DolarHoyComponent;
  let fixture: ComponentFixture<DolarHoyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DolarHoyComponent]
    });
    fixture = TestBed.createComponent(DolarHoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
