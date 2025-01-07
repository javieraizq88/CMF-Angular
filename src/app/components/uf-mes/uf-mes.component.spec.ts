import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UfMesComponent } from './uf-mes.component';

describe('UfMesComponent', () => {
  let component: UfMesComponent;
  let fixture: ComponentFixture<UfMesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UfMesComponent]
    });
    fixture = TestBed.createComponent(UfMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
