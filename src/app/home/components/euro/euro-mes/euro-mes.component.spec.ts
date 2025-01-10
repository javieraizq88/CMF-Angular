import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuroMesComponent } from './euro-mes.component';

describe('EuroMesComponent', () => {
  let component: EuroMesComponent;
  let fixture: ComponentFixture<EuroMesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EuroMesComponent]
    });
    fixture = TestBed.createComponent(EuroMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
