import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuroHoyComponent } from './euro-hoy.component';

describe('EuroHoyComponent', () => {
  let component: EuroHoyComponent;
  let fixture: ComponentFixture<EuroHoyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EuroHoyComponent]
    });
    fixture = TestBed.createComponent(EuroHoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
