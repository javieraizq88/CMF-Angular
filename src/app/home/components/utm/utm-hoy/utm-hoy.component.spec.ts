import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtmHoyComponent } from './utm-hoy.component';

describe('UtmHoyComponent', () => {
  let component: UtmHoyComponent;
  let fixture: ComponentFixture<UtmHoyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UtmHoyComponent]
    });
    fixture = TestBed.createComponent(UtmHoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
