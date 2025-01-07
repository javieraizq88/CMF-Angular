import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtmComponent } from './utm.component';

describe('UtmComponent', () => {
  let component: UtmComponent;
  let fixture: ComponentFixture<UtmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UtmComponent]
    });
    fixture = TestBed.createComponent(UtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
