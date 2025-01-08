import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmcMesComponent } from './tmc-mes.component';

describe('TmcMesComponent', () => {
  let component: TmcMesComponent;
  let fixture: ComponentFixture<TmcMesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TmcMesComponent]
    });
    fixture = TestBed.createComponent(TmcMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
