import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmcHoyComponent } from './tmc-hoy.component';

describe('TmcHoyComponent', () => {
  let component: TmcHoyComponent;
  let fixture: ComponentFixture<TmcHoyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TmcHoyComponent]
    });
    fixture = TestBed.createComponent(TmcHoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
