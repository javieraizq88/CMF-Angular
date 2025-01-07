import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DolarMesComponent } from './dolar-mes.component';

describe('DolarMesComponent', () => {
  let component: DolarMesComponent;
  let fixture: ComponentFixture<DolarMesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DolarMesComponent]
    });
    fixture = TestBed.createComponent(DolarMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
